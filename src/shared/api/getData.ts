import { parseString } from "xml2js";
import { base } from "./base";
import { getMainCookieString, parseCookies } from "./cookieParse";

function xmlToJson(xml: string): Promise<any> {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getFreshCookie(): Promise<string> {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Accept-Encoding": "gzip",
    },
    redirect: "manual",
  };

  try {
    const response = await fetch(
      `https://login.bgoperator.ru/auth?login=${process.env.LOGIN}&pwd=${process.env.PASSWORD}`,
      requestOptions
    );

    const freshCookies = response.headers.get("set-cookie")!;
    return freshCookies;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

export async function getData(endPoint: string): Promise<any> {
  const rawRefreshedCookies = await getFreshCookie();

  const objCookies = parseCookies(rawRefreshedCookies);
  const preparedCookies = getMainCookieString(objCookies);

  const refreshedHeaders = new Headers();
  refreshedHeaders.append("Cookie", preparedCookies);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: refreshedHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(base + endPoint, requestOptions);

    if (response.status === 401) {
      const newCookie = await getFreshCookie();
      refreshedHeaders.set("Cookie", newCookie);
      const newRequestOptions: RequestInit = {
        method: "GET",
        headers: refreshedHeaders,
      };
      const data = await fetch(base + endPoint, newRequestOptions);
      return handleResponse(data);
    }

    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("text/xml")) {
      const xmlText = await response.text();
      return xmlToJson(xmlText);
    } else if (contentType && contentType.includes("javascript")) {
      const jsToText = await response.text();
      if (typeof jsToText === "string") return jsToText;
      throw new Error("Custom Error: getData - jsToText is not of string type");
    } else {
      return response.json();
    }
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

async function handleResponse(response: Response): Promise<any> {
  if (response.headers.get("content-type")!.includes("text/xml")) {
    const xmlText = await response.text();
    return await xmlToJson(xmlText);
  }
}

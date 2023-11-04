import { Cookie } from "./models";

//TODO: parse cookie down
export function parseCookies(cookieString: string): Cookie[] {
  const cookieSets = cookieString.split(", ");

  return cookieSets.map((cookieSet) => {
    const cookiePairs = cookieSet.split("; ");

    const cookie: Cookie = { key: "", value: "" };
    cookiePairs.forEach((pair) => {
      const [name, value] = pair.split("=");
      cookie[name.trim()] = value;
    });

    return cookie;
  });
}

export function getMainCookieString(parsedCookies: Cookie[]): string {
  const mainKeys = ["A1", "L", "Z1"];

  const mainCookiePairs = mainKeys.map((key) => {
    const cookie = parsedCookies.find((cookie) => cookie.hasOwnProperty(key));
    if (cookie) {
      return `${key}=${cookie[key]}`;
    }
    return "";
  });

  const mainCookieString = mainCookiePairs
    .filter((pair) => pair !== "")
    .join("; ");
  return mainCookieString + ";";
}

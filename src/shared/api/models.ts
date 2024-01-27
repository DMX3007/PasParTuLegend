export interface Cookie {
  key: string;
  value: string;
  expires?: string;
  domain?: string;
  path?: string;
  httpOnly?: boolean;
  extensions?: string[];
  creation?: string;
  [key: string]: string | boolean | string[] | undefined;
}

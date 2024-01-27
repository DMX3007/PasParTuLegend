declare module '*.svg' {
  const content: any;
  export default content;
}

// If you're using the `?url` query parameter with a specific loader, you might need to declare it like this:
declare module '*.svg?url' {
  const content: string;
  export default content;
}

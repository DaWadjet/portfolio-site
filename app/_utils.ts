export const getHash = () =>
  typeof window !== "undefined"
    ? window.location.hash
      ? decodeURIComponent(window.location.hash)
      : ""
    : undefined;

// next/image src and plain <a href> to /public files don't get basePath
// automatically, so prefix them here.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string) => `${base}${path}`;

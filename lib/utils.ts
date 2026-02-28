/** Prefix a public asset path with the basePath so images resolve in production. */
export function asset(path: string): string {
  const base = process.env.NODE_ENV === "production" ? "/personalWebsite" : "";
  return `${base}${path}`;
}

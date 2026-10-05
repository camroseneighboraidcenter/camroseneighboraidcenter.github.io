import { getEntry } from "astro:content";
import type { SiteData } from "../content.config";

/**
 * Fetches the site org data (contact info, social links, charity status)
 * from src/content/site/org.yaml. Safe to call from any component or page —
 * Astro dedupes collection loads during a build.
 */
export async function getSite(): Promise<SiteData> {
  const entry = await getEntry("site", "org");
  if (!entry) {
    throw new Error(
      'Missing site entry "org" — expected src/content/site/org.yaml',
    );
  }
  return entry.data as SiteData;
}

import MarkdownIt from "markdown-it";

const md = new MarkdownIt({
  html: false,
  linkify: true,
});

// External links open in a new tab with rel="noopener noreferrer".
// Internal links, anchors, and mailto: links are left alone.
const defaultLinkOpen =
  md.renderer.rules.link_open ??
  ((tokens, idx, options, _env, self) =>
    self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const href = token?.attrGet("href") ?? "";
  if (token && typeof href === "string" && /^https?:\/\//.test(href)) {
    token.attrSet("target", "_blank");
    token.attrSet("rel", "noopener noreferrer");
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

/**
 * Substitutes {{token}} placeholders with values from `vars` before rendering.
 * Unknown tokens are left untouched so editor typos remain visible in output.
 */
function interpolate(input: string, vars: Record<string, string>): string {
  return input.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
    return vars[key] ?? match;
  });
}

export function renderMarkdown(
  input: string,
  vars: Record<string, string> = {},
): string {
  return md.render(interpolate(input, vars));
}

/**
 * Renders markdown without the wrapping <p> tag — for inline content like
 * card descriptions where a <p> would be nested inside another <p>.
 */
export function renderMarkdownInline(
  input: string,
  vars: Record<string, string> = {},
): string {
  return md.renderInline(interpolate(input, vars));
}

import type { SiteData } from "../content.config";

/**
 * Builds the {{token}} → value map from site org data, so content editors can
 * write e.g. [{{donationEmail}}](mailto:{{donationEmail}}) in markdown fields.
 */
export function siteVars(site: SiteData) {
  return {
    email: site.contact.email,
    donationEmail: site.contact.donationEmail,
    phone: site.contact.phone,
    fax: site.contact.fax,
    charityNumber: site.charity.number,
    craLink: site.charity.craLink,
    financialStatementsLink: site.charity.financialStatementsLink,
  };
}

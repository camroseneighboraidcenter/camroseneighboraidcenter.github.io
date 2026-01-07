/**
 * Utility functions for formatting data.
 * Pure functions with no side effects.
 */

/**
 * Formats a phone/fax number with non-breaking spaces and hyphens.
 * Prevents awkward line breaks in phone numbers.
 *
 * @param number - Raw phone number string
 * @returns Formatted number with HTML entities for non-breaking characters
 */
function formatNumberWithNonBreaking(number: string): string {
  const cleaned = number.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]})&nbsp;${match[2]}&#8209;${match[3]}`;
  }
  return number;
}

/**
 * Formats a phone or fax number with non-breaking spaces.
 *
 * @param number - Raw phone/fax number string
 * @returns Formatted number with non-breaking characters
 */
export function formatPhoneNumber(number: string): string {
  return formatNumberWithNonBreaking(number);
}

/**
 * Address interface for formatting functions.
 */
export interface FormattedAddress {
  street: string;
  cityProvince: string;
  postalCode: string;
}

/**
 * Formats an address object into display-ready parts.
 *
 * @param address - Address object with street, city, province, postalCode
 * @returns Formatted address object or undefined if no address provided
 */
export function formatAddress(
  address:
    | { street: string; city: string; province: string; postalCode: string }
    | undefined,
): FormattedAddress | undefined {
  if (!address) return undefined;

  return {
    street: address.street,
    cityProvince: `${address.city}, ${address.province}`,
    postalCode: address.postalCode,
  };
}

/**
 * Filters an array to only include items with non-empty URLs.
 * Useful for social media links where some platforms may not be configured.
 *
 * @param items - Array of objects with url property
 * @returns Filtered array with only items that have non-empty URLs
 */
export function filterActiveLinks<T extends { url: string }>(items: T[]): T[] {
  return items.filter((item) => item.url !== "");
}

/**
 * Contact Data
 * Organization contact information, social media links, and business hours.
 * Pure data - no business logic or utility functions.
 */

/**
 * Physical address of the organization.
 */
export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

/**
 * Business hours for each day of the week.
 */
export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

/**
 * Complete contact information for the organization.
 */
export interface ContactInfo {
  address: Address;
  phone: string;
  fax: string;
  email: string;
  donationEmail: string;
  hours: BusinessHours;
}

/**
 * Social media platform configuration.
 */
export interface SocialMediaLink {
  platform: "facebook" | "instagram" | "linkedin" | "x" | "youtube";
  url: string;
  label: string;
}

/**
 * Organization contact information.
 */
export const contactInfo: ContactInfo = {
  address: {
    street: "4524 54 Street",
    city: "Camrose",
    province: "AB",
    postalCode: "T4V 1X8",
  },
  phone: "(780) 679-3220",
  fax: "(780) 679-3221",
  email: "nbaid@cable-lynx.net",
  donationEmail: "donationnbaid@gmail.com",
  hours: {
    monday: "9:00 AM - 12:00 PM",
    tuesday: "10:00 AM - 3:00 PM",
    wednesday: "10:00 AM - 3:00 PM",
    thursday: "10:00 AM - 3:00 PM",
    friday: "9:00 AM - 12:00 PM",
    saturday: "Closed",
    sunday: "Closed",
  },
};

/**
 * Social media links.
 * Empty URLs indicate the platform is not active.
 */
export const socialMediaLinks: SocialMediaLink[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/people/Neighbor-Aid/pfbid02u3e3N5P6cNTcBY4iQU2XctFUkUAtUZCo3CiFkpNFfqtiPawvjs9n4Z2noP1gnHd9l",
    label: "Follow us on Facebook",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/camroseneighboraid/",
    label: "Follow us on Instagram",
  },
  {
    platform: "linkedin",
    url: "",
    label: "Connect with us on LinkedIn",
  },
  {
    platform: "x",
    url: "",
    label: "Follow us on X",
  },
];

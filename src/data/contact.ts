export interface ContactInfo {
  address?: Address;
  phone?: string;
  fax?: string;
  email?: string;
  hours: {
    [key: string]: string;
  };
}

export interface SocialMedia {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
}

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

export const socialMedia: SocialMedia[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/p/Camrose-Neighbour-Aid-Center-61570470749007", // Add URL when available
    icon: "",
    label: "Follow us on Facebook",
  },
  {
    platform: "instagram",
    url: "", // Add URL when available
    icon: "",
    label: "Follow us on Instagram",
  },
  {
    platform: "linkedin",
    url: "", // Add URL when available
    icon: "",
    label: "Connect with us on LinkedIn",
  },
  {
    platform: "x",
    url: "https://x.com/neighboraid", // Add URL when available
    icon: "",
    label: "Follow us on X",
  },
];

// Helper function to get active social media links
export const getActiveSocialMedia = () => {
  return socialMedia.filter((social) => social.url !== "");
};

export function getAddress(): Address | undefined {
  return contactInfo.address;
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function formatFaxNumber(fax: string): string {
  return formatPhoneNumber(fax);
}

export function getFormattedAddress():
  | { street: string; cityProvince: string; postalCode: string }
  | undefined {
  const address = getAddress();
  if (!address) return undefined;

  return {
    street: address.street,
    cityProvince: `${address.city}, ${address.province}`,
    postalCode: address.postalCode,
  };
}

export const WEB3FORMS_TOKEN = "8e96c192-1da8-48b3-9df9-e4620106f482";

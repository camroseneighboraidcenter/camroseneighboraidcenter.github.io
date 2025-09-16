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

export const donateEmail: string = "donationnbaid@gmail.com";

export const socialMedia: SocialMedia[] = [
  {
    platform: "facebook",
    url: "https://www.facebook.com/people/Neighbor-Aid/pfbid02u3e3N5P6cNTcBY4iQU2XctFUkUAtUZCo3CiFkpNFfqtiPawvjs9n4Z2noP1gnHd9l",
    icon: "",
    label: "Follow us on Facebook",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/camroseneighboraid/",
    icon: "",
    label: "Follow us on Instagram",
  },
  {
    platform: "linkedin",
    url: "",
    icon: "",
    label: "Connect with us on LinkedIn",
  },
  {
    platform: "x",
    url: "",
    icon: "",
    label: "Follow us on X",
  },
];

export const getActiveSocialMedia = () => {
  return socialMedia.filter((social) => social.url !== "");
};

export function getAddress(): Address | undefined {
  return contactInfo.address;
}

function formatNumberWithNonBreaking(number: string): string {
  const cleaned = number.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]})&nbsp;${match[2]}&#8209;${match[3]}`;
  }
  return number;
}

export function formatPhoneNumber(phone: string): string {
  return formatNumberWithNonBreaking(phone);
}

export function formatFaxNumber(fax: string): string {
  return formatNumberWithNonBreaking(fax);
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

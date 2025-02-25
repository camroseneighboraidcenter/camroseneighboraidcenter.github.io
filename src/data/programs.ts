import type { ImageMetadata } from "astro";

// Import all program images
import foodBankImage from "../assets/programs/food-bank.webp";
import kidsBreakfastImage from "../assets/programs/kids-breakfast.webp";
import soupKitchenImage from "../assets/programs/soup-kitchen.webp";
import medicalTransportImage from "../assets/programs/medical-transport.webp";
import emergencyAidImage from "../assets/programs/emergency-aid.webp";
import referralServicesImage from "../assets/programs/referral-services.webp";

export interface Program {
  id: string;
  title: string;
  image: ImageMetadata;
  imageTitle: string;
  imageAlt: string;
  featured: boolean;
  slug: string;
  description: string;
  contentPath?: string;
  detailedDescription?: string;
}

export const programs: Program[] = [
  {
    id: "food-bank",
    title: "Food Bank Services",
    image: foodBankImage,
    imageTitle: "Food bank volunteers helping sort food.",
    imageAlt: "Food bank volunteers helping sort food.",
    featured: true,
    slug: "food-bank-services",
    description:
      "Providing essential food supplies to those experiencing food insecurity in our community.",
    contentPath: "src/content/programs/food-bank-services.mdx",
  },
  {
    id: "food-for-kids",
    title: "Food for Kids",
    image: kidsBreakfastImage,
    imageTitle: "Breakfast club food preparation.",
    imageAlt: "Breakfast club food preparation.",
    featured: true,
    slug: "food-for-kids",
    description:
      "Serving children breakfast through breakfast clubs in 6 local schools.",
    contentPath: "src/content/programs/food-for-kids.mdx",
  },
  {
    id: "marthas-table",
    title: "Martha's Table",
    image: soupKitchenImage,
    imageTitle: "Soup kitchen volunteer distributing meals.",
    imageAlt: "Soup kitchen volunteer distributing meals.",
    featured: true,
    slug: "marthas-table",
    description: "Serving a hot meal twice weekly.",
    contentPath: "src/content/programs/marthas-table.mdx",
  },
  {
    id: "medical-transportation",
    title: "Medical Transportation",
    image: medicalTransportImage,
    imageTitle:
      "Medical transportation volunteer driving a person to an appointment.",
    imageAlt:
      "Medical transportation volunteer driving a person to an appointment.",
    featured: true,
    slug: "medical-transportation",
    description:
      "Providing essential transportation services for specialist medical appointments in Edmonton.",
    contentPath: "src/content/programs/medical-transportation.mdx",
  },
  {
    id: "emergency-aid",
    title: "Emergency Financial Assistance",
    image: emergencyAidImage,
    imageTitle: "Emergency financial assistance volunteer helping a client.",
    imageAlt: "Emergency financial assistance volunteer helping a client.",
    featured: true,
    slug: "emergency-financial-assistance",
    description: "One-time emergency intervention for urgent financial crises.",
    contentPath: "src/content/programs/emergency-financial-assistance.mdx",
  },
  {
    id: "referral-services",
    title: "Referral Services",
    image: referralServicesImage,
    imageTitle: "Referral services volunteer helping a client.",
    imageAlt: "Referral services volunteer helping a client.",
    featured: true,
    slug: "referral-services",
    description:
      "Connecting individuals with additional support resources and community services.",
    contentPath: "src/content/programs/referral-services.mdx",
  },
];

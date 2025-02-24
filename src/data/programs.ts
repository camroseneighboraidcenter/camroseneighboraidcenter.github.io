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
  description: string;
  detailedDescription: string;
  image: ImageMetadata;
  imageTitle: string;
  imageAlt: string;
  featured: boolean;
  slug: string;
}

export const programs: Program[] = [
  {
    id: "food-bank",
    title: "Food Bank Services",
    description:
      "Providing essential food supplies to those experiencing food insecurity in our community.",
    detailedDescription: `
:::overview
# About Our Food Bank
Our Food Bank Services program has been a cornerstone of our mission to support those in need since 1984. We provide nutritious food supplies to individuals and families experiencing food insecurity in our community. {.intro-text}

Through our Food Bank Services, we aim to:

* Provide emergency food assistance to individuals and families in need
* Ensure access to nutritious and balanced food options
* Support our community members with dignity and respect
* Collaborate with local partners to maximize our impact
:::

:::services
## Available Services

### Food Hamper Program
We provide comprehensive food hampers tailored to your household size and dietary needs. Each hamper includes:
* Non-perishable staples (rice, pasta, canned goods)
* Fresh produce when available (fruits, vegetables)
* Dairy products (milk, cheese)
* Protein options (canned meat, beans)
* Personal care items (soap, toothpaste)

### Front Room Services {.highlight}
Our Front Room offers immediate access to:
* Fresh bread and pastries from local bakeries
* Seasonal produce from community gardens
* Soups and beans for quick meals
* Emergency supplies for urgent needs
:::

:::schedule
## When to Visit

### Hamper Services
Food hamper pickup available:
* Tuesday-Thursday: 9:00 AM - 11:30 AM
* Please arrive at least 30 minutes before closing

### Front Room Services
Extra foods, bread, beans & soups available:
* Monday & Friday: 9:00 AM - 12:00 PM
* Tuesday-Thursday: 10:00 AM - 3:00 PM

### Additional Bread Distribution {.highlight}
Fresh bread available at partner locations:
* Monday: Camrose Community Church, 9:00 AM - 12:00 PM
* Wednesday: Center Point Church, 1:00 PM - 3:00 PM
:::

:::note
**Important Information**
* Please bring valid ID and proof of address when accessing our services
* Let us know about any dietary restrictions or allergies
* If you need accommodation for mobility or other needs, please call ahead
* All services are provided free of charge
* Delivery may be available for seniors and those with disabilities
:::

:::requirements
## Eligibility & Registration
* Open to all residents of Camrose and surrounding areas
* No appointment needed for Front Room services
* Please register at your first visit for hamper services
* Income assessment may be required for ongoing support
* We respect your privacy and maintain confidentiality
:::

## Volunteer Activities
Our dedicated volunteers engage in various essential tasks:

* Stocking shelves and making hampers
* Sorting donations
* Answering phones
* Cleaning and maintenance
* Creating schedules
* Transporting and delivering supplies
* Bread and soup delivery

## Our Approach
Our service is designed to be accessible and dignified, ensuring that everyone who comes through our doors is treated with respect and compassion. We believe in:

* Treating everyone with dignity and respect
`,
    image: foodBankImage,
    imageTitle: "Food bank volunteers helping sort food.",
    imageAlt: "Food bank volunteers helping sort food.",
    featured: true,
    slug: "food-bank-services",
  },
  {
    id: "food-for-kids",
    title: "Food for Kids",
    description:
      "Serving approximately 1,000 children monthly through breakfast clubs in local schools.",
    detailedDescription: `
Our Food for Kids program, established in 2000, operates in partnership with six local schools to ensure that no child starts their day hungry. Through our breakfast clubs, we provide nutritious morning meals that help students focus on learning rather than hunger.

## Program Impact
* Serves approximately 1,000 children monthly
* Operates in 6 local schools
* Daily breakfast service during school days
* Supports academic success

## Participating Schools
* The Comp
* Chester Ronning
* Charlie Killiam
* Jack Stuart
* Sifton
* Sparling

## Program Operations
Our program runs through:

* School-based coordinators organizing volunteer teams
* Weekly grocery shopping and delivery service
* Partnership with local businesses for delivery
* Regular communication with school coordinators
`,
    image: kidsBreakfastImage,
    imageTitle: "Breakfast club food preparation.",
    imageAlt: "Breakfast club food preparation.",
    featured: true,
    slug: "food-for-kids",
  },
  {
    id: "marthas-table",
    title: "Martha's Table",
    description:
      "Free soup and sandwich program serving 20-400 people twice weekly since 1998.",
    detailedDescription: `
Martha's Table, established in 1998, is more than just a soup kitchen - it's a place where community members can find warm meals and warm hearts. Our twice-weekly gatherings provide nutritious meals in a dignified, welcoming environment where everyone is treated as family.

## Service Schedule
* Tuesdays at Messiah Lutheran Church, 12:00 PM - 1:00 PM
* Wednesdays at Camrose United Church, 12:00 PM - 1:00 PM

## Volunteer Activities
Our dedicated volunteers:

* Create serving schedules
* Pick up and manage food supplies
* Prepare soup and sandwiches
* Set up and serve meals
* Build relationships with community members

## Program Impact
Each service provides:

* Nutritious soup and sandwich combinations
* Welcoming, community atmosphere
* Connection to additional resources
`,
    image: soupKitchenImage,
    imageTitle: "Soup kitchen volunteer distributing meals.",
    imageAlt: "Soup kitchen volunteer distributing meals.",
    featured: true,
    slug: "marthas-table",
  },
  {
    id: "medical-transportation",
    title: "Medical Transportation",
    description:
      "Providing essential transportation services for specialist medical appointments in Edmonton.",
    detailedDescription: `
Our Medical Transportation program ensures that no one misses important medical appointments due to lack of transportation. We coordinate rides to specialist appointments in Edmonton for clients who have no other means of transportation.

## Program Process
* Initial client screening and safety assessment
* Personal interview process
* Coordination with volunteer drivers
* Flexible scheduling based on appointment times

## Our Volunteer Drivers
All our carefully selected drivers provide:

* Safe, reliable transportation
* Door-to-door assistance
* Companionship during trips
* Flexible scheduling options

## Service Features
This vital service includes:

* Transportation to specialist appointments
* Door-to-door service
* Coordination with medical facilities
* Follow-up scheduling assistance
`,
    image: medicalTransportImage,
    imageTitle:
      "Medical transportation volunteer driving a person to an appointment.",
    imageAlt:
      "Medical transportation volunteer driving a person to an appointment.",
    featured: true,
    slug: "medical-transportation",
  },
  {
    id: "emergency-aid",
    title: "Emergency Financial Assistance",
    description:
      "One-time emergency intervention for urgent financial crises, with repayment opportunities.",
    detailedDescription: `
Our Emergency Financial Assistance program, supported by member churches, provides one-time emergency intervention for individuals and families facing unexpected financial hardships. We operate as a Lending Circle, offering recipients the opportunity to repay the assistance.

## Types of Assistance
* Rent assistance
* Utility bill payments
* Prescription medication costs
* Emergency housing for transients

## Our Process
We ensure responsible distribution of aid through:

* Thorough needs assessment
* Validation of emergency situation
* Direct payment to service providers
* Repayment program coordination

## Program Features
Key aspects include:

* One-time emergency intervention
* Lending Circle participation option
* Flexible repayment opportunities
* Connection to additional resources
`,
    image: emergencyAidImage,
    imageTitle: "Emergency financial assistance volunteer helping a client.",
    imageAlt: "Emergency financial assistance volunteer helping a client.",
    featured: true,
    slug: "emergency-financial-assistance",
  },
  {
    id: "referral-services",
    title: "Referral Services",
    description:
      "Connecting individuals with additional support resources and community services.",
    detailedDescription: `
Our Referral Services program acts as a bridge between those in need and the various support services available in our community. We maintain strong relationships with local agencies, government services, and other nonprofits to ensure our clients can access all available resources.

## Available Resources
* Government assistance programs
* Mental health services
* Employment support
* Housing assistance

## How We Help
Our experienced staff provides:

* Personalized needs assessment
* Application assistance
* Documentation support
* Follow-up services

## Partner Network
We collaborate with:

* Local social services
* Healthcare providers
* Educational institutions
* Community organizations
`,
    image: referralServicesImage,
    imageTitle: "Referral services volunteer helping a client.",
    imageAlt: "Referral services volunteer helping a client.",
    featured: true,
    slug: "referral-services",
  },
];

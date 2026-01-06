import type { ImageMetadata } from "astro";

import tempPersonImage from "../assets/about/temp-person.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageMetadata;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-thompson",
    name: "Sarah Thompson",
    role: "Executive Director",
    bio: "Sarah brings over 15 years of nonprofit leadership experience and a passion for community service.",
    image: tempPersonImage,
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Program Coordinator",
    bio: "Michael oversees our food bank and transportation services, ensuring smooth operations and maximum impact.",
    image: tempPersonImage,
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    role: "Volunteer Manager",
    bio: "Emily coordinates our dedicated volunteer network and develops training programs for new volunteers.",
    image: tempPersonImage,
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "Community Outreach",
    bio: "David builds partnerships with local organizations and manages our community engagement initiatives.",
    image: tempPersonImage,
  },
  {
    id: "grace-anderson",
    name: "Grace Anderson",
    role: "Administrative Coordinator",
    bio: "Grace ensures smooth daily operations and provides crucial support to our team and clients.",
    image: tempPersonImage,
  },
];

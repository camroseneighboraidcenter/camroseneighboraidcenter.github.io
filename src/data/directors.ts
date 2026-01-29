/**
 * Team Data
 * Organization team members and staff.
 * Used by the TeamGrid component.
 */
import type { ImageMetadata } from "astro";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: ImageMetadata;
}

export const teamMembers: TeamMember[] = [
  {
    id: "michelle-warner",
    name: "Michelle Warner",
    role: "Chair",
  },
  {
    id: "del-pierce",
    name: "Del Pierce",
    role: "Vice Chair",
  },
  {
    id: "shirley-mckinney",
    name: "Shirley McKinney",
    role: "Secretary",
  },
  {
    id: "donald-rebus",
    name: "Donald Rebus",
    role: "Treasurer",
  },
  {
    id: "max-lindstrand",
    name: "Max Lindstrand",
    role: "Director",
  },
  {
    id: "michelle-anderson",
    name: "Michelle Anderson",
    role: "Director",
  },
  {
    id: "brian-hunter",
    name: "Brian Hunter",
    role: "Director",
  },
  {
    id: "jim-anderson",
    name: "Jim Anderson",
    role: "Director",
  },
  {
    id: "brent-bonter",
    name: "Brent Bonter",
    role: "Director",
  },
];

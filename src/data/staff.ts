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
    id: "jaime-ocampo",
    name: "Jaime Ocampo",
    role: "Executive Director",
  },
  {
    id: "holly-field",
    name: "Holly Field",
    role: "Assistant Director",
  },
  {
    id: "karen-yarkowsky",
    name: "Karen Yarkowsky",
    role: "Administration & Bookkeeping",
  },
];

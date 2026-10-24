import { TeamShowcase, TeamMember } from "@/components/ui/team-showcase";

// Sample data for the demo with local and fallback assets
const developers: TeamMember[] = [
  {
    name: "ANNA DEAN",
    role: "React engineer",
    imageSrc: "/team/member-1.png",
    themeColor: "bg-[#F9D4D5]", // Light Pink
  },
  {
    name: "CHRIS MEZY",
    role: "Data engineer",
    imageSrc: "/team/member-2.png",
    themeColor: "bg-[#D1E5E6]", // Light Blue
  },
  {
    name: "LESLIE SCHNIDER",
    role: "Backend developer",
    imageSrc: "/team/member-3.png",
    themeColor: "bg-[#EAE1DA]", // Beige
  },
  {
    name: "JIM BRICKTON",
    role: "AI specialist",
    imageSrc: "/team/member-4.png",
    themeColor: "bg-[#FDEACC]", // Light Yellow
  },
];

export default function TeamShowcaseDemo() {
  return <TeamShowcase members={developers} />;
}

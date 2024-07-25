import Link from "next/link";
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  GitHubIcon,
  DribbleIcon,
} from "@/components/shared/Icons";

const iconsList = [
  { id: 1, name: "Facebook", href: "#", icon: <FaceBookIcon /> },
  { id: 2, name: "Instagram", href: "#", icon: <InstagramIcon /> },
  { id: 3, name: "Twitter", href: "#", icon: <TwitterIcon /> },
  { id: 4, name: "GitHub", href: "#", icon: <GitHubIcon /> },
  { id: 5, name: "Dribble", href: "#", icon: <DribbleIcon /> },
];

function LandingSocialMediaIcons() {
  return (
    <div className="mt-8 flex space-x-6 text-gray-600">
      {iconsList.map((item) => (
        <Link
          className="hover:opacity-75"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          key={item.id}
        >
          <span className="sr-only">{item.name}</span>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default LandingSocialMediaIcons;

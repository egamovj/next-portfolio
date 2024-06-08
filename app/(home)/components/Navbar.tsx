import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/egamovj/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/egamovj",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://x.com/Egamov19",
      label: "x",
      Icon: SiX,
    },
  ];

  return (
    <nav className="py-10 flex justify-between items-center">
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"
      >
        Egamov J 👨🏻‍💻
      </Link>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all duration-300" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

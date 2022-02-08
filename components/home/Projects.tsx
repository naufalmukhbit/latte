import { useState } from "react";
import { Card } from "components/common";
import { useTheme } from "next-themes";

import projectSosmedLight from "assets/project_sosmed_logo.png";
import projectSosmedDark from "assets/project_sosmed_logo_dark.png";

import onlineShopLogo from "assets/onlineshop_logo.png";
import Image from "next/image";

type imageData = {
  src: any;
  altText: string;
  bg?: string;
  darkSrc?: any;
	darkBg?: string;
};

type projectData = {
  title: string;
  content: string;
  logo?: imageData;
  url?: string;
};

const ProjectCard = ({ data }: { data?: projectData }) => {
  const { theme } = useTheme();

  return (
    <Card
      fluid
      clickable={data ? true : false}
      className="group relative w-96 h-56"
    >
      {data ? (
        <>
          {data?.logo && (
            <div className="rounded-lg p-14 flex items-center h-full">
							<Image
								src={
									theme === "light"
										? data?.logo?.src
										: data.logo.darkSrc ?? data.logo.src
								}
								alt={data?.logo?.altText}
								className={
									theme === "dark" && data.logo.darkSrc === undefined
										? " invert"
										: ""
								}
							/>
						</div>
          )}
          <div className="flex flex-col justify-between p-6 absolute inset-0 duration-300 bg-black/80 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100">
            <strong>{data.title}</strong>
            <span className="leading-6 line-clamp-4 h-24">{data.content}</span>
            <a
              href={data.url ?? "#"}
              className="self-end"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border-2 rounded-full p-1 w-20 text-sm hover:bg-white hover:text-black transition-colors duration-200">
                VISIT &gt;
              </button>
            </a>
          </div>
        </>
      ) : (
        <div className="text-center flex items-center justify-center h-full bg-black/10 dark:bg-black/30 rounded-lg">
          Coming soon...
        </div>
      )}
    </Card>
  );
};

export default function Projects() {
  const tempSnippets: projectData[] = [
    {
      title: "Project Sosmed",
      content:
        "I tried to replicate Twitter. Made with React TypeScript, Next.js, and Tailwind CSS.",
      logo: {
        src: projectSosmedLight,
        darkSrc: projectSosmedDark,
        altText: "Project Sosmed Logo",
      },
    },
    {
      title: "OnlineShop",
      content:
        "A simple online shop that I made for my first job interview. Made with ReactJS and Redux.",
      logo: {
        src: onlineShopLogo,
        altText: "OnlineShop Logo",
      },
      url: "https://onlineshop-naufalmukhbit.herokuapp.com",
    },
  ];

  return (
    <div className="py-20 flex justify-center">
      <div className="flex flex-col justify-center items-center gap-16 w-8/12">
        <div className="text-5xl font-bold text-center leading-snug">
          ...or give these little projects
          <br />
          of mine a visit!
        </div>
        <div className="ml-4 flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <ProjectCard data={tempSnippets[0]} />
            <ProjectCard data={tempSnippets[1]} />
            <ProjectCard data={tempSnippets[2]} />
          </div>
          <div className="flex flex-row gap-3">
            <ProjectCard data={tempSnippets[3]} />
            <ProjectCard data={tempSnippets[4]} />
            <ProjectCard data={tempSnippets[5]} />
          </div>
        </div>
      </div>
    </div>
  );
}

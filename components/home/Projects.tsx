import { useState } from "react";
import { Card } from "components/common";
import { useTheme } from "next-themes";

import projectSosmedLight from "assets/projectSosmed_light.jpg";
import projectSosmedDark from "assets/projectSosmed_dark.jpg";

import onlineShopLight from "assets/onlineShop_light.jpg";
import onlineShopDark from "assets/onlineShop_dark.jpg";
import Image from "next/image";

type imageData = {
	src: any;
	bg: string;
	width: number;
	height: number;
	altText: string;
};

type projectData = {
	title: string;
	content: string;
	logo?: imageData;
  url?: string;
};

const ProjectCard = ({ data }: { data?: projectData }) => {
	return (
		<Card
			fluid
      clickable={data ? true : false}
			className="group relative w-96 h-56"
		>
			{data ? (
				<>
					{data?.logo && (
						<Image
							src={data?.logo?.src}
							alt={data?.logo?.altText}
							className="rounded-lg"
						/>
					)}
					<div className="flex flex-col justify-between p-6 absolute inset-0 duration-300 bg-black/80 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100">
						<strong>{data.title}</strong>
						<span className="leading-6 line-clamp-4 h-24">
							{data.content}
						</span>
            <a href={data.url ?? "#"} className="self-end" target="_blank" rel="noreferrer">
              <button className="border-2 rounded-full p-1 w-20 text-sm hover:bg-white hover:text-black transition-colors duration-200">
                VISIT &gt;
              </button>
            </a>
					</div>
				</>
			) : (
				<div className="text-center flex items-center justify-center h-full">
					Coming soon...
				</div>
			)}
		</Card>
	);
};

export default function Projects() {
	const { theme } = useTheme();

	const tempSnippets: projectData[] = [
		{
			title: "Project Sosmed",
			content: "I tried to replicate Twitter. Made with React TypeScript, Next.js, and Tailwind CSS.",
			logo: {
				src: theme === "light" ? projectSosmedLight : projectSosmedDark,
				bg: "white",
				width: 1400,
				height: 400,
				altText: "Project Sosmed Logo",
			},
		},
		{
			title: "OnlineShop",
			content: "A simple online shop that I made for my first job interview. Made with ReactJS and Redux.",
			logo: {
				src: theme === "light" ? onlineShopLight : onlineShopDark,
				bg: "white",
				width: 1024,
				height: 197,
				altText: "OnlineShop Logo",
			},
      url: "https://onlineshop-naufalmukhbit.herokuapp.com",
		},
	];

	return (
		<div className="py-20 flex justify-center">
			<div className="flex flex-col justify-center items-center gap-16 w-8/12">
				<div className="text-5xl font-bold text-center leading-snug">
					Give these little projects
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

import { Card } from "components/common";
import { useTheme } from "next-themes";

import Image from "next/image";
import projects from "data/projects"

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
						<div className="rounded-lg flex items-center h-full">
							<Image
								src={
									theme === "light"
										? data?.logo?.src
										: data.logo.darkSrc ?? data.logo.src
								}
								height={224}
								width={384}
								quality={90}
								alt={data?.logo?.altText}
								className="rounded-lg"
							/>
						</div>
					)}
					<div className="flex flex-col justify-between p-6 absolute inset-0 duration-300 bg-black/80 backdrop-blur-sm rounded-lg text-white opacity-0 group-hover:opacity-100">
						<strong>{data.title}</strong>
						<span className="leading-6 line-clamp-4 h-24">
							{data.content}
						</span>
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
						<ProjectCard data={projects[0]} />
						<ProjectCard data={projects[1]} />
						<ProjectCard data={projects[2]} />
					</div>
					<div className="flex flex-row gap-3">
						<ProjectCard data={projects[3]} />
						<ProjectCard data={projects[4]} />
						<ProjectCard data={projects[5]} />
					</div>
				</div>
			</div>
		</div>
	);
}

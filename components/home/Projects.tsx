import { Card } from "components/common";
import { useTheme } from "next-themes";

import Image from "next/image";
import projects from "data/projects";

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

const ProjectCard = ({ key, data }: { key: number; data?: projectData }) => {
	const { theme } = useTheme();

	return (
		<Card
			key={key}
			fluid
			clickable={data ? true : false}
			className="group relative w-full h-full"
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
				<div className="text-center flex items-center justify-center aspect-[12/7] bg-black/10 rounded-lg">
					Coming soon...
				</div>
			)}
		</Card>
	);
};

export default function Projects() {
	return (
		<div className="py-20 flex justify-center">
			<div className="flex flex-col justify-center items-center gap-16 w-full px-4 lg:w-8/12 lg:px-0">
				<div className="lg:text-5xl 2xl:text-5xl xl:text-4xl text-3xl font-bold text-center leading-snug">
					...or give these little projects
					<br />
					of mine a visit!
				</div>
				<div className="lg:ml-4 flex flex-col gap-3">
					{/* <div className="flex flex-col lg:flex-row gap-3"> */}
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
						{(projects.length < 6
							? [...projects, undefined, undefined]
							: projects.slice(0, 6)
						).map((item, index) => (
							<ProjectCard key={index} data={item} />
						))}
					</div>
					{/* <div className="flex flex-col lg:flex-row gap-3">
					</div> */}
				</div>
			</div>
		</div>
	);
}

import { useState, useCallback, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "components/common";
import { FakeWindow, HomeFooter, Projects, BlogPosts } from "components";
import {
	Parallax,
	ParallaxBanner,
	ParallaxProvider,
} from "react-scroll-parallax";
import Hero from "components/home/Hero";
import Bio from "components/home/Bio";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
	const [scrollY, setScrollY] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);
	const { setTheme } = useTheme();

	const aboutRef = useRef<HTMLDivElement>(null);
	const blogRef = useRef<HTMLDivElement>(null);
	const projectRef = useRef<HTMLDivElement>(null);

	const [bdyAbout, setBdyAbout] = useState([0, 0]);
	const [bdyBlog, setBdyBlog] = useState([0, 0]);
	const [bdyProject, setBdyProject] = useState([0, 0]);

	useEffect(() => {
		if (window) {
			setInnerHeight(window.innerHeight);
		}
		setTheme("light");
	}, []);

	useEffect(() => {
		let pointer = innerHeight;
		let currentHeight = aboutRef?.current?.clientHeight;
		setBdyAbout([pointer - 10, pointer + calculateOff(currentHeight)]);

		pointer += calculateOff(currentHeight);
		currentHeight = blogRef?.current?.clientHeight;
		setBdyBlog([pointer, pointer + calculateOff(currentHeight)]);

		pointer += calculateOff(currentHeight);
		currentHeight = projectRef?.current?.clientHeight;
		setBdyProject([pointer, pointer + calculateOff(currentHeight)]);
	}, [innerHeight]);

	const handleNavigation = useCallback((e) => {
		const window = e.currentTarget;
		setScrollY(window.scrollY);
	}, []);

	useEffect(() => {
		setScrollY(window.scrollY);
		window.addEventListener("scroll", handleNavigation);

		return () => {
			window.removeEventListener("scroll", handleNavigation);
		};
	}, [handleNavigation]);

	const toAbout = () =>
		aboutRef.current?.scrollIntoView({ behavior: "smooth" });

	const toBlog = () =>
		blogRef.current?.scrollIntoView({ behavior: "smooth" });

	const toProject = () =>
		projectRef.current?.scrollIntoView({ behavior: "smooth" });

	const calculateOff = (height: number | undefined) =>
		height ? height * (3 / 4) : 0;

	return (
		<div className="flex flex-col">
			<Head>
				<title>Naufal Mukhbit&apos;s Website</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar
				scroll={scrollY}
				boundaries={{
					about: bdyAbout,
					blog: bdyBlog,
					projects: bdyProject,
				}}
				toAbout={toAbout}
				toBlog={toBlog}
				toProject={toProject}
			/>
			<ParallaxProvider>
				<article className="text-center">
					<Parallax
						speed={-50}
						startScroll={innerHeight * -1}
						endScroll={innerHeight}
					>
						<Hero />
					</Parallax>
					<Parallax className="bg-white text-black">
						<div id="about" ref={aboutRef}>
							<Bio />
						</div>
						<div id="blog" ref={blogRef}>
							<BlogPosts />
						</div>
						<div id="project" ref={projectRef}>
							<Projects />
						</div>
						<div className="py-20 flex justify-center">
							<div className="flex flex-row-reverse justify-center items-center text-4xl font-bold text-black/10">
								More things coming soon 👀
							</div>
						</div>
						<HomeFooter />
					</Parallax>
				</article>
			</ParallaxProvider>
		</div>
	);
};

export default Home;

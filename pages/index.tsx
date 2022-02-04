import { useState, useCallback, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Card, Navbar } from "components/common";
import { FakeWindow, HomeFooter } from "components";

const Home: NextPage = () => {
	type snippetData = {
		title: string;
		content: string;
	};

	const [scrollY, setScrollY] = useState(0);
	const [fakeWindowPadding, setFakeWindowPadding] = useState("15% 12%");
	const [innerHeight, setInnerHeight] = useState(0);

	useEffect(() => {
		if (window) {
			setInnerHeight(window.innerHeight);
		}
	}, []);

	const tempSnippets: snippetData[] = [
		{
			title: "Test Title",
			content:
				"This is some content of the blog post. This is more text. And more. It keeps coming. This is for testing purposes only, I swear. But I need more text. Help. Okay, one more sentence.",
		},
		{
			title: "Test Title",
			content: "This is some content of the blog post.",
		},
		{
			title: "Test Title",
			content: "This is some content of the blog post.",
		},
		// {
		// 	title: "Test Title",
		// 	content: "This is some content of the blog post.",
		// },
	];

	const renderBlogPosts = (snippets: snippetData[]) => {
		return (
			<div className="rounded-lg p-4 ml-4 basis-1/2 flex flex-col gap-3 w-3/5 bg-gray-50 dark:bg-slate-900">
				{snippets[0] ? (
					<Card className="flex flex-col gap-2 cursor-pointer hover:scale-110 duration-300 transition-all h-36">
						<strong>{snippets[0].title}</strong>
						<span className="leading-6 text-ellipsis overflow-hidden h-24">
							{snippets[0].content}
						</span>
					</Card>
				) : (
					<div className="h-36" />
				)}
				{snippets[1] ? (
					<Card className="flex flex-col gap-2 cursor-pointer hover:scale-110 duration-300 transition-all h-36">
						<strong>{snippets[1].title}</strong>
						<span className="leading-6">{snippets[1].content}</span>
					</Card>
				) : (
					<div className="h-36" />
				)}
				{snippets[2] ? (
					<Card className="flex flex-col gap-2 cursor-pointer hover:scale-110 duration-300 transition-all h-36">
						<strong>{snippets[2].title}</strong>
						<span className="leading-6">{snippets[2].content}</span>
					</Card>
				) : (
					<div className="h-36" />
				)}
				{snippets.length > 2 ? (
					<Card className="cursor-pointer hover:scale-110 duration-300 transition-all text-gray-500">
						See more...
					</Card>
				) : (
					<div className="h-14" />
				)}
			</div>
		);
	};

	const renderSiteCard = (data: snippetData) => {
		return (
			<Card className="flex flex-col gap-2 cursor-pointer hover:bg-black hover:text-white duration-300 transition-all w-96 h-56">
				<strong>{data.title}</strong>
				<span className="leading-6 text-ellipsis overflow-hidden h-24">
					{data.content}
				</span>
			</Card>
		);
	};

	const renderSites = (snippets: snippetData[]) => {
		return (
			<div className="ml-4 flex flex-col gap-3">
				<div className="flex flex-row gap-3">
					{snippets[0] ? renderSiteCard(snippets[0]) : <div className="h-36" />}
					{snippets[1] ? renderSiteCard(snippets[1]) : <div className="h-36" />}
					{snippets[2] ? renderSiteCard(snippets[2]) : <div className="h-36" />}
				</div>
				<div className="flex flex-row gap-3">
					{snippets[0] ? renderSiteCard(snippets[0]) : <div className="h-36" />}
					{snippets[1] ? renderSiteCard(snippets[1]) : <div className="h-36" />}
					{snippets[2] ? renderSiteCard(snippets[2]) : <div className="h-36" />}
				</div>
			</div>
		);
	};

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

	return (
		<div className="flex flex-col">
			<Head>
				<title>Naufal Mukhbit&apos;s Website</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <div className={`${scrollY < 1300 ? "opacity-0" : "opacity-100 "} duration-300 transition-all`}>
				<Navbar />
			</div> */}
			{!(scrollY < 1300) && <Navbar scroll={scrollY} />}
			<div
				className="relative bg-yellow-50 dark:bg-slate-500 transition"
				style={{ height: 1500 + innerHeight }}
			>
				<FakeWindow scroll={scrollY} />
			</div>
			<div className="relative">
				<div className="absolute top-0">
					<div className="py-20 flex justify-center">
						<div className="flex flex-row justify-center items-center gap-16 w-8/12">
							<div className="text-5xl font-bold text-right leading-snug basis-1/2">
								You can read my
								<br />
								blog posts...
							</div>
							{renderBlogPosts(tempSnippets)}
						</div>
					</div>
					<div className="py-20 flex justify-center bg-black/5 dark:bg-white/5">
						<div className="flex flex-row-reverse justify-center items-center gap-16 w-8/12">
							<div className="text-5xl font-bold text-left leading-snug basis-1/2">
								...or follow me on
								<br />
								my social medias!
							</div>
							{renderBlogPosts(tempSnippets)}
						</div>
					</div>
					<div className="py-20 flex justify-center">
						<div className="flex flex-col justify-center items-center gap-16 w-8/12">
							<div className="text-5xl font-bold text-center leading-snug">
								Give these little projects
								<br />
								of mine a visit!
							</div>
							{renderSites(tempSnippets)}
						</div>
					</div>
					<HomeFooter />
				</div>
			</div>
		</div>
	);
};

export default Home;

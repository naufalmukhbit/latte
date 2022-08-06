import { Card } from "components/common";
import dayjs, { Dayjs } from "dayjs";

export default function BlogPosts() {
	type snippetData = {
		title: string;
		date: Dayjs;
		content: string;
		url: string;
	};

	const tempSnippets: snippetData[] = [
		{
			title: "A Gentle Hello for 2022",
			date: dayjs("02/05/2022"),
			content:
				"I know I’m late! A month has passed by in 2022. Everybody has done celebrating the coming of a new year. People’s new year’s resolution starts to fade, as they came to realize that every year is basically the same except for the number on their calendar. So amidst all people that have given up their hope for this year, why, of all people, I am still very excited and hopeful for the things to come?",
			url: "https://paymukh.wordpress.com/2022/02/05/a-gentle-hello-for-2022/",
		},
		{
			title: "Completely reinstalling my PC",
			date: dayjs("10/21/2020"),
			content: "When I start my daily internet browsing today, I got some good news. I read it from The Verge first, but it’s a news about Windows. Specifically, Windows 10, that has just got an official update for the second half of the year. I know for some people Windows updates isn’t that exciting, unlike a new Android or iOS (or even macOS) update.",
			url: "https://paymukh.wordpress.com/2020/10/21/completely-reinstalling-my-pc/",
		},
		{
			title: "What I really did in the last 8 months",
			date: dayjs("10/20/2020"),
			content: "It’s day two of my blog-writing routine. Glad I live up to the second day 🙂\nAnyway, I stated in my previous post that because of this pandemic, I have been staying home for at least eight months. Which is a lot really, especially when you don’t have any income yet. Also, I have to deal with my thesis presentation (honestly, idk what to call it in English but what I mean is ‘sidang skripsi’) and the program as well.",
			url: "https://paymukh.wordpress.com/2020/10/20/what-i-really-did-in-the-last-8-months/",
		},
	];

	const renderBlogPostCard = (snippet: snippetData) => {
		return (
			<a href={snippet.url} target="_blank" rel="noreferrer">
				<Card clickable className="relative group flex flex-col gap-2 hover:scale-110 duration-300 transition-all h-36 hover:h-44 hover:z-10">
					<span className="flex flex-row items-center gap-2">
						<strong className="truncate max-w-[70%]">{snippet.title}</strong>
						<span className="text-xs opacity-40">&middot;</span>
						<small className="text-xs opacity-40 whitespace-nowrap">
							{snippet.date.format("MMM DD, YYYY")}
						</small>
					</span>
					<span className="leading-6 line-clamp-3 text-left">{snippet.content}</span>
					<div className="absolute bottom-4 text-xs opacity-0 group-hover:opacity-100 transition text-gray-500">
						Click to read more...
					</div>
				</Card>
			</a>
		);
	};

	const renderBlogPosts = (snippets: snippetData[]) => {
		return (
			<div className="h-[35rem] max-h-[37rem] basis-1/2 w-full lg:w-3/5">
				{snippets && snippets.length > 0 ? (
					<div className="flex flex-col gap-3 rounded-lg p-4 lg:ml-4 bg-gray-50">
						{snippets[0] && renderBlogPostCard(snippets[0])}
						{snippets[1] && renderBlogPostCard(snippets[1])}
						{snippets[2] && renderBlogPostCard(snippets[2])}

						{snippets.length > 2 && (
							<a href="https://paymukh.wordpress.com" target="_blank" rel="noreferrer">
								<Card className="cursor-pointer hover:scale-105 duration-300 transition-all text-gray-500">
									See more posts...
								</Card>
							</a>
						)}
					</div>
				) : (
					<div className="h-[35rem] flex justify-center items-center">
						No Posts Yet
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="py-20 flex justify-center bg-black/5">
			<div className="flex flex-col lg:flex-row justify-center items-center gap-16 w-full px-4 lg:w-8/12 lg:px-0">
				<div className="2xl:text-5xl xl:text-4xl text-3xl font-bold text-center lg:text-right leading-snug basis-1/2">
					You can read my
					<br />
					blog posts...
				</div>
				{renderBlogPosts(tempSnippets)}
			</div>
		</div>
	);
}

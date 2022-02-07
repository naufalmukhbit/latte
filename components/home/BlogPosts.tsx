import { Card } from "components/common";

export default function BlogPosts() {
	type snippetData = {
		title: string;
		content: string;
    url: string;
	};

	const tempSnippets: snippetData[] = [
		{
			title: "A Gentle Hello for 2022",
			content:
				"I know I’m late! A month has passed by in 2022. Everybody has done celebrating the coming of a new year. People’s new year’s resolution starts to fade, as they came to realize that every year is basically the same except for the number on their calendar. So amidst all people that have given up their hope for this year, why, of all people, I am still very excited and hopeful for the things to come?",
      url: "https://paymukh.wordpress.com/2022/02/05/a-gentle-hello-for-2022/",
		},
		{
			title: "Completely reinstalling my PC",
			content: "When I start my daily internet browsing today, I got some good news. I read it from The Verge first, but it’s a news about Windows. Specifically, Windows 10, that has just got an official update for the second half of the year. I know for some people Windows updates isn’t that exciting, unlike a new Android or iOS (or even macOS) update.",
      url: "https://paymukh.wordpress.com/2020/10/21/completely-reinstalling-my-pc/",
		},
		{
			title: "What I really did in the last 8 months",
			content: "It’s day two of my blog-writing routine. Glad I live up to the second day 🙂\nAnyway, I stated in my previous post that because of this pandemic, I have been staying home for at least eight months. Which is a lot really, especially when you don’t have any income yet. Also, I have to deal with my thesis presentation (honestly, idk what to call it in English but what I mean is ‘sidang skripsi’) and the program as well.",
      url: "https://paymukh.wordpress.com/2020/10/20/what-i-really-did-in-the-last-8-months/",
		},
	];

	const renderBlogPostCard = (snippet: snippetData) => {
		return (
			<Card className="relative group flex flex-col gap-2 cursor-pointer hover:scale-110 duration-300 transition-all h-36 hover:h-44 hover:z-10">
				<strong>{snippet.title}</strong>
				<span className="leading-6 line-clamp-3">{snippet.content}</span>
				<a className="absolute bottom-4 text-xs opacity-0 group-hover:opacity-100 transition text-gray-500 dark:text-slate-300">
					Click to read more...
				</a>
			</Card>
		);
	};

	const renderBlogPosts = (snippets: snippetData[]) => {
		return (
			<div className="h-[35rem] rounded-lg p-4 ml-4 basis-1/2 flex flex-col gap-3 w-3/5 bg-gray-50 dark:bg-slate-900">
				{snippets && snippets.length > 0 ? (
					<>
						{snippets[0] && renderBlogPostCard(snippets[0])}
						{snippets[1] && renderBlogPostCard(snippets[1])}
						{snippets[2] && renderBlogPostCard(snippets[2])}

						{snippets.length > 2 && (
							<Card className="cursor-pointer hover:scale-105 duration-300 transition-all text-gray-500 dark:text-slate-500">
								See more posts...
							</Card>
						)}
					</>
				) : (
					<div className="h-[35rem] flex justify-center items-center">
						No Posts Yet
					</div>
				)}
			</div>
		);
	};

	return (
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
	);
}

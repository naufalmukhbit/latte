import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
	links: string[];
	defaultActive?: number;
}

export default function Navbar({ links, defaultActive = 0 }: NavbarProps) {
	const [activeTab, setActiveTab] = useState(defaultActive);

	return (
		<div className="fixed top-0 h-14 bg-transparent flex justify-center z-10">
			<div className="w-full max-w-screen-lg flex flex-row justify-center items-stretch">
				{links.map((link: string, i: number) => (
					<Link href={link === "Profile" ? "/johnperson" : "/"} key={i}>
						<a
							className={`transition px-12 flex items-center hover:bg-amber-300 active:bg-amber-400`}
							onClick={() => setActiveTab(i)}
						>
							{link}
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

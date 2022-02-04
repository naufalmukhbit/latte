import { useEffect, useState } from "react";
import { MacButtons } from "components";

interface FakeWindowProps {
	scroll: number;
}

export default function FakeWindow({ scroll }: FakeWindowProps) {
  const [windowHeight, setWindowHeight] = useState("60vh");
  const [windowWidth, setWindowWidth] = useState("65vh");

	useEffect(() => {
		let scrollPercentage: number = ((scroll > 800 ? 800 : scroll) * 100) / 800;
		let windowX = countRangePercentage(65, 100, scrollPercentage);
    setWindowWidth(`${windowX}vw`);
		let windowY = countRangePercentage(60, 100, scrollPercentage);
    setWindowHeight(`${windowY}vh`);
	}, [scroll]);

	const countRangePercentage = (b: number, t: number, p: number) => {
		/*
			b: Bottom number of range
			t: Top number of range
			p: Percentage to be found
		*/
		return (p * (t - b)) / 100 + b;
	};

	return (
		<div className="h-screen flex items-center justify-center sticky top-0">
			<div
				className="flex items-center justify-center bg-white drop-shadow-xl rounded-xl relative"
				style={{ height: windowHeight, width: windowWidth }}
			>
				<MacButtons />
				{scroll < 1100 ? (
					<span
						className="text-6xl font-mono whitespace-nowrap"
						style={{
							transform: `translateY(${
								scroll > 1000 ? `-${scroll - 1000}px` : "0"
							})`,
							opacity: scroll > 1000 ? 1 - (scroll - 1000) / 100 : 1,
						}}
					>
						Welcome to my website!
					</span>
				) : (
					<div
						className="flex flex-row justify-center items-center text-center w-2/5"
						style={{
							transform: `translateY(${
								scroll > 1200
									? scroll <= 1300
										? `${(scroll - 1300) * -1}px`
										: 0
									: "100px"
							})`,
							opacity: scroll > 1200 ? (scroll - 1200) / 100 : 0,
						}}
					>
						Hello, my name is Naufal. I&apos;m a front-end software developer,
						currently focusing on web and mobile apps development. Though only
						have a one year of work experience, I always try to improve my
						skills to the peak every chance I get.
					</div>
				)}
			</div>
		</div>
	);
}

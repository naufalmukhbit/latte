import { useEffect, useState } from "react";
import { DarkModeToggle, MacButtons } from "components/common";
import Bio from "./Bio";

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
				className={`flex items-center justify-center bg-white drop-shadow-xl relative transition ${scroll < 800 ? "rounded-xl" : ""}`}
				style={{ height: windowHeight, width: windowWidth }}
			>
				<div className="absolute top-3 left-4 right-4 flex flex-row justify-between items-center">
					<div className="w-24">
						<MacButtons />
					</div>
					<span className="text-sm">Naufal&apos;s Site</span>
					<div className={`${scroll < 1301 ? "visible" : "invisible"} w-24 flex flex-row justify-end items-end p-px pr-0`}>
						<DarkModeToggle />
					</div>
				</div>
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
					<Bio style={{
						transform: `translateY(${
							scroll > 1200
								? scroll <= 1300
									? `${(scroll - 1300) * -1}px`
									: 0
								: "100px"
						})`,
						opacity: scroll > 1200 ? (scroll - 1200) / 100 : 0,
					}} />
				)}
			</div>
		</div>
	);
}

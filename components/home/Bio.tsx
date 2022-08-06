import Image from "next/image";
import { CSSProperties } from "react";
import profilePic from "assets/20220124_041835_0_cropped.jpg";

export default function Bio(props: { style?: CSSProperties }) {
	return (
		<div>
			<div
				className="flex flex-col mx-auto justify-center items-center text-center w-3/4 lg:w-2/5 h-screen gap-8"
				style={props.style}
			>
				<Image
					src={profilePic}
					width={100}
					height={100}
					alt="Author&apos;s Pic"
					className="rounded-full"
				/>
				<span>
					Hello, my name is Naufal. I&apos;m a front-end software
					developer, currently focusing on web and mobile apps
					development. Though only have a year of work experience, I
					always try to improve my skills to the limit every chance I
					get.
				</span>
			</div>
		</div>
	);
}

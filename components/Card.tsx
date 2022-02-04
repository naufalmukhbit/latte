import { ReactNode, useEffect, useState } from "react";

interface CardProps {
	children?: ReactNode;
	className?: string;
	fluid?: boolean;
	clickable?: boolean;
	onClick?: () => void;
}

export default function Card({
	children,
	className,
	fluid,
	clickable,
	onClick,
}: CardProps) {
	const [cardStyle, setCardStyle] = useState("");

	useEffect(() => {
		let newCardStyle =
			"bg-white border-2 rounded-lg" +
			(!fluid ? " p-4" : "") +
			(clickable ? " hover: cursor-pointer" : "") +
			(className ? " " + className : "");

		setCardStyle(newCardStyle);
	}, [className, fluid, clickable]);

	return (
		<div
			className={cardStyle}
			onClick={onClick}
		>
			{children}
		</div>
	);
}

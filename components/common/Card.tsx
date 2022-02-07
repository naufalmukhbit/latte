import { ReactNode, useEffect, useState } from "react";

interface CardProps {
	children?: ReactNode;
	className?: string;
	fluid?: boolean;
	clickable?: boolean;
	onClick?: () => void;
	onHover?: (hover: boolean) => void;
}

export default function Card({
	children,
	className,
	fluid,
	clickable,
	onClick,
	onHover,
}: CardProps) {
	const [cardStyle, setCardStyle] = useState("");

	useEffect(() => {
		let newCardStyle =
			"bg-white rounded-lg dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl" +
			(!fluid ? " p-4" : "") +
			(clickable ? " hover: cursor-pointer" : "") +
			(className ? " " + className : "");

		setCardStyle(newCardStyle);
	}, [className, fluid, clickable]);

	return (
		<div
			className={cardStyle}
			onClick={onClick}
			onMouseEnter={() => onHover && onHover(true)}
			onMouseLeave={() => onHover && onHover(false)}
		>
			{children}
		</div>
	);
}

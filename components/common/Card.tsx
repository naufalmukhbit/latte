import { ReactNode, useEffect, useState } from "react";
interface BasicCardProps {
	children?: ReactNode;
	className?: string;
	fluid?: boolean;
}

interface CardProps {
	key?: number;
	children?: ReactNode;
	className?: string;
	fluid?: boolean;
	clickable?: boolean;
	onClick?: () => void;
	onHover?: (hover: boolean) => void;
}

export default function Card({
	key,
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
			"bg-white rounded-lg ring-1 ring-slate-900/5 shadow-xl" +
			(!fluid ? " p-4" : "") +
			(clickable ? " hover: cursor-pointer" : "") +
			(className ? " " + className : "");

		setCardStyle(newCardStyle);
	}, [className, fluid, clickable]);

	return (
		<div
			key={key}
			className={cardStyle}
			onClick={onClick}
			onMouseEnter={() => onHover && onHover(true)}
			onMouseLeave={() => onHover && onHover(false)}
		>
			{children}
		</div>
	);
}

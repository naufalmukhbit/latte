import { ReactChild } from "react";

interface ButtonProps {
	htmlType?: string;
	children: string;
}

export default function Button(props: ButtonProps) {
	return (
		<button className="text-amber-900 bg-yellow-200 hover:bg-amber-300 px-6 py-2 transition-all">
			{props.children}
		</button>
	);
}

import { DarkModeToggle } from "components/common";
import Icon from "components/Icon";
import { ReactNode, useState } from "react";
import { IoChevronForward, IoMenu } from "react-icons/io5";

interface NavbarItemProps {
	children: ReactNode;
	active: boolean;
	toItem: () => any;
}

const NavbarItem = ({ children, active, toItem }: NavbarItemProps) => {
	return (
		<span
			className={`${
				active
					? "font-bold border-b-2 border-b-white md:border-b-black"
					: ""
			} cursor-pointer`}
			onClick={toItem}
		>
			{children}
		</span>
	);
};

interface NavbarProps {
	scroll: number;
	boundaries: {
		about: number[];
		blog: number[];
		projects: number[];
	};
	toAbout: () => any;
	toBlog: () => any;
	toProject: () => any;
}

export default function Navbar({
	scroll,
	boundaries,
	toAbout,
	toBlog,
	toProject,
}: NavbarProps) {
	const [expanded, setExpanded] = useState(false);

	const renderItems = () => (
		<>
			<NavbarItem
				active={
					scroll > boundaries.about[0] &&
					scroll <= boundaries.about[1]
				}
				toItem={toAbout}
			>
				about
			</NavbarItem>
			<NavbarItem
				active={
					scroll > boundaries.blog[0] && scroll <= boundaries.blog[1]
				}
				toItem={toBlog}
			>
				blog
			</NavbarItem>
			<NavbarItem
				active={scroll > boundaries.projects[0]}
				toItem={toProject}
			>
				projects
			</NavbarItem>
		</>
	);

	const expand = () => {
		setExpanded(true);
	};

	const collapse = () => {
		setExpanded(false);
	};

	return (
		<div className="fixed top-0 py-5 px-8 md:px-16 z-20 w-full bg-black/10 backdrop-blur-md">
			<div
				className={`flex flex-row justify-between font-medium gap-6 transition-all ${
					scroll > boundaries.about[0]
						? "md:text-black text-white"
						: "text-red-600"
				} md:justify-start`}
			>
				<span className="relative w-12">
					<span className="absolute -top-[50%]">
						<Icon />
					</span>
				</span>
				<IoMenu
					className={`text-3xl self-center -my-[2px] md:hidden ${
						scroll > boundaries.about[0] && "text-black"
					}`}
					onClick={expand}
				/>
				<span
					className={`
						translate-x-${
							expanded ? "0" : "[100vw]"
						} md:translate-x-0 flex flex-row justify-between gap-6 absolute inset-0 py-5 px-8 bg-black transition-all duration-300 ease-in-out md:p-0 md:bg-transparent md:relative`}
				>
					{renderItems()}
					<IoChevronForward
						className="text-2xl self-center -my-[2px] md:hidden"
						onClick={collapse}
					/>
				</span>
			</div>
		</div>
	);
}

import { DarkModeToggle } from "components/common";
import Icon from "components/Icon";
import { ReactNode } from "react";

interface NavbarItemProps {
	children: ReactNode;
	active: boolean;
	toItem: () => any;
}

const NavbarItem = ({ children, active, toItem }: NavbarItemProps) => {
	return (
		<span
			className={`${
				active ? "font-bold border-b-2 border-b-black" : ""
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
	return (
		<div className="fixed top-0 py-5 px-8 md:px-16 z-20 w-full bg-black/10 backdrop-blur-md">
			<div className={`flex flex-row justify-end md:justify-start gap-6 ${scroll > boundaries.about[0] ? "text-black" : "text-red-500"} transition-all`}>
        <span className="relative w-12">
          <span className="absolute -top-[50%]">
            <Icon />
          </span>
        </span>
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
						scroll > boundaries.blog[0] &&
						scroll <= boundaries.blog[1]
					}
					toItem={toBlog}
				>
					blog
				</NavbarItem>
				<NavbarItem
					active={
						scroll > boundaries.projects[0]
					}
					toItem={toProject}
				>
					projects
				</NavbarItem>
				{/* <DarkModeToggle /> */}
			</div>
		</div>
	);
}

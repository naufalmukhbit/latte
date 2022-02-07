import { DarkModeToggle } from "components/common";

export default function Navbar({ scroll }: { scroll: number }) {
	return (
		<div className={`${scroll < 1300 ? "hidden" : "block"} fixed top-0 flex flex-row justify-end py-3 px-4 z-10 w-full gap-6 transition-all`}>
			<span className={
				scroll > 1300 && scroll <= 2100
					? "font-bold border-b-2 border-b-black dark:border-b-white"
					: ""
			}>
				about
			</span>
			<span className={
				scroll > 2100 && scroll <= 3500
					? "font-bold border-b-2 border-b-black dark:border-b-white"
					: ""
			}>
				blog
			</span>
			<span className={
				scroll > 3500
					? "font-bold border-b-2 border-b-black dark:border-b-white"
					: ""
			}>
				projects
			</span>
			<DarkModeToggle />
		</div>
	);
}

import { DarkModeToggle } from "components/common";

interface NavbarProps {
  scroll: number;
  toAbout: () => any;
  toBlog: () => any;
  toProject: () => any;
}

export default function Navbar({
  scroll,
  toAbout,
  toBlog,
  toProject,
}: NavbarProps) {
  return (
    <div
      className={`${
        scroll < 1300 ? "hidden" : "block"
      } fixed top-0 flex flex-row justify-end py-3 px-4 z-20 w-full gap-6 transition-all`}
    >
      <span
        className={`${
          scroll >= 1300 && scroll <= 2100
            ? "font-bold border-b-2 border-b-black dark:border-b-white"
            : ""
        } cursor-pointer`}
        onClick={toAbout}
      >
        about
      </span>
      <span
        className={`${
          scroll > 2100 && scroll <= 2800
            ? "font-bold border-b-2 border-b-black dark:border-b-white"
            : ""
        } cursor-pointer`}
        onClick={toBlog}
      >
        blog
      </span>
      <span
        className={`${
          scroll > 2800
            ? "font-bold border-b-2 border-b-black dark:border-b-white"
            : ""
        } cursor-pointer`}
        onClick={toProject}
      >
        projects
      </span>
      <DarkModeToggle />
    </div>
  );
}

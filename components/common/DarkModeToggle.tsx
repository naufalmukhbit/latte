import { useTheme } from "next-themes";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  
	return (
		<div
			className="cursor-pointer text-2xl flex flex-row items-center"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			{/* <TiWeatherSunny className="mr-1" />
			{theme === "light" ? <FaToggleOff /> : <FaToggleOn />}
			<TiWeatherNight /> */}
		</div>
	);
}

import { useEffect, useState } from "react";

export default function MacButtons() {
	const [redCount, setRedCount] = useState(0);
	const [yellowCount, setYellowCount] = useState(0);
	const [greenCount, setGreenCount] = useState(0);
	const [patternCount, setPatternCount] = useState(0);

  useEffect(() => {
    if (patternCount === 3) {
      setRedCount(0);
      setYellowCount(0);
      setGreenCount(0);
      setPatternCount(0);
      window && window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  }, [patternCount]);

	return (
		<div className="flex flex-row gap-2">
			<div
				className="bg-red-400 rounded-full w-3.5 h-3.5 shadow-inner cursor-pointer hover:bg-red-500 transition-colors"
				onClick={() => {
					if (redCount === 0 && yellowCount === 0 && greenCount === 0) {
						setRedCount(1);
					} else {
						setRedCount(0);
						setYellowCount(0);
						setGreenCount(0);
						setPatternCount(0);
					}
				}}
			/>
			<div
				className="bg-yellow-400 rounded-full w-3.5 h-3.5 shadow-inner cursor-pointer hover:bg-yellow-500 transition-colors"
				onClick={() => {
					if (redCount === 1 && yellowCount === 0 && greenCount === 0) {
						setYellowCount(1);
					} else {
						setRedCount(0);
						setYellowCount(0);
						setGreenCount(0);
						setPatternCount(0);
					}
				}}
			/>
			<div
				className="bg-green-400 rounded-full w-3.5 h-3.5 shadow-inner cursor-pointer hover:bg-green-500 transition-colors"
				onClick={() => {
					if (redCount === 1 && yellowCount === 1 && greenCount === 0) {
						setRedCount(0);
						setYellowCount(0);
						setGreenCount(0);
						setPatternCount((cur) => cur + 1);
					} else {
						setRedCount(0);
						setYellowCount(0);
						setGreenCount(0);
						setPatternCount(0);
					}
				}}
			/>
		</div>
	);
}

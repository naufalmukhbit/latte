import iconImg from "../assets/icon2.png";
import Image from "next/image";

export default function Icon() {
	return (
		<div className="relative p-2 pt-3">
      <div className="relative flex flex-col justify-center">
        <span className="absolute -top-[10px] -right-[3px]">
          <Image src={iconImg} height={48} width={48} />
        </span>
        <div className="rounded-full h-8 w-8 bg-red-500" />
      </div>
      <div className="absolute inset-0 -z-10 bg-white/20 rounded-[50%] blur-lg opacity-60" />
		</div>
	);
}

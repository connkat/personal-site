"use client";

type Props = {
	onContactClick?: () => void;
	onTodayClick?: () => void;
};

export default function NinetiesSiteMap({ onContactClick, onTodayClick }: Props) {
	return (
		<div id="site-map" className="flex justify-center py-2">
			<p className="whitespace-nowrap text-[clamp(20px,2.2vw,14px)]">
				<span className="text-red-500">|</span>
				<a href=".">Home</a>
				<span className="text-red-500">|</span>
				<a href="#about">About Me</a>
				<span className="text-red-500">|</span>
				<a href="#" onClick={(e) => { e.preventDefault(); onTodayClick?.(); }}>Today</a>
				<span className="text-red-500">|</span>
				<a href="#projects">Projects</a>
				<span className="text-red-500">|</span>
				<a href="#NinetiesContact" onClick={onContactClick}>Contact</a>
				<span className="text-red-500">|</span>
			</p>
		</div>
	);
}

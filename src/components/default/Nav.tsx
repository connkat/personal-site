"use client";

import Logo from "../../assets/logo-rectangle.png";

type NavProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Nav({ isNineties, handle90sToggle }: NavProps) {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 bg-white overflow-hidden h-20">
			<a href="#" className="h-full overflow-hidden flex items-center">
				<img src={Logo.src} alt="logo" className="h-32 object-cover object-center" />
			</a>
			<div className="flex items-center gap-6 text-sm tracking-widest uppercase">
				<a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
				<a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
				<a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
				<a href="https://github.com/connkat" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
				<a href="https://linkedin.com/in/connkat" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
				<button
					onClick={() => handle90sToggle(isNineties)}
					title="What if this was 1999?"
					className={`w-9 h-9 rounded-full border-2 text-xs font-bold tracking-tight transition-colors cursor-pointer ${
						isNineties
							? "bg-yellow-300 border-yellow-400 text-yellow-900"
							: "border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-700"
					}`}
				>
					1998
				</button>
			</div>
		</nav>
	);
}

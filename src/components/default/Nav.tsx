"use client";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logo-rectangle.png";

type NavProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#work", label: "Work" },
	{ href: "#contact", label: "Contact" },
	{ href: "https://github.com/connkat", label: "GitHub", external: true },
	{ href: "https://linkedin.com/in/connkat", label: "LinkedIn", external: true },
	{ href: "https://medium.com/@connkat", label: "Medium", external: true },
];

export default function Nav({ isNineties, handle90sToggle }: NavProps) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pl-0 pr-1 bg-white overflow-hidden h-20">
				<a href="#" className="h-full overflow-hidden flex items-center">
					<img src={Logo.src} alt="logo" className="h-32 object-cover object-center" />
				</a>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-6 text-sm tracking-widest uppercase">
					{navLinks.map(({ href, label, external }) => (
						<a
							key={label}
							href={href}
							target={external ? "_blank" : undefined}
							rel={external ? "noreferrer" : undefined}
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							{label}
						</a>
					))}
					<NinetiesButton isNineties={isNineties} onToggle={() => handle90sToggle(isNineties)} />
				</div>

				{/* Mobile right side */}
				<div className="flex md:hidden items-center gap-1">
					<NinetiesButton isNineties={isNineties} onToggle={() => handle90sToggle(isNineties)} />
					<button
						onClick={() => setMenuOpen((o) => !o)}
						className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
						aria-label="Toggle menu"
						style={{ border: "none", background: "none", padding: 0, boxShadow: "none" }}
					>
						{menuOpen ? (
							<CloseIcon style={{ fontSize: 24, color: "#4b5563" }} />
						) : (
							<MenuIcon style={{ fontSize: 24, color: "#4b5563" }} />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile dropdown */}
			{menuOpen && (
				<div className="fixed top-20 left-0 right-0 z-40 bg-white flex flex-col text-sm tracking-widest uppercase">
					{navLinks.map(({ href, label, external }) => (
						<a
							key={label}
							href={href}
							target={external ? "_blank" : undefined}
							rel={external ? "noreferrer" : undefined}
							className="text-gray-600 hover:text-gray-900 transition-colors px-8 py-4 border-b border-gray-100"
							onClick={() => setMenuOpen(false)}
						>
							{label}
						</a>
					))}
				</div>
			)}
		</>
	);
}

function NinetiesButton({ isNineties, onToggle }: { isNineties: boolean; onToggle: () => void }) {
	return (
		<button
			onClick={onToggle}
			title="What if this was 1999?"
			className={`w-9 h-9 rounded-full border-2 text-xs font-bold tracking-tight transition-colors cursor-pointer ${
				isNineties
					? "bg-yellow-300 border-yellow-400 text-yellow-900"
					: "border-gray-400 text-gray-500 hover:border-gray-700 hover:text-gray-700"
			}`}
		>
			1998
		</button>
	);
}

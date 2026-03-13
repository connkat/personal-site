export default function NinetiesLinks() {
	const linkClass = "flex flex-row text-center";
	const imgClass = "max-h-[5vh]";

	const links = [
		{ href: "https://github.com/connkat/Resume/blob/master/KConnolly.pdf", src: "https://win98icons.alexmeub.com/icons/png/write_wordpad-1.png", label: "Resume" },
		{ href: "https://linkedin.com/in/connkat", src: "https://win98icons.alexmeub.com/icons/png/world_phonereceiver.png", label: "LinkedIn" },
		{ href: "https://www.github.com/connkat", src: "https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png", label: "Github" },
		{ href: "https://connkat.medium.com/", src: "https://win98icons.alexmeub.com/icons/png/printer-0.png", label: "Medium" },
	];

	return (
		<div id="links" className="px-[5vh]">
			<div className="flex flex-row justify-evenly">
				{links.map(({ href, src, label }) => (
					<div key={label} className={linkClass}>
						<a href={href} target="_blank" rel="noreferrer">
							<img src={src} alt={label} className={imgClass} />
							<p>{label}</p>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

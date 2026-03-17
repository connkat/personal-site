"use client";

import { useState } from "react";
import NinetiesContact from "./NinetiesContact";

export default function NinetiesAbout() {
	const [contactOpen, setContactOpen] = useState(false);
	return (
		<div className="px-[5vh] text-base">
			<div id="about" className="flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-4/5">
					<div className="flex">
						<p>I am passionate about web design!</p>
						<p className="text-[8px] pt-[1vh]">~*just kidding*~</p>
					</div>
					<div className="flex">
						<p>
							While I am not a designer, I am a skilled fullstack* developer, with substantial
							experience in both back and front end technologies and engineering leadership.
						</p>
					</div>
				</div>
				<div className="w-full md:w-1/5 flex items-center justify-center pt-4 pb-10 md:py-0">
					<button
						onClick={() => setContactOpen(true)}
						style={{
							background: "linear-gradient(135deg, #ff6600, #ffcc00)",
							border: "3px outset #ff6600",
							color: "#000",
							fontFamily: "Comic Sans MS, cursive",
							fontSize: "14px",
							fontWeight: "bold",
							padding: "8px 12px",
							cursor: "pointer",
							boxShadow: "3px 3px 0 #000",
							textAlign: "center",
						}}
					>
						✉ CONTACT ME! ✉
					</button>
				</div>
			</div>
		<NinetiesContact isOpen={contactOpen} setIsOpen={setContactOpen} />
		</div>
	);
}

"use client";

import "98.css";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const inputClass = "mb-[1vh] w-full h-[4vh] border border-black bg-white text-black";
const textareaClass = "mb-[1vh] h-[20vh] border border-black w-full bg-white text-black";

type Props = {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
};

export default function NinetiesContact({ isOpen, setIsOpen }: Props) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [stateMessage, setStateMessage] = useState("");
	const [entryFields, setEntryFields] = useState({ name: "", email: "", message: "" });

	const sendEmail = (e: FormEvent) => {
		e.persist();
		e.preventDefault();
		setIsSubmitting(true);

		if (entryFields.email === "" || !entryFields.name || !entryFields.message) {
			setStateMessage("Please complete all fields before submitting form");
		}
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID || "",
				process.env.REACT_APP_TEMPLATE_ID || "",
				"#nineties-form",
				process.env.REACT_APP_PUBLIC_KEY || ""
			)
			.then(
				() => {
					setStateMessage("Message sent!");
					setIsSubmitting(false);
					setEntryFields({ name: "", email: "", message: "" });
					setTimeout(() => setStateMessage(""), 5000);
				},
				() => {
					setStateMessage("Something went wrong, please try again later");
					setIsSubmitting(false);
					setTimeout(() => setStateMessage(""), 5000);
				}
			);
		setStateMessage("");
	};

	return (
		<div id="NinetiesContact">
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					style={{
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						background: "rgba(0,0,0,0.3)",
					}}
				>
					{/* Popup ad window */}
					<div
						className="window"
						onClick={(e) => e.stopPropagation()}
						style={{
							width: "360px",
							fontFamily: "Comic Sans MS, cursive",
							border: "3px solid #000",
							boxShadow: "6px 6px 0 #000",
						}}
					>
						<div
							className="title-bar"
							style={{ background: "linear-gradient(90deg, #000080, #1084d0)" }}
						>
							<div className="title-bar-text">
								🎉 YOU HAVE BEEN SELECTED!! 🎉
							</div>
							<div className="title-bar-controls">
								<button aria-label="Minimize" />
								<button aria-label="Maximize" />
								<button aria-label="Close" onClick={() => setIsOpen(false)} />
							</div>
						</div>
						<div className="window-body" style={{ padding: "12px" }}>
							<p
								style={{
									fontFamily: "Comic Sans MS, cursive",
									fontWeight: "bold",
									fontSize: "13px",
									color: "#cc0000",
									textAlign: "center",
									margin: "0 0 10px",
								}}
							>
								⚡ SEND A MESSAGE TO KATHERINE CONNOLLY ⚡
							</p>
							<form id="nineties-form" onSubmit={sendEmail}>
								<div style={{ marginBottom: "6px" }}>
									<label style={{ display: "block", fontWeight: "bold", fontSize: "12px" }}>
										Name:
									</label>
									<input
										type="text"
										name="user_name"
										value={entryFields.name}
										className={inputClass}
										onChange={(e) => setEntryFields({ ...entryFields, name: e.target.value })}
									/>
								</div>
								<div style={{ marginBottom: "6px" }}>
									<label style={{ display: "block", fontWeight: "bold", fontSize: "12px" }}>
										Email:
									</label>
									<input
										type="email"
										name="user_email"
										value={entryFields.email}
										className={inputClass}
										onChange={(e) => setEntryFields({ ...entryFields, email: e.target.value })}
									/>
								</div>
								<div style={{ marginBottom: "8px" }}>
									<label style={{ display: "block", fontWeight: "bold", fontSize: "12px" }}>
										Message:
									</label>
									<textarea
										name="message"
										value={entryFields.message}
										className={textareaClass}
										onChange={(e) =>
											setEntryFields({ ...entryFields, message: e.target.value })
										}
									/>
								</div>
								{stateMessage && (
									<p style={{ fontSize: "12px", color: "#000080", marginBottom: "6px" }}>
										{stateMessage}
									</p>
								)}
								<div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
									<button type="button" onClick={() => setIsOpen(false)}>
										Cancel
									</button>
									<button
										type="submit"
										disabled={
											isSubmitting ||
											!entryFields.name ||
											!entryFields.email ||
											!entryFields.message
										}
										style={{ fontWeight: "bold" }}
									>
										SEND IT! 🚀
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

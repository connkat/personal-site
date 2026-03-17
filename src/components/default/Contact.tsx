"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const inputClass =
	"mb-3 w-full h-10 border-b border-gray-400 bg-transparent focus:outline-none focus:border-gray-800 text-gray-800 transition-colors font-[inherit]";
const textareaClass =
	"mb-3 h-32 w-full border-b border-gray-400 bg-transparent focus:outline-none focus:border-gray-800 text-gray-800 transition-colors resize-none font-[inherit]";

export default function Contact() {
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
				process.env.REACT_APP_SERVICE_ID ?? "",
				process.env.REACT_APP_TEMPLATE_ID ?? "",
				"#form",
				process.env.REACT_APP_PUBLIC_KEY ?? ""
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
		<div id="contact" className="px-[10vw] py-24 min-h-[60vh] flex flex-col items-center">
			<div className="bg-white px-10 py-10 max-w-xl rounded-lg" style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.75)" }}>
				<p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Contact</p>
				<h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-thin text-gray-800 mb-4">
					Get in touch
				</h2>
				<p className="text-gray-700 mb-10 max-w-md leading-relaxed">
					I can&apos;t come to the phone right now, but leave a name and message and I&apos;ll get
					back to you.
				</p>
				<form id="form" onSubmit={sendEmail} className="max-w-md flex flex-col">
					<label className="text-sm text-gray-500 mb-1 font-crimson-pro">Name</label>
					<input
						type="text"
						name="user_name"
						value={entryFields.name}
						className={inputClass}
						onChange={(e) => setEntryFields({ ...entryFields, name: e.target.value })}
					/>
					<label className="text-sm text-gray-500 mb-1 font-crimson-pro mt-4">Email</label>
					<input
						type="email"
						name="user_email"
						value={entryFields.email}
						className={inputClass}
						onChange={(e) => setEntryFields({ ...entryFields, email: e.target.value })}
					/>
					<label className="text-sm text-gray-500 mb-1 font-crimson-pro mt-4">Message</label>
					<textarea
						name="message"
						value={entryFields.message}
						className={textareaClass}
						onChange={(e) => setEntryFields({ ...entryFields, message: e.target.value })}
					/>
					<button
						type="submit"
						className="mt-6 self-start text-sm tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-30 cursor-pointer"
						disabled={
							isSubmitting || !entryFields.name || !entryFields.email || !entryFields.message
						}
					>
						Send ↗
					</button>
					{stateMessage && <p className="mt-4 text-sm text-gray-600">{stateMessage}</p>}
				</form>
			</div>
		</div>
	);
}

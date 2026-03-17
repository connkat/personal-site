"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const inputClass = "mb-[1vh] w-[40vh] h-[4vh] border border-black bg-white text-black";
const textareaClass = "mb-[1vh] h-[20vh] border border-black w-[40vh] bg-white text-black";

export default function NinetiesContact() {
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
				"#form",
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
		<div id="NinetiesContact" className="pl-[5vh] max-sm:px-[5vh] max-sm:pb-[5vh]">
			<form id="form" onSubmit={sendEmail}>
				<div className="flex flex-col mr-[5vh]">
					<div>
						<h4>Name</h4>
						<input type="text" name="user_name" value={entryFields.name}
							className={inputClass + " max-sm:w-full"}
							onChange={(e) => setEntryFields({ ...entryFields, name: e.target.value })}
						/>
					</div>
					<div>
						<h4>Email</h4>
						<input type="email" name="user_email" value={entryFields.email}
							className={inputClass + " max-sm:w-full"}
							onChange={(e) => setEntryFields({ ...entryFields, email: e.target.value })}
						/>
					</div>
				</div>
				<div>
					<h4>Message</h4>
					<textarea name="message" value={entryFields.message}
						className={textareaClass + " max-sm:w-full"}
						onChange={(e) => setEntryFields({ ...entryFields, message: e.target.value })}
					/>
					<input type="submit" value="Send" className="text-yellow-300 cursor-pointer"
						disabled={isSubmitting || !entryFields.name || !entryFields.email || !entryFields.message}
					/>
					{stateMessage && <p>{stateMessage}</p>}
				</div>
			</form>
		</div>
	);
}

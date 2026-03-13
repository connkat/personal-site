"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

const inputClass = "rounded-md mb-[1vh] w-[40vh] h-[4vh] border border-black";
const textareaClass = "mb-[1vh] h-[20vh] rounded-md border border-black w-[40vh]";

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
		<div className="min-h-[60vh] flex flex-col items-center max-sm:min-h-[90vh]">
			<h1 className="text-center pt-[2%] font-thin">Get in touch</h1>
			<p className="px-[5vh]">
				I can't come to the phone right now, but leave a name and detailed
				message and I'll get back to you as soon as possible!
			</p>
			<form id="form" onSubmit={sendEmail} className="flex flex-row max-sm:flex-col">
				<div className="flex flex-col mr-[5vh] max-sm:mr-0">
					<div>
						<h4>Name</h4>
						<input
							type="text"
							name="user_name"
							value={entryFields.name}
							className={inputClass}
							onChange={(e) => setEntryFields({ ...entryFields, name: e.target.value })}
						/>
					</div>
					<div>
						<h4>Email</h4>
						<input
							type="email"
							name="user_email"
							value={entryFields.email}
							className={inputClass}
							onChange={(e) => setEntryFields({ ...entryFields, email: e.target.value })}
						/>
					</div>
				</div>
				<div>
					<div>
						<h4>Message</h4>
						<textarea
							name="message"
							value={entryFields.message}
							className={textareaClass + " max-sm:w-full"}
							onChange={(e) => setEntryFields({ ...entryFields, message: e.target.value })}
						/>
					</div>
					<input
						type="submit"
						value="Send"
						className="w-[41vh] max-sm:w-full cursor-pointer"
						disabled={isSubmitting || !entryFields.name || !entryFields.email || !entryFields.message}
					/>
					{stateMessage && <p>{stateMessage}</p>}
				</div>
			</form>
		</div>
	);
}

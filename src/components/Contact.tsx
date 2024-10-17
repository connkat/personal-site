import { FormEvent } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import "../styling/contact.css";

function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [stateMessage, setStateMessage] = useState("");
	const [entryFields, setEntryFields] = useState({
		name: "",
		email: "",
		message: "",
	});
	const sendEmail = (e: FormEvent) => {
		e.persist();
		e.preventDefault();
		setIsSubmitting(true);

		if (entryFields.email === "" || !entryFields.name || !entryFields.message) {
			setStateMessage("Please complete all fields before submitting form");
		}
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				"#form",
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				() => {
					setStateMessage("Message sent!");
					setIsSubmitting(false);
					setEntryFields({
						name: "",
						email: "",
						message: "",
					});
					setTimeout(() => {
						setStateMessage("");
					}, 5000);
				},
				(error) => {
					setStateMessage("Something went wrong, please try again later");
					setIsSubmitting(false);
					setTimeout(() => {
						setStateMessage("");
					}, 5000);
				}
			);
		setStateMessage("");
	};
	return (
		<div className="Contact">
			<h1>Get in touch</h1>
			<p>
				I can't come to the phone right now, but leave a name and detailed
				message and I'll get back to you as soon as possible!
			</p>
			<form id="form" onSubmit={sendEmail}>
				<div className="field">
					<input
						type="text"
						name="user_name"
						placeholder="Name"
						value={entryFields.name}
						onChange={(e) =>
							setEntryFields({
								name: e.target.value,
								email: entryFields.email,
								message: entryFields.message,
							})
						}
					/>
				</div>
				<div className="field">
					<input
						type="email"
						placeholder="Email"
						name="user_email"
						value={entryFields.email}
						onChange={(e) =>
							setEntryFields({
								name: entryFields.name,
								email: e.target.value,
								message: entryFields.message,
							})
						}
					/>
				</div>
				<div className="field__message">
					<textarea
						name="message"
						placeholder="Message"
						value={entryFields.message}
						onChange={(e) =>
							setEntryFields({
								name: entryFields.name,
								email: entryFields.email,
								message: e.target.value,
							})
						}
					/>
				</div>
				<input
					className="submit_button"
					type="submit"
					value="Send"
					disabled={
						isSubmitting ||
						!entryFields.name ||
						!entryFields.email ||
						!entryFields.message
					}
				/>
				{stateMessage && <p>{stateMessage}</p>}
			</form>
		</div>
	);
}

export default Contact;

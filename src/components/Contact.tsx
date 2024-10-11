import { FormEvent } from "react";

import "../styling/contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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

		// Clears the form after sending the email
		// e.target.reset();
		setStateMessage("");
	};
	return (
		<div className="Contact">
			<h1>Get in touch</h1>

			<form id="form" onSubmit={sendEmail}>
				<label>Name</label>
				<input
					type="text"
					name="user_name"
					value={entryFields.name}
					onChange={(e) =>
						setEntryFields({
							name: e.target.value,
							email: entryFields.email,
							message: entryFields.message,
						})
					}
				/>
				<label>Email</label>
				<input
					type="email"
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
				<label>Message</label>
				<textarea
					name="message"
					value={entryFields.message}
					onChange={(e) =>
						setEntryFields({
							name: entryFields.name,
							email: entryFields.email,
							message: e.target.value,
						})
					}
				/>
				<input type="submit" value="Send" disabled={isSubmitting} />
				{stateMessage && <p>{stateMessage}</p>}
			</form>
		</div>
	);
}

export default Contact;

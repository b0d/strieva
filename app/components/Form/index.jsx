"use client";
import "./index.css";
import { useMemo, useState, useCallback } from "react";

const TELEGRAM_ENDPOINT = process.env.NEXT_PUBLIC_TELEGRAM_FUNCTION_URL || "";
const PHONE_PATTERN = /^[\d\s\-\+\(\)]+$/;

function isValidPhone(phone) {
	if (!phone || phone.length < 10) return false;
	return PHONE_PATTERN.test(phone);
}

export default function Form({ messages = {} }) {
	const homeCopy = messages.HomePage || {};
	const formCopy = messages.form || {};

	const [tel, setTel] = useState("");
	const [status, setStatus] = useState({ type: null, message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const endpoint = formCopy.endpoint || TELEGRAM_ENDPOINT;
	const placeholder =
		formCopy.placeholder || homeCopy.placeholder || "+38 097 017 37 37";

	const buttonLabel = useMemo(() => {
		if (isSubmitting) {
			return formCopy.buttonPending || homeCopy.submit || "Sending...";
		}

		return formCopy.button || homeCopy.submit || "Send";
	}, [formCopy.button, formCopy.buttonPending, homeCopy.submit, isSubmitting]);

	const setFeedback = useCallback((type, message) => {
		setStatus({
			type,
			message,
		});
	}, []);

	const handleSubmit = useCallback(async (e) => {
		e.preventDefault();

		const trimmedTel = tel.trim();

		if (!trimmedTel) {
			setFeedback("error", formCopy.validation || homeCopy.enterYourNumber);
			return;
		}

		if (!isValidPhone(trimmedTel)) {
			setFeedback("error", formCopy.invalidPhone || "Please enter a valid phone number.");
			return;
		}

		if (!endpoint) {
			setFeedback("error", formCopy.endpointMissing || "Service unavailable");
			return;
		}

		try {
			setIsSubmitting(true);
			setFeedback(null, "");

			const response = await fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ tel: trimmedTel }),
			});

			const result = await response.json().catch(() => ({}));

			if (response.ok && result.success) {
				setFeedback(
					"success",
					formCopy.success || "Thank you! We will reach out shortly.",
				);
				setTel("");
				return;
			}

			throw new Error(
				result?.message ||
					formCopy.error ||
					"Could not deliver your request. Please try again.",
			);
		} catch (error) {
			setFeedback("error", error.message);
		} finally {
			setIsSubmitting(false);
		}
	}, [tel, endpoint, formCopy, homeCopy, setFeedback]);

	return (
		<aside className='form-block col-12 col-sm-12 col-lg-10'>
			<form
				method='POST'
				onSubmit={handleSubmit}
				className='d-flex justify-content-center flex-column'
				noValidate
			>
				<div className='d-flex flex-column'>
					<label htmlFor='tel' className='mb-1'>
						{homeCopy.enterYourNumber}
					</label>
					<input
						type='tel'
						name='tel'
						id='tel'
						required
						placeholder={placeholder}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
						aria-label={homeCopy.enterYourNumber}
						aria-required='true'
						aria-invalid={status.type === 'error' ? 'true' : 'false'}
						disabled={isSubmitting}
					/>
				</div>

				<button
					type='submit'
					className='justify-content-center'
					disabled={isSubmitting}
					aria-label={buttonLabel}
				>
					{buttonLabel}
				</button>
			</form>

			{status.message && (
				<div className='col-12 text-center' aria-live='polite' role={status.type === 'error' ? 'alert' : 'status'}>
					<br />
					<p className={status.type === "error" ? "text-danger" : "text-success"}>
						{status.message}
					</p>
				</div>
			)}
		</aside>
	);
}

"use client";
import "./index.css";
import { useState, useEffect } from "react";

export default function Form({ lng, content }) {
	const [tel, setTel] = useState("");
	const [status, setStatus] = useState("");
	const [formData, setFormData] = useState({
		name: "",
	});
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	const handleInput = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		setFormData((prevState) => ({
			...prevState,
			[fieldName]: fieldValue,
		}));
	};

	const submitForm = (e) => {
		e.preventDefault();

		const formURL = e.target.action;
		const data = new FormData();

		Object.entries(formData).forEach(([key, value]) => {
			data.append(key, value);
		});

		fetch(formURL, {
			method: "POST",
			body: data,
			headers: {
				accept: "application/json",
			},
		}).then(() => {
			setFormData({
				name: "",
			});
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!tel.trim()) {
			setStatus("Будь ласка, введіть номер телефону");
			return;
		}

		try {
			const response = await fetch("/api/telegram/send-message", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tel,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setStatus("Повідомлення надіслано!");
				setTel("");
			} else {
				throw new Error(result.error || "Помилка відправки!");
			}
		} catch (error) {
			setStatus(`Помилка: ${error.message}`);
		}
	};

	return (
		<aside className='form-block col-8'>
			{isClient && (
				<form
					method='POST'
					onSubmit={handleSubmit}
					className='d-flex justify-content-center flex-column'
				>
					<div className='d-flex flex-column'>
						<label className='mb-1'>Введіть ваш номер телефону:</label>
						<input
							type='tel'
							name='tel'
							id='tel'
							required
							placeholder='+38 096 033 66 36'
							value={tel}
							onChange={(e) => setTel(e.target.value)}
						/>
					</div>

					<button type='submit' className='justify-content-center'>
						Надіслати
					</button>
				</form>
			)}
			<div className='col-12 text-center'>
				<br />
				{status && <p>{status}</p>}
			</div>
		</aside>
	);
}

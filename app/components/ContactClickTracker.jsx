"use client";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const CONTACT_METHODS = [
	["tel:", "phone"],
	["https://wa.me/", "whatsapp"],
	["https://t.me/", "telegram"],
	["viber:", "viber"],
];

// Один слухач на документ: кліки по телефону та месенджерах ідуть у GA4 як contact_click
export default function ContactClickTracker() {
	useEffect(() => {
		function handleClick(e) {
			const href = e.target.closest?.("a[href]")?.getAttribute("href") || "";
			const method = CONTACT_METHODS.find(([prefix]) => href.startsWith(prefix));
			if (!method) return;

			sendGAEvent("event", "contact_click", { method: method[1] });
		}

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	return null;
}

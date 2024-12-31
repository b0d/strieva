"use client";
import "./index.css";
import { useState, useEffect } from "react";

export default function TopMenu({ lng }) {
	const [hamburger, setHamburger] = useState(false);
	const [isClient, setIsClient] = useState(false);
	function handleClick() {
		setHamburger(!hamburger);
	}
	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<nav
			className='d-flex flex-wrap p-3 align-items-center'
			aria-labelledby='mainnavheader'
		>
			{isClient && (
				<button className='mainmenu-hamburger' onClick={handleClick}>
					☰
				</button>
			)}
			<ul
				className={`mainmenu w-100 p-0 m-0 list-unstyled  flex-wrap justify-content-between ${
					hamburger && isClient ? "menu-open" : ""
				}`}
				role='menubar'
				aria-label='functions'
				id='appmenu'
			>
				<li className='m-2'>
					<a
						href='#price'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Ціни
					</a>
				</li>
				<li className='m-2'>
					<a
						href='#whatwehave'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Зручності
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#photos'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Фото
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#howtofind'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Як доїхати
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#ruels'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Поширені питання
					</a>
				</li>
			</ul>
		</nav>
	);
}

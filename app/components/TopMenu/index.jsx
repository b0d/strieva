"use client";
import "./index.css";
import { useState } from "react";

export default function TopMenu({ lng, messages }) {
	const [hamburger, setHamburger] = useState(false);
	function handleClick() {
		setHamburger(!hamburger);
	}

	const t = messages?.HomePage;
	return (
		<nav
			className='d-flex flex-wrap p-3 align-items-center'
			aria-label={t.menuLabel}
		>
			<button
				type='button'
				className='mainmenu-hamburger'
				onClick={handleClick}
				aria-label={t.menuLabel}
				aria-expanded={hamburger}
				aria-controls='appmenu'
			>
				☰
			</button>
			<ul
				className={`mainmenu w-100 p-0 m-0 list-unstyled  flex-wrap justify-content-between ${
					hamburger ? "menu-open" : ""
				}`}
				id='appmenu'
			>
				<li className='m-2'>
					<a
						href='#price'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu1}
					</a>
				</li>
				<li className='m-2'>
					<a
						href='#whatwehave'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu2}
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#photos'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu3}
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#howtofind'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu4}
					</a>
				</li>

				<li className='m-2'>
					<a
						href='#ruels'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu5}
					</a>
				</li>
			</ul>
		</nav>
	);
}

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
		<nav className='header-nav' aria-label={t.menuLabel}>
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
				className={`mainmenu list-unstyled ${hamburger ? "menu-open" : ""}`}
				id='appmenu'
			>
				<li>
					<a
						href='#price'
						className='d-flex border-light rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu1}
					</a>
				</li>
				<li>
					<a
						href='#whatwehave'
						className='d-flex border-light rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu2}
					</a>
				</li>

				<li>
					<a
						href='#photos'
						className='d-flex border-light rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu3}
					</a>
				</li>

				<li>
					<a
						href='#howtofind'
						className='d-flex border-light rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu4}
					</a>
				</li>

				<li>
					<a
						href='#ruels'
						className='d-flex border-light rounded-pill'
						onClick={() => setHamburger(false)}
					>
						{t.menu5}
					</a>
				</li>
			</ul>
		</nav>
	);
}

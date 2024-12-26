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
						href='/price'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Ціни та Бронювання
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/price'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Що входить у вартість
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/news'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Фотографії
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/holidays'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Відгуки
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/ruels'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Як доїхати
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/ruels'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Сертифікати та Акції
					</a>
				</li>
				<li className='m-2'>
					<a
						href='/ruels'
						className='d-flex border-light px-3 rounded-pill'
						onClick={() => setHamburger(false)}
					>
						Правила проживиння
					</a>
				</li>
			</ul>
		</nav>
	);
}

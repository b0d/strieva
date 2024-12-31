import "./index.css";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import FireplaceOutlinedIcon from "@mui/icons-material/FireplaceOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import HotTubOutlinedIcon from "@mui/icons-material/HotTubOutlined";
import Form from "../Form";
import Image from "next/image";
export default function WhatWeHave({ lng }) {
	return (
		<section className='container' id='whatwehave'>
			<div className='col-12 d-flex flex-row flex-wrap justify-content-between '>
				<div className='col-12 py-3'>
					<h3>Оренда будинку з чаном</h3>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<PlaceOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>
							Зручне розташування біля м. Звягель
						</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<CottageOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>
							Сучасний, комфортний будинок
						</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<ParkOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>
							Затишна та зелена ділянка біля річки
						</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<DeckOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>
							Облаштована усим необхідним територія
						</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<HotTubOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>
							Закарпатський чан, костерова та гриль зона
						</figcaption>
					</figure>
				</div>
			</div>
			<div className='col-12 d-flex flex-row flex-wrap what-we-have py-3 justify-content-between'>
				<div className='col-12 col-lg-6 px-4'>
					<Image
						src='/imgs/rent-house-Strieva.webp'
						alt='Афрейм будинок Стрієва'
						width={520}
						height={680}
					/>
				</div>
				<div className='col-12 col-lg-6'>
					<p>
						Головна особливість — це чан, розташований на терасі, але також у
						будиночку на вас чекає:
					</p>
					<ul>
						<li>Постіль, рушники, капці, халати для всіх гостей;</li>
						<li>Спеції, чай, кава, цукор, олія, вода з фільтра;</li>
						<li>Повний набір посуду, келихи, плита та холодильник;</li>
						<li>Телевізор, кондиціонер;</li>
						<li>Необмежене користування чаном на вашій терасі та дрова;</li>
						<li>Косторова, гриль-зона та все необхідне для гриля; </li>
						<li>
							Особистe автономне енергоживлення у разі відсутності світла;
						</li>
						<li>
							Інтернет енергонезалежний
							<small>
								(у разі відсутності світла більше ніж 5 хвилин, просимо
								повідомити адміністратора)
							</small>
							.
						</li>
						<li>Час заїзду 15:00 - Виїзд 11:00</li>
					</ul>
					<div className='col-6 col-md-3 offset-md-3 p-1'>
						<Image
							src='/imgs/feedbacks.webp'
							alt='Відгуки ЕкоХаус Стрієва'
							width={186}
							height={96}
							className='border border-light rounded'
						/>
					</div>
					<div className='col-12 py-5'>
						<div className='like-header'>Забронюй будинок прямо зараз!</div>
						<div className='col-12'>
							<Form />
							<p>
								Поспішайте! Подобова оренда будинку користується високим
								попитом, особливо у святкові та вихідні дні.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

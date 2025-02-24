import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img
						src='https://img.icons8.com/carbon_copy/512/FD7E14/tailwind_css.png'
						alt='logo'
						width={100}
						height={29}
						className='m-0 p-0 w-[70px] h-[60px]'
					/>
				</a>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='font-montserrat leading-normal text-lg text-slate-gray'>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
					<a href='/'>Sign in</a>
					<span>/</span>
					<a href='/'>Explore now</a>
				</div>
				<div className='hidden max-lg:block'>
					<img src={hamburger} alt='hamburger icon' width={25} height={25} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;

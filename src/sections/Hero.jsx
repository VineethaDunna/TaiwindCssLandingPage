import { statistics } from "../constants";
import { Button } from "../components";

import { arrowRight } from "../assets/icons";

const Hero = () => {
	return (
		<section
			id='home'
			className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
			<div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
				<p className='text-xl font-montserrat text-coral-red'>
					Our Summer Collections
				</p>

				<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
						The Latest Arrival
					</span>
					<br />
					<span className='text-coral-red inline-block mt-3'>Tailwind CSS</span>
					<br /> Books
				</h1>
				<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
					Discover cutting-edge Tailwind CSS guides, packed with modern design
					techniques, efficiency, and innovation for developers of all levels.
				</p>

				<Button label='Shop now' iconURL={arrowRight} />

				<div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
							<p className='leading-7 font-montserrat text-slate-gray'>
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
				<img
					src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/ae7fae11-2c3c-4c69-8ae5-65136f4b468d.__CR0,0,970,600_PT0_SX970_V1___.jpg'
					alt='Tailwind CSS book collection'
					width={610}
					height={602}
					className='object-contain relative  z-10'
				/>
			</div>
		</section>
	);
};

export default Hero;

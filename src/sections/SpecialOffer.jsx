import { arrowRight } from "../assets/icons";

import { Button } from "../components";

const SpecialOffer = () => {
	return (
		<section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
			<div className='flex-1'>
				<img
					src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/ae7fae11-2c3c-4c69-8ae5-65136f4b468d.__CR0,0,970,600_PT0_SX970_V1___.jpg'
					alt='book Promotion'
					width={773}
					height={687}
					className='object-contain w-full'
				/>
			</div>
			<div className='flex flex-1 flex-col'>
				<h2 className='text-4xl font-palanquin font-bold'>
					<span className='text-coral-red'>Special </span>
					Offer
				</h2>
				<p className='mt-4 info-text'>
					Embark on a shopping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<p className='mt-6 info-text'>
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className='mt-11 flex flex-wrap gap-4'>
					<Button label='Shop now' iconURL={arrowRight} />
					<Button
						label='Learn more'
						backgroundColor='bg-white'
						borderColor='border-slate-gray'
						textColor='text-slate-gray'
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;

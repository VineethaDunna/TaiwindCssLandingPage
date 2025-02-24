import { Button } from "../components";

const SuperQuality = () => {
	return (
		<section
			id='about-us'
			className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
			<div className='flex flex-1 flex-col'>
				<h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
					Master
					<span className='text-coral-red'>Tailwind</span>
					<span className='text-coral-red'> CSS </span> with Ease
				</h2>
				<p className='mt-4 lg:max-w-lg info-text'>
					Unlock the power of Tailwind CSS with expertly crafted guides designed
					to enhance your workflow. Build modern, responsive designs
					effortlessly with precision and efficiency.
				</p>
				<p className='mt-6 lg:max-w-lg info-text'>
					Our commitment to clarity and excellence ensures your success.
					<br />
					📖 Start Learning
				</p>
				<div className='mt-11'>
					<Button label='View details' />
				</div>
			</div>

			<div className='flex-1 flex justify-center items-center'>
				<img
					src='https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/fe/49/a7/fe49a723-d619-f1ca-ed66-79d265868022/9781098140991.jpg/1200x1200wz.jpg'
					alt='product detail'
					width={570}
					height={522}
					className='object-contain'
				/>
			</div>
		</section>
	);
};

export default SuperQuality;

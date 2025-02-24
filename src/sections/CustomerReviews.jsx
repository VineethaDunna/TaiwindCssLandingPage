import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
	return (
		<section className='max-container'>
			<h3 className='font-palanquin text-center text-4xl font-bold'>
				What Our
				<span className='text-coral-red'> Readers </span>
				Say?
			</h3>
			<p className='m-auto mt-4 max-w-lg  text-center info-text'>
				Discover authentic stories from our satisfied readers about their
				transformative experiences with Tailwind CSS books. 🚀📚
			</p>

			<div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
				{reviews.map((review, index) => (
					<ReviewCard
						key={index}
						imgURL={review.imgURL}
						customerName={review.customerName}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;

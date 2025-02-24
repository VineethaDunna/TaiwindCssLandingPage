import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from "../assets/icons";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about-us", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
	{ value: "1k+", label: "Bestselling Titles" },
	{ value: "500+", label: "Trusted Publishers" },
	{ value: "250k+", label: "Happy Readers" },
];

export const products = [
	{
		imgURL:
			"https://m.media-amazon.com/images/S/aplus-media/kdp/b784294a-b5f9-463e-9fd6-c8e5a9a9486b.__CR20,0,760,760_PT0_SX300_V1___.jpg",
		name: "Tailwind CSS Mastery",
		price: "₹1,699",
	},
	{
		imgURL:
			"https://is1-ssl.mzstatic.com/image/thumb/Publication116/v4/fe/49/a7/fe49a723-d619-f1ca-ed66-79d265868022/9781098140991.jpg/1200x1200wz.jpg",
		name: "Tailwind CSS in Action",
		price: "₹1,899",
	},
	{
		imgURL:
			"https://images-na.ssl-images-amazon.com/images/I/71anm5gu60L._AC_UL600_SR600,600_.jpg",
		name: "The Complete Guide to Tailwind CSS",
		price: "₹1,999",
	},
	{
		imgURL:
			"https://m.media-amazon.com/images/I/710ZPr65DfL._UF1000,1000_QL80_.jpg",
		name: "Tailwind CSS for Beginners",
		price: "₹1,499",
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: "Free shipping",
		subtext: "Enjoy seamless shopping with our complimentary shipping service.",
	},
	{
		imgURL: shieldTick,
		label: "Secure Payment",
		subtext:
			"Experience worry-free transactions with our secure payment options.",
	},
	{
		imgURL: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
];

export const reviews = [
	{
		imgURL:
			"https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
		customerName: "Lalitha",
		rating: 5.0,
		feedback:
			"A must-have for anyone looking to master Tailwind CSS. Well-explained concepts!",
	},
	{
		imgURL:
			"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
		customerName: "Kiran",
		rating: 4.8,
		feedback:
			"Extremely useful book. Helped me build responsive designs much faster!",
	},
];

export const footerLinks = [
	{
		title: "Books",
		links: [
			{ name: "Mastering Tailwind", link: "/" },
			{ name: "Tailwind in Action", link: "/" },
			{ name: "Complete Guide", link: "/" },
			{ name: "Tailwind for Beginners", link: "/" },
			{ name: "Advanced Tailwind", link: "/" },
			{ name: "Practical Tailwind", link: "/" },
		],
	},
	{
		title: "Help",
		links: [
			{ name: "About us", link: "/" },
			{ name: "FAQs", link: "/" },
			{ name: "How it works", link: "/" },
			{ name: "Privacy policy", link: "/" },
			{ name: "Payment policy", link: "/" },
		],
	},
	{
		title: "Get in touch",
		links: [
			{
				name: "support@tailwindbooks.com",
				link: "mailto:support@tailwindbooks.com",
			},
			{ name: "+1234567890", link: "tel:+1234567890" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo" },
];

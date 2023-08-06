import Card from './Card';
import { useEffect, useState, useRef } from 'react';

const List = ({ list = [], type, gap }) => {
	const length = list.length;
	const partLength = Math.ceil(length / 3);
	const result = [];

	const ref = useRef(null);
	const ref2 = useRef(null);

	let scrollY = 0;

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window !== 'undefined' && window.innerWidth >= 1025) {
				const multiplier = window.scrollY - scrollY > 0 ? 1 : -1;
				// const y = window.scrollY;
				console.log(`translateY(${5 * (window.scrollY - scrollY)}rem)`);
				ref.current.style.transform = `translateY(${0.5 * (window.scrollY - scrollY)}rem)`;
				ref2.current.style.transform = `translateY(${0.5 * (window.scrollY - scrollY)}rem)`;
				scrollY = window.scrollY;
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	for (let i = 0; i < 3; i++) {
		result.push(list.slice(i * partLength, (i + 1) * partLength));
	}

	return (
		<>
			<div className='flex lg:flex-row flex-col gap-4 lg:gap-10'>
				<div
					className={`flex flex-col transition-transform duration-1000 ${gap ? 'pt-44 lg:mt-0' : ''}`}
					ref={ref}>
					{result[0].map((data) => (
						<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
							{data.name}
						</Card>
					))}
				</div>
				<div className={typeof window !== 'undefined' && window.innerWidth < 1280 ? 'col1' : ''}>
					<div className='flex flex-col transition-transform duration-1000'>
						{result[1].map((data) => (
							<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
								{data.name}
							</Card>
						))}
					</div>
				</div>
				<div className={typeof window !== 'undefined' && window.innerWidth < 1280 ? 'col2' : ''}>
					<div
						className={`flex flex-col transition-transform duration-1000 ${gap ? 'pt-44 lg:mt-0' : ''}`}
						ref={ref2}>
						{result[2].map((data) => (
							<Card type={type} content={data.content} id={data.id} key={data.id} image={data.image}>
								{data.name}
							</Card>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default List;

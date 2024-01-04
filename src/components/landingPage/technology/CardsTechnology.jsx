import img1 from '@/assets/Img/tegImg1.png';
import img2 from '@/assets/Img/tegImg2.png';
import img3 from '@/assets/Img/tegImg3.png';
import img4 from '@/assets/Img/tegImg4.png';
import img5 from '@/assets/Img/tegImg5.png';
import img6 from '@/assets/Img/tegImg6.png';
import img7 from '@/assets/Img/tegImg7.png';
import img8 from '@/assets/Img/tegImg8.png';
import img9 from '@/assets/Img/tegImg9.png';
import img10 from '@/assets/Img/tegImg10.png';
import { Container, styled } from '@mui/material';
import { IndividualCard } from '@/components/blockchain/cards/IndividualCard';

export const CardsTechnology = () => {
	const img = [
		{
			img: img1,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img2,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img3,
			width: '4.60819rem',
			height: '5.0625rem',
		},
		{
			img: img4,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img5,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img6,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img7,
			width: '3.0835rem',
			height: '5.0625rem',
		},
		{
			img: img8,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img9,
			width: '5.0625rem',
			height: '5.0625rem',
		},
		{
			img: img10,
			width: '5.0625rem',
			height: '5.0625rem',
		},
	];
	const ContainerStyle = styled(Container)({
		display: 'flex',
		alignContent: 'flex-start',
		justifyContent: 'center',
		gap: '2rem',
		flexWrap: 'wrap',
		flexShrink: 0,
	});
	return (
		<ContainerStyle
			sx={{
				width: {
					xs: '18.875rem',
					sm: '20.875rem',
					md: '38.875rem',
					lg: '58.875rem',
				},
				alignItems: {
					xs: 'center',
					sm: 'flex-start',
				},
			}}
		>
			{img.map((image) => {
				const { img, width, height } = image;
				return <IndividualCard image={img} width={width} height={height} />;
			})}
		</ContainerStyle>
	);
};

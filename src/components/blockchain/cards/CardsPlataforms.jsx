import { Container, styled } from '@mui/material';
import img1 from '@/assets/Img/svg/image1.svg';
import img2 from '@/assets/Img/svg/image2.svg';
import img3 from '@/assets/Img/svg/image3.svg';
import img4 from '@/assets/Img/svg/image4.svg';
import img5 from '@/assets/Img/svg/image5.svg';
import img6 from '@/assets/Img/svg/image6.svg';
import img7 from '@/assets/Img/svg/image7.svg';
import img8 from '@/assets/Img/svg/image8.svg';
import img9 from '@/assets/Img/svg/image9.svg';
import img10 from '@/assets/Img/svg/image10.svg';
import { IndividualCard } from './IndividualCard.jsx';

export default function CardsPlataforms() {
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
	const ConteinerStyle = styled(Container)({
		display: 'flex',
		alignContent: 'flex-start',
		justifyContent: 'center',
		gap: '2rem',
		flexWrap: 'wrap',
		flexShrink: 0,
	});
	return (
		<ConteinerStyle
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
		</ConteinerStyle>
	);
}

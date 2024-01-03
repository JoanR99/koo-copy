import { Box, styled } from '@mui/material';

const CardContainer = styled(Box)({
	display: 'flex',
	alignItems:'center',
	alignContent:'center',
	justifyContent:'center',
	borderRadius: '0.625rem',
	background: '#ECE9E8',
	boxShadow:
		'0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.10), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.12), 0px 100px 80px 0px rgba(0, 0, 0, 0.16)',
	width: '260px',
	height: '327px',
	padding: '3rem 0',
});

export default function CardsStack({ img }) {
	return (
		<CardContainer>
			<img
				src={img}
				alt="Technology Stack"
				style={{ maxWidth: '100%', height: '100%' }}
			/>
		</CardContainer>
	);
}

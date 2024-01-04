import { Box, Container, Typography, styled } from '@mui/material';
import { ContainerCard } from './ContainerCardCaseStudies';

const ContainerStyle = styled(Container)({
	marginTop: '4rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '3rem',
	maxWidth: '100vw',
	width: '100%',
});
const typographyStyle = {
	fontFamily: 'Inter',
	fontSize: '2rem',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: 'normal',
	width: '100%',
	textAlign: 'center',
};

export const CaseStudies = (props) => {
	const title = props.title;

	return (
		<ContainerStyle>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant="h2" sx={typographyStyle}>
					{title}
				</Typography>
				<Typography
					variant="h7"
					sx={{
						fontFamily: 'Inter',
						fontSize: '1rem',
						fontStyle: 'normal',
						fontWeight: 400,
						lineHeight: 'normal',
						textAlign: 'center',
					}}
				>
					Real-world success stories revealed- Dive into our successful
					blockchain projects and case studies.
				</Typography>
			</Box>
			<ContainerCard />
		</ContainerStyle>
	);
};

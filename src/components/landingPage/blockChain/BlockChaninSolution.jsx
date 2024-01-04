import { Box, Container, Typography, styled } from '@mui/material';
import { ContainerBlockChain } from './ContainerBlockChain';

export const BlockChainSolution = (props) => {
	const title = props.title;
	const containerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '3.625rem',
		maxWidth: '100vw',
	};
	const TypographiyStyle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		fontFamily: 'Inter',
		fontSize: '2rem',
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: 'normal',
	}));
	return (
		<Container sx={containerStyle}>
			<Box
				sx={{
					pt: '80px',
				}}
			>
				<TypographiyStyle variant="h2">{title}</TypographiyStyle>
			</Box>
			<ContainerBlockChain />
		</Container>
	);
};

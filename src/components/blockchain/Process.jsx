import { Box, Container, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import CardsProcess from './cards/CardsProcess';
import ProcessImg from '@/assets/Img/svg/numbers.svg';

export default function Process() {
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Box
			sx={{
				bgcolor: '#303030',
				pt: '40px',
				pb: '80px',
			}}
		>
			<Container>
				<Typography
					variant="h1"
					sx={{
						color: '#EAE8E8',
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					Blockchain App Development Process
				</Typography>
				<Typography
					variant="h5"
					sx={{
						color: '#EAE8E8',
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '3rem',
					}}
				>
					Phases
				</Typography>
				<Box
					sx={{
						marginTop: '2rem',
						display: 'flex',
						flexDirection: {
							xs: 'column',
							lg: 'row',
						},
						gap: '1rem',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							overflowX: 'hidden',
							'& > *': {
								marginBottom: {
									xs: '1rem',
									md: '7rem',
								},
							},
						}}
					>
						<CardsProcess
							title="Requirement Gathering"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Requirement Gathering"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Requirement Gathering"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Requirement Gathering"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Requirement Gathering"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
					</Box>
					{!isMobile && (
						<Box
							sx={{
								width: {
									xs: '100%',
									lg: '25.3125rem',
								},
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								mx: 'auto',
							}}
						>
							<img src={ProcessImg} alt="Process" />
						</Box>
					)}

					<Box
						sx={{
							overflowX: 'hidden',
							'& > *': {
								margin: {
									xs: '0 0 1rem 0',
									lg: '7rem 0 0 0',
								},
							},
						}}
					>
						<CardsProcess
							title="Blockchain Platform Selection"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Blockchain Platform Selection"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Blockchain Platform Selection"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Blockchain Platform Selection"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
						<CardsProcess
							title="Blockchain Platform Selection"
							description="Meetings with stakeholders to gather detailed functional and non-functional requirements."
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}

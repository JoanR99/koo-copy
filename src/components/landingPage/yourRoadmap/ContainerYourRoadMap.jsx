import { Box, Typography, styled } from '@mui/material';

export const ContainerYourRoadMap = () => {
	const boxStyle = {
		display: 'flex',
		width: '5.6875rem',
		height: '5.6875rem',
		padding: '0.5rem',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '0.5rem',
		flexShrink: 0,
		borderRadius: '1.25rem',
		background: '#C02327',
		boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.4)',
	};
	const TypographyStyle = styled(Typography)({
		component: 'span',
		color: '#EAE8E8',
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
	});
	const Box1 = styled(Box)({
		display: 'flex',
		flexWrap: 'wrap',
		height: '21.5rem',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '2rem',
	});
	const Box2 = styled(Box)({
		display: 'flex',
		flexWrap: 'wrap',
		height: '21.5rem',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: '2rem',
	});
	const TypographyTitle = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		textAlign: 'center',
		fontFamily: 'Inter',
		fontSize: '1.25rem',
		fontStyle: 'normal',
		fontWeight: 700,
		lineHeight: 'normal',
	}));
	const TypographyLorem = styled(Typography)(({ theme }) => ({
		color: theme.palette.text.primary,
		textAlign: 'center',
		fontFamily: 'Inter',
		fontSize: '0.875rem',
		fontStyle: 'normal',
		fontWeight: 400,
		lineHeight: 'normal',
	}));
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: {
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(5, 1fr)',
				},
				// alignItems: 'flex-start',
				alignItems: {
					xs: 'center',
					sm: 'flex-start',
				},
				justifyContent: 'center',
				justifyItems: {
					xs: 'center',
					md: 'flex-start',
				},
				gap: '2.5rem',
				width: '100%',
			}}
		>
			{/* BOX 1 */}

			<Box1
				sx={{
					width: {
						xs: '90%',
						md: '8rem',
						lg: '12rem',
					},
					height: {
						xs: 'auto',
						md: '21.5rem',
					},
				}}
			>
				<Box sx={boxStyle}>
					<TypographyStyle
						variant="h1"
						sx={{
							fontSize: {
								xs: '3rem',
								sm: '3rem',
								md: '3rem',
								lg: '3rem',
							},
						}}
					>
						1
					</TypographyStyle>
				</Box>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '1.075rem',
							sm: '1.5',
							lg: '1.075rem',
						},
					}}
				>
					Evaluate Blockchain Opportunities and Prototype
				</TypographyTitle>
				<TypographyLorem
					sx={{
						fontSize: {
							lg: '1rem',
						},
					}}
				>
					Evaluate blockchain opportunities with our Design Thinking-based
					evaluation framework and build prototypes.
				</TypographyLorem>
			</Box1>

			{/* BOX 2 */}

			<Box2
				sx={{
					width: {
						xs: '90%',

						md: '8rem',
						lg: '12rem',
					},

					justifyContent: {
						xs: 'center',
						sm: 'flex-end',
						md: 'flex-end',
						lg: 'flex-end',
					},

					height: {
						xs: 'auto',
						md: '24.5rem',
					},
				}}
				// xs={{
				//     justifyContent: 'flex-start',
				// }}
				// sm={{
				//     justifyContent: 'flex-start',
				// }}
			>
				<Box sx={boxStyle}>
					<TypographyStyle
						variant="h1"
						sx={{
							fontSize: {
								xs: '3rem',
								sm: '3rem',
								md: '3rem',
								lg: '3rem',
							},
						}}
					>
						2
					</TypographyStyle>
				</Box>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '1.075rem',
							sm: '1.5',
							lg: '1.075rem',
						},
					}}
				>
					Pilot Blockchain Use-case and Assets Solution
				</TypographyTitle>
				<TypographyLorem
					sx={{
						fontSize: {
							lg: '1rem',
						},
					}}
				>
					Brainstorm, design and implement proposed blockchain use cases. Pilot
					with client and assets the solution.
				</TypographyLorem>
			</Box2>

			{/* BOX 3 */}

			<Box1
				sx={{
					width: {
						xs: '90%',

						md: '8rem',
						lg: '12rem',
					},
					height: {
						xs: 'auto',
						md: '21.5rem',
					},
				}}
			>
				<Box sx={boxStyle}>
					<TypographyStyle
						variant="h1"
						sx={{
							fontSize: {
								xs: '3rem',
								sm: '3rem',
								md: '3rem',
								lg: '3rem',
							},
						}}
					>
						3
					</TypographyStyle>
				</Box>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '1.075rem',
							sm: '1.5',
							lg: '1.075rem',
						},
					}}
				>
					Execute and TestBlockchain Solution
				</TypographyTitle>
				<TypographyLorem
					sx={{
						fontSize: {
							lg: '1rem',
						},
					}}
				>
					Execute the blockchain solution with technology and process
					limitations on the chosen platform. Test for performance, security and
					scale.
				</TypographyLorem>
			</Box1>

			{/* BOX 4 */}

			<Box2
				sx={{
					width: {
						xs: '90%',

						md: '8rem',
						lg: '12rem',
					},

					justifyContent: {
						xs: 'center',
						ms: 'flex-end',
						md: 'flex-end',
						lg: 'flex-end',
					},
					height: {
						xs: 'auto',
						md: '24.5rem',
					},
				}}
			>
				<Box sx={boxStyle}>
					<TypographyStyle
						variant="h1"
						sx={{
							fontSize: {
								xs: '3rem',
								sm: '3rem',
								md: '3rem',
								lg: '3rem',
							},
						}}
					>
						4
					</TypographyStyle>
				</Box>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '1.075rem',
							sm: '1.5',
							lg: '1.075rem',
						},
					}}
				>
					Integrate Partners and Network
				</TypographyTitle>
				<TypographyLorem
					sx={{
						fontSize: {
							lg: '1rem',
						},
					}}
				>
					Onboard partner systems and integrate with IT on blockchain network.
					Enable consensus and governance processes.
				</TypographyLorem>
			</Box2>

			{/* BOX 5 */}

			<Box1
				sx={{
					width: {
						xs: '90%',
						md: '8rem',
						lg: '12rem',
					},
					height: {
						xs: 'auto',
						md: '21.5rem',
					},
				}}
			>
				<Box sx={boxStyle}>
					<TypographyStyle
						variant="h1"
						sx={{
							fontSize: {
								xs: '3rem',
								sm: '3rem',
								md: '3rem',
								lg: '3rem',
							},
						}}
					>
						5
					</TypographyStyle>
				</Box>
				<TypographyTitle
					sx={{
						fontSize: {
							xs: '1.075rem',
							sm: '1.5',
							lg: '1.075rem',
						},
					}}
				>
					Implement and Operate Blockchain Network
				</TypographyTitle>
				<TypographyLorem
					sx={{
						fontSize: {
							lg: '1rem',
						},
					}}
				>
					Implement blockchain solution across the network. Authorize updates
					and changes.
				</TypographyLorem>
			</Box1>
		</Box>
	);
};

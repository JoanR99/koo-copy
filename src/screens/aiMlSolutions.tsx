import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonSecondary from '@/components/buttons/buttonSecondary';
import AiOfferingCard from '@/components/cards/aiOfferingCard';
import {
	aiFeatures,
	aiModels,
	aiOfferings,
	aiSolutions,
	aiTechnologies,
	facts,
} from '@/data/aiMlSolutionsData';
import AiFactCard from '@/components/cards/aiFactCard';
import AiFeatureCard from '@/components/cards/aiFeatureCard';
import AiTechnologyCard from '@/components/cards/aiTechnologyCard';
import TechStackSevenCard from '@/components/cards/techStackSevenCard';
import TechStackThreeCard from '@/components/cards/techStackThreeCard';
import TechStackFourCard from '@/components/cards/techStackFourCard';
import AiSolutionsCard from '@/components/cards/aiSolutionsCard';
import { styled, useTheme } from '@mui/material';
import Stick from '@/assets/Img/svg/stick.svg';
import StickDark from '@/assets/Img/svg/stick_dark.svg';
import Card from '@mui/material/Card';
import PlayArrow from '@/assets/Img/svg/play_arrow.svg';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import Check from '@/assets/Img/Check.png';
import { UnstyledLink } from '@/components/buttons/unstyledLink';
import AiBackgroundImg from '@/assets/Img/ai_background.jpeg';
import ReactCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RightArrow from '@/assets/Img/svg/right_arrow.svg';
import LeftArrow from '@/assets/Img/svg/left_arrow.svg';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1300 },
		items: 4,
	},
	laptop: {
		breakpoint: { max: 1300, min: 1020 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1020, min: 664 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const ArrowStickImage = styled('img')({
	height: '220px',
});

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
	const {
		carouselState: { currentSlide },
	} = rest;
	return (
		<Box
			sx={{
				position: 'absolute',
				width: {
					xs: 'calc(100% + 100px)',
					md: 'calc(100% + 130px)',
				},
				top: '40%',
				left: {
					xs: '-50px',
					md: '-80px',
				},
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',

				height: '100px',
			}}
		>
			<button
				onClick={() => previous()}
				style={{
					backgroundColor: 'transparent',
					border: 'none',
				}}
			>
				<img
					src={LeftArrow}
					alt="left arrow"
					style={{
						width: '50px',
						height: '50px',
					}}
				/>
			</button>
			<button
				onClick={() => next()}
				style={{
					backgroundColor: 'transparent',
					border: 'none',
				}}
			>
				<img
					src={RightArrow}
					alt="right arrow"
					style={{
						width: '50px',
						height: '50px',
					}}
				/>
			</button>
		</Box>
	);
};

export default function AiMlSolutions() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
			}}
		>
			<Box
				sx={{
					backgroundImage: `linear-gradient(90deg, rgba(217, 217, 217, 0.00) 13.67% , #1A1818 80.43%), url(${AiBackgroundImg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transform: 'scaleX(-1)',
				}}
			>
				<Container
					sx={{
						transform: 'scaleX(-1)',
						backgroundColor: 'transparent',
						py: '64px',
					}}
				>
					<Stack
						spacing="24px"
						sx={{
							maxWidth: '600px',
						}}
					>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '48px',
								},
								fontWeight: {
									xs: '700',
								},
							}}
						>
							Amplifying Efficiency With Top-Graded AI/ML Solutions
						</Typography>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '16px',
								},
								fontWeight: {
									xs: '400',
								},
							}}
						>
							Maximize Businesses’ Efficiency And Productivity With Our Premium
							AI/ML Development Services & Solutions.
						</Typography>
						<ButtonSecondary>
							<UnstyledLink to="/contact">Contact us</UnstyledLink>
						</ButtonSecondary>
					</Stack>
				</Container>
			</Box>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="38px" alignItems="center">
					<Stack spacing="15px">
						<Typography
							sx={{
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Revolutionize the Crypto World with AI Development
						</Typography>
						<Typography
							sx={{
								fontSize: {
									xs: '20px',
								},
								fontWeight: {
									xs: '400',
								},
								textAlign: 'center',
							}}
						>
							The integration of AI and ML into the world of crypto can bring
							about a massive transformation in the way it operates. AI and ML
							can streamline operations, enhance user experience, improve
							decision-making, help mitigate risk, and many more. Read through
							to find out our AI/ML offerings.
						</Typography>
					</Stack>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								sm: '1fr 1fr',
								md: '1fr 1fr 1fr',
							},
							gap: '32px',
						}}
					>
						{aiOfferings.map((item) => (
							<AiOfferingCard
								key={item.title}
								title={item.title}
								description={item.description}
								img={item.img}
							/>
						))}
					</Box>
				</Stack>
			</Container>

			<Box
				sx={{
					backgroundColor: '#C02327',
					py: '64px',
				}}
			>
				<Container>
					<Stack spacing="32px" alignItems="center">
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Empowering Businesses with Our Generative AI Solutions
						</Typography>

						<Stack direction="row" spacing="24px">
							<ButtonSecondary>Connect on WhatsApp</ButtonSecondary>
							<ButtonSecondary>Connect on Telegram</ButtonSecondary>
						</Stack>
					</Stack>
				</Container>
			</Box>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="32px" alignItems="center">
					<Typography
						sx={{
							fontSize: {
								xs: '35px',
							},
							fontWeight: {
								xs: '600',
							},
							textAlign: 'center',
						}}
					>
						Did You know ?
					</Typography>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								md: '1fr 1fr 1fr',
							},
							gap: '32px',
						}}
					>
						{facts.map((item) => (
							<AiFactCard key={item.title} title={item.title} img={item.img} />
						))}
					</Box>
				</Stack>
			</Container>

			<Box
				sx={{
					bgcolor: '#C02327',
					py: '64px',
				}}
			>
				<Container>
					<Stack spacing="102px" alignItems="center">
						<Stack spacing="15px">
							<Typography
								sx={{
									color: '#EAE8E8',
									fontSize: {
										xs: '32px',
									},
									fontWeight: {
										xs: '600',
									},
									textAlign: 'center',
								}}
							>
								Embrace the Future with AI-Driven Metaverse & NFT Solutions
							</Typography>
							<Typography
								sx={{
									color: '#EAE8E8',
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '400',
									},
									textAlign: 'center',
								}}
							>
								Metaverse and NFT solutions driven by AI have the potential to
								revolutionize the way a business interacts, transacts, and
								ensures customer satisfaction. Let our experience and expertise
								in blending AI & ML into Metaverse & NFT produce the results you
								are looking forward to.
							</Typography>
						</Stack>

						<Box
							sx={{
								width: '80vw',
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
							}}
						>
							<ReactCarousel
								responsive={responsive}
								infinite={true}
								renderButtonGroupOutside={true}
								customButtonGroup={<ButtonGroup />}
								arrows={false}
							>
								{aiFeatures.map((item) => (
									<Box
										sx={{
											py: '10px',
											px: {
												xs: '10px',
												lg: '0px',
											},
											height: '100%',
										}}
									>
										<AiFeatureCard
											key={item.title}
											title={item.title}
											description={item.description}
										/>
									</Box>
								))}
							</ReactCarousel>
						</Box>
					</Stack>
				</Container>
			</Box>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="24px">
					<Typography
						sx={{
							fontSize: {
								xs: '32px',
							},
							fontWeight: {
								xs: '600',
							},
							textAlign: 'center',
						}}
					>
						Our Expertise
					</Typography>

					<Stack spacing="32px" alignItems="center">
						<Stack spacing="16px">
							<Typography
								sx={{
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '400',
									},
									textAlign: 'center',
								}}
							>
								We are experts in the following AI Models.
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									gap: '24px',
								}}
							>
								{aiModels.map((item) => (
									<AiTechnologyCard key={item} title={item} />
								))}
							</Box>
						</Stack>

						<Stack
							spacing="16px"
							sx={{
								maxWidth: '900px',
							}}
						>
							<Typography
								sx={{
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '400',
									},
									textAlign: 'center',
								}}
							>
								We are experts in the following technologies.
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									gap: '24px',
								}}
							>
								{aiTechnologies.map((item) => (
									<AiTechnologyCard key={item} title={item} />
								))}
							</Box>
						</Stack>
					</Stack>
				</Stack>
			</Container>

			<Box
				sx={{
					py: '64px',
					backgroundColor: '#C02327',
				}}
			>
				<Container>
					<Stack spacing="32px" alignItems="center">
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Our AI Tech Stack
						</Typography>

						<Box
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: '1fr 1fr',
									md: '1fr 1fr 1fr',
								},
								gap: '32px',
							}}
						>
							<TechStackSevenCard title="Deep Learning(DL) Frameworks" />
							<Stack spacing="45px" alignItems="center">
								<TechStackThreeCard title="Modules/Toolkits" />
								<TechStackThreeCard title="Generative AI Models" />
							</Stack>
							<TechStackSevenCard title="Neural Networks" />
							<TechStackFourCard title="Algorithms" />
							<TechStackFourCard title="Image Classification Models" />
							<TechStackFourCard title="Libraries" />
						</Box>
					</Stack>
				</Container>
			</Box>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="40px" alignItems="center">
					<Stack
						sx={{
							maxWidth: '1100px',
						}}
					>
						<Typography
							sx={{
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							AI/ML Solutions and Services - Industries We Serve
						</Typography>
						<Typography
							sx={{
								fontSize: {
									xs: '14px',
								},
								fontWeight: {
									xs: '500',
								},
								textAlign: 'center',
							}}
						>
							Our team of proficient AI/ML experts cater to the varied needs of
							different industries in the best possible manner by enabling them
							to embrace automation, efficiency, agility, security, and many
							more to maximize their return on investment (ROI), thereby
							promoting business growth & development..
						</Typography>
					</Stack>

					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr 1fr',
								sm: '1fr 1fr 1fr',
								md: '1fr 1fr 1fr 1fr',
								lg: '1fr 1fr 1fr 1fr 1fr',
							},
							columnGap: '16px',
							rowGap: '32px',
						}}
					>
						{aiSolutions.map((item) => (
							<AiSolutionsCard
								key={item.title}
								title={item.title}
								icon={item.icon}
							/>
						))}
					</Box>
				</Stack>
			</Container>

			<Container
				sx={{
					my: '80px',
				}}
			>
				<Stack spacing="40px" alignItems="center">
					<Stack spacing="20px">
						<Typography
							sx={{
								color: '#C02327',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								lineHeight: { sx: 'normal' },
								textAlign: 'center',
							}}
						>
							Our AI/ML Development Process
						</Typography>
						<Typography
							sx={{
								fontSize: {
									xs: '16px',
								},
								fontWeight: {
									xs: '400',
								},
								lineHeight: { sx: 'normal' },
								textAlign: 'center',
							}}
						>
							We follow a stepwise AI/ML development process to provide the best
							results to every client.
						</Typography>
					</Stack>

					<Box
						sx={{
							width: '100%',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction="row"
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 1
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Consultation Phase
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Our team starts with AI/ML consulting services that are
												specially designed for clients who are on the verge of
												integrating AI/ML into their business so that their
												transition is smooth.
											</Typography>
										</Stack>
									</Card>
								</Box>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: 'scaleX(-1)',
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
										}}
									>
										Phase 1
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							width: '100%',
							mt: '0px !important',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction={{
									xs: 'row-reverse',
									md: 'row',
								}}
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
											textAlign: 'end',
										}}
									>
										Phase 2
									</Typography>
								</Stack>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: {
												xs: 'scaleX(-1)',
												md: 'scaleX(1)',
											},
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 2
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Discovery Phase
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												The next step is the discovery phase where we understand
												your goals in detail followed by multiple brainstorming
												sessions to chalk out the plan to achieve the intended
												goals.
											</Typography>
										</Stack>
									</Card>
								</Box>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							mt: '0px !important',
							width: '100%',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction="row"
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 3
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Requirements Gathering
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												In this step, we gather all requirements for the
												designated project. Then we conduct an in-depth analysis
												and create a roadmap accordingly before we move ahead
												with the development process.
											</Typography>
										</Stack>
									</Card>
								</Box>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: 'scaleX(-1)',
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
										}}
									>
										Phase 3
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							width: '100%',
							mt: '0px !important',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction={{
									xs: 'row-reverse',
									md: 'row',
								}}
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
											textAlign: 'end',
										}}
									>
										Phase 4
									</Typography>
								</Stack>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: {
												xs: 'scaleX(-1)',
												md: 'scaleX(1)',
											},
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 4
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Solution and Strategy Design
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												In this phase of development, we craft appropriate
												solutions and strategize designs that ensure the
												delivery of required AI/ML solutions in the most
												appropriate manner.
											</Typography>
										</Stack>
									</Card>
								</Box>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							mt: '0px !important',
							width: '100%',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction="row"
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 5
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Development Phase
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												In this phase, core AI and machine learning development
												takes place according to the approved designs as well as
												strategies in the previous step to the space and make it
												ready for launch.
											</Typography>
										</Stack>
									</Card>
								</Box>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: 'scaleX(-1)',
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
										}}
									>
										Phase 5
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							width: '100%',
							mt: '0px !important',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction={{
									xs: 'row-reverse',
									md: 'row',
								}}
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
											textAlign: 'end',
										}}
									>
										Phase 6
									</Typography>
								</Stack>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: {
												xs: 'scaleX(-1)',
												md: 'scaleX(1)',
											},
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 6
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Testing and Quality Analysis
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												After the development process, we start with the testing
												and quality analysis. We have a separate QA team that
												carries out in-depth testing to ensure that the final
												product is ready to be launched in the market without
												any kind of issues.
											</Typography>
										</Stack>
									</Card>
								</Box>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							mt: '0px !important',
							width: '100%',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction="row"
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 7
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Development Phase
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Once we get a nod from the QA team, the project is ready
												for launch. Our team makes sure to launch the product in
												the right way to ensure complete client satisfaction,
												thereby concluding the deployment phase.
											</Typography>
										</Stack>
									</Card>
								</Box>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: 'scaleX(-1)',
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
									{theme.palette.mode === 'dark' ? (
										<ArrowStickImage src={Stick} />
									) : (
										<ArrowStickImage src={StickDark} />
									)}
								</Stack>

								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
										}}
									>
										Phase 7
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Box>

					<Box
						sx={{
							width: '100%',
							mt: '0px !important',
						}}
					>
						<Stack spacing="0px">
							<Stack
								direction={{
									xs: 'row-reverse',
									md: 'row',
								}}
								sx={{
									mt: '0px !important',
									flexGrow: 1,
								}}
							>
								<Stack
									spacing="8px"
									sx={{
										width: { xs: '0px', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },
											pt: '40px',
											display: {
												xs: 'none',
												md: 'block',
											},
											textAlign: 'end',
										}}
									>
										Phase 8
									</Typography>
								</Stack>

								<Stack
									alignItems="center"
									sx={{
										width: '20%',
									}}
								>
									<Box
										sx={{
											padding: '11px 22px',
											backgroundColor: '#c02327',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											borderRadius: '10px',
											transform: {
												xs: 'scaleX(-1)',
												md: 'scaleX(1)',
											},
										}}
									>
										<img src={PlayArrow} alt="play icon" />
									</Box>
								</Stack>

								<Box
									sx={{
										width: { xs: '80%', md: '40%' },
									}}
								>
									<Typography
										sx={{
											fontSize: {
												xs: '18px',
												sm: '24px',
											},
											fontWeight: {
												xs: '600',
											},
											lineHeight: { sx: 'normal' },

											display: {
												xs: 'block',
												md: 'none',
											},
											pb: '10px',
										}}
									>
										Phase 8
									</Typography>
									<Card
										sx={{
											padding: {
												xs: '12px',
												sm: '24px',
											},
											borderRadius: '20px',
											border: '6px solid #C02327',
											bgcolor: '#303030',
											maxWidth: '550px',

											height: 'fit-content',
										}}
									>
										<Stack spacing="8px">
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '16px',
														sm: '20px',
													},
													fontWeight: {
														xs: '600',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Maintenance and Support
											</Typography>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '12px',
														sm: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												After the successful launch of the AI/ML-based product,
												our team takes very good care of its maintenance and
												offers all the necessary support to make sure that it
												runs smoothly without any kind of bugs or technical
												glitches.
											</Typography>
										</Stack>
									</Card>
								</Box>
							</Stack>
						</Stack>
					</Box>

					<Stack direction="row" spacing="24px">
						<ButtonPrimary>Connect on WhatsApp</ButtonPrimary>
						<ButtonPrimary>Connect on Telegram</ButtonPrimary>
					</Stack>
				</Stack>
			</Container>

			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.paper,
					color: (theme) => theme.palette.text.secondary,
					py: '64px',
				}}
			>
				<Container>
					<Stack
						spacing="48px"
						direction={{
							xs: 'column',
							md: 'row',
						}}
					>
						<Stack
							spacing="24px"
							sx={{
								maxWidth: '430px',
							}}
						>
							<Typography
								sx={{
									fontSize: {
										xs: '32px',
									},
									fontWeight: {
										xs: '700',
									},
								}}
							>
								Amplifying Efficiency With Top-Graded AI/ML Solutions
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '16px',
									},
									fontWeight: {
										xs: '400',
									},
								}}
							>
								Maximize Businesses’ Efficiency And Productivity With Our
								Premium AI/ML Development Services & Solutions.
							</Typography>
							<ButtonPrimary>
								<UnstyledLink to="/contact">Contact us</UnstyledLink>
							</ButtonPrimary>
						</Stack>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									md: '1fr 1fr',
								},
								columnGap: '48px',
								rowGap: '32px',
							}}
						>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
							<Stack
								sx={{
									maxWidth: '360px',
								}}
								spacing="8px"
							>
								<Stack alignItems="center" spacing="4px" direction="row">
									<img src={Check} alt="check" />
									<Typography
										sx={{
											fontSize: {
												xs: '20px',
											},
											fontWeight: {
												xs: '600',
											},
										}}
									>
										Maintenance and Support
									</Typography>
								</Stack>
								<Typography
									sx={{
										fontSize: {
											xs: '12px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									After the successful launch of the AI/ML-based product, our
									team takes very good care of its maintenance and offers all
									the necessary support to make sure that it runs smoothly
									without any kind of bugs or technical glitches.
								</Typography>
							</Stack>
						</Box>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}

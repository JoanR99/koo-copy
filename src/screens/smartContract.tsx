import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import SmartContractImg from '@/assets/Img/smart_contract.png';
import PlayButton from '@/assets/Img/svg/play_button.svg';
import ArrowStick from '@/assets/Img/svg/arrow_stick.svg';
import ArrowStickRed from '@/assets/Img/svg/arrow_stick_red.svg';
import Arrow from '@/assets/Img/svg/arrow_red.svg';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material';
import ButtonSecondary from '@/components/buttons/buttonSecondary';
import CardIcon from '@/components/cards/cardIcon';
import FactsCard from '@/components/cards/factsCard';
import UseCaseCard from '@/components/cards/useCaseCard';
import VideoImg from '@/assets/Img/video_image.png';
import {
	blockchainsPlatforms,
	smartContractServices,
	useCases,
	whys,
} from '@/data/smartContractScreenData';
import { UnstyledLink } from '@/components/buttons/unstyledLink';
import DefiSmartImg from '@/assets/Img/defi_smart.png';

const VideoImage = styled('img')({
	width: '580px',
	height: '300px',
	borderRadius: '10px',
	objectFit: 'cover',
});

const ArrowStickImage = styled('img')({
	height: '220px',
});

const ArrowImage = styled('img')({
	width: '22px',
});

export default function SmartContract() {
	const theme = useTheme();
	return (
		<Box>
			<Box
				sx={{
					bgcolor: '#c02327',
					pt: '40px',
					pb: '80px',
				}}
			>
				<Container>
					<Stack
						direction={{
							xs: 'column',
							md: 'row',
						}}
						spacing="24px"
						alignItems="center"
					>
						<Stack spacing="24px">
							<Stack>
								<Typography
									sx={{
										color: '#EAE8E8',
										fontSize: {
											xs: '25px',
										},
										fontWeight: {
											xs: '700',
										},
									}}
								>
									Embrace A Transparent Way To Do Business
								</Typography>
								<Typography
									sx={{
										color: '#EAE8E8',
										fontSize: {
											xs: '48px',
										},
										fontWeight: {
											xs: '700',
										},
										lineHeight: { sx: 'normal' },
									}}
								>
									Smart Contract Development
								</Typography>
							</Stack>
							<Typography
								sx={{
									color: '#EAE8E8',
									fontSize: {
										xs: '16px',
									},
									fontWeight: {
										xs: '400',
									},
									lineHeight: { sx: 'normal' },
									maxWidth: '530px',
								}}
							>
								Writing the most secure and dependable smart contracts
								onBlockchain platforms such as Ethereum, EOS, Hyperledger,
								TRON,and more.
							</Typography>

							<ButtonSecondary>
								<UnstyledLink to="/contact">Contact us</UnstyledLink>
							</ButtonSecondary>
						</Stack>

						<img src={SmartContractImg} alt="smart contract" />
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.default,
					color: (theme) => theme.palette.text.primary,
					py: '80px',
				}}
			>
				<Container>
					<Stack spacing="40px" alignItems="center">
						<Stack
							spacing={{
								xs: '40px',
								md: '70px',
							}}
							direction={{
								xs: 'column-reverse',
								md: 'row',
							}}
							alignItems="center"
						>
							<Box
								sx={{
									position: 'relative',
									width: 'fit-content',
									cursor: 'pointer',
								}}
							>
								<VideoImage src={VideoImg} alt="smart contract" />
								<Box
									sx={{
										position: 'absolute',
										top: '50%',
										left: '50%',
										transform: 'translate(-50%, -50%)',
									}}
								>
									<img src={PlayButton} alt="play" />
								</Box>
							</Box>

							<Stack
								spacing="24px"
								sx={{
									maxWidth: '530px',
								}}
							>
								<Typography
									sx={{
										fontSize: {
											xs: '35px',
										},
										fontWeight: {
											xs: '700',
										},
										lineHeight: { sx: 'normal' },
									}}
								>
									Smart Contracts are the Future
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
									}}
								>
									Self-executing, self-enforcing protocols governed by explicit
									terms and conditions called Smart contracts have the potential
									to transform the way agreements are made across several
									industries such as real estate, supply chain, telecom,
									manufacturing, healthcare, and more.Antier Solutions is an
									experienced smart contract development company with sheer
									expertise in creating smart contracts tailored perfectly to
									diverse industries and business models. Backed by skilled
									smart contract developers, we know what it takes to create an
									outstanding computer-based protocol to automate business
									agreements.
								</Typography>
							</Stack>
						</Stack>
						<ButtonSecondary>
							<UnstyledLink to="/contact">Contact us</UnstyledLink>
						</ButtonSecondary>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: '#c02327',
					py: '80px',
				}}
			>
				<Container>
					<Stack spacing="32px" alignItems="center">
						<Stack
							sx={{
								maxWidth: '1000px',
							}}
						>
							<Typography
								sx={{
									color: '#EAE8E8',
									fontSize: {
										xs: '35px',
									},
									fontWeight: {
										xs: '700',
									},
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								Our Smart Contract Development Services
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
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								Being a leading smart contract development company, Antier
								Solutions helps enterprises achieve business automation
								byproviding them with advanced smart contract development
								services.
							</Typography>
						</Stack>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: 'repeat(1, 1fr)',
									md: 'repeat(2, 1fr)',
								},
								gap: '32px',
							}}
						>
							{smartContractServices.map((item, index) => (
								<CardIcon
									key={index}
									title={item.title}
									description={item.description}
									icon={item.icon}
								/>
							))}
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.default,
					color: (theme) => theme.palette.text.primary,
					py: '80px',
				}}
			>
				<Container>
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						spacing="54px"
						alignItems="center"
					>
						<Stack
							spacing="24px"
							sx={{
								maxWidth: '500px',
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
									lineHeight: { sx: 'normal' },
								}}
							>
								DeFi Smart Contract Development: Streamlining & Automating
								Complex Financial Operations
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
								}}
							>
								The need for automation has increased manifold across many
								sectors and the Finance industry is no exception. Many global
								players in the Finance space have started utilizing DeFi smart
								contract development services to achieve a certain level of
								automation to meet customer expectations. Besides, the global
								DeFi market size, which was valued at USD 13.61 billion in 2022,
								is expected to grow at a CAGR of 46.0% from 2023 to 2030. So it
								is crunch time for finance experts to make hefty investments in
								DeFi smart contract development. <br /> Being a leading DeFi
								smart contract development company, Antier Solutions provides
								DeFi smart contract development services to financial
								institutions to help them improve data accuracy, reduce
								paperwork, strengthen security, and faster transaction
								processing. Our Blockchain experts help businesses develop DeFi
								smart contracts as per their requirements.
							</Typography>
						</Stack>
						<Box>
							<img src={DefiSmartImg} alt="bitcoin" />
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: '#c02327',
					py: '64px',
				}}
			>
				<Container>
					<Stack spacing="48px" alignItems="center">
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								lineHeight: { sx: 'normal' },
								textAlign: 'center',
								maxWidth: '1000px',
							}}
						>
							Why does your Business need Smart Contract Application Development
							Services?
						</Typography>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: 'repeat(1, 1fr)',
									sm: 'repeat(2, 1fr)',
									md: 'repeat(3, 1fr)',
								},
								columnGap: { xs: '24px', sm: '48px', md: '96px' },
								rowGap: '24px',
								justifyItems: { xs: 'center', sm: 'start' },
							}}
						>
							{whys.map((item, index) => (
								<FactsCard
									key={index}
									title={item.title}
									description={item.description}
									maxWidth={item.maxWidth}
								/>
							))}
						</Box>

						<Box sx={{ textAlign: 'center' }}>
							<ButtonSecondary>
								<UnstyledLink to="/contact">Contact us</UnstyledLink>
							</ButtonSecondary>
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.default,
					color: (theme) => theme.palette.text.primary,
					py: '80px',
				}}
			>
				<Container>
					<Stack spacing="42px" alignItems="center">
						<Stack>
							<Typography
								sx={{
									fontSize: {
										xs: '35px',
									},
									fontWeight: {
										xs: '600',
									},
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								Use Cases of Smart Contracts
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '400',
									},
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								The self-executing nature of smart contracts makes them a
								powerful tool for diverse applications across multiple
								industries. Antier Solutions, as a trustedsmart contract
								development company, has served worldwide clientele from diverse
								industry verticals for the past few years.
							</Typography>
						</Stack>

						<Stack
							direction="row"
							gap="50px"
							flexWrap="wrap"
							justifyContent="center"
						>
							{useCases.map((item, index) => (
								<UseCaseCard
									key={index}
									title={item.title}
									description={item.description}
									img={item.img}
								/>
							))}
						</Stack>

						<Stack
							direction={{ xs: 'column', sm: 'row' }}
							spacing="32px"
							alignItems="center"
						>
							<ButtonSecondary>Connect on whatsapp</ButtonSecondary>
							<ButtonSecondary>Connect on telegram</ButtonSecondary>
						</Stack>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: '#c02327',
					py: '64px',
				}}
			>
				<Container>
					<Stack spacing="48px" alignItems="center">
						<Stack spacing="8px">
							<Typography
								sx={{
									color: '#EAE8E8',
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
								Smart Contract Development on Various Blockchain Platforms
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
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								Whether it’s TRON or Hyperledger, our multidisciplinary team is
								capable of developing and deploying smart contracts on renowned
								Blockchain networks.
							</Typography>
						</Stack>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: 'repeat(1, 1fr)',
									sm: 'repeat(2, 1fr)',
									md: 'repeat(3, 1fr)',
								},
								columnGap: { xs: '24px', sm: '63px' },
								rowGap: '63px',
								justifyItems: { xs: 'center', sm: 'start' },
							}}
						>
							{blockchainsPlatforms.map((item, index) => (
								<FactsCard
									key={index}
									title={item.title}
									description={item.description}
									maxWidth={item.maxWidth}
								/>
							))}
						</Box>

						<Stack spacing="20px" alignItems="center">
							<Typography
								sx={{
									color: '#EAE8E8',
									fontSize: {
										xs: '25px',
									},
									fontWeight: {
										xs: '500',
									},
									lineHeight: { sx: 'normal' },
								}}
							>
								Develop smart contracts on your favourite Blockchain platform
								today
							</Typography>
							<ButtonSecondary>Contact our experts</ButtonSecondary>
						</Stack>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					bgcolor: (theme) => theme.palette.background.default,
					color: (theme) => theme.palette.text.primary,
					py: '80px',
				}}
			>
				<Container>
					<Stack spacing="40px" alignItems="center">
						<Stack spacing="20px">
							<Typography
								sx={{
									fontSize: {
										xs: '40px',
									},
									fontWeight: {
										xs: '600',
									},
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								Our Smart Contract Development Process
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '400',
									},
									lineHeight: { sx: 'normal' },
									textAlign: 'center',
								}}
							>
								We devise a coherent roadmap to navigate your smart contracts
								development journey
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
									<Stack
										spacing="8px"
										sx={{
											width: { xs: '80%', md: '40%' },
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
											}}
										>
											Analyzing the Requirements
										</Typography>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Comprehend business requirements
											</Typography>
										</Stack>

										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Pick the business logic to be infused
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Prepare the roadmap
											</Typography>
										</Stack>
									</Stack>

									<Stack
										alignItems="center"
										sx={{
											width: '20%',
										}}
									>
										<Box
											sx={{
												padding: {
													xs: '8px 16px',
													md: '11px 22px',
												},
												backgroundColor: '#c02327',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '30px',
														md: '60px',
													},
													fontWeight: {
														xs: '600',
													},
												}}
											>
												01
											</Typography>
										</Box>
										{theme.palette.mode === 'dark' ? (
											<ArrowStickImage src={ArrowStick} />
										) : (
											<ArrowStickImage src={ArrowStickRed} />
										)}

										<ArrowImage src={Arrow} />
									</Stack>

									<Stack
										spacing="8px"
										sx={{
											width: { xs: '0px', md: '40%' },
										}}
									></Stack>
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
									></Stack>

									<Stack
										alignItems="center"
										sx={{
											width: '20%',
										}}
									>
										<Box
											sx={{
												padding: {
													xs: '8px 16px',
													md: '11px 22px',
												},
												backgroundColor: '#c02327',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '30px',
														md: '60px',
													},
													fontWeight: {
														xs: '600',
													},
												}}
											>
												02
											</Typography>
										</Box>
										{theme.palette.mode === 'dark' ? (
											<ArrowStickImage src={ArrowStick} />
										) : (
											<ArrowStickImage src={ArrowStickRed} />
										)}
										<ArrowImage src={Arrow} />
									</Stack>

									<Stack
										spacing="8px"
										sx={{
											width: { xs: '80%', md: '40%' },
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
											}}
										>
											Creating the Technical Design
										</Typography>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Create a document defining the smart contract
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Data flow diagram creation
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Design technical architecture
											</Typography>
										</Stack>
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
									direction="row"
									sx={{
										mt: '0px !important',
										flexGrow: 1,
									}}
								>
									<Stack
										spacing="8px"
										sx={{
											width: { xs: '80%', md: '40%' },
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
											}}
										>
											Proceeding with the Development
										</Typography>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Implement proposed smart contract solutiont
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Client evaluation and feedback
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Complete the smart contract development
											</Typography>
										</Stack>
									</Stack>

									<Stack
										alignItems="center"
										sx={{
											width: '20%',
										}}
									>
										<Box
											sx={{
												padding: {
													xs: '8px 16px',
													md: '11px 22px',
												},
												backgroundColor: '#c02327',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '30px',
														md: '60px',
													},
													fontWeight: {
														xs: '600',
													},
												}}
											>
												03
											</Typography>
										</Box>
										{theme.palette.mode === 'dark' ? (
											<ArrowStickImage src={ArrowStick} />
										) : (
											<ArrowStickImage src={ArrowStickRed} />
										)}
										<ArrowImage src={Arrow} />
									</Stack>

									<Stack
										spacing="8px"
										sx={{
											width: { xs: '0px', md: '40%' },
										}}
									></Stack>
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
									></Stack>

									<Stack
										alignItems="center"
										sx={{
											width: '20%',
										}}
									>
										<Box
											sx={{
												padding: {
													xs: '8px 16px',
													md: '11px 22px',
												},
												backgroundColor: '#c02327',
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<Typography
												sx={{
													color: '#EAE8E8',
													fontSize: {
														xs: '30px',
														md: '60px',
													},
													fontWeight: {
														xs: '600',
													},
												}}
											>
												04
											</Typography>
										</Box>
									</Stack>

									<Stack
										spacing="8px"
										sx={{
											width: { xs: '80%', md: '40%' },
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
											}}
										>
											Deployment and Testing
										</Typography>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Testnet deployment
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Smart contract deployment on Main network
											</Typography>
										</Stack>
										<Stack direction="row" spacing="10px" alignItems="center">
											<Box
												sx={{
													width: '20px',
													height: '20px',
													backgroundColor: '#c02327',
												}}
											></Box>
											<Typography
												sx={{
													fontSize: {
														xs: '16px',
													},
													fontWeight: {
														xs: '400',
													},
													lineHeight: { sx: 'normal' },
												}}
											>
												Prioritize the backlog
											</Typography>
										</Stack>
									</Stack>
								</Stack>
							</Stack>
						</Box>

						<ButtonSecondary>
							<UnstyledLink to="/contact">Contact us</UnstyledLink>
						</ButtonSecondary>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}

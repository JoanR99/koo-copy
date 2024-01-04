import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import ButtonSecondary from '@/components/buttons/buttonSecondary';
import PeerLendingImg from '@/assets/Img/svg/peer_lending.svg';
import PeerLendingCard from '@/components/cards/peerLendingCard';
import P2pLendingImg from '@/assets/Img/p2p_lending.png';
import P2pNftImg from '@/assets/Img/p2p_nft.png';
import P2pExchangeImg from '@/assets/Img/p2p_exchange.png';
import {
	adminFeatures,
	p2pFeatures,
	p2pSecurityFeatures,
} from '@/data/p2pLendingData';
import SecurityFeatureCard from '@/components/cards/securityFeatureCard';
import AdminFeaturesCard from '@/components/cards/adminFeaturesCard';
import { UnstyledLink } from '@/components/buttons/unstyledLink';

export default function P2pLending() {
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
				maxWidth: '100vw',
				py: '40px',
			}}
		>
			<Container
				sx={{
					pb: '80px',
				}}
			>
				<Stack
					direction={{
						xs: 'column',
						md: 'row',
					}}
					spacing={{
						xs: '40px',
						md: '52px',
					}}
					alignItems="center"
				>
					<Box
						sx={{
							width: '100%',
							maxWidth: '680px',
						}}
					>
						<img src={P2pLendingImg} alt="p2p lending" />
					</Box>
					<Stack
						spacing="16px"
						sx={{
							maxWidth: '450px',
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
							}}
						>
							White Label P2P Lending Platform Development
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
							Develop state-of-the art peer to peer lending software
						</Typography>

						<Stack direction="row" spacing="16px">
							<ButtonSecondary>
								<UnstyledLink to="/contact">Contact us</UnstyledLink>
							</ButtonSecondary>
							<ButtonPrimary>Talk To Our Experts</ButtonPrimary>
						</Stack>
					</Stack>
				</Stack>
			</Container>

			<Box
				sx={{
					py: '80px',
				}}
			>
				<Container>
					<Stack spacing="27px">
						<Typography
							sx={{
								color: '#C02327',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Exceptional Growth of White Label P2P Lending Platform Development
						</Typography>
						<Stack
							direction={{
								xs: 'column',
								md: 'row',
							}}
							spacing="40px"
						>
							<Typography
								sx={{
									fontSize: {
										xs: '16px',
									},
									fontWeight: {
										xs: '400',
									},
									maxWidth: '850px',
								}}
							>
								The convergence of new technologies, the introduction of
								ingenious lending models, and the evolving consumer behavior
								have led to the evolution and growth of peer-to-peer or P2P
								crypto lending software. Peer to peer lending platforms are
								online platforms that allow individuals to lend money to each
								other directly, without the need for a bank or other financial
								institution. P2P lending software has become increasingly
								popular in recent years, as it offers a number of advantages
								over traditional lending methods. Crypto enthusiasts across the
								globe are raking in huge profits via P2P lending software. What
								is encouraging most businesses and entrepreneurs to tap into the
								P2P lending market is the fact put forth by the Word Bank which
								states that 3 billion adults worldwide are unbanked.
								Furthermore, many are unable to acquire a loan due to poor
								credit rating. Building a Peer to Peer Lending Platform Software
								or platform can be an opportunity to capitalize on such people’s
								inaccessibility to financial services, providing them with
								contemporary P2P lending exchange to satisfy their borrowing or
								lending needs.
							</Typography>

							<Box
								sx={{
									minWidth: {
										xs: '100%',
										md: '350px',
									},
								}}
							>
								<img src={P2pNftImg} alt="p2p lending" />
							</Box>
						</Stack>
						<ButtonPrimary>Talk To Our Experts</ButtonPrimary>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					py: '80px',
					backgroundColor: '#303030',
					color: '#EAE8E8',
				}}
			>
				<Container>
					<Stack spacing="36px">
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
							How Does Peer to Peer Lending Software Work?
						</Typography>
						<Box>
							<img src={PeerLendingImg} alt="peer lending" />
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box
				sx={{
					backgroundColor: '#C02327',
				}}
			>
				<Container
					sx={{
						py: '80px',
					}}
				>
					<Stack spacing="16px" alignItems="center">
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
							Features of Our Peer to Peer Lending Platform Software
						</Typography>
						<Typography
							sx={{
								color: '#EAE8E8',
								fontSize: {
									xs: '16px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Through meticulous research and a design-focused methodology, we
							have crafted a pioneering path in the realm of P2P lending
							software development. This journeyhas culminated in the inception
							of our cutting-edge white label P2P lending platform development,
							bolstered by an array of robust features.
						</Typography>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									sm: '1fr 1fr',
									md: '1fr 1fr 1fr',
								},
								gap: '30px',
							}}
						>
							{p2pFeatures.map((feature) => (
								<PeerLendingCard
									key={feature.title}
									title={feature.title}
									description={feature.description}
									icon={feature.icon}
									isCompleted={feature.iconCompleted}
								/>
							))}
						</Box>
					</Stack>
				</Container>
			</Box>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="80px">
					<Stack spacing="32px" alignItems="center">
						<Stack>
							<Typography
								sx={{
									color: '#C02327',
									fontSize: {
										xs: '30px',
									},
									fontWeight: {
										xs: '600',
									},
									textAlign: 'center',
								}}
							>
								Connect with our subject matter experts to discuss your business
								use case
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '20px',
									},
									fontWeight: {
										xs: '500',
									},
									textAlign: 'center',
								}}
							>
								Transform your vision into reality with our subject matter
								experts. Get cutting-edge products that drive your business!
							</Typography>
						</Stack>

						<Stack
							direction={{ xs: 'column', md: 'row' }}
							spacing="24px"
							alignItems="center"
						>
							<ButtonPrimary>Contact User</ButtonPrimary>
							<ButtonSecondary>Connect on WhatsApp</ButtonSecondary>
							<ButtonSecondary>Connect on Telegram</ButtonSecondary>
						</Stack>
					</Stack>

					<Stack
						direction={{ xs: 'column', md: 'row' }}
						spacing="80px"
						justifyContent="space-between"
						alignItems="center"
					>
						<Stack spacing="32px">
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
								Empower Your Financial Future with White Label P2P Lending
								Platform
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
								Are you seeking a modern, efficient, and empowering way to
								manage your finances and investments? Look no further than our
								cutting-edge P2P Lending Platform! We are revolutionizing the
								lending landscape, connecting borrowers and lenders directly,
								while eliminating traditional intermediaries and delivering
								unparalleled benefits to both sides of the equation.
								<br />
								<br />
								P2P platforms offer various loan types, including personal
								loans, business loans, real estate crowdfunding, and more,
								catering to a wide range of borrowing needs. A P2P lending
								platform is beneficial for both parties-borrowers can secure
								loans faster and with less paperwork, while investors can
								diversify their portfolios with various loan opportunities.
								Also, our platforms use credit scoring and risk assessment
								algorithms to evaluate borrowers, reducing the risk of default.
							</Typography>
						</Stack>
						<Box
							sx={{
								width: '100%',
								maxWidth: '470px',
								minWidth: {
									md: '380px',
									lg: '470px',
								},
							}}
						>
							<img src={P2pExchangeImg} alt="p2p exchange" />
						</Box>
					</Stack>
				</Stack>
			</Container>

			<Container
				sx={{
					py: '80px',
				}}
			>
				<Stack spacing="48px" alignItems="center">
					<Stack>
						<Typography
							sx={{
								color: '#C02327',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '600',
								},
								textAlign: 'center',
							}}
						>
							Security Features of White Label P2P Lending Platform
						</Typography>
						<Typography
							sx={{
								fontSize: {
									xs: '16px',
								},
								fontWeight: {
									xs: '500',
								},
								textAlign: 'center',
							}}
						>
							Elevate your confidence in P2P lending with our advanced security
							features. Our software is fortified with state-of-the-art measures
							toensure the safety and integrity of every transaction and user
							interaction
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
							gap: '60px',
						}}
					>
						{p2pSecurityFeatures.map((feature) => (
							<SecurityFeatureCard
								key={feature.title}
								title={feature.title}
								description={feature.description}
								icon={feature.icon}
							/>
						))}
					</Box>

					<ButtonPrimary>
						<UnstyledLink to="/contact">Contact us</UnstyledLink>
					</ButtonPrimary>
				</Stack>
			</Container>

			<Container>
				<Stack spacing="25px" alignItems="center">
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
						Our Admin Panel Includes
					</Typography>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								md: '1fr 1fr',
							},
							gap: '60px',
							maxWidth: '850px',
						}}
					>
						{adminFeatures.map((feature) => (
							<AdminFeaturesCard
								key={feature.title}
								title={feature.title}
								subtitle={feature.description}
								items={feature.items}
							/>
						))}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}

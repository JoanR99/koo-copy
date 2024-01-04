import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonPrimary from '@/components/buttons/buttonPrimary';
import { styled, useTheme } from '@mui/material';
import OfferingCard from '@/components/cards/offeringCard';
import {
	assetModules,
	lifecycleSteps,
	modules,
	offerings,
	tokenStandards,
} from '@/data/assetTokenizationData';
import ModuleCard from '@/components/cards/moduleCard';
import AssetModuleCard from '@/components/cards/assetModuleCard';
import LifecycleCard from '@/components/cards/lifecycleCard';
import TokenStandardCard from '@/components/cards/tokenStandardCard';
import RightArrow from '@/assets/Img/svg/arrow_white_right.svg';
import RightBlackArrow from '@/assets/Img/svg/arrow_black_right.svg';
import IncArrow from '@/assets/Img/svg/arrow_white_inc.svg';
import IncBlackArrow from '@/assets/Img/svg/arrow_black_inc.svg';
import NftImg from '@/assets/Img/nft_img.png';
import BitcoinImg from '@/assets/Img/bitcoin_img.png';

const HeroImage = styled('img')({});
const BitcoinImage = styled('img')({});

export default function AssetTokenization() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
				py: '40px',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '80px',
				}}
			>
				<Container>
					<Stack
						direction={{
							xs: 'column',
							md: 'row',
						}}
						justifyContent="space-between"
						alignItems="center"
						spacing="24px"
					>
						<Stack
							spacing="16px"
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
										xs: '600',
									},
								}}
							>
								Asset Tokenization: Unlocking The Value Of Digital Assets
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '18px',
									},
									fontWeight: {
										xs: '400',
									},
								}}
							>
								Build Secure and Robust Asset Tokenization Platform
							</Typography>
							<ButtonPrimary>Talk To Our Experts</ButtonPrimary>
						</Stack>
						<HeroImage
							src={NftImg}
							alt="nft"
							sx={{
								maxWidth: {
									xs: '300px',
									sm: '400px',
									md: '500px',
								},
							}}
						/>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="24px" alignItems="center">
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
							Unlock New Possibilities with Digital Asset Tokenization
						</Typography>
						<Typography
							sx={{
								fontSize: {
									xs: '14px',
								},
								fontWeight: {
									xs: '400',
								},
							}}
						>
							Digital asset tokenization is the process of representing the
							value and ownership of physical or financial assets through
							digital tokens on a blockchain. Each token represents a fraction
							or whole unit of the asset, allowing for easy transfer, trading,
							and fractional ownership. The digitization of assets eliminates
							geographical barriers, reduces transaction costs, and enhances
							transparency, bringing significant advantages to both asset owners
							and investors.
							<br />
							<br />
							In today's digital age, asset tokenization is revolutionizing the
							way we perceive and interact with traditional assets. By
							converting real-world assets into digital tokens, asset
							tokenization brings increased liquidity, accessibility, and
							efficiency to the global marketplace. Whether it's real estate,
							art, commodities, or securities, tokenization opens up a world of
							opportunities for investors, businesses, and asset owners.
							<br />
							<br />
							Koolinart is the best asset tokenization company that takes into
							account every small detail to build the best solutions. As an
							experienced tokenization development company, Koolinart has
							expertise in developing top-notch solutions for diverse clients
						</Typography>
						<ButtonPrimary>Request a Free Demo</ButtonPrimary>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="40px">
						<Typography
							sx={{
								color: '#C02327',
								fontSize: {
									xs: '32px',
								},
								fontWeight: {
									xs: '700',
								},
								textAlign: 'center',
							}}
						>
							Transform Traditional Assets into <br /> Digital Opportunities
							with Tokenized Assets
						</Typography>

						<Stack
							direction={{
								xs: 'column',
								md: 'row',
							}}
							justifyContent="space-between"
							alignItems="center"
							spacing="24px"
						>
							<BitcoinImage
								src={BitcoinImg}
								sx={{
									maxWidth: {
										xs: '160px',
										objectFit: 'cover',
									},
								}}
							/>
							<Typography
								sx={{
									fontSize: {
										xs: '16px',
									},
									fontWeight: {
										xs: '400',
									},
									maxWidth: '800px',
								}}
							>
								It’s the right time to venture into tokenization platform
								development! Embrace the future of asset ownership and financial
								innovation with Koolinart. Koolinart’s asset tokenization
								development services are designed to unlock the untapped
								potential of your assets, enabling you to raise capital, enhance
								liquidity, and engage a broader investor base. Partner with
								Koolinart to leverage the power of digital asset tokenization
								platform development.
								<br />
								<br />
								Whether you are looking to tokenize artwork, collectibles,
								commodities, debt instruments, intellectual property, stocks and
								equities, investment funds or real estate, Koolinart got you
								covered! The best asset tokenization company streamlines the
								whole development process to provide you with impeccable
								results.
							</Typography>
						</Stack>
						<Box sx={{ textAlign: 'center' }}>
							<ButtonPrimary>Talk to our Expert</ButtonPrimary>
						</Box>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="32px" alignItems="center">
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
							Our Real World Asset Tokenization Offerings
						</Typography>
						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									md: '1fr 1fr',
									lg: '1fr 1fr 1fr',
								},
								columnGap: {
									xs: '24px',
									md: '56px',
								},
							}}
						>
							{offerings.map((offering) => (
								<OfferingCard
									key={offering.title}
									title={offering.title}
									items={offering.items}
									icon={offering.icon}
								/>
							))}
						</Box>
					</Stack>
				</Container>

				<Box
					sx={{
						py: '48px',
						bgcolor: (theme) => theme.palette.background.paper,
					}}
				>
					<Container>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							spacing="65px"
							justifyContent="center"
							alignItems="center"
						>
							<Typography
								sx={{
									color: '#C02327',
									fontSize: {
										xs: '32px',
									},
									fontWeight: {
										xs: '600',
									},

									maxWidth: '650px',
								}}
							>
								Tokenize your real world asset to unlock new revenue streams for
								your business.
							</Typography>
							<ButtonPrimary>Talk to our Expert</ButtonPrimary>
						</Stack>
					</Container>
				</Box>

				<Container>
					<Stack spacing="32px" alignItems="center">
						<Stack
							spacing="16px"
							sx={{
								maxWidth: '850px',
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
								Modules of our Asset Tokenization Ecosystem
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
								The asset tokenization ecosystem comprises specific modules that
								are vital for ensuring success. Real-world asset tokenization
								system developed by Koolinart, the best asset tokenization
								services provider, is underpinned by the following to achieve
								world-class user experience.
							</Typography>
						</Stack>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									md: '1fr 1fr',
									lg: '1fr 1fr 1fr',
								},
								gap: '36px',
							}}
						>
							{modules.map((module) => (
								<ModuleCard
									key={module.title}
									title={module.title}
									description={module.description}
								/>
							))}
						</Box>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="32px" alignItems="center">
						<Stack
							spacing="16px"
							sx={{
								maxWidth: '850px',
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
								Business Benefits of Digital Asset Tokenization
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
								Koolinart, as a premium tokenization platform development
								company provides an end-to-end ecosystem for enterprises to
								unlock the vast potential of the tokenomy. Our white-label asset
								tokenization platform benefits asset owners with immutable
								records & transparent transactions, helping platform owners
								expand their horizons.
							</Typography>
						</Stack>

						<Box
							sx={{
								width: '100%',
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									md: '1fr 1fr',
									lg: '1fr 1fr 1fr 1fr',
								},
								gap: '40px',
							}}
						>
							{assetModules.map((module) => (
								<AssetModuleCard
									key={module.title}
									title={module.title}
									description={module.description}
								/>
							))}
						</Box>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="55px">
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
							Lifecycle of a Tokenized Security
						</Typography>
						<Box>
							<Stack
								direction={{ xs: 'column', lg: 'row' }}
								spacing={{
									xs: '32px',
									lg: '0px',
								}}
								alignItems="center"
								justifyContent="space-between"
							>
								<LifecycleCard
									key={lifecycleSteps[0].title}
									step={lifecycleSteps[0].step}
									title={lifecycleSteps[0].title}
									description={lifecycleSteps[0].description}
								/>
								<Box
									sx={{
										display: {
											xs: 'none',
											lg: 'block',
										},
									}}
								>
									{theme.palette.mode === 'dark' ? (
										<img src={RightArrow} alt="right arrow" />
									) : (
										<img src={RightBlackArrow} alt="right arrow" />
									)}
								</Box>
								<Box
									sx={{
										position: 'relative',
									}}
								>
									<LifecycleCard
										key={lifecycleSteps[1].title}
										step={lifecycleSteps[1].step}
										title={lifecycleSteps[1].title}
										description={lifecycleSteps[1].description}
									/>
									<Box
										sx={{
											display: {
												xs: 'none',
												lg: 'block',
											},
											position: 'absolute',
											bottom: '14px',
											left: '80px',
										}}
									>
										{theme.palette.mode === 'dark' ? (
											<img src={IncArrow} alt="inc arrow" />
										) : (
											<img src={IncBlackArrow} alt="inc arrow" />
										)}
									</Box>
								</Box>
							</Stack>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									my: {
										xs: '32px',
										lg: '-80px',
									},
								}}
							>
								<Box
									sx={{
										position: 'relative',
									}}
								>
									<LifecycleCard
										key={lifecycleSteps[2].title}
										step={lifecycleSteps[2].step}
										title={lifecycleSteps[2].title}
										description={lifecycleSteps[2].description}
									/>
									<Box
										sx={{
											display: {
												xs: 'none',
												lg: 'block',
											},
											position: 'absolute',
											bottom: '18px',
											left: '80px',
										}}
									>
										{theme.palette.mode === 'dark' ? (
											<img src={IncArrow} alt="inc arrow" />
										) : (
											<img src={IncBlackArrow} alt="inc arrow" />
										)}
									</Box>
								</Box>
							</Box>
							<Stack
								direction={{ xs: 'column', lg: 'row' }}
								spacing={{
									xs: '32px',
									lg: '0px',
								}}
								alignItems="center"
								justifyContent="space-between"
							>
								<LifecycleCard
									key={lifecycleSteps[3].title}
									step={lifecycleSteps[3].step}
									title={lifecycleSteps[3].title}
									description={lifecycleSteps[3].description}
								/>
								<Box
									sx={{
										display: {
											xs: 'none',
											lg: 'block',
										},
									}}
								>
									{theme.palette.mode === 'dark' ? (
										<img src={RightArrow} alt="right arrow" />
									) : (
										<img src={RightBlackArrow} alt="right arrow" />
									)}
								</Box>
								<LifecycleCard
									key={lifecycleSteps[4].title}
									step={lifecycleSteps[4].step}
									title={lifecycleSteps[4].title}
									description={lifecycleSteps[4].description}
								/>
							</Stack>
						</Box>
					</Stack>
				</Container>

				<Container>
					<Stack spacing="66px" alignItems="center">
						<Stack>
							<Typography
								sx={{
									color: '#C02327',
									fontSize: {
										xs: '32px',
									},
									fontWeight: {
										xs: '700',
									},

									textAlign: 'center',
								}}
							>
								What Are Token Standards for Asset Tokenization?
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
								Token standards for asset tokenization platform development
								define the structure, behavior, & functionality of tokens,
								enabling seamless integration & interaction within the tokenized
								asset ecosystem. Some of the most popular standards include:
							</Typography>
						</Stack>

						<Box
							sx={{
								display: 'grid',
								gridTemplateColumns: {
									xs: '1fr',
									md: '1fr 1fr',
									lg: '1fr 1fr 1fr',
								},
								gridAutoRows: '1fr',
								gap: '30px',
								alignItems: 'stretch',
							}}
						>
							{tokenStandards.map((tokenStandard) => (
								<TokenStandardCard
									key={tokenStandard.title}
									title={tokenStandard.title}
									description={tokenStandard.description}
								/>
							))}
						</Box>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}

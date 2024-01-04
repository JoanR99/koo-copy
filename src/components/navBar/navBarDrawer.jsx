import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import {
	ListItemButton,
	Typography,
	Box,
	CssBaseline,
	Toolbar,
	styled,
	useTheme,
	Button,
	IconButton,
} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonPrimaryNavBar from '../buttons/buttonPrimaryNavBar';
import ButtonSecondaryNavBar from '../buttons/buttonSecondaryNavBar';
import SolutionsDrawer from './solutionsDrawer';
import ConsultingDrawer from './consultingDrawer';
import BlockchainDrawer from './blockchainDrawer';
import NftMarketplaceDrawer from './nftMarketplaceDrawer';
import AiDrawer from './aiDrawer';
import MetaverseDrawer from './metaverseDrawer';
import { useBoundStore } from '@/stores/index';
import { shallow } from 'zustand/shallow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '@/assets/Img/Logo.png';
import ThemeImg from '@/assets/Img/svg/tema.svg';
import MobileMenu from './mobileMenu';

const CustomAppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	display: 'inline-flex',
	alignItems: 'center',
	backgroundImage: 'none',
	zIndex: theme.zIndex.drawer + 1,
	width: '100vw',
	height: {
		xs: '1.5rem',
		sm: '2rem',
		md: '2.5rem',
		lg: '4.5rem',
	},
	gap: {
		xs: '1.75rem',
		sm: '2rem',
		md: '2.75rem',
		lg: '3.75rem',
	},
}));

const UnstyledAnchor = styled('a')({
	textDecoration: 'none',
	color: 'inherit',
});

const StyledNameNav = styled(ListItemButton)({
	display: 'inline-flex',
	alignItems: 'center',
	gap: '1.4375rem',
	'&.active': {
		color: 'red',
		fontWeight: 'bold', // puedes ajustar según tus necesidades
	},
	height: 'fit-content',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
	width: 'fit-content',
	height: 'fit-content',
	color: theme.palette.text.primary,
	fontFamily: 'Poppins',
	fontSize: '1rem',
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 'normal',
}));

const StyledIcon = styled(Box)({
	cursor: 'pointer',
	padding: {
		xs: '.25rem .5625rem',
		sm: '.5rem 1rem',
		md: '.8rem 1.5625rem',
		lg: '1rem 2.5625rem',
	},
});

const StyledArrow = styled(KeyboardArrowDownIcon)(({ theme }) => ({
	width: '.7rem',
	color: theme.palette.text.primary,
}));

export default function NavbarDrawer(props) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isSolutionOpen, setIsSolutionOpen] = React.useState(false);
	const [isConsultingOpen, setIsConsultingOpen] = React.useState(false);
	const [isBlockchainOpen, setIsBlockchainOpen] = React.useState(false);
	const [isNftMarketplaceOpen, setIsNftMarketplaceOpen] = React.useState(false);
	const [isAiOpen, setIsAiOpen] = React.useState(false);
	const [isMetaverseOpen, setIsMetaverseOpen] = React.useState(false);

	const { themeModeState, ChangeMode } = useBoundStore(
		(state) => state,
		shallow
	);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Box sx={{ display: 'flex', position: 'relative', width: '100vw' }}>
			<CssBaseline />

			<CustomAppBar position="fixed">
				<Toolbar style={{ padding: 0 }}>
					<Button href="/">
						<img
							src={Logo}
							alt="Logo"
							style={{
								display: 'inline-flex',
								padding: '1rem 2.5625rem',
								alignItems: 'center',
								gap: '3.75rem',
							}}
						/>
					</Button>
					{isMobile ? (
						<IconButton aria-label="menu" onClick={toggleMenu}>
							<MenuIcon
								sx={{
									color: theme.palette.text.primary,
								}}
							/>
						</IconButton>
					) : (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '0.25rem',
								width: '55vw',
							}}
						>
							<Typography variant="h6" noWrap component="div">
								<StyledNameNav onClick={() => setIsNftMarketplaceOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
											}}
										>
											NFT Market
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>

								<StyledNameNav onClick={() => setIsBlockchainOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
											}}
										>
											Blockchain
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>
								<StyledNameNav onClick={() => setIsAiOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
											}}
										>
											AI
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>
								<StyledNameNav onClick={() => setIsMetaverseOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
											}}
										>
											Metaverse
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>

								<StyledNameNav onClick={() => setIsConsultingOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
											}}
										>
											Consulting
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>
								<StyledNameNav onClick={() => setIsSolutionOpen(true)}>
									<StyledTypography variant="body2">
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.25rem',
												justifyContent: 'center',
												width: 'fit-content',
											}}
										>
											Solutions
											<StyledArrow />
										</Box>
									</StyledTypography>
								</StyledNameNav>
							</Typography>
						</Box>
					)}

					{!isMobile && (
						<>
							<StyledIcon onClick={() => ChangeMode(themeModeState)}>
								<img
									src={ThemeImg}
									alt="theme"
									style={{
										width: '2.6875rem',
										height: '2.5rem',
									}}
								/>
							</StyledIcon>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: '1rem',
									padding: '1rem 2.5625rem',
									whiteSpace: 'nowrap',
								}}
							>
								<ButtonPrimaryNavBar sx={{ padding: '0.5rem 1rem' }}>
									<UnstyledAnchor
										href="https://market.koolinart.com"
										target="_blank"
									>
										Get in touch
									</UnstyledAnchor>
								</ButtonPrimaryNavBar>
								<ButtonSecondaryNavBar>Partner With Us</ButtonSecondaryNavBar>
							</Box>
						</>
					)}
				</Toolbar>
				<AiDrawer open={isAiOpen} handleClose={() => setIsAiOpen(false)} />
				<SolutionsDrawer
					open={isSolutionOpen}
					handleClose={() => setIsSolutionOpen(false)}
				/>
				<ConsultingDrawer
					open={isConsultingOpen}
					handleClose={() => setIsConsultingOpen(false)}
				/>
				<BlockchainDrawer
					open={isBlockchainOpen}
					handleClose={() => setIsBlockchainOpen(false)}
				/>
				<NftMarketplaceDrawer
					open={isNftMarketplaceOpen}
					handleClose={() => setIsNftMarketplaceOpen(false)}
				/>
				<MetaverseDrawer
					open={isMetaverseOpen}
					handleClose={() => setIsMetaverseOpen(false)}
				/>
				<MobileMenu
					isOpen={isMenuOpen}
					setIsAiOpen={setIsAiOpen}
					setIsBlockchainOpen={setIsBlockchainOpen}
					setIsConsultingOpen={setIsConsultingOpen}
					setIsMetaverseOpen={setIsMetaverseOpen}
					setIsNftMarketplaceOpen={setIsNftMarketplaceOpen}
					setIsSolutionOpen={setIsSolutionOpen}
					setIsMenuOpen={setIsMenuOpen}
				/>
			</CustomAppBar>
			<Box component="main" sx={{ flexGrow: 1, mt: '75px' }}>
				{props.children}
			</Box>
		</Box>
	);
}

import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThemeImg from '@/assets/Img/svg/tema.svg';
import ButtonPrimaryNavBar from '@/components/buttons/buttonPrimaryNavbar';
import ButtonSecondaryNavBar from '@/components/buttons/buttonSecondaryNavbar';

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
});

const StyledArrow = styled(KeyboardArrowDownIcon)(({ theme }) => ({
	width: '.7rem',
	color: theme.palette.text.primary,
}));

const HiddenMenu = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	gap: '.2rem',
	padding: '1rem 2.5625rem',
	height: '100vh',
	position: 'absolute',
	backgroundColor: theme.palette.background.default,
	width: '100vw',
	zIndex: 10,
	overflow: 'hidden',
}));

type Props = {
	isOpen: boolean;
	themeModeState: string;
	ChangeMode: (themeModeState: string) => void;
	setIsNftMarketplaceOpen: (isNftMarketplaceOpen: boolean) => void;
	setIsBlockchainOpen: (isBlockchainOpen: boolean) => void;
	setIsAiOpen: (isAiOpen: boolean) => void;
	setIsMetaverseOpen: (isMetaverseOpen: boolean) => void;
	setIsConsultingOpen: (isConsultingOpen: boolean) => void;
	setIsSolutionOpen: (isSolutionOpen: boolean) => void;
	setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function MobileMenu({
	isOpen,
	themeModeState,
	ChangeMode,
	setIsNftMarketplaceOpen,
	setIsBlockchainOpen,
	setIsAiOpen,
	setIsMetaverseOpen,
	setIsConsultingOpen,
	setIsSolutionOpen,
	setIsMenuOpen,
}: Props) {
	return (
		<HiddenMenu
			sx={{
				width: '100vw',
				height: {
					xs: 'calc(100vh - 75px)',
				},
				top: '74px',
				zIndex: 100,
				display: isOpen ? 'flex' : 'none',
			}}
		>
			<StyledNameNav
				onClick={() => {
					setIsNftMarketplaceOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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

			<StyledNameNav
				onClick={() => {
					setIsBlockchainOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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
			<StyledNameNav
				onClick={() => {
					setIsAiOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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
			<StyledNameNav
				onClick={() => {
					setIsMetaverseOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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

			<StyledNameNav
				onClick={() => {
					setIsConsultingOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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
			<StyledNameNav
				onClick={() => {
					setIsSolutionOpen(true);
					setIsMenuOpen(false);
				}}
				sx={{
					padding: { xs: '1.5rem 1rem' },
					height: '10px',
					lineHeight: '0px',
					flexGrow: 0,
				}}
			>
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

			<StyledIcon
				onClick={() => ChangeMode(themeModeState)}
				sx={{
					padding: {
						xs: '.25rem .5625rem',
						sm: '.5rem 1rem',
						md: '.8rem 1.5625rem',
						lg: '1rem 2.5625rem',
					},
				}}
			>
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
					gap: '1.5rem',
					padding: '1rem 2.5625rem',
					whiteSpace: 'nowrap',
				}}
			>
				<ButtonPrimaryNavBar sx={{ padding: '0.5rem 1rem' }}>
					<UnstyledAnchor href="https://market.koolinart.com" target="_blank">
						Get in touch
					</UnstyledAnchor>
				</ButtonPrimaryNavBar>
				<ButtonSecondaryNavBar>Partner With Us</ButtonSecondaryNavBar>
			</Box>
		</HiddenMenu>
	);
}

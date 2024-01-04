import ButtonPrimary from '@/components/buttons/buttonPrimary';
import { Box, Container, Typography, styled } from '@mui/material';
import { CardsLorem } from '../individualCardTechnology/CardsLorem';

const lorem = [
	{
		title: 'NFT Marketplace Development',
		lorem:
			'Invest in our robust end-to-end NFT & marketplace development services to trade non-fungible tokens securely. We use impressive token stands to develop an exceptional NFT smart contract auditing solution for you.',
	},
	{
		title: 'DeFi 2.0 Development',
		lorem:
			'Leverage the power of DeFi 2.0 to stand out in the crypto space. Backed by Ethereum blockchain, we will help you design completely decentralized and transparent platforms and financial products on the most trusted DeFi 2.0 protocols.',
	},
	{
		title: 'Exchange Development',
		lorem:
			'On-demand decentralized, centralized, and P2P exchange platform development backed by powerful trading engines, multi-layer security, high TPS, liquidity and a self-explanatory admin panel.',
	},
	{
		title: 'Wallet Development',
		lorem:
			'On-demand decentralized and centralized wallet development with advanced multi-currency wallets underpinned with industry-approved security features like 2FA, multisig support, biometric authentication and more.',
	},
	{
		title: 'Metaverse Development',
		lorem:
			'Get future ready and launch a Metaverse specific to your business needs. We take care of everything be it the frontend or backend development, hosting your Metaverse project or maintaining/upgrading services regularly.',
	},
	{
		title: 'Blockchain Protocol Development',
		lorem:
			'Expertly crafted foundational rules and software for a blockchain network to ensure highly secure & efficient processing of transactions, smart contract functionality, and consensus mechanisms that perfectly suit an array of applications.',
	},
	{
		title: 'Crypto Bank Development',
		lorem:
			'Be a frontrunner and set a new benchmark in the futuristic banking space. With proven expertise in digital asset technology, we will help you build an integrated banking platform around core crypto-banking capabilities.',
	},
	{
		title: 'Smart Contract Development',
		lorem:
			'Empower enterprises with a secure smart contract aligned with their business requirements. From finance to insurance, we create smart contracts tailored perfectly to diverse industries and business models.',
	},
	{
		title: 'Smart Contract audit Development',
		lorem:
			'Automate your processes, transactions and agreements while improving security and reducing costs with a smart contract. Our comprehensive services span smart contract design, development, auditing and optimization.',
	},
	{
		title: 'Coin & Token Development',
		lorem:
			'Get scalable and secure coin/token development services with secured functionalities. We use advanced customizable solutions to develop advanced crypto coins to add value to your business.',
	},
	{
		title: 'Whitepaper Development',
		lorem:
			'Get an authoritative and comprehensive white paper copy for your upcoming ICO/ITO/STO project. We ensure your white paper is self-explanatory and easy to understand to attract investors.',
	},
	{
		title: 'IDO Development',
		lorem:
			'Raise capital in crypto tokens with Antier’s comprehensive IDO development services. End-to-end IDO development solutions include strategy design, whitepaper drafting, token development, token listing advisory, marketing, and support.',
	},
	{
		title: 'OTC Trading',
		lorem:
			'Amplify your revenues by integrating OTC trading into your crypto exchange. Eliminate slippage and provide liquidity to your exchange users while enabling them to exchange large amounts of cryptocurrency anonymously.',
	},
	{
		title: 'Margin Trading',
		lorem:
			'Reinforce your exchange with margin trading to empower your users to amplify their gain from market swings. Advanced trading engine for users to go long or short on various cryptocurrencies by up to 100 times.',
	},
	{
		title: 'Derivatives Trading',
		lorem:
			'Reinforce your crypto exchange with derivatives trading to let your users speculate on the market position and alleviate the risk. Our customized solutions to integrate your exchange with Futures Contracts and Perpetual Contracts.',
	},
];
const ContainerStyle = styled(Container)({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '2rem',
	paddingBottom: '3rem',
});

const TypographyStyle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontFamily: 'Inter',
	fontSize: '2rem',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: 'normal',
}));

export const Advantages = (props) => {
	return (
		<ContainerStyle
			sx={{
				display: 'flex',
				paddingTop: '3rem',
				flexDirection: 'column',
				alignItems: 'center',
				// gap: '3rem',
				maxWidth: '100vw',
			}}
		>
			<TypographyStyle variant="h2">{props.title}</TypographyStyle>
			<Box
				sx={{
					width: '100%',
					display: 'grid',
					gridTemplateColumns: {
						sm: 'repeat(1, 1fr)',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					},
					gap: '45px',
				}}
			>
				{lorem.map((lor) => {
					const { title, lorem } = lor;
					return <CardsLorem title={title} lorem={lorem} key={title} />;
				})}
			</Box>
			<ButtonPrimary>Contac Us</ButtonPrimary>
		</ContainerStyle>
	);
};

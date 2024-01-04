import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import DropdownLink from './dropdownLink';

const exchangeLinks = [
	{
		title: 'Cryptocurrency Exchange',
		to: '/contact',
		description:
			'Develop your unique and competitive cryptocurrency exchange from scratch',
	},
	{
		title: 'White Label Exchange',
		to: '/contact',
		description:
			'Gear up your revenue stream using a ready-made white label crypto exchange',
	},
	{
		title: 'Margin Trading Exchanged',
		to: '/contact',
		description:
			'Secure and feature-rich margin trading exchange to disrupt the crypto market',
	},
	{
		title: 'PS2 Exchange',
		to: '/contact',
		description:
			'Use a smart contract-based Escrow system to foster reliable transactions',
	},
	{
		title: 'Decentralized Exchange',
		to: '/contact',
		description:
			'Reduce your time-to-market with a customized DEX exchange script solution',
	},
	{
		title: 'Arbitrage Trading bots',
		to: '/contact',
		description:
			'Elevate your trading strategies with the powerful crypto arbitrage bots',
	},
	{
		title: 'Derivatives Exchange',
		to: '/contact',
		description:
			'Assured platform liquidity & returns for a huge pool of crypto investors',
	},
	{
		title: 'Centralized Exchange',
		to: '/contact',
		description:
			'Facilitate digital asset trading in a secure and convenient environment',
	},
	{
		title: 'Market Making Exchange',
		to: '/contact',
		description:
			'Intensify liquidity provisioning with perfect market making strategies',
	},
];

const walletLinks = [
	{
		title: 'Cryptocurrency Wallet',
		to: '/contact',
		description:
			'Robust & secure wallet solutions for storing & transferring crypto assets',
	},
	{
		title: 'White Label Wallet',
		to: '/contact',
		description:
			'Ready-to-deploy white label wallet with high-grade security features',
	},
	{
		title: 'Web3 Wallet',
		to: '/contact',
		description:
			'Access data in real time with trustless Web3 blockchain ecosystems',
	},
	{
		title: 'Multycurrency Wallet',
		to: '/contact',
		description:
			'Deploy wallets that are intuitive, user-friendly, secure & scalable',
	},
	{
		title: 'NFT Wallet',
		to: '/contact',
		description:
			'Private key-based solutions to buy, sell and exchange non fungible tokens',
	},
	{
		title: 'TRON Wallet',
		to: '/contact',
		description:
			'Tron wallet hold private keys & TRX coins securely within itself.',
	},
	{
		title: 'Bitcoin Wallet',
		to: '/contact',
		description:
			'Launch your Bitcoin wallet, enabling speedier transactions & storage.',
	},
	{
		title: 'Mobile Wallet App',
		to: '/contact',
		description: 'Mobile wallet makes payments & transfer process simple.',
	},
	{
		title: 'Defi Wallet',
		to: '/contact',
		description:
			'A wallet that is fortified from hacks, & immune to cross-border regulations',
	},
];

const nftLinks = [
	{
		title: 'NFT Development',
		to: '/contact',
		description:
			'Build decentralized non-fungible tokens aligned with different business needs',
	},
	{
		title: 'White Label NFT Marketplace',
		to: '/contact',
		description:
			'Get a customized white label NFT marketplace with multi-platform support',
	},
	{
		title: 'NFT Music',
		to: '/contact',
		description:
			'Customer-centric marketplace for selling, trading and auctioning music NFTs',
	},
	{
		title: 'NFT Marketplace',
		to: '/contact',
		description:
			'Top-performing marketplaces for users to mint, sell, buy, and trade NFTs',
	},
	{
		title: 'NFT Loan',
		to: '/contact',
		description:
			'Facilitate your participation in revolutionized borrowing & lending world',
	},
	{
		title: 'Semi Fungible Token',
		to: '/contact',
		description:
			'Easy batch token transfers that support both NFTs and fungible tokens',
	},
	{
		title: 'NFT Gaming',
		to: '/contact',
		description:
			'Exclusive gameplay with rare digital assets like characters, tickets, weapons, & skins.',
	},
	{
		title: 'NFT Generative Art',
		to: '/contact',
		description:
			'Future ready NFT generative art marketplace that supports pictures, videos and GIFs',
	},
	{
		title: 'NFT Art',
		to: '/contact',
		description:
			'Tokenize digital and physical assets into a one-of-a-kind, untransferable NFT',
	},
];

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

export default function SolutionsDrawer({
	open,
	handleClose,
}: {
	open: boolean;
	handleClose: any;
}) {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef<HTMLElement | null>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			handleClose();
		}
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				height: {
					xs: 'calc(100vh - 75px)',
					md: '475px',
				},
				overflow: {
					xs: 'scroll',
					md: 'hidden',
				},
				bgcolor: 'white',
				width: '100vw',
				zIndex: 100,
				display: open ? 'block' : 'none',
			}}
			ref={ref}
		>
			<Box
				sx={{
					flexGrow: 1,
					bgcolor: 'white',
					display: 'flex',
					width: '100vw',
					height: {
						xs: 'calc(100vh - 75px)',
						md: '475px',
					},
					overflow: {
						xs: 'scroll',
						md: 'hidden',
					},
				}}
			>
				<Tabs
					orientation="vertical"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{
						borderRight: 1,
						borderColor: 'divider',
						backgroundColor: '#eae8e8',
						height: '100%',
						py: '24px',
						width: '270px',
					}}
					TabIndicatorProps={{ style: { display: 'none' } }}
				>
					<Tab
						label={
							<Stack
								sx={{
									color: value === 0 ? '#C02327' : 'black',
								}}
								direction="row"
								spacing={{
									xs: '2px',
									md: '10px',
								}}
								alignItems="center"
							>
								<Typography
									sx={{
										fontSize: {
											xs: '10px',
											md: '14px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									Exchange
								</Typography>
								<KeyboardArrowRightIcon />
							</Stack>
						}
						{...a11yProps(0)}
						sx={{
							alignItems: 'flex-start',
							backgroundColor: value === 0 ? 'white' : '#eae8e8',
							width: '100%',
							padding: {
								xs: '12px',
								md: '24px',
							},
						}}
					/>
					<Tab
						label={
							<Stack
								sx={{
									color: value === 1 ? '#C02327' : 'black',
								}}
								direction="row"
								spacing={{
									xs: '2px',
									md: '10px',
								}}
								alignItems="center"
							>
								<Typography
									sx={{
										fontSize: {
											xs: '10px',
											md: '14px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									Wallet
								</Typography>
								<KeyboardArrowRightIcon />
							</Stack>
						}
						{...a11yProps(1)}
						sx={{
							alignItems: 'flex-start',
							backgroundColor: value === 1 ? 'white' : '#eae8e8',

							padding: {
								xs: '12px',
								md: '24px',
							},
						}}
					/>
					<Tab
						label={
							<Stack
								sx={{
									color: value === 2 ? '#C02327' : 'black',
								}}
								direction="row"
								spacing={{
									xs: '2px',
									md: '10px',
								}}
								alignItems="center"
							>
								<Typography
									sx={{
										fontSize: {
											xs: '10px',
											md: '14px',
										},
										fontWeight: {
											xs: '400',
										},
									}}
								>
									NFT
								</Typography>
								<KeyboardArrowRightIcon />
							</Stack>
						}
						{...a11yProps(2)}
						sx={{
							alignItems: 'flex-start',
							backgroundColor: value === 2 ? 'white' : '#eae8e8',
							width: '100%',
							padding: {
								xs: '12px',
								md: '24px',
							},
						}}
					/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<Stack spacing="32px">
						<Stack>
							<Typography
								sx={{
									fontSize: {
										xs: '15px',
									},
									fontWeight: {
										xs: '600',
									},
									color: '#000',
								}}
							>
								Exchange
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '14px',
									},
									fontWeight: {
										xs: '500',
									},
									color: {
										xs: '#000',
									},
								}}
							>
								Enter the market with the best-in-class crypto exchange
								development services
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
								gap: {
									xs: '24px',
									sm: '48px',
									md: '62px',
								},
							}}
						>
							{exchangeLinks.map((link) => (
								<DropdownLink
									link={link}
									key={link.title}
									handleClose={handleClose}
								/>
							))}
						</Box>
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Stack spacing="32px">
						<Stack>
							<Typography
								sx={{
									fontSize: {
										xs: '15px',
									},
									fontWeight: {
										xs: '600',
									},
									color: '#000',
								}}
							>
								Wallet
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '14px',
									},
									fontWeight: {
										xs: '500',
									},
									color: {
										xs: '#000',
									},
								}}
							>
								Solutions that help users enjoy transactions in a speedier &
								secure environment
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
								gap: {
									xs: '24px',
									sm: '48px',
									md: '62px',
								},
							}}
						>
							{walletLinks.map((link) => (
								<DropdownLink
									link={link}
									key={link.title}
									handleClose={handleClose}
								/>
							))}
						</Box>
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Stack spacing="32px">
						<Stack>
							<Typography
								sx={{
									fontSize: {
										xs: '15px',
									},
									fontWeight: {
										xs: '600',
									},
									color: '#000',
								}}
							>
								NFT
							</Typography>
							<Typography
								sx={{
									fontSize: {
										xs: '14px',
									},
									fontWeight: {
										xs: '500',
									},
									color: {
										xs: '#000',
									},
								}}
							>
								Solutions that help users enjoy transactions in a speedier &
								secure environment
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
								gap: {
									xs: '24px',
									sm: '48px',
									md: '62px',
								},
							}}
						>
							{nftLinks.map((link) => (
								<DropdownLink
									link={link}
									key={link.title}
									handleClose={handleClose}
								/>
							))}
						</Box>
					</Stack>
				</TabPanel>
			</Box>
		</Box>
	);
}

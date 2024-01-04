import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import CardsProtocol from './cards/CardsProtocol';
import ProtocolImg from '@/assets/Img/svg/Group 70.svg';
import BlockchainImg from '@/assets/Img/svg/Blockchain.svg';

export default function Protocol() {
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Container
			sx={{
				paddingBottom: {
					md: '7rem',
				},
			}}
		>
			<Box sx={{ marginBottom: '2rem' }}>
				<Typography
					variant="h1"
					sx={{
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					Blockchain Protocol Development Services
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
					alignItems: 'center',
					justifyContent: 'center',
					gap: {
						xs: '1rem',
						md: '5.94rem',
					},
					marginBottom: {
						xs: '1rem',
					},
				}}
			>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(7rem)',
						},
					}}
				>
					<CardsProtocol
						title="Business Logic Customization"
						description="Koolinart’s expertise lies in tailoring the blockchain protocol to meet your specific business’s logic requirements. We design the blockchain architecture, develop smart contracts, configure access controls, integrate with external systems, & provide ongoing support to create a blockchain solution that aligns with our client’s business logic."
					/>
				</Box>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(1rem)',
						},
					}}
				>
					<CardsProtocol
						title="Blockchain Architecture Design"
						description="Our meticulous blockchain architecture design approach includes consensus algorithm development, smart contract development, network maintenance, creating data models & interfaces, setting up distributed nodes, testnet & mainnet launch, & more to ensure seamless integration with your existing systems."
					/>
				</Box>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(7rem)',
						},
					}}
				>
					<CardsProtocol
						title="Private & Permissioned Blockchain Development"
						description="Hire experienced blockchain developers who understand the importance of data privacy, scalability, & governance in business operations. Create a private & permissioned blockchain that ensures confidentiality, enhanced traceability & security within your organization."
					/>
				</Box>
			</Box>
			{!isMobile && (
				<Box
					sx={{
						position: 'relative',
						width: '900px',
						mx: 'auto',
					}}
				>
					<img
						src={ProtocolImg}
						alt="Protocol"
						style={{
							position: 'absolute',
							top: '2%',
							left: '0%',
							width: '100%',
						}}
					/>

					<img
						src={BlockchainImg}
						alt="Protocol"
						style={{ width: 'auto', height: 'auto', margin: '3rem 15.5rem' }}
					/>
				</Box>
			)}
			<Box
				sx={{
					display: 'flex',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
					justifyContent: 'center',
					alignItems: 'center',

					gap: {
						xs: '1rem',
						lg: '5.94rem',
					},
				}}
			>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(-1rem)',
						},
					}}
				>
					<CardsProtocol
						title="Chaincode Development"
						description="Create secure & robust chain code solutions to bring your blockchain vision to life. With Koolinart, you can ensure the integrity and accuracy of the chain code enabling seamless automation, transparency, & trust in your operations. Be it Ethereum or Hyperledger, we develop and deploy efficient smart contracts on various blockchain platforms as per the requirements of your business."
					/>
				</Box>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(8rem)',
						},
					}}
				>
					<CardsProtocol
						title="dApp Development and Migration"
						description="Whether you need a dApp developed from scratch or want to migrate your existing application to a blockchain-based ecosystem, we provide cutting-edge dApp development & migration services turning your idea into reality. Unlock the potential of decentralization and gain a competitive edge in the crypto industry for your venture."
					/>
				</Box>
				<Box
					sx={{
						transform: {
							xs: 'none',
							lg: 'translateY(-1rem)',
						},
					}}
				>
					<CardsProtocol
						title="Blockchain Solution Integration"
						description="Seamlessly integrate blockchain technology into your existing business ecosystem for enhanced security, transparency, and efficiency. Get custom integration strategies designed in line with your vision to streamline complex business processes without any hassle."
					/>
				</Box>
			</Box>
		</Container>
	);
}

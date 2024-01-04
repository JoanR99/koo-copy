import img from '@/assets/Img/Rectangle.png';
import { Box, styled } from '@mui/material';
import { CardBlockChain } from '../individualCardTechnology/CardBlockChain';

export const ContainerBlockChain = () => {
	const cards = [
		{
			img: img,
			title: 'Blockchain in Supply Chain',
			lorem:
				'Create an immutable master ledger between trading parties; use smart contracts to eliminate bad invoices; have a single system of record that is accessible to all partners involved in a transaction.',
		},
		{
			img: img,
			title: 'Blockchain in Finance',
			lorem:
				'Simplify and accelerate cross-border payments; execute transactions and agreements automatically with smart contracts; achieve greater accuracy, transparency and traceability of transactions; improve online identity management.',
		},
		{
			img: img,
			title: 'Blockchain in Insurance',
			lorem:
				'Create a secure ledger of information; ensure trusted and verifiable provenance information; execute terms binding the insurer and insuree, and automate payments to insuree through smart contracts.',
		},
		{
			img: img,
			title: 'Blockchain in Healtcare',
			lorem:
				'Simplify drug traceability; create secure and tamper-proof information, achieve nationwide interoperability; automate verification of medical claims through smart contracts; streamline medical records.',
		},
		{
			img: img,
			title: 'Blockchain in Energy: Oil and Gas',
			lorem:
				'Ensure regulated substance monitoring and reporting; fleet and fuel tracking; leverage P2P interactions, eliminate broker fees and high cost of energy trading; manage complex supply chains.',
		},
		{
			img: img,
			title: 'Blockchain in Retail',
			lorem:
				'Simplify inventory tracking; automate consumer and B2B payments using smart contracts; proof of authenticity; protect consumer privacy by storing their information in a decentralized, tamper-proof ledger.',
		},
		{
			img: img,
			title: 'Blockchain in Transportation',
			lorem:
				'Achieve greater visibility of supply chain; maintain trusted data across transportation and logistics ecosystem; accelerate customs clearance using smart contracts; easy coordination of documents on a shared distributed ledger',
		},
		{
			img: img,
			title: 'Blockchain in Agriculture',
			lorem:
				'Bring trust and transparency to supply chain; create a secure, distributed ledger of information; facilitate exchange of data within specific stakeholders using smart contracts; control weather crisis, ensure better decision making.',
		},
	];
	const ContainerStyle = styled(Box)({
		display: 'grid',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '2.5rem',
		mx: 'auto',
	});
	return (
		<ContainerStyle
			sx={{
				gridTemplateColumns: {
					xs: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(4, 1fr)',
				},
				width: {
					xs: '100%',
					sm: '28.6875rem',
					md: '48.6875rem',
					lg: '68.6875rem',
				},
			}}
		>
			{cards.map((card) => {
				return (
					<CardBlockChain
						image={card.img}
						title={card.title}
						lorem={card.lorem}
					/>
				);
			})}
		</ContainerStyle>
	);
};

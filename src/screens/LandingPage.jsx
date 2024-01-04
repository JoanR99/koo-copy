import { Advantages } from '@/components/landingPage/advantages/Advantages';
import { BlockChainSolution } from '@/components/landingPage/blockChain/BlockChaninSolution';
import { CaseStudies } from '@/components/landingPage/caseStudio/CaseStudies';
import { OurClients } from '@/components/landingPage/ourClient/OurClients';
import ContactUs from '@/components/landingPage/contactUs/ContactUs';
import { YourRoadMap } from '@/components/landingPage/yourRoadmap/YourRoadMap';
import { Box } from '@mui/material';
import { PartnersBlockChain } from '@/components/landingPage/partnersBlockChain/PartnersBlockChain';
import { TransitionToWeb } from '../components/landingPage/transitionToWeb/TransitionToWeb';
import { ForDecentralized } from '../components/landingPage/forDecentralized/ForDecentralized';
import { Technology } from '../components/landingPage/technology/Technology';

export default function LandingPage() {
	return (
		<Box
			sx={{
				backgroundColor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
				maxWidth: '100vw',
				// display: 'flex',
				// flexWrap: 'wrap',
				alignItems: 'center',
				alignContent: 'canter',
				overflow: 'hidden',
			}}
		>
			<ForDecentralized />
			<TransitionToWeb title="Transition to web3 Transition to the future" />
			<Advantages title="Advantages of using blockchain" />
			<Technology title="Technology EVM" />
			<BlockChainSolution title="Blockchain solutions for enterprises" />
			<YourRoadMap title="Your roadmap to capitalize on the blockchain opportunity" />
			<CaseStudies title="Case Studies" />
			<PartnersBlockChain />
			<OurClients title="Our Clients" />
			<ContactUs />
		</Box>
	);
}

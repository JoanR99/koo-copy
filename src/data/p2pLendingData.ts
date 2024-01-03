import Lock from '@/assets/Img/svg/lock.svg';
import Calculator from '@/assets/Img/svg/calculator.svg';
import Kyc from '@/assets/Img/kyc.png';
import Escrow from '@/assets/Img/escrow.png';
import Wallet from '@/assets/Img/wallet.png';
import Interest from '@/assets/Img/interest.png';
import Refinance from '@/assets/Img/refinance.png';
import Renewal from '@/assets/Img/renewal.png';
import Admin from '@/assets/Img/admin.png';
import DataEncImg from '@/assets/Img/data_enc.png';
import JwtEncImg from '@/assets/Img/jwt_enc.png';
import AntiDenialImg from '@/assets/Img/anti_denial.png';
import AntiDisImg from '@/assets/Img/anti_dis.png';
import SqlProtectImg from '@/assets/Img/sql_protect.png';
import XssProtectImg from '@/assets/Img/xss_protect.png';
import ServerProtectImg from '@/assets/Img/server_protection.png';
import HttpProtectImg from '@/assets/Img/http_protect.png';
import SameCredentialImg from '@/assets/Img/same_credential.png';

export const p2pFeatures = [
	{
		title: 'Multi-layer security',
		description:
			'We harness industry-leading security solutions such as SSL implementation and two-factor authentication (2FA) to accomplish additional login security and encrypted user access.',
		icon: Lock,
		iconCompleted: true,
	},
	{
		title: 'KYC And AML',
		description:
			'Geography-based KYC and AML verification processes confirm users’ identities and come into effect during the withdrawal of cryptocurrencies equivalent to a specific amount and above.',
		icon: Kyc,
		iconCompleted: true,
	},
	{
		title: 'Escrow System',
		description:
			'A secure, smart-contract-driven Escrow system automates locking and releasing of users’ crypto assets, leading to instant and transparent transactions.',
		icon: Escrow,
		iconCompleted: true,
	},
	{
		title: 'Hot Wallet',
		description:
			'The integration of multi-cryptocurrency, encrypted hot wallet enables secure storage and instant transactions of a spectrum of cryptocurrencies.',
		icon: Wallet,
		iconCompleted: true,
	},
	{
		title: 'LVR Calculation',
		description:
			'Loan to Value Ratio (LVR) calculation helps in risk assessment, allowing your users to make well-informed decisions while borrowing and lending a loan.',
		icon: Calculator,
		iconCompleted: true,
	},
	{
		title: 'Flexible Interest Calculation',
		description:
			'The flexible interest calculation provides you with an option to calculate the interest rate on a daily, monthly, quarterly or yearly basis, as per your business model.',
		icon: Interest,
		iconCompleted: true,
	},
	{
		title: 'Refinance',
		description:
			'The refinance option allows your platform users (Borrowers) to utilize their current loan amount to acquire another loan from another lender upon successful repayment of the current loan’s interest.',
		icon: Refinance,
		iconCompleted: true,
	},
	{
		title: 'Auto-Renewal Of Loans',
		description:
			'It eliminates the need to manually put a lending order into the order book, thereby accelerating the process. The auto-renewal can be toggle on and off as per your users’ (Lenders) needs.',
		icon: Renewal,
		iconCompleted: true,
	},
	{
		title: 'Admin Panel –a Bank in Itself',
		description:
			'Strengthened by FinTech KPIs such as Financial KPI, Order Book KPI, Loan Profile KPI and User Startup KPI, the Admin Panel allows you to monitor the transactions happening within the ecosystem and measure your ROI.',
		icon: Admin,
		iconCompleted: true,
	},
];

export const p2pSecurityFeatures = [
	{
		title: 'Data Encryption',
		description:
			'Data encryption protects users’ credentials and any sensitive data that is stored in the database',
		icon: DataEncImg,
	},
	{
		title: 'JWT Encryption',
		description:
			'The encryption of JWT (JSON Web Token) offers protection against data manipulation',
		icon: JwtEncImg,
	},
	{
		title: 'Anti-Denial of Service (DoS)',
		description:
			'Protects our white label P2P lending platform from large requests to the server.',
		icon: AntiDenialImg,
	},
	{
		title: 'Anti-Distributed Denial of Service',
		description:
			'It safeguards the P2P crypto lending exchange against overwhelming traffic coming from multiple sources.',
		icon: AntiDisImg,
	},
	{
		title: 'Protection against SQL Injection',
		description:
			'Defends the lending platform against maliciously crafted inputs submitted by an attacker.',
		icon: SqlProtectImg,
	},
	{
		title: 'Self-XSS Protection',
		description:
			'Offers protection against illegitimate access to users’ accounts, thereby fortifying the security paradigm.',
		icon: XssProtectImg,
	},
	{
		title: 'Server-Side Request Forgery Protection',
		description:
			'Safeguards against SSRF attack wherein the attacker creates or controls requests from the vulnerable server',
		icon: ServerProtectImg,
	},
	{
		title: 'HTTP Parameter Pollution Protection',
		description:
			'Prevents attacks that create an HTTP request to retrieve and access hidden information.',
		icon: HttpProtectImg,
	},
	{
		title: 'Prevention of Multiple logins of Same Credentials',
		description:
			'Restricts the users to log in on a single system or browser at a time, ensuring authenticated user access.',
		icon: SameCredentialImg,
	},
];

export const adminFeatures = [
	{
		title: 'Funds and Order Management',
		description: 'It includes:',
		items: [
			'Listing of borrow and lend orders',
			'Trade summary',
			'Deposit history',
			'Withdrawal history',
		],
	},
	{
		title: 'Lending Management',
		description: 'It comprises:',
		items: [
			'Loans KPI',
			'Finance KPI',
			'Bids history',
			'Offers history',
			'Fees Management',
		],
	},
	{
		title: 'Data-Rich Dashboard',
		description: 'Provides an overview of:',
		items: [
			'Registered and active users.',
			'Pending and approved KYC requests.',
			'Escrow account.',
			'Pending and approved KYC requests.',
			'Total loans and interest.',
			'Balance of all cryptocurrencies.',
		],
	},
	{
		title: 'Real-time Reporting',
		description:
			'Based on the set KPIs, the following reports can be generated:',
		items: ['Balance report', 'Trading report', 'Profit/revenue report'],
	},
];

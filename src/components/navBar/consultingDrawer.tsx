import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import DropdownLink from './dropdownLink';

const companiesLinks = [
	{
		title: 'Consulting Company',
		to: '/contact',
		description:
			'Ours is a blockchain consulting and solution provider company. You idealize, we realize!',
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

export default function ConsultingDrawer({
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
									Companies
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
								Consulting Companies
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
								We empower your business through blockchain consulting expertise
								that provides lasting gains.
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
							{companiesLinks.map((link) => (
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

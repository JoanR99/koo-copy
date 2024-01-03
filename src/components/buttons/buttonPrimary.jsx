import * as React from 'react';
import { Button } from '@mui/material';

export default function ButtonPrimary(props) {
	return (
		<Button
			disabled={props.disabled}
			type={props.type}
			sx={{
				color: '#EAE8E8',
				borderRadius: '10px',
				bgcolor: '#C02327',
				'&:hover': {
					bgcolor: '#C02327',
				},
				width: 'fit-content',
				padding: '8px 16px',
				boxShadow:
					'0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.04), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.06), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.08)',
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}

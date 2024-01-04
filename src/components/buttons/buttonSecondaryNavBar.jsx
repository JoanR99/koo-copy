import * as React from 'react';
import { Button } from '@mui/material';

function ButtonStyles(
	width = 'fit-content',
	height = 'fit-content',
	color = 'text.third',
	padding = '5px 10px'
) {
	return {
		width: width,
		height: height,
		color: '#EAE8E8',
		border: '.20rem solid #C02327',
		padding: padding,
		borderRadius: '10px',
		transition: '0.5s',
		':hover': {
			backgroundColor: 'background.paper',
			color: 'text.secondary',
		},
	};
}

export default function ButtonSecondaryNavBar(props) {
	return (
		<Button
			disabled={props.disabled}
			type={props.type}
			sx={{
				...ButtonStyles(
					props.width,
					props.height,
					props.disabled ? '#8C8C8C' : props.backgroundColor,
					props.padding
				),
				color: (theme) => theme.palette.text.primary,
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}

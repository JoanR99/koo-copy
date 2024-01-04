import * as React from 'react';
import { Button } from '@mui/material';

function ButtonStyles(
	width = 'fit-content',
	height = 'fit-content',
	color = 'text.third',
	backgroundColor = '#C02327',
	padding = '5px 10px'
) {
	return {
		width: width,
		height: height,
		color: '#EAE8E8',
		border: '.20rem solid #C02327',
		backgroundColor: backgroundColor,
		padding: padding,
		borderRadius: '10px',
		':hover': {
			backgroundColor: '#EAE8E8',
			border: '1px solid',
			borderColor: 'background.default',
			color: '#C02327',
		},
	};
}

export default function ButtonPrimaryNavBar(props) {
	return (
		<Button
			disabled={props.disabled}
			type={props.type}
			sx={ButtonStyles(
				props.width,
				props.height,
				props.color,
				props.disabled ? '#8C8C8C' : props.backgroundColor,
				props.padding
			)}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	);
}

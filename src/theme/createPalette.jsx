import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, indigo, info, neutral, success, warning } from './colors';

export function createPalette(mode) {
	return {
		action: {
			active: neutral[500],
			disabled: alpha(neutral[900], 0.38),
			disabledBackground: alpha(neutral[900], 0.12),
			focus: alpha(neutral[900], 0.16),
			hover: alpha(neutral[900], 0.04),
			selected: alpha(neutral[900], 0.12),
		},
		background: {
			default: common.white,
			paper: common.white,
		},
		divider: '#F2F4F7',
		error,
		info,
		mode: mode,
		...(mode == 'light'
			? {
					background: {
						default: '#EAE8E8',
						paper: '#303030',
					},
					text: {
						primary: '#000',
						secondary: '#EAE8E8',
						third: '#c02327',
					},
					icon: {
						primary: '#303030',
						secondary: '#F5F5F5',
						third: '#c02327',
					},
			  }
			: {
					background: {
						default: '#303030',
						paper: '#EAE8E8',
					},
					text: {
						primary: '#EAE8E8',
						secondary: '#303030',
						third: '#c02327',
					},
					icon: {
						primary: '#F5F5F5',
						secondary: '#303030',
						third: '#c02327',
					},
			  }),
		neutral,
		primary: indigo,
		success,
		warning,
	};
}

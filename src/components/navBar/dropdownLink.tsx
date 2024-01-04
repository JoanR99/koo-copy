import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const StyledLink = styled(Link)({
	textDecoration: 'none',
	color: 'black',
	'&:hover': {
		color: '#C02327',
	},
	fontSize: '12px',
	fontWeight: '500',
});

type DropdownLinkProps = {
	link: {
		title: string;
		to: string;
		description: string;
	};
	handleClose: () => void;
};

export default function DropdownLink({ link, handleClose }: DropdownLinkProps) {
	const location = useLocation();
	return (
		<Stack
			spacing="8px"
			sx={{
				maxWidth: '280px',
			}}
			key={link.title}
		>
			<Stack
				direction="row"
				spacing="8px"
				alignItems="center"
				onClick={handleClose}
			>
				{location.pathname == link.to && (
					<ArrowRightAltIcon sx={{ color: '#C02327' }} />
				)}
				<StyledLink
					to={link.to}
					sx={{
						color: location.pathname == link.to ? '#C02327' : 'black',
					}}
				>
					{link.title}
				</StyledLink>
			</Stack>

			<Typography
				sx={{
					fontSize: {
						xs: '10px',
					},
					fontWeight: {
						xs: '500',
					},
					color: {
						xs: '#000',
					},
				}}
			>
				{link.description}
			</Typography>
		</Stack>
	);
}

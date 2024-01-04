import React, { useState } from 'react';
import {
	Box,
	Typography,
	Divider,
	InputBase,
	styled,
	FormControl,
	FormHelperText,
	InputAdornment,
	CardMedia,
	Autocomplete,
	TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { contactUs } from '@/schemas';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import countriesList from '@/const/countries';
import imgForm from '@/assets/Img/svg/img_form_contact_form.svg';
import ButtonSecondary from '@/components/buttons/buttonSecondary';

const CustomStyledInput = styled(InputBase)(({ theme }) => ({
	backgroundColor: '#eae8e8',
	padding: '10px 15px',
	borderRadius: '5px',
}));

export default function ContactUsForm() {
	const [flag, setFlag] = React.useState('');
	const [open, setOpen] = useState(false);

	const countriesOptions = countriesList.map((option) => ({
		id: option.codecountry,
		label: option.country,
	}));

	const formik = useFormik({
		initialValues: {
			fullname: '',
			email: '',
			phonenumber: '',
			country: '',
			message: '',
		},
		validationSchema: contactUs,
		onSubmit: async (values, { resetForm }) => {
			try {
				setLoading(true);
				// await Login(values);
				resetForm();
				setTimeout(() => {
					setLoading(false);
					navigate('/chat');
				}, 3000);
			} catch (error) {
				console.log(`error ${error}`);
				setLoading(false);
			}
		},
	});
	function StyledContainerPrimary() {
		return {
			display: 'flex',
			flexDirection: { xs: 'column', md: 'row' },
			width: '1200px',
			height: '100%',
		};
	}
	function StyledContainerTitle() {
		return {
			width: { xs: '100%', md: '480px' },
			height: '100%',
			p: '30px',
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
		};
	}
	function StyledContainerFormPrimary() {
		return {
			width: { xs: '100%', md: '725px' },
			height: '100%',
			backgroundColor: '#c02327',
			p: '30px',
			borderRadius: '5px',
		};
	}
	function StyledContainerFormSecondary() {
		return {
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
		};
	}
	function StyledContainerIcon() {
		return {
			display: 'flex',
			gap: '30px',
		};
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
			}}
		>
			<Box sx={StyledContainerTitle}>
				<Typography
					variant="h2"
					sx={{ color: (theme) => theme.palette.text.primary }}
				>
					You can contact us to help you solve your doubts.
				</Typography>
				<Typography
					variant="body2"
					sx={{ color: (theme) => theme.palette.text.primary }}
				>
					email@email.com
				</Typography>
				<Typography
					variant="body2"
					sx={{ color: (theme) => theme.palette.text.primary }}
				>
					00 0000 00 00
				</Typography>
				<Divider />
				<Box sx={StyledContainerIcon}>
					<InstagramIcon
						fontSize="large"
						sx={{
							display: 'flex',
							gap: '30px',
							color: (theme) => theme.palette.text.primary,
						}}
					/>
					<LinkedInIcon
						fontSize="large"
						sx={{
							display: 'flex',
							gap: '30px',
							color: (theme) => theme.palette.text.primary,
						}}
					/>
					<TelegramIcon
						fontSize="large"
						sx={{
							display: 'flex',
							gap: '30px',
							color: (theme) => theme.palette.text.primary,
						}}
					/>
				</Box>
				<Box>
					<CardMedia
						component="img"
						image={imgForm}
						alt="Games Logo"
						sx={{
							height: { xs: '100%', md: '350px', lg: '100%' },
							cursor: 'pointer',
							objectFit: 'contain',
						}}
						onClick={() => {
							navigate(`/`);
						}}
					/>
				</Box>
			</Box>
			<Box sx={StyledContainerFormPrimary}>
				<Typography
					variant="body2"
					sx={{ color: '#eae8e8', pb: '20px', textAlign: 'center' }}
				>
					Send us a message and we will contact you.
				</Typography>
				<form onSubmit={formik.handleSubmit}>
					<Box sx={StyledContainerFormSecondary}>
						<FormControl variant="standard">
							<CustomStyledInput
								onBlur={formik.handleBlur}
								error={
									formik.touched.fullname && Boolean(formik.errors.fullname)
								}
								onChange={formik.handleChange}
								value={formik.values.fullname}
								placeholder="name"
								id="fullname"
								name="fullname"
								autoComplete="fullname"
								sx={{
									color: '#303030',
								}}
							/>
							{formik.touched.fullname && (
								<FormHelperText
									id="fullname-error"
									sx={{
										textAlign: 'center',
										color: 'white',
									}}
								>
									{formik.errors.fullname}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl variant="standard">
							<CustomStyledInput
								onBlur={formik.handleBlur}
								error={formik.touched.email && Boolean(formik.errors.email)}
								onChange={formik.handleChange}
								value={formik.values.email}
								placeholder="email"
								id="email"
								name="email"
								autoComplete="email"
								sx={{
									color: '#303030',
								}}
							/>
							{formik.touched.email && (
								<FormHelperText
									id="email-error"
									sx={{
										textAlign: 'center',
										color: 'white',
									}}
								>
									{formik.errors.email}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl variant="standard">
							<CustomStyledInput
								onBlur={formik.handleBlur}
								error={
									formik.touched.phonenumber &&
									Boolean(formik.errors.phonenumber)
								}
								onChange={formik.handleChange}
								value={formik.values.phonenumber}
								placeholder="phone number"
								id="phonenumber"
								name="phonenumber"
								autoComplete="tel"
								inputProps={{
									type: 'number',
								}}
								sx={{
									color: '#303030',
								}}
							/>
							{formik.touched.phonenumber && (
								<FormHelperText
									id="phonenumber-error"
									sx={{
										textAlign: 'center',
										color: 'white',
									}}
								>
									{formik.errors.phonenumber}
								</FormHelperText>
							)}
						</FormControl>
						<FormControl variant="standard">
							<Autocomplete
								freeSolo
								open={open}
								onOpen={() => setOpen(true)}
								onClose={() => setOpen(false)}
								options={countriesOptions}
								id="country-autocomplete"
								value={formik.values.country}
								onChange={(event, newValue) => {
									console.log(`country is ${JSON.stringify(newValue.label)}`);
									setFlag(newValue.id);
									formik.setFieldValue('country', newValue.label);
								}}
								sx={{
									display: 'inline-block',
									backgroundColor: '#eae8e8',
									padding: '10px 15px',
									borderRadius: '5px',
									border: 'none',
								}}
								renderOption={(props, option, state) => (
									<Box
										component="li"
										sx={{
											'& > img': {
												mr: 2,
												flexShrink: 0,
											},
											border: '0px',
											color: (theme) => theme.palette.text.primary,
											bgcolor: (theme) => theme.palette.background.default,
											height: 'fit-content',
											p: 0,
											m: 0,
											transition: '0.6s',
											':hover': {
												color: '#c02327',
											},
										}}
										{...props}
										key={state.index}
									>
										Country: {option.label}
									</Box>
								)}
								renderInput={(params) => (
									<TextField
										{...params}
										variant="standard"
										InputProps={{
											...params.InputProps,
											disableUnderline: true,
											startAdornment: (
												<InputAdornment
													position="start"
													sx={{
														display: 'flex',
														height: '100%',
													}}
												>
													<CardMedia
														title=""
														image={`https://flagcdn.com/${flag}.svg`}
														sx={{
															width: '40px',
															height: '25px',
															borderRadius: '5px',
															backgroundColor: 'icon.primary',
														}}
													/>
													<ArrowDropDownIcon
														fontSize="large"
														sx={{
															color: '#303030',
															cursor: 'pointer',
															transition: '0.5s',
															rotate: open ? '180deg' : '0deg',
														}}
														onClick={() => setOpen(!open)}
													/>

													<Divider
														orientation="vertical"
														flexItem
														sx={{
															color: '#c02327',
															backgroundColor: '#c02327',
															width: '2.5px',
														}}
													/>
												</InputAdornment>
											),
										}}
										sx={{
											height: '100%',
											'& .MuiInputBase-root': {
												color: '#000',
												backgroundColor: 'transparent',
												'&:hover': {
													backgroundColor: 'transparent',
												},
												'&.Mui-focused': {
													backgroundColor: 'transparent',
												},
											},
										}}
									/>
								)}
							/>
						</FormControl>
						<FormControl variant="standard">
							<CustomStyledInput
								onBlur={formik.handleBlur}
								error={formik.touched.message && Boolean(formik.errors.message)}
								onChange={formik.handleChange}
								value={formik.values.message}
								placeholder="Message"
								id="message"
								name="message"
								multiline
								rows={10}
								sx={{
									color: '#303030',
								}}
							/>
							{formik.touched.message && (
								<FormHelperText
									id="message-error"
									sx={{
										textAlign: 'center',
										color: 'white',
									}}
								>
									{formik.errors.message}
								</FormHelperText>
							)}
						</FormControl>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<ButtonSecondary
								disabled={!(formik.dirty && formik.isValid)}
								type="submit"
								color="#000"
							>
								Submit
							</ButtonSecondary>
						</Box>
					</Box>
				</form>
			</Box>
		</Box>
	);
}

import { Box, CardMedia, Container, Typography, styled } from "@mui/material"
import img1 from "../../../assets/Img/svg/material-symbols_arrow-back-ios-new.svg"
import img2 from "../../../assets/Img/svg/material-symbols_arrow-back-ios-new (1).svg"
import imgGroup from "../../../assets/Img/svg/completo.svg"

export const ForDecentralized = () => {
    const BoxContainerStyle = styled(Box)({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        // height: '32.5rem',
        flexShrink: 0,
        background: '#C02327',
    })
    const BoxText = styled(Box)({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        // gap: '4rem',
    })
    const CardMediaStyle = styled(CardMedia)({
        color: '#FFFFFF',
        width: '2rem'
    })
    const TypographyStyled = styled(Typography)({
        color: '#EAE8E8',
        fontFamily: 'Inter',
        width: '32rem',
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    })
    const TypographyLorem = styled(Typography)({
        color: '#EAE8E8',
        width: '28.125rem',
        fontFamily: 'Inter',
        // fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    })
    const CardMediaImg = styled(CardMedia)({
        flexShrink: 0
    })
    return (
        <BoxContainerStyle sx={{
            height: {
                xs: '40rem',
                sm: '40.5rem',
                md: '49rem',
                lg: '37.5rem'
            },
        }}>
            <BoxText sx={{
                md: {
                    flexWrap: 'wrap',
                },
                justifyContent: {
                    md: 'center',
                    lg: 'flex-start'
                },
                width: {
                    xs: '18rem',
                    sm: '50rem',
                    md: '35rem',
                    lg: '100rem'
                },
                height: {
                    xs: '45rem'
                },
                gap: {
                    xs: '1rem',
                    sm: '1rem',
                    md: '.5rem',
                    lg: '2.2rem'
                },
            }}>
                <CardMediaStyle image={img1} component='img' />
                <Box sx={{
                    width: {
                        xs: '12rem',
                        sm: '27rem',
                        md: '30rem',
                        lg: '29.5rem'
                    },
                }} >
                    <TypographyStyled variant="h1" sx={{
                        // fontSize: '2.5rem !important',
                        fontSize: {
                            xs: '1.4rem !important',
                            sm: '2rem !important',
                            md: '2rem !important',
                            lg: '2.5rem !important'
                        },
                        width: {
                            xs: '14rem',
                            sm: '22rem',
                            md: '20rem',
                            lg: '30rem',
                        },
                        paddingBottom: '1rem'
                    }}>
                        For a decentralized World
                    </TypographyStyled>
                    <TypographyLorem sx={{
                        fontSize: {
                            xs: '1.1rem !important',
                            sm: '1.4rem !important',
                            md: '1rem !important',
                            lg: '1.25rem',
                        },
                        width: {
                            xs: '12rem',
                            sm: '22rem',
                            md: '20rem',
                            lg: '32rem',
                        }
                    }}>
                        Lorem ipsum dolor sit amet consectetur. Blandit in id sed pulvinar. Libero porta erat quam tincidunt aliquet et.
                    </TypographyLorem>
                </Box>
                <CardMediaStyle image={img2} component='img' />
                <Box sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    height: {
                        xs: '18.8rem',
                        sm: '22rem',
                        md: '29rem',
                        lg: '36rem'
                    }
                }}>
                    <CardMediaImg image={imgGroup} sx={{
                        width: {
                            xs: '35rem',
                            sm: '45rem',
                            md: '45rem',
                            lg: '53.125rem'
                        },
                        height: {
                            xs: '20rem',
                            sm: '20rem',
                            md: '26rem',
                            lg: '30.87906rem'
                        },
                    }} />
                </Box>
            </BoxText>
        </BoxContainerStyle>
    )
}

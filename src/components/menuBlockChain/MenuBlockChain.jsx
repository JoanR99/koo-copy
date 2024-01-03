import { Box, CardMedia, Typography, styled } from "@mui/material"
import flecha from '../../assets/Img/svg/vector.svg'

export const MenuBlockChain = () => {
    const BoxComponent = styled(Box)({
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
    })
    const BoxFlecha = styled(Box)({
        display: 'flex',
        height: '1.5rem',
        padding: '0.125rem 0.0625rem',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: '0.5rem',
    })
    const BoxTitle = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        // width: '30rem',
        alignItems: 'flex-start',
        gap: '0.5rem',
    })
    const CardMediaFlecha = styled(CardMedia)({
        width: '0.875rem',
        height: '0.68669rem',
        flexShrink: 0,
        fill: '#C02327'
    })
    const TypographyCardTitle = styled(Typography)({
        fontFamily: 'Poppins',
        fontSize: '1rem !important',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    })
    const TypographyLorem = styled(Typography)({
        width: '17.9375rem',
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: '0.925rem !important',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    })
    return (
        <BoxComponent>
            <BoxTitle sx={{
                width: {
                    xs: '13rem',
                    sm: '20rem',
                    md: '25rem',
                    lg: '30rem'
                },
            }}>
                <Typography sx={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '0.9375rem !important',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                }}>
                    Blockchain Development
                </Typography>
                <Typography sx={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '0.875rem !important',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                }}>
                    Lorem ipsum dolor sit amet consectetur. Cursus tristique a mattis cursus.
                </Typography>
            </BoxTitle>
            <Box sx={{
                display: 'inline-flex',
                alignItems: 'flex-start',
            }}>
                <BoxFlecha>
                    <CardMediaFlecha image={flecha} component='flecha' />
                </BoxFlecha>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: {
                        xs: '40rem',
                        sm: '40rem',
                        md: '45rem',
                        lg: '80.85rem'
                    },
                    height: {
                        xs: '20rem',
                        sm: '12rem',
                        dm: '10rem'
                    },
                    padding: '0.5rem',
                    alignItems: 'flex-start',
                    gap: '3.875rem',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                    }}>
                        <TypographyCardTitle>
                            Blockchain Development
                        </TypographyCardTitle>
                        <TypographyLorem>
                            Lorem ipsum dolor sit amet consectetur. Cursus tristique a mattis cursus.
                        </TypographyLorem>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                    }}>
                        <TypographyCardTitle>
                            Blockchain Development
                        </TypographyCardTitle>
                        <TypographyLorem>
                            Lorem ipsum dolor sit amet consectetur. Cursus tristique a mattis cursus.
                        </TypographyLorem>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                    }}>
                        <TypographyCardTitle>
                            Blockchain Development
                        </TypographyCardTitle>
                        <TypographyLorem>
                            Lorem ipsum dolor sit amet consectetur. Cursus tristique a mattis cursus.
                        </TypographyLorem>
                    </Box>
                </Box>
            </Box>
        </BoxComponent>
    )
}

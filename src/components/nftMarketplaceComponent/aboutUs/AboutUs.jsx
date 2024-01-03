import { Box, CardMedia, Container, Grid, Typography, styled } from "@mui/material"
import logo1 from '../../../assets/Img/svg/logo1About.svg'
import logo2 from '../../../assets/Img/svg/logo2About.svg'

export const AboutUs = () => {
    const BoxComponentStyle = styled(Box)({
        display: 'flex',
        width: '100vw',
        padding: '3rem',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        background: '#C02327',
    })
    const GridCard = styled(Grid)({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '3rem',
        gap: '3rem',
    })
    const TypographyTitleStyle = styled(Typography)({
        color: '#EAE8E8',
        fontFamily: 'Poppins',
        fontSize: '1.5625rem !important',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
    })
    const TypographyTextStyle = styled(Typography)({
        color: '#EAE8E8',
        fontFamily: 'Poppins',
        fontSize: '1.25rem !important',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    })
    return (
        <BoxComponentStyle sx={{
            height: {
                xs: '150rem',
                sm: '117rem',
                md: '90rem',
                lg: '70rem'
            }
        }}>
            <Grid container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <GridCard item>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
                        <TypographyTitleStyle sx={{
                            width: '12.0625rem',
                            height: '2.125rem',
                        }}>
                            Que es un NFT?
                        </TypographyTitleStyle>
                        <CardMedia image={logo1} component='logo1' sx={{
                            width: '6.525rem',
                            height: '6.525rem',
                        }} />
                    </Box>
                    <Box>
                        <TypographyTextStyle sx={{
                            // width: '40.25rem',
                            width: {
                                xs: '18rem',
                                sm: '28rem',
                                lg: '40.25rem'
                            },
                            height: {
                                sm: '10.8rem',
                                lg: '9.375rem'
                            },
                        }}>
                            Un NFT, o token no fungible, es un activo digital único que se puede utilizar para representar una amplia gama de objetos, como obras de arte, música, videos, artículos de colección y más. Los NFT son únicos e irrepetibles.
                        </TypographyTextStyle>
                    </Box>
                </GridCard>
                <GridCard item>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
                        <TypographyTextStyle sx={{
                            // width: '40.4375rem',
                            height: {
                                sm: '25rem',
                                lg: '17rem'
                            },
                            width: {
                                xs: '18rem',
                                sm: '28rem',
                                lg: '40.4375rem'
                            },
                        }}>
                            Los NFT se basan en la tecnología blockchain, que es una base de datos descentralizada que se asemeja a un libro de contabilidad público. La cadena de bloques registra la propiedad de cada NFT, lo que garantiza su autenticidad y seguridad. Cuando un usuario compra un NFT, la cadena de bloques se actualiza para reflejar la nueva propiedad del NFT. Esto significa que el propietario del NFT puede demostrar su propiedad del activo, incluso si se transfiere a otra persona.
                        </TypographyTextStyle>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                        }}>
                            <TypographyTitleStyle sx={{
                                width: '1p.25rem',
                                height: '2.125rem',
                            }}>
                                Como funciona un NFT?
                            </TypographyTitleStyle>
                            <CardMedia image={logo2} component='logo1' sx={{
                                width: '6.125rem',
                                height: '6.125rem',
                            }} />
                        </Box>
                    </Box>
                </GridCard>
                <GridCard item>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
                        <TypographyTitleStyle sx={{
                            width: '14.0625rem',
                            height: '2.125rem',
                        }}>
                            Mercado de arte
                        </TypographyTitleStyle>
                        <CardMedia image={logo1} component='logo1' sx={{
                            width: '6.525rem',
                            height: '6.525rem',
                        }} />
                    </Box>
                    <Box>
                        <TypographyTextStyle sx={{
                            width: {
                                xs: '18rem',
                                sm: '28rem',
                                lg: '38.8125rem'
                            },
                            height: '22.5rem',
                        }}>
                            Un mercado de Arte NFT proporciona una forma nueva y segura de comprar y vender obras de arte digitales. Los NFT permiten a los artistas crear y vender sus obras de arte de forma digital, lo que les abre un mercado global de coleccionistas. Los NFT también están cambiando la forma en que los coleccionistas de arte interactúan con el mercado. Los coleccionistas pueden comprar y vender NFT de forma rápida y sencilla, y pueden rastrear la historia de propiedad de cada NFT.
                        </TypographyTextStyle>
                    </Box>
                </GridCard>
            </Grid>

        </BoxComponentStyle>
    )
}

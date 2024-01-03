import { Box, Container, Typography, styled } from "@mui/material"
import { CardCrearNft } from "../cardMarketPlace/CardCrearNft"

export const CrearNft = () => {
    const BoxStyle = styled(Box)({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
    })
    const TypographyTitleStyle = styled(Typography)({
        color: '#C02327',
        fontFamily: 'Poppins',
        // fontSize: '2.8125rem',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: 'normal',
    })
    return (
        <Box>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5rem',
            }}>
                <TypographyTitleStyle sx={{
                    fontSize: {
                        xs: '1.5525rem !important',
                        sm: '2.8125rem !important',
                        md: '2.8125rem !important',
                        lg: '2.8125rem !important'
                    },
                }}>
                    Crea un NFT en tres pasos
                </TypographyTitleStyle>
                <CardCrearNft />
            </Container>
        </Box>
    )
}

import { Box, CardMedia, Typography, styled } from '@mui/material'
import menu from "../../assets/Img/svg/ep_arrow-up-bold.svg"
import menu1 from "../../assets/Img/svg/ep_arrow-up-bold(1).svg"
import { MenuBlockChain } from './MenuBlockChain'

export const SiderBlockChain = () => {
    const BoxSiderBar = styled(Box)({
        display: 'flex',
        // width: '16.4375rem',
        // height: '29.6875rem',
        paddingTop: '1.5rem',
        alignItems: 'flex-start',
        gap: '3.6875rem',
        flexShrink: 0,
        background: '#EAE8E8'
    })
    const BoxConteSideBar = styled(Box)({
        display: 'flex',
        // width: '16.4375rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexShrink: 0
    })
    return (
        <Box sx={{
            width: {
                xs: '7.9rem',
                sm: '11rem',
                md: '15.43rem',
                lg: '16.4375rem'
            },
        }}>
            <BoxSiderBar sx={{
                width: {
                    xs: '7.9rem',
                    sm: '11rem',
                    md: '15.43rem',
                    lg: '16.4375rem'
                },
                height: '29.6875rem',
            }}>
                <BoxConteSideBar sx={{
                    width: {
                        xs: '5rem',
                        sm: '11rem',
                        md: '15.43rem',
                        lg: '16.4375rem'
                    },

                }}>
                    <Box sx={{
                        display: 'flex',
                        width: {
                            xs: '8rem',
                            sm: '11rem',
                            md: '15.43rem',
                            lg: '17.1375rem'
                        },
                        height: '3rem',
                        padding: '0.5rem 1rem',
                        alignItems: 'center',
                        gap: {
                            xs: '.1rem',
                            sm: '3rem',
                            md: '7.5rem',
                            lg: '7rem'
                        },
                        background: '#FFF'
                    }}>
                        <Typography
                            sx={{
                                color: '#C02327',
                                fontFamily: 'Poppins',
                                fontSize: '0.875rem !important',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                flex: '1 1 auto',
                            }}>
                            Blockchain Development
                        </Typography>
                        <Box>
                            <CardMedia image={menu} component='menu' sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end',
                                width: '2.55rem',
                                height: '2.55rem',
                                flexShrink: 0,
                                flex: '1 1 auto',
                            }} />
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: {
                            xs: '8rem',
                            sm: '11rem',
                            md: '15.43rem',
                            lg: '17.4375rem'
                        },
                        height: '3rem',
                        padding: '0.5rem 1rem',
                        alignItems: 'center',
                        gap: {
                            xs: '2rem',
                            sm: '5rem',
                            md: '9.4rem',
                            lg: '7rem'
                        },
                    }}>
                        <Typography
                            sx={{
                                color: '#000',
                                fontFamily: 'Poppins',
                                fontSize: '0.804rem !important',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                flex: '1 1 auto',
                            }}>
                            Smart Contract
                        </Typography>
                        <CardMedia image={menu} component='menu' sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            width: '2.55rem',
                            height: '2.55rem',
                            flexShrink: 0,
                            flex: '1 1 auto',
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: {
                            xs: '8rem',
                            sm: '11rem',
                            md: '15.43rem',
                            lg: '16.9375rem'
                        },
                        height: '3rem',
                        padding: '0.5rem 0.5rem 0.5rem 1rem',
                        alignItems: 'center',
                        gap: {
                            xs: '.3rem',
                            lg: '5.425rem'
                        },
                    }}>
                        <Typography
                            sx={{
                                color: '#000',
                                fontFamily: 'Poppins',
                                fontSize: '0.875rem !important',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                flex: '1 1 auto',
                            }}>
                            Asset Tokenization
                        </Typography>
                        <CardMedia image={menu} component='menu' sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            width: '2.55rem',
                            height: '2.55rem',
                            flexShrink: 0,
                            flex: '1 1 auto',
                        }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        width: {
                            xs: '8rem',
                            sm: '11rem',
                            md: '15.43rem',
                            lg: '16.9375rem'
                        },
                        height: '3rem',
                        padding: '0.5rem 0.5rem 0.5rem 1rem',
                        alignItems: 'center',
                        gap: {
                            xs: '1.9rem',
                            // sm: '5rem',
                            // md: '6rme',
                            lg: '7.9075rem'
                        },
                    }}>
                        <Typography
                            sx={{
                                color: '#000',
                                fontFamily: 'Poppins',
                                fontSize: '0.799rem !important',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                flex: '1 1 auto',
                            }}>
                            P2P Lending
                        </Typography>
                        <CardMedia image={menu} component='menu' sx={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            width: '2.55rem',
                            height: '2.55rem',
                            flexShrink: 0,
                            flex: '1 1 auto',
                        }} />
                    </Box>
                </BoxConteSideBar>
                <MenuBlockChain />
            </BoxSiderBar>
        </Box>
    )
}

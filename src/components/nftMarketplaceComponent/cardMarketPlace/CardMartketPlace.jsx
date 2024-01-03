import { Box, CardMedia, Divider, Typography, styled } from "@mui/material"
import logoUser from '../../../assets/Img/svg/mdi_user-outline.svg'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export const CardMartketPlace = (props) => {
    console.log(props.tamañoUser);
    const width = props.width
    const height = props.height
    const fontSize = props.fontSize
    const widthCont = props.widthCont
    const heightCont = props.heightCont
    const heightImgUser = props.heightImgUser
    const widthImgUser = props.widthImgUser
    const heightCardUser = props.heightCardUser
    const widthCardUser = props.widthCardUser
    const { widthUser, heightUser, fontSizeUser } = props.tamañoUser;
    const { widthDiv } = props.dividerWidth
    const { widthMin, heightMin, letra } = props.minDidTamaño

    const BoxStyle = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '.5rem .01rem 1rem .1rem',
        justifyContent: 'center',
        width: widthCont,
        height: heightCont,
        // gap: '.09rem',
        flexShrink: 0,
        borderRadius: '1.25rem',
        background: '#595959',
        boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.1)',
    })
    const TypographyStyle = styled(Typography)({
        color: '#FFF',
        textAlign: 'center',
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        lineHeight: 'normal',
        fontWeight: 800,
    })
    const BoxUser = styled(Box)({
        width: widthUser,
        height: heightUser,
        display: 'flex',
        // width: '6.10138rem',
        // height: '2.15981rem',
        padding: '0.625rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.625rem',
        flexShrink: 0,
    })
    return (
        <BoxStyle>
            <CardMedia image={props.image} component='img' sx={{
                width: { width },
                height: { height },
                borderRadius: '1.25rem'
            }} />
            <Box sx={{
                display: 'flex',
                gap: '0.625rem',
                padding: '0.625rem'
            }}>
                <TypographyStyle variant="h6" component='p' sx={{
                    fontSize: fontSize,
                }}>
                    {props.title}
                </TypographyStyle>

            </Box>
            <Box sx={{
                display: 'flex',
                width: '8.06125rem',
                height: '2.15981rem',
                padding: '0.625rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.625rem',
                flexShrink: 0,
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: widthCardUser,
                    height: heightCardUser,
                    borderRadius: '0.9375rem',
                    background: '#414141',
                    flexShrink: 0,
                    boxShadow: '0px 20px 20px 0px rgba(0, 0, 0, 0.1)',
                }}>
                    {/* <CardMedia image={logoUser} component='user' sx={{
                        width: widthImgUser,
                        height: heightImgUser,
                        background: '#414141',
                        borderRadius: '0.9375rem',
                        objectFit: 'cover',
                        backgroundPosition: 'center',
                        // flexShrink: 0,
                    }} /> */}
                    <PersonOutlineIcon sx={{ color: '#EAE8E8' }} />
                </Box>
                <BoxUser>
                    <TypographyStyle variant="h6" component='span' sx={{
                        fontSize: fontSizeUser,
                    }}>
                        @UserUser
                    </TypographyStyle>

                </BoxUser>
            </Box>
            <Divider sx={{
                padding: '.4rem',
                width: widthDiv
            }} />
            <Box sx={{
                display: 'flex',
                width: widthMin + 1,
                height: heightMin,
                padding: '0.1rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.625rem',
                flexShrink: 0,
            }}>
                <TypographyStyle sx={{
                    padding: '.4rem',
                    fontSize: letra,
                }}>
                    {props.minDid}
                </TypographyStyle>
            </Box>
            <TypographyStyle sx={{
                fontSize: letra,
            }}>
                {props.buyNow}
            </TypographyStyle>
        </BoxStyle >
    )
}

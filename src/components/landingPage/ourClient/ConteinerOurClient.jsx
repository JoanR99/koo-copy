import { Box } from "@mui/material"
import { Empresa } from "../individualCardTegnogoly/Empresa"
import eclipse from '@/assets/Img/tegImg1.png'

export const ConteinerOurClient = () => {
    const cards = [
        {
            img: eclipse,
            title: 'Empresa'
        },
        {
            img: eclipse,
            title: 'Empresa'
        },
        {
            img: eclipse,
            title: 'Empresa'
        },
        {
            img: eclipse,
            title: 'Empresa'
        },
        {
            img: eclipse,
            title: 'Empresa'
        },
    ]
    return (
        <Box sx={{
            display: 'flex',
            // alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            width: {
                xs: '18rem',
                sm: '28rem',
                md: '48rem',
                lg: '78rem'
            },
        }}>
            {
                cards.map((card) => {
                    return (
                        <Empresa
                            image={card.img}
                            title={card.title} />
                    )
                })
            }
        </Box >
    )
}

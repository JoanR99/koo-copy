import { Box } from "@mui/material"
import { CardCaseStudies } from "../individualCardTegnogoly/CardCaseStudies"
import image from '@/assets/Img/Rectangle.png'

export const ContainerCard = () => {
    const cards = [
        {
            img: image,
            title: 'Case Studies',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        },
        {
            img: image,
            title: 'Case Studies',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        },
        {
            img: image,
            title: 'Case Studies',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }
    ]
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4rem',
            flexWrap: 'wrap',
            width: {
                xs: '18rem',
                sm: '28rem',
                md: '48rem',
                lg: '78rem'
            },
            alignItems: {
                xs: 'center',
                sm: 'flex-start'
            }
        }}>
            {cards.map((card) => {
                return (
                    <CardCaseStudies
                        image={card.img}
                        title={card.title}
                        lorem={card.lorem} />

                )
            })}
        </Box>
    )
}

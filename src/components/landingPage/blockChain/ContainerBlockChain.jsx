import { Container, styled } from "@mui/material"
import { CardBlockChain } from "../individualCardTegnogoly/CardBlockChain"
import img from "@/assets/Img/Rectangle.png"

export const ContainerBlockChain = () => {
    const cards = [
        {
            img: img,
            title: 'Blockchain in Finance',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Insurance',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Healtcare',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Agriculture',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Transportation',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Transportation',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Energy',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        }, {
            img: img,
            title: 'Blockchain in Retail',
            lorem: 'Lorem ipsum dolor sit amet consectetur. Aliquam morbi aliquam nunc ante. Purus auctor vestibulum est lectus fringilla molestie sagittis urna suspendisse. Vulputate donec vitae aliquam et aliquam lacinia.'
        },
    ]
    const ContainerStyle = styled(Container)({
        display: 'flex',
        width: '68.6875rem',
        // alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'center',
        gap: '2.5rem',
        flexWrap: 'wrap',
    })
    return (
        <ContainerStyle
            sx={{
                width: {
                    xs: "18.6875rem",
                    sm: "28.6875rem",
                    md: "48.6875rem",
                    lg: "68.6875rem",
                },
                alignItems: {
                    xs: 'center',
                    sm: 'flex-start'
                }
            }}
        >
            {cards.map(card => {
                return (
                    <CardBlockChain
                        image={card.img}
                        title={card.title}
                        lorem={card.lorem} />
                )
            })}
        </ContainerStyle>
    )
}

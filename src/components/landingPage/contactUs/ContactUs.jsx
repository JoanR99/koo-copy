import { Container } from '@mui/material';
import ContactUsForm from '../../form/contactUsForm';

export default function ContactUs() {
  return (
    <Container
      sx={{
        py: '40px',
        maxWidth: '100vw',
      }}
    >
      <ContactUsForm />
    </Container>
  );
}

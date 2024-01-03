import FirstSection from '@/components/metaverse/firstSection';
import SecondSection from '@/components/metaverse/secondSection';
import ThirdSection from '@/components/metaverse/thirdSection';
import FourthSection from '@/components/metaverse/fourthSection';
import FifthSection from '@/components/metaverse/fifthSection';
import SixthSection from '@/components/metaverse/SixthSection';
import SeventhSection from '@/components/metaverse/seventhSection';
import ThirteenthSection from '@/components/metaverse/thirteenthSection';
import TwelfthSection from '@/components/metaverse/twelfthSection';
import EleventhSection from '@/components/metaverse/eleventhSection';
import TenthSection from '@/components/metaverse/tenthSection';
import NinthSection from '@/components/metaverse/ninthSection';
import EighthSection from '@/components/metaverse/eighthSection';
import { Box } from '@mui/material';

export default function Metaverse() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        maxWidth: '100vw',
      }}
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <TenthSection />
      <EleventhSection />
      <TwelfthSection />
      <ThirteenthSection />
    </Box>
  );
}

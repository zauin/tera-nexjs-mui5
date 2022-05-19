import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Hero from '@components/Hero'
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";

import NavigationCard from "@components/NavigationCard";

const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/images/home-hero.jpg"
        imgAlt="Hero Image"
        title="Next.js 체험코딩"
        subtitle="Next.js와 MUI로 빠르게 웹사이트 만들기"
      />
      <SectionAbout />
      <SectionImage imgSrc="/images/fusion-food.jpg" imgAlt="fusion food" />
      <SectionReview />
      <SectionImage imgSrc="/images/sushi.jpg" imgAlt="fusion sushi" />

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/images/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/images/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="/catering"
              ctaText="Find Out"
            />

          </Grid>
        </Grid>
      </Container>
    </>    
  );
};

export default Homepage;

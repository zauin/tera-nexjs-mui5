import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/images/chef.svg"
            alt="A Chef"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid item xs={12} sm={6}
          container flexDirection="column" justifyContent="center" alignItems="center"
        >
          <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
            [체험코딩]이란
          </Typography>
          <Typography textAlign="center" sx={{ mb: 2 }}>
            [체험코딩]이란 제대로 배우기 전에, <br/>나랑 잘 맞나 안맞나 체험을 해보고 결정하는 과정입니다.
            <br/><br/>
            이 사이트는 &quot;Next.js로 웹사이트 만들어 배포하기&quot; 강의를 보고 따라 만들어 본 사이트입니다.
          </Typography>
          <MuiNextLink href="/about-us" underline="none">
            <Button variant="outlined" size="large">
              About Us
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;

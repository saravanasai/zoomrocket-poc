import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavButton from "../buttons/NavButton.jsx";

const HeroSection = ({
  headTittle,
  secondText,
  secondBody,
  firstNavButton,
  secondNavButton,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
        marginTop: 8,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {headTittle}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {secondText},<Typography variant="body1">{secondBody}.</Typography>
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {firstNavButton}

          {secondNavButton || <></>}
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;

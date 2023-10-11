import { Typography, Button, Container } from '@mui/material';


const App = () => {
  return (
    <main>
      <Container display="flex">
        <Typography align="center">Text</Typography>
        <div>
          <Typography variant="h4" color="secondary">
            Heading with Primary Color
          </Typography>
          <Typography variant="body1" color="secondary.light">
            Sample text with Primary Text Color
          </Typography>
          <Button variant="contained" color="secondary">
            Secondary Color Button
          </Button>          <Button variant="contained" color="secondary.light">
            Secondary Color Button
          </Button>          <Button variant="contained" color="secondary">
            Secondary Color Button
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default App;

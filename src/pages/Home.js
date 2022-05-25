import logo from '../logo.svg';
import '../App.css';

// Import de react-router-dom
import { Link } from 'react-router-dom';

// Import components
import NavBar from "../components/NavBar";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'red',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Je suis en React
        </p>
        <Link
          className="App-link"
          to="/aboutme"
        >
          BeniDiego.js
        </Link>
        <Stack spacing={5}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </header>
    </div>
  );
}

export default Home;

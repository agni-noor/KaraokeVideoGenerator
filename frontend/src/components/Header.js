import React from 'react'
import {Container, AppBar, Typography} from "@mui/material";
import { headerStyles } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <Container maxWidth="lg">
    <AppBar sx={headerStyles.topBar} position="static" color="inherit">
      <Typography sx={headerStyles.heading} variant="h3" align="center">
        Karaoke Video Generation
      </Typography>
    </AppBar>
    </Container>
  )
}

export default Header
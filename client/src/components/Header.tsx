import React from 'react'
import { AppBar, Typography } from '@mui/material'

const Header = () => {
  return (
    <AppBar  position="static" color="inherit">
    <Typography  variant="h2" align="center">
     Karaoke Video Generator
    </Typography>
  </AppBar>
  )
}

export default Header
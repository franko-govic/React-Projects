import React from 'react'
import {AppBar, Toolbar, Typography, Container} from '@mui/material'


function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" component="p">
            MORTAGE CALCULATOR
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export {Navbar} 
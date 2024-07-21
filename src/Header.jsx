import { AppBar, Box, Button, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import theme from './Component/Themes'

function Header() {
  return (


    <Box sx={{flexGrow: 1}}>
        <AppBar position='static'>
            <Toolbar>
                
            <Typography sx={{ flexGrow:1}} component="div" color="blue" variant='h6'>accredian</Typography>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>Features</Button>
            <Button  color='inherit'>Contact</Button>

            <Button variant='contained' sx={{ml:2}}  color='success'>Get Started</Button>
            
            </Toolbar>

        </AppBar>
    </Box>


  )
}

export default Header
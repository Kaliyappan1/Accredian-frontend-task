import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (


    <Box sx={{flexGrow: 1}}>
        <AppBar position='static' sx={{background: "white"}}>
            <Toolbar>
                
            <Typography sx={{ flexGrow:1}} component="div" color="blue" variant='h6'>accredian</Typography>
            <Button >Home</Button>
            <Button >Features</Button>
            <Button >Contact</Button>

            <Button variant='contained' sx={{ml:2}}  color={"success"}>Get Started</Button>
            
            </Toolbar>

        </AppBar>
    </Box>


  )
}

export default Header
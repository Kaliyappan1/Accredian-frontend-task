import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div>
        <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0}} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >

            <Typography >accredian</Typography>

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright ©2024
          </Typography>
        </Box>
      </Container>
    </Paper>
    </div>
  )
}

export default Footer
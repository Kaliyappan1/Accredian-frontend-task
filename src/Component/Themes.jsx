import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        background: {
            default: "aliceblue"
          },
        primary: {
            main: '#e3f2fd'
        },
        secondary: {
            main: '#1976d2'
        },
       success: {
        main: '#5e35b1'
       }
    }
})

export default theme
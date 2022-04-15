import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
      background: {
        default: colors.common.white,
        dark: '#eeeeee',
        paper: colors.common.white,
    },
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
    },
  },
});

export default theme;

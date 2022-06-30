import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
import { getDirection } from '../localization/index'

const theme = createMuiTheme({
  direction: getDirection(),
  palette,
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans'
    },
    h1: {
      fontSize: 35,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 31,
      fontWeight: 'bold'
    },
    h3: {
      fontSize: 27,
      fontWeight: 500
    },
    h4: {
      fontSize: 23,
      fontWeight: 500
    },
    h5: {
      fontSize: 19,
      fontWeight: 'bold'
    },
    h6: {
      fontSize: 15,
      fontWeight: 'bold'
    },
    h7: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    body1: {
      fontSize: 16,
      fontWeight: 300
    },
    body2: {
      fontSize: 14,
      fontWeight: 300
    },

    subtitle1: {
      fontSize: 22,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 300
    },
    caption: {
      fontSize: 12,
      fontWeight: 200
    },
    smallcaption: {
      fontSize: 10,
      fontWeight: 150
    },
    button: {
      fontSize: 15
    },
    overline: {
      fontSize: 13,
      fontWeight: 500,
      textDecoration: 'line-through',
      color: 'red'
    }
  }
})

export default responsiveFontSizes(theme)

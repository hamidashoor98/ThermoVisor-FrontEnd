import { makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

const theme = useTheme()
const drawerWidth = 240

export default makeStyles(props => ({
  root: {
    display: 'flex'
  },
  chip: {
    backgroundColor: '#104d56'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  headerlogo: { flexDirection: 'row' },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  topDrawer: {
    width: '100%',
    paddingLeft: '10px',
    padding: '5px 0',
    textAlign: 'left'
  },
  txti: {
    textAlign: 'right'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1d2b36',
    height: '100vh'
  },
  bottomDrawer: {
    padding: '6px 30px',
    textAlign: 'center',
    width: '100%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  root: {
    width: '100%'
  },
  DividerStyle: { backgroundColor: '#1d2b36', border: '0.4em solid #1d2b36' },
  DividerMiniStyle: {
    backgroundColor: '#2e363c',
    border: '0.05em solid #2e363c'
  },
  bgcolor: {
    backgroundColor: '#1d2b36',
    padding: '0px 12px',
    justifyContent: 'center',
    width: '239px'
  },
  button: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    backgroundColor: '#1d2b36'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    backgroundColor: '#1d2b36'
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center',
    backgroundColor: '#1d2b36'
  },
  column: {
    flexBasis: '33.33%',
    backgroundColor: '#1d2b36'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    backgroundColor: '#1d2b36'
  },
  editpanel: {
    borderLeft: `3px solid ${theme.palette.divider}`,
    padding: '2px 9px',
    backgroundColor: '#1d2b36',
    fontSize: 14
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    backgroundColor: '#1d2b36',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  students: {
    backgroundColor: '#113b36',
    padding: '1px',
    paddingBottom: '5%'
  },
  paneltext: {
    color: '#787f86'
  }
}))

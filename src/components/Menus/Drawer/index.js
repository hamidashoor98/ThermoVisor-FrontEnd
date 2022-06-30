import React, { useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import { HandleDrawerToggleContext } from '../../../contexts/HandleDrawerToggleContext'
import { makeStyles } from '@material-ui/core/styles'
import HeaderLogo from '../../../assets/images/thermologo.png'
import TextLogothermologo from '../../../assets/images/thermovisor.png'
import { changeLanguage, getTranslate } from '../../../localization/index'
import { Button } from '@material-ui/core'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
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
  headerlogo: {
    display: 'flex',
    flexDirection: 'row'
  },
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

function ResponsiveDrawer(props) {
  const translate = getTranslate()
  const { window } = props
  const { mobileOpen, handleDrawerToggle } = useContext(
    HandleDrawerToggleContext
  )

  const classes = useStyles()

  const drawer = (
    <>
      <div className={classes.headerlogo}>
        <img
          style={{
            width: null,
            height: 62,
            resizeMode: 'contain'
          }}
          src={HeaderLogo}
          alt=""
        />
        <img
          style={{
            width: 160,
            height: 40,
            justifyContent: 'center',
            resizeMode: 'contain',
            marginTop: 9
          }}
          src={TextLogothermologo}
          alt=""
        />
      </div>

      <Divider style={{ border: '0.05em solid white' }} />
      <List style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <div className={classes.root} />
      </List>
      <Divider />

      <div className={classes.bottomDrawer}>
        <Button style={{ fontSize: 13 }} onClick={() => changeLanguage('fa')}>
          {' '}
          فارسی
        </Button>
        {'/'}
        <Button style={{ fontSize: 13 }} onClick={() => changeLanguage('en')}>
          {' '}
          English
        </Button>
      </div>
    </>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <div className={classes.root} />

      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={() => handleDrawerToggle()}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main />
    </div>
  )
}

export default ResponsiveDrawer

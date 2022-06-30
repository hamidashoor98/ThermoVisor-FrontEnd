import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { getTranslate, lang } from '../../../localization/index'
import { HandleDrawerToggleContext } from '../../../contexts/HandleDrawerToggleContext'

import { makeStyles } from '@material-ui/core'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
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
  title: {
    textAlign: 'left'
  },
  toolbar: {
    display: 'flex',
    flexDirection: lang == 'fa' ? 'row' : 'row-reverse'
  }
}))

export default function Header() {
  const translate = getTranslate()
  const classes = useStyles()
  const { handleDrawerToggle } = useContext(HandleDrawerToggleContext)

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6">
          {translate.header}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

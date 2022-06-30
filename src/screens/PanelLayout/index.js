import React from 'react'
import ThemeProvider from '../../components/ThemeProvider'
import HandleDrawerToggleContextProvider from '../../contexts/HandleDrawerToggleContext'
import rtl from 'jss-rtl'
import { getDirection } from '../../localization'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import Header from '../../components/Menus/Header'
import Drawer from '../../components/Menus/Drawer'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

export default function App() {
  return getDirection() === 'ltr' ? (
    <HandleDrawerToggleContextProvider>
      <ThemeProvider>
        <StylesProvider>
          <Header />
          <Drawer />
        </StylesProvider>
      </ThemeProvider>
    </HandleDrawerToggleContextProvider>
  ) : (
    <HandleDrawerToggleContextProvider>
      <ThemeProvider>
        <StylesProvider jss={jss}>
          <Header />
          <Drawer />
        </StylesProvider>
      </ThemeProvider>
    </HandleDrawerToggleContextProvider>
  )
}

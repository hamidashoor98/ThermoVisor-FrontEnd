import React, { useEffect } from 'react'
import LoginModals from '../../components/LoginModals'
import background from '../../assets/images/background.jpg'
import { CssBaseline } from '@material-ui/core'
import ThemeProvider from '../../components/ThemeProvider'
import rtl from 'jss-rtl'
import { getDirection } from '../../localization'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import LoginContextProvider from '../../contexts/LoginContext'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

export default function Login() {
  let history = useHistory()

  useEffect(() => {
    var m = localStorage.getItem('isLogedIn')
    if (localStorage.getItem('isLogedIn') == 'true') {
      history.push('/panel')
    } else {
      history.push('/')
    }
  }, [])
  return getDirection() === 'ltr' ? (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: 1356,
        backgroundSize: 'cover'
      }}
    >
      <LoginContextProvider>
        <ThemeProvider>
          <StylesProvider>
            <CssBaseline />
            <LoginModals />
          </StylesProvider>
        </ThemeProvider>
      </LoginContextProvider>
    </div>
  ) : (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: 1356,
        backgroundSize: 'cover'
      }}
    >
      <LoginContextProvider>
        <ThemeProvider>
          <StylesProvider jss={jss}>
            <CssBaseline />
            <LoginModals />
          </StylesProvider>
        </ThemeProvider>
      </LoginContextProvider>
    </div>
  )
}

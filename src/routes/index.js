import React, { useEffect } from 'react'
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom'
import PanelLayout from '../screens/PanelLayout'
import Login from '../screens/login'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/panel">
          <PanelLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

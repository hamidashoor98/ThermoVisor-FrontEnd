import React, { createContext, useState } from 'react'

const HandleDrawerToggleContext = createContext({
  mobileOpen: false,
  handleDrawerToggle: () => {}
})
export { HandleDrawerToggleContext }

export default function HandleDrawerToggleContextProvider({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  return (
    <HandleDrawerToggleContext.Provider
      value={{
        mobileOpen: mobileOpen,
        handleDrawerToggle: handleDrawerToggle
      }}
    >
      {children}
    </HandleDrawerToggleContext.Provider>
  )
}

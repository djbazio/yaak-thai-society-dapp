import React, { useState, useContext, useEffect } from "react"
import { loadingSeconds } from "../utils/constants"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }
  const closeSidebar = (e) => {
    if (!e.target.classList.contains("mobile-nav")) {
      setIsSidebarOpen(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", closeSidebar)

    if (isLoading) {
      document.body.classList.add("loading")
    }

    setTimeout(() => {
      setIsLoading(false)
    }, loadingSeconds * 1000)

    setTimeout(() => {
      document.body.classList.remove("loading")
    }, loadingSeconds * 1000 - 400)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        isSidebarOpen,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

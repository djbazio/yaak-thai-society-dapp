import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { Navbar } from "components"
import { Home } from "pages"
import { connectWallet } from "helpers/wallet"

function App() {
  const [walletAddress, setWalletAddress] = useState("")

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        onChangeWalletListener()
      }
    }

    initDatas()
  }, [])

  const onConnectWalletHandler = async () => {
    const walletResponse = await connectWallet()

    setWalletAddress(walletResponse.address)
  }

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0])
        } else {
          setWalletAddress("")
        }
      })

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler()
      })
    }
  }

  return (
    <Router>
      <Navbar
        walletAddress={walletAddress}
        onConnectWalletHandler={onConnectWalletHandler}
      />
      <Switch>
        <Route path="/" exact>
          <Home walletAddress={walletAddress} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

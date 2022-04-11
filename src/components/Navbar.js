import React from "react"
import styled from "styled-components"
import { FaDiscord, FaTwitter } from "react-icons/fa"
import { HamburgerIcon, OpenseaIcon } from "../assets"
import { links } from "utils/constants"
import { useAppContext } from "context/app_context"

const Nav = ({ walletAddress, onConnectWalletHandler }) => {
  const { toggleSidebar, isSidebarOpen } = useAppContext()

  return (
    <NavContainer>
      <nav className="container">
        <ul
          className={`nav-links${
            isSidebarOpen ? " glass-background active" : ""
          }`}
        >
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            )
          })}
          <li className="last-link-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={onConnectWalletHandler}>
              {walletAddress !== ""
                ? walletAddress.slice(0, 6) + " ... " + walletAddress.slice(38)
                : "Connect Wallet"}
            </a>
          </li>
        </ul>
        <button className="mobile-nav" type="button" onClick={toggleSidebar}>
          <HamburgerIcon />
        </button>
        <ul className="nav-icons">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/yaakthai"
            >
              <FaTwitter id="twitter" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opensea.io/collection/yaak-thai"
            >
              <OpenseaIcon id="opensea" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/twCeuSVGNG"
            >
              <FaDiscord id="discord" />
            </a>
          </li>
        </ul>
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.header`
  background-color: transparent;
  padding: 2rem 0;

  .container {
    z-index: 100;
  }

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    font-weight: 500;
    li {
      display: flex;
      a {
        display: flex;
        align-items: center;
        color: inherit;
        margin-right: 3rem;
      }
      &.last-link-item a {
        margin-right: 0;
      }
    }
  }

  .mobile-nav {
    display: none;
    height: 45px;

    svg {
      pointer-events: none;
    }
  }

  .nav-icons {
    display: flex;

    li {
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        background-color: #ebe1ff;
        border-radius: 50%;
        margin-right: 12px;
        svg {
          width: 20px;
          height: 20px;
        }
        #twitter {
          color: #31a8ff;
        }
        #discord {
          color: #7331ff;
          width: 22px;
          height: 22px;
        }
      }

      &:last-of-type a {
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    .nav-links {
      li {
        a {
          margin-right: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 820px) {
    padding: 1rem 0;
    .nav-links {
      display: none;
      position: absolute;
      top: 50%;
      left: 0;
      padding: 1rem 2rem;
      border-radius: 5px;
      overflow: hidden;
      max-width: 202px;
      z-index: 1;

      a {
        padding: 0.5rem 0;
      }

      &.active {
        display: block;
      }
    }
    .mobile-nav {
      display: block;
    }
  }
`

export default Nav

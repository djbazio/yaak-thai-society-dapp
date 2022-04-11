import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { BannerShape, mintBg, mintBgSmall } from "assets"
import { FaSpinner } from "react-icons/fa"
import { calculateTimeLeft } from "helpers/timer"

const Banner = ({
  maxMint,
  mintLoading,
  mintTotal,
  mintInputValue,
  onMintHandler,
  handleInputChange,
}) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <Wrapper>
      <div className="container">
        <div className="mint-banner">
          <div className="background">
            <img src={mintBg} alt="Mint Section Background" />
          </div>
          <div className="background-small">
            <img
              src={mintBgSmall}
              alt="Mint Section Background for Small Devices"
            />
          </div>
          <div className="mint-banner-text">
          <h2 className="come">Coming Soon!</h2>
            {/* <div className="mint-banner-clock flex">
              <div className="mint-banner-timer flex flex-column">
                <div className="flex">
                  <span>?</span>
                  <span>?</span>
                </div>
                <span>Days</span>
              </div>
              <div className="mint-banner-timer flex flex-column">
                <div className="flex">
                  <span>?</span>
                  <span>?</span>
                </div>
                <span>Hours</span>
              </div>
              <div className="mint-banner-timer flex flex-column">
                <div className="flex">
                  <span>?</span>
                  <span>?</span>
                </div>
                <span>Minutes</span>
              </div>
              <div className="mint-banner-timer flex flex-column">
                <div className="flex">
                  <span>?</span>
                  <span>?</span>
                </div>
                <span>Seconds</span>
              </div>
            </div> */}
            {Object.keys(timeLeft).length === 0 ? (
              <>
                <h2>Mint</h2>
                <p>{`Enter the amount of nipples you would like to buy ( ${maxMint} max ):`}</p>
                <div>
                  <input
                    type="text"
                    id="mintInput"
                    maxLength="2"
                    value={mintInputValue}
                    onChange={(e) => handleInputChange(e.target)}
                  />
                  <button onClick={() => !mintLoading && onMintHandler()}>
                    {mintLoading && <FaSpinner />}MINT
                  </button>
                  <p className="total-text">
                    Total: <span id="totalValue">{mintTotal} Eth</span>
                  </p>
                </div>
              </>
            ) : (
              <div className="mint-banner-clock flex">
                <div className="mint-banner-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.days[0]}</span>
                    <span>{timeLeft.days[1]}</span>
                  </div>
                  <span>Days</span>
                </div>
                <div className="mint-banner-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.hours[0]}</span>
                    <span>{timeLeft.hours[1]}</span>
                  </div>
                  <span>Hours</span>
                </div>
                <div className="mint-banner-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.minutes[0]}</span>
                    <span>{timeLeft.minutes[1]}</span>
                  </div>
                  <span>Minutes</span>
                </div>
                <div className="mint-banner-timer flex flex-column">
                  <div className="flex">
                    <span>{timeLeft.seconds[0]}</span>
                    <span>{timeLeft.seconds[1]}</span>
                  </div>
                  <span>Seconds</span>
                </div>
              </div>
            )}
          </div>
          <BannerShape className="banner-shape" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 3rem 0;

  .mint-banner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-width: 1240px;
    margin: 0 auto;
    justify-content: space-between;
    padding: 4rem 7rem 5rem 4rem;
    color: #180134;

    .background,
    .background-small {
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .mint-banner-text {
      width: 60%;
      align-self: center;

      h2 {
        line-height: 1;
        margin-bottom: 1rem;
      }
      & > p {
        margin-bottom: 2rem;
      }

      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      input {
        font-weight: 600;
        font-size: 1.5rem;
        padding: 1rem;
        width: 180px;
        text-align: center;
        background: linear-gradient(
            179.89deg,
            rgba(255, 255, 255, 0) 0.1%,
            #7a7ea9 161.67%
          ),
          linear-gradient(0deg, #f4f4f4, #f4f4f4), #f28f33;
        box-shadow: 0px 48.2439px 89.7561px rgba(35, 35, 35, 0.42);
        border-radius: 90px;
        margin-right: 0.5rem;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.65rem;
        letter-spacing: 2px;
        width: 180px;
        color: #fff;
        background: linear-gradient(
            180.38deg,
            rgba(255, 255, 255, 0) -106.48%,
            rgba(126, 0, 170, 0.45) 121.35%
          ),
          linear-gradient(0deg, #df1571, #df1571),
          linear-gradient(0deg, #f4f4f4, #f4f4f4), #f28f33;
        box-shadow: 0px 48.2439px 89.7561px rgba(35, 35, 35, 0.42);
        border-radius: 90px;
        margin-right: 1rem;
        transition: 0.3s;

        & > svg {
          margin-right: 16px;
          animation: spin 1s ease-in-out infinite;
        }
      }

      .total-text {
        flex: 1;
        font-weight: bold;
        align-self: center;
        word-break: break-all;
        span {
          color: #df1571;
        }
      }

      .mint-banner-clock {
        width: 100%;
        justify-content: space-around;

        .mint-banner-timer {
          margin-top: 32px;

          & > div {
            width: 100%;

            & > span {
              background-color: white;
              text-align: center;
              width: 56px;
              padding: 16px 0;
              font-size: 48px;
              font-family: pixel;
              border-radius: 8px;

              @media (max-width: 1024px) {
                width: 48px;
                font-size: 32px;
              }

              @media (max-width: 768px) {
                width: 36px;
                font-size: 28px;
              }

              @media (max-width: 425px) {
                width: 32px;
                font-size: 24px;
                padding: 12px 0;
              }

              &:not(:last-child) {
                margin-right: 4px;
              }
            }
          }

          & > span {
            text-align: center;
            font-size: 14px;
            color: red;
          }
        }
      }
    }

    .banner-shape {
      user-select: none;
      pointer-events: none;
      flex: 1;
      max-width: 305px;
      padding-left: 1rem;
    }
  }

  @media screen and (max-width: 1100px) {
    .mint-banner {
      padding: 6rem 4rem 5rem 3rem;
      .mint-banner-text {
        input {
          width: calc(50% - 0.25rem);
          margin-right: 0;
        }
        button {
          width: calc(50% - 0.25rem);
          margin-right: 0;
        }
        .total-text {
          text-align: center;
          margin-top: 2rem;
          flex: 0 1 auto;
          width: 100%;
          font-size: 1.8rem;
          font-weight: 500;
          span {
            color: #df1571;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    padding: 0;
    .mint-banner {
      max-width: 450px;
      padding: 2rem 1rem;
      .mint-banner-text {
        text-align: center;
        width: 100%;
        margin-bottom: 3rem;

        .total-text {
          font-size: 1.6rem;
        }
      }
      .banner-shape {
        max-width: 230px;
        margin: 0 auto;
      }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default Banner

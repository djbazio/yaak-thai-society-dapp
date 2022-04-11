import React from "react"
import styled from "styled-components"
import { GoChevronRight } from "react-icons/go"
import { faqBg, topLeftFeaturedBg, squareShapeRight } from "../assets"

const Faq = () => {
  const closeAccordions = () => {
    const allItems = [...document.querySelectorAll(".title")]
    allItems.forEach((element) => {
      element.classList.remove("active")
    })
  }
  const handleOpenItem = (el) => {
    const isOpen = el.classList.contains("active")

    closeAccordions()

    if (!isOpen) {
      const contentHeight = el.parentElement
        .querySelector("div>p")
        .getBoundingClientRect().height
      el.parentElement.style.setProperty(
        "--content-max-height",
        `${contentHeight + 16}px`
      )

      el.classList.add("active")
    }
  }

  return (
    <Wrapper>
      <div className="faq-background-small">
        <div className="bg-container">
          <img src={faqBg} alt="FAQ Background for Small Devices" />
        </div>
      </div>
      <div className="faq-background">
        <img
          className="square-shape"
          src={squareShapeRight}
          alt="Square Shape"
        />
        <img
          className="top-left-shape"
          src={topLeftFeaturedBg}
          alt="Top left shape"
        />
      </div>
      <div id="FAQ" className="container">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq">
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              What is an NFT? <GoChevronRight />
            </p>
            <div>
              <p>
                NFT is a unique digital asset stored on the Ethereum Blockchain.
                Its initials stand for ‘Non-Fungible Token’.
              </p>
            </div>
          </li>
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              How much would it cost me to purchase a Yaak Thai Society? <GoChevronRight />
            </p>
            <div>
              {/* <p>{nftPrice} Eth plus any additional Gas Fees.</p> */}
              <p>
                The cost will be 0.05 ETH for Presale and 0.069 ETH for Public
                sale plus any additional Gas Fees
              </p>
            </div>
          </li>
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              What are Ethereum Gas fees? <GoChevronRight />
            </p>
            <div>
              <p>
                To get your transaction validated, you need to make a unique
                kind of payment called Gas fees. This transaction fee covers the
                computer energy required to get your transaction validated.
              </p>
            </div>
          </li>
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              I want a Yaak Thai Society. How can I buy one? <GoChevronRight />
            </p>
            <div>
              <p>
                The process is quite simple. Install the crypto wallet called
                Metamask and create your digital portfolio. Metamask can be used
                to store Ethereum and assets such as NFTs. As soon as you have
                set up the Metamask crypto wallet, connect your wallet to our
                website and complete the purchase.
              </p>
            </div>
          </li>
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              How can i be sure that the donation to the charity is fulfilled?
              <GoChevronRight />
            </p>
            <div>
              <p>
                After we process the payment we will post an On-Chain proof
                regarding that payment on our social media platforms reassuring
                everyone that the transaction was validated and received by the
                charity.
              </p>
            </div>
          </li>
          <li>
            <p className="title" onClick={(e) => handleOpenItem(e.target)}>
              How can I Join the Yaak Thai Society? <GoChevronRight />
            </p>
            <div>
              <p>
                All you have to do is join our{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://discord.gg/"
                >
                  Discord Channel
                </a>
                {". "}
                From there, you will have all the essentials to navigate the
                Yaak Thai Society.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  padding: 6rem 0;
  padding-bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(50, 0, 110, 0),
    rgba(50, 0, 110, 0.7),
    #32006e
  );

  .faq-background {
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .square-shape {
      position: absolute;
      top: 0;
      right: 0;
    }

    .top-left-shape {
      position: absolute;
      top: -200px;
      left: -180px;
    }
  }

  .faq-background-small {
    user-select: none;
    pointer-events: none;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .bg-container {
      position: relative;
      &::after {
        content: "";
        background-image: linear-gradient(
          to bottom,
          rgba(45, 0, 103, 0),
          rgba(45, 0, 103, 0.7),
          #2d0067,
          rgba(45, 0, 103, 0.7),
          rgba(45, 0, 103, 0)
        );
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  .faq {
    --content-max-height: 0;
    li {
      padding-bottom: 1rem;
      div {
        position: relative;
        top: -1rem;
        z-index: 1;
        max-height: 0;
        overflow: hidden;
        background-color: #1b1b31;
        box-shadow: 45.8202px 43px 183.281px rgba(27, 49, 66, 0.05);
        border-radius: 0 0 25px 25px;
        transition: max-height 0.1s linear;

        p {
          font-size: 1rem;
          padding: 2.8rem 3rem 1.8rem 3rem;
          color: #dcdcdc;
          a {
            color: inherit;
            text-decoration: underline;
          }
        }
      }
      .title {
        position: relative;
        z-index: 2;
        padding: 1.8rem 4.875rem 1.8rem 3rem;
        background: #07071b;
        box-shadow: 45.8202px 43px 183.281px rgba(27, 49, 66, 0.13);
        cursor: pointer;
        border-radius: 25px;

        svg {
          pointer-events: none;
          font-size: 1.8rem;
          position: absolute;
          top: 50%;
          right: 3rem;
          transform: translateY(-50%);
          color: #12fed9;
          transition: transform 0.3s linear;
        }

        &.active {
          svg {
            transform: translateY(-50%) rotate(90deg);
          }

          & ~ div {
            max-height: var(--content-max-height) !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .faq {
      li {
        div {
          p {
            padding: 2.8rem 2rem 1.8rem 2rem;
            font-size: 0.875rem;
          }
        }
        .title {
          padding: 1.8rem 3.875rem 1.8rem 2rem;

          svg {
            right: 2rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 620px) {
    padding-top: 2.5rem;
    .faq-background {
      display: none;
    }
    .faq-background-small {
      display: block;
    }
  }
`

export default Faq

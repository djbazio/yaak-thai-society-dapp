import React from "react"
import styled from "styled-components"
import { loadingSeconds } from "../utils/constants"

const Loading = () => {
  return (
    <Wrapper className="loading-container">
      <div className="loading"></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #180134;
  animation: fade 0.4s linear ${loadingSeconds - 0.4}s;

  .loading {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 4px solid #4a1a86;
    border-top-color: #ff59f8;
    animation: spinner 0.6s linear infinite;
  }

  @keyframes fade {
    to {
      opacity: 0;
    }
  }
`

export default Loading

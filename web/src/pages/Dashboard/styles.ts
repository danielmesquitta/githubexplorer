import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { colors } from '../../styles/variables'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  line-height: 56px;

  margin-top: 80px;
`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: ${colors.error};
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${colors.button};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.05, colors.button)};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: ${colors.error};
  margin: 8px 24px;
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      b {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`

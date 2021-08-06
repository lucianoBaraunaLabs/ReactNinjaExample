import React from 'react'
import styled from 'styled-components'
import {
  Input as MaterialInput
} from '@material-ui/core'
import { Content, HeaderContent, H4, Footer } from 'ui'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

function ChoosePizzaQuantity () {
  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Quantas pizzas você gostaria<br /> de pedir, com esses sabores ?
          </H4>
        </HeaderContent>
        <MainContent>
          <Input defaultValue='1' autoFocus />
        </MainContent>
      </Content>
      <Footer buttons={[
        {
          to: CHOOSE_PIZZA_FLAVOURS,
          children: 'Mudar sabores'
        },
        {
          to: '/',
          children: 'Finalizar compra',
          color: 'primary'
        }
      ]}
      />

    </>
  )
}
const MainContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

export default ChoosePizzaQuantity

import React, { useState } from 'react'
import t from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button as MaterialButton,
  Card as MaterialCard,
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import { CardLink, Content, Divider, HeaderContent, H3, PizzasGrid } from 'ui'
import { singularOrPlural, toMoney } from 'utils'
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes'
import { useAuth } from 'hooks'

import pizzaFlavours from 'fake-data/pizzas-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState({})
  const { userInfo } = useAuth()
  console.log('userInfo: ', userInfo)
  console.log('logo de cara', checkboxes)
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id, slices, name } = location.state
  console.log(location.state)

  const handleChangeCheckBox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true) {
      return
    }

    setCheckboxes((checkboxes) => {
      console.log('handleChangeCheckBox', checkboxes)
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }
  return (
    <>
      <Content>
        <HeaderContent>
          <H3>
            Escolha até {`${flavours} ${singularOrPlural(location.state.flavours, 'sabor', 'sabores')}`}
          </H3>
        </HeaderContent>
        <PizzasGrid>
          {pizzaFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <CheckBox
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleChangeCheckBox(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />
                  <Divider />
                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>
      <Footer>
        <Container>
          <Grid container>
            <OrderContainer item>
              <Typography>
                <b>{userInfo.user.firstName}, seu pedido é:</b>
              </Typography>
              <Typography>
                Pizza <b>{name.toUpperCase()}</b> {'- '}
                ({slices} {singularOrPlural(slices, 'fatia', 'fatias')} {'- '}
                {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
              </Typography>
            </OrderContainer>
            <Grid item>
              <Button to={HOME}>Mudar tamanho</Button>
              <Button to={CHOOSE_PIZZA_QUANTITY} color='primary'>Quantas pizzas ?</Button>
            </Grid>
          </Grid>

        </Container>
      </Footer>
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''};
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`
const Footer = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  flex-grow: 1;
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained',
  component: Link
})`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`

export default ChoosePizzaFlavours

import React from 'react'
import {
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

function OrderInfo () {
  const { order } = useOrder()
  console.log('OrderInfo:', order)

  return (
    <List>
      {order.pizzas.map((pizza, index) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza
        const { name, slices, flavours } = pizzaSize

        return (
          <ListItem key={index}>
            <Typography>
              {quantity} {' '}
              {singularOrPlural(quantity, 'pizza', 'pizzas')} {' '}
              <b>{name.toUpperCase()}</b> {'- '}
              ({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
              {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})

              <br />

              {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>
          </ListItem>
        )
      })}
    </List>
  )
}

export default OrderInfo

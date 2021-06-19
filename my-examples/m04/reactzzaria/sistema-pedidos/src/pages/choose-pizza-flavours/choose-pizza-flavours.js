import React from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'
import { Divider, HeaderContent, H3, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'

import pizzaFlavours from 'fake-data/pizzas-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  return (
    <>
      <HeaderContent>
        <H3>
          Escolha até {`${flavours} ${singularOrPlural(location.state.flavours, 'sabor', 'sabores')}`}
        </H3>
      </HeaderContent>
      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Img src={pizza.image} alt={pizza.name} />
              <Divider />
              <Typography>{pizza.name}</Typography>
              <Typography variant='h5'>{pizza.value[id]}</Typography>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Img = styled.img`
  width: 200px;
`

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours

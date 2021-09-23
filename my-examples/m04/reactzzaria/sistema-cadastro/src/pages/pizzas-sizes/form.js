import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Grid, Typography } from '@material-ui/core'
import { TextField } from 'ui'
import { PIZZAS_SIZES } from 'routes'
import { useCollection } from 'hooks'

function FormRegisterSize () {
  const { id } = useParams()
  const { pizza, add } = usePizzaSize(id)
  console.log('pizza editar: ', pizza)
  const history = useHistory()

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    const { name, size, slices, flavours } = e.target.elements

    const normlaziedData = {
      name: name.value,
      size: +size.value,
      slices: +slices.value,
      flavours: Number(flavours.value)
    }

    await add(normlaziedData)
    history.push(PIZZAS_SIZES)
  }, [add, history])
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant='h4'>Cadastrar novo tamanho</Typography>
      </Grid>

      <Form onSubmit={handleSubmit}>
        <TextField
          label='Nome para esse tamanho. Ex: pequena'
          name='name'
        />

        <TextField
          label='Diâmetro da pizza em cm'
          name='size'
        />

        <TextField
          label='Quantidade de fatias'
          name='slices'
        />

        <TextField
          label='Quantidade de sabores'
          name='flavours'
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={`${PIZZAS_SIZES}`}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>Cadastrar</Button>
          </Grid>
        </Grid>

      </Form>
    </Container>
  )
}

const Container = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`

const Form = styled(Grid).attrs({
  item: true,
  container: true,
  xs: 12,
  spacing: 2,
  component: 'form'
})``

const initialState = {
  name: '',
  size: '',
  slices: '',
  flavours: ''
}

function usePizzaSize (id) {
  const { data, add } = useCollection('pizzasSizes')
  const [pizza, setPizza] = useState(initialState)

  useEffect(() => {
    setPizza(data?.find(p => p.id === id) || initialState)
  }, [pizza, id, setPizza, data])

  return { pizza, add }
}

export default FormRegisterSize

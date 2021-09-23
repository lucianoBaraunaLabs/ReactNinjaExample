import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'
import {
  Button as MaterialButton,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core'
import { Add, Delete, Edit } from '@material-ui/icons'
import { TableContainer, TableTitle, THead, Th } from 'ui'
import { useCollection } from 'hooks'
import { singularOrPlural } from 'utils'

import { PIZZAS_SIZES, NEW, EDIT } from 'routes'

function TablePizzasSizes () {
  const { data: pizzaSizes, remove } = useCollection('pizzasSizes')
  const newSizePath = useRouteMatch(`${PIZZAS_SIZES}${NEW}`)

  return (
    <TableContainer>
      <TitleContainer container>
        <Grid item>
          <TableTitle>
            Tamanhos cadastrados
          </TableTitle>
        </Grid>

        <Grid item>
          <Button
            color='primary'
            startIcon={<Add />}
            component={Link}
            disabled={!!newSizePath}
            to={`${PIZZAS_SIZES}${NEW}`}
          >
            Adicionar novo tamanho
          </Button>
        </Grid>
      </TitleContainer>

      <Table>
        <THead>
          <TableRow>
            <Th>Nome</Th>
            <Th>Diâmetro</Th>
            <Th>Fatias</Th>
            <Th>Sabores</Th>
            <Th />
          </TableRow>
        </THead>

        <TableBody>
          {pizzaSizes?.map((pizza) => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.size} cm</TableCell>
              <TableCell>{pizza.slices} fatias</TableCell>
              <TableCell>
                {pizza.flavours}{' '}
                {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
              </TableCell>

              <TableCell align='right'>
                <Button
                  startIcon={<Edit />}
                  component={Link}
                  to={`${PIZZAS_SIZES}${EDIT(pizza.id)}`}
                  >
                    Editar
                  </Button>
                <Button
                  color='secondary'
                  startIcon={<Delete />}
                  onClick={() => remove(pizza.id)}
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const TitleContainer = styled(Grid).attrs({
  container: true,
  justify: 'space-between',
  alignItems: 'center'
})`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
    ${TableTitle} {
      padding: 0
    }
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default TablePizzasSizes

import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
  useMemo
} from 'react'
import { Link, useParams } from 'react-router-dom'

import { Button, Grid, Typography } from '@material-ui/core'
import { TextField, Form, FormContainer } from 'ui'
import { PIZZAS_FLAVOURS } from 'routes'

function FormRegisterFlavour () {
  const { id } = useParams()
  const nameField = useRef()

  const texts = useMemo(() => ({
    title: id ? 'Editar sabor' : 'Cadastrando novo sabor',
    button: id ? 'Salvar' : 'Cadastrar'
  }), [id])

  useEffect(() => {
    nameField.current.focus()
  }, [id])

  return (
    <FormContainer>
      <Grid item xs={12}>
        <Typography variant='h4'>{texts.title}</Typography>
      </Grid>
      <Form>
        <TextField
          label='Nome do sabor. Ex: pequena'
          name='name'
          inputRef={nameField}
        />

        <Grid item container justify='flex-end' spacing={2}>
          <Grid item>
            <Button
              variant='contained'
              component={Link}
              to={`${PIZZAS_FLAVOURS}`}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' type='submit'>{texts.button}</Button>
          </Grid>
        </Grid>
      </Form>
    </FormContainer>
  )
}

export default FormRegisterFlavour

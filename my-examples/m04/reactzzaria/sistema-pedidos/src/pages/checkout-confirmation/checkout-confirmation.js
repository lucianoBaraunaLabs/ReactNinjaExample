import React from 'react'
import styled from 'styled-components'
import { Container, Paper, Typography, Divider as MateiralDivider } from '@material-ui/core'
import { Content, H4, H6, OrderInfo } from 'ui'
import { useAuth } from 'hooks'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()

  return (
    <Content>
      <Header>
        <H4>{userInfo.user.firstName}!</H4>
        <Typography>
          Confere, por favor, se está tudo certo com o seu pedido
        </Typography>
      </Header>
      <Container maxWidth='sm'>
        <PaperContainer>
          <H6>Seu pedido</H6>
          <OrderInfo />

          <Divider />

          <H6>Endereço para entrega:</H6>
          <Typography>RUa laola</Typography>

          <Divider />

          <H6>Telefone para contato:</H6>
          <Typography>(44)99-99-99</Typography>

        </PaperContainer>
      </Container>
    </Content>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const PaperContainer = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

const Divider = styled(MateiralDivider)`
  margin: ${({ theme }) => theme.spacing(3, 0)}
`

export default CheckoutConfirmation

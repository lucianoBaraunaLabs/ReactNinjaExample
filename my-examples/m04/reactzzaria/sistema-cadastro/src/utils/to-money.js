function toMoney (value) {
  return Number(value).toLocaleString('PT-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

export default toMoney

import React, { createContext } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  function addPizzaOrder (pizza) {
    console.log('addPizzaOrder ', pizza)
  }

  return (
    <OrderContext.Provider value={{ addPizzaOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }

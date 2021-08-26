import React, { createContext, useState } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])

  function addPizzaOrder (pizza) {
    addPizza((pizzas) => pizzas.concat(pizza))
  }

  return (
    <OrderContext.Provider value={{
      addPizzaOrder,
      order: {
        pizzas
      }
    }}
    >
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: t.node.isRequired
}

export { OrderProvider, OrderContext }

import React, { createContext, useState } from 'react'
import t from 'prop-types'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)

  function addPizzaOrder (pizza) {
    if (orderInProgress) {
      addPizza((pizzas) => pizzas.concat(pizza))
    }
    setOrderInProgress(false)
    addPizza([pizza])
  }

  function sendOrder () {
    console.log('sendOrder')
    setOrderInProgress(false)
  }

  return (
    <OrderContext.Provider value={{
      addPizzaOrder,
      sendOrder,
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

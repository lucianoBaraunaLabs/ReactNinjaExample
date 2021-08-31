import React, { createContext, useState } from 'react'
import t from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const OrderContext = createContext()

function OrderProvider ({ children }) {
  const [pizzas, addPizza] = useState([])
  const [orderInProgress, setOrderInProgress] = useState(false)

  function addPizzaOrder (pizza) {
    if (orderInProgress) {
      addPizza((pizzas) => pizzas.concat(newPizza(pizza)))
    }
    setOrderInProgress(true)
    addPizza([newPizza(pizza)])
  }

  function newPizza (pizza) {
    return {
      id: uuidv4(),
      ...pizza
    }
  }

  function removePizzaFromOrder (id) {
    console.log('removePizzaFromOrder:', id)
    // addPizza((pizzas) => pizzas.filter(p => p.id !== id))
  }

  function sendOrder () {
    console.log('sendOrder')
    setOrderInProgress(false)
  }

  return (
    <OrderContext.Provider value={{
      addPizzaOrder,
      removePizzaFromOrder,
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

import { useEffect, useState } from 'react'
import { db } from 'services/firebase'

function useOrders () {
  const [orders, setOrders] = useState(null)

  useEffect(() => {
    const initialState = {
      delivered: [],
      inProgress: [],
      outForDeliverey: [],
      pending: []
    }

    db.collection('orders').get().then(querySnapshot => {
      const docs = []

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      const newOrders = docs.reduce((acc, doc) => {
        return {
          ...acc,
          pending: acc.pending.concat(doc)
        }
      }, initialState)

      setOrders(newOrders)
    })
  }, [])
  return { orders }
}

export default useOrders

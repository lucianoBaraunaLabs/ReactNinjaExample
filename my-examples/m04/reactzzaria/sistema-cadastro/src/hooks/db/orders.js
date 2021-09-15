import { useEffect, useState, useMemo } from 'react'
import { db } from 'services/firebase'

function useOrders () {
  const [orders, setOrders] = useState(null)

  const status = useMemo(() => ({
    delivered: 'delivered',
    inProgress: 'inProgress',
    outForDeliverey: 'outForDeliverey',
    pending: 'pending'
  }), [])

  useEffect(() => {
    const initialStatus = Object.keys(status).reduce((acc, status) => {
      acc[status] = []
      return acc
    }, {})

    db.collection('orders').get().then(querySnapshot => {
      const docs = []

      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setOrders(
        docs.reduce((acc, doc) => {
          const mainStatus = doc.status || status.pending

          return {
            ...acc,
            [mainStatus]: acc[mainStatus].concat(doc)
          }
        }, initialStatus)
      )
    })
  }, [status])
  return { orders, status }
}

export default useOrders

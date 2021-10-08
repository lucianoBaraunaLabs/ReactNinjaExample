import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { db } from 'services/firebase'
import { useMounted } from 'hooks'

function useCollection (collection) {
  const [data, setData] = useState(null)
  const { pathname } = useLocation()
  const mounted = useMounted()

  const fetchCollectionData = useCallback(() => {
    db.collection(collection).get().then(querySnapshot => {
      const docs = []
      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      if (mounted.current) {
        setData(docs)
      }
    })
  }, [collection, mounted])

  const add = useCallback((data) => {
    return db.collection(collection).add(data)
  }, [collection])

  const edit = useCallback((id, data) => {
    return db.collection(collection).doc(id).set(data)
  }, [collection])

  const remove = useCallback(async (id) => {
    await db.collection(collection).doc(id).delete()
    fetchCollectionData()
  }, [collection, fetchCollectionData])

  const removePizzaSize = useCallback(async () => {
    db.runTransaction((transition) => {
      console.log('transaction: ', transition)
    })
  }, [])

  useEffect(() => {
    fetchCollectionData()
  }, [fetchCollectionData, pathname])

  return { data, add, edit, remove, removePizzaSize }
}

export default useCollection

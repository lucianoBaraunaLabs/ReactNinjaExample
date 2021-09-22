import { useCallback, useEffect, useState } from 'react'
import { db } from 'services/firebase'

function useCollection (collection) {
  const [data, setData] = useState(null)

  const add = useCallback((data) => {
    console.log('data add new ', data)
    return db.collection(collection).add(data)
  }, [collection])

  useEffect(() => {
    let mounted = true

    db.collection(collection).get().then(querySnapshot => {
      const docs = []
      querySnapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          ...doc.data()
        })
      })

      if (mounted) {
        setData(docs)
      }
    })
    // Desmontando o componente e setando um valor para dizer que ele
    // está desmontando
    return () => {
      mounted = false
    }
  }, [collection])

  return { data, add }
}

export default useCollection

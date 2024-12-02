import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import ListItem from './components/ListItem'


const App = () => {
  const { data, loading } = useContext(UserContext)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export default App
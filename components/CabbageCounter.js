import {useContext} from 'react'
import {GameContext} from '../context/GameContext'

const CabbageCounter = () => {
  const {cabbages} = useContext(GameContext)

  return (
    <div>
      <h2>Cabbages: {cabbages}</h2>
    </div>
  )
}

export default CabbageCounter

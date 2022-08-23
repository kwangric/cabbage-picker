import {useContext} from 'react'
import {GameContext} from '../context/GameContext'

const CabbageCounter = () => {
  const {cabbages, cabbagesPerSecond, gameInterval} = useContext(GameContext)

  // setInterval(gameInterval, 1000)

  return (
    <div>
      <h2>Cabbages: {cabbages.toFixed(0)}</h2>
      <h3>CpS: {cabbagesPerSecond.toFixed(1)}</h3>
    </div>
  )
}

export default CabbageCounter

import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

const CabbageCounter = () => {
  const { cabbages, cabbagesPerSecond } = useContext(GameContext)

  return (
    <div>
      <h2>Cabbages: {cabbages.toFixed(0)}</h2>
      <h3>CpS: {cabbagesPerSecond % 1 === 0 ? cabbagesPerSecond.toFixed(0) : cabbagesPerSecond.toFixed(1)}</h3>
    </div>
  )
}

export default CabbageCounter

import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import cabbageCounterStyles from '../styles/CabbageCounter.module.css'


const CabbageCounter = () => {
  const { cabbages, cabbagesPerSecond, commify } = useContext(GameContext)

  return (
    <Box className={cabbageCounterStyles.counter}>
      <Typography variant="h5">Cabbages: {commify(Math.floor(cabbages))}</Typography>
      <Typography variant="subtitle1">{`(${commify(cabbagesPerSecond % 1 === 0 ? cabbagesPerSecond.toFixed(0) : cabbagesPerSecond.toFixed(1))} per second)`}</Typography>
    </Box>
  )
}

export default CabbageCounter

import patchStyles from '../styles/Patch.module.css'
import Cabbage from './Cabbage'
import Box from '@mui/material/Box'

const Patch = () => {
  let rows = [...Array(7).keys()]

  return (
    <Box className={patchStyles.patch}>
      {rows.map((row) => {
        return (
          <div className={patchStyles.row} key={row}>
            <Cabbage />
            <Cabbage />
            <Cabbage />
            <Cabbage />
          </div>
        )
      })}
    </Box>
  )
}

export default Patch

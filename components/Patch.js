import patchStyles from '../styles/Patch.module.css'
import Cabbage from './Cabbage'

const Patch = () => {
  let rows = [...Array(7).keys()]

  return (
    <div className={patchStyles.patch}>
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
    </div>
  )
}

export default Patch

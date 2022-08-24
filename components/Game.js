import CabbageCounter from './CabbageCounter'
import Patch from './Patch'
import GeneratorList from './GeneratorList'
import gameStyles from '../styles/Game.module.css'

const Game = () => {
  return (
    <div className={gameStyles.game}>
      <div className={gameStyles.main}>
        <CabbageCounter />
        <Patch />
      </div>
      <div>
        <GeneratorList />
      </div>
    </div>
  )
}

export default Game

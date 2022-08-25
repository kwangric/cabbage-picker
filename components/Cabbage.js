import { useState, useContext } from 'react'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import CabbageStyles from '../styles/Cabbage.module.css'
import { GameContext } from '../context/GameContext'

const Cabbage = () => {
  const [clicked, setClicked] = useState(false)
  const {increaseCabbages, pop} = useContext(GameContext)

  const handleClick = () => {
    if (!clicked) {
      pop()
      increaseCabbages(1)
      setClicked(true)
      setTimeout(function () {
        setClicked(false)
      }, 5000)
    }
  }

  return (
    <div className={CabbageStyles.preventSelect}>
      <Image
        src={CabbageIcon}
        alt="cabbage"
        width={50}
        height={40}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
        className={clicked ? `${CabbageStyles.hidden}` : ''}
        draggable="false"
      />
    </div>
  )
}

export default Cabbage

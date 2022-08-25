import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import CabbageCounter from './CabbageCounter'
import Patch from './Patch'
import GeneratorList from './GeneratorList'
import gameStyles from '../styles/Game.module.css'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'

const Game = () => {
  const [open, setOpen] = useState(false)
  const { saveGame, resetGame } = useContext(GameContext)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const reset = () => {
    resetGame()
    handleClose()
  }

  return (
    <>
      <div className={gameStyles.buttons}>
        <Button size="small" onClick={() => saveGame()}>
          Save
        </Button>
        <Button size="small" onClick={handleClickOpen}>
          Reset
        </Button>
      </div>
      <div className={gameStyles.game}>
        <div className={gameStyles.main}>
          <CabbageCounter />
          <Patch />
        </div>
        <div>
          <GeneratorList />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Are you sure?'}</DialogTitle>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={reset}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Game

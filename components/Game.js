import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import CabbageCounter from './CabbageCounter'
import Patch from './Patch'
import GeneratorList from './GeneratorList'
import gameStyles from '../styles/Game.module.css'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import Snackbar from '@mui/material/Snackbar'

const Game = () => {
  const [open, setOpen] = useState(false)
  const [saveOpen, setSaveOpen] = useState(false)
  const [secret, setSecret] = useState(false)
  const { saveGame, resetGame } = useContext(GameContext)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleSaveClick = () => {
    setSaveOpen(true)
  }

  const handleSaveClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSaveOpen(false)
  }

  const save = () => {
    saveGame()
    handleSaveClick()
  }

  const reset = () => {
    resetGame()
    handleClose()
  }

  return (
    <>
      <div className={gameStyles.topBar}>
        <Typography
          variant="button"
          display="block"
          gutterBottom
          onClick={() => setSecret(true)}
        >
          {secret ? 'Kah Bah Gee!' : 'Cabbage Picker'}
        </Typography>
        <div className={gameStyles.buttons}>
          <Button size="small" onClick={save}>
            Save
          </Button>
          <Button size="small" onClick={handleClickOpen}>
            Reset
          </Button>
        </div>
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
      <div className={gameStyles.bottomBar}>
        <Button size="small">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kwangric/cabbage-picker"
            underline="none"
          >
            Source Code
          </Link>
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{'Are you sure?'}</DialogTitle>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={reset}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={saveOpen}
        autoHideDuration={3000}
        onClose={handleSaveClose}
        message="Game saved"
      />
    </>
  )
}

export default Game

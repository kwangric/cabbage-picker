import { createContext, useState, useEffect } from 'react'

export const GameContext = createContext()

export const GameProvider = ({children}) => {
  const [cabbages, setCabbages] = useState(0)

  const increaseCabbages = (num) => {
    setCabbages(cabbages += num)
  }

  return (
    <GameContext.Provider value={{cabbages, setCabbages, increaseCabbages}}>
      {children}
    </GameContext.Provider>
  )
}

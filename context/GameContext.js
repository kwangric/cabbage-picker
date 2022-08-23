import { createContext, useState, useEffect } from 'react'
import { generators as startingGenerators } from '../assets/generators'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [cabbages, setCabbages] = useState(0)
  const [cabbagesPerSecond, setCabbagesPerSecond] = useState(0)
  const [generators, setGenerators] = useState([])

  const increaseCabbages = (num) => {
    setCabbages((cabbages + num))
    checkGenerators()
  }

  const checkGenerators = () => {
    setGenerators(
      generators.map((generator) => {
        if (generator.cost / 2 <= cabbages && generator.visible === false) {
          return { ...generator, visible: true }
        } else {
          return { ...generator }
        }
      })
    )
  }

  const buyGenerator = (id) => {
    generators.map((generator) => {
      if (generator.id === id) {
        if (generator.cost <= cabbages) {
          setCabbages(cabbages - generator.cost)
          setCabbagesPerSecond(cabbagesPerSecond + generator.baseIncome)
          const originalQuantity = generator.quantity
          const originalCost = generator.cost
          generator.quantity = originalQuantity + 1
          generator.cost = (originalCost * 1.15).toFixed(0)
        } else {
          alert('Not enough cabbage!')
        }
      }
    })
  }

  const gameInterval = () => {
    increaseCabbages(cabbagesPerSecond)
  }

  useEffect(() => {
    setGenerators(startingGenerators)
  }, [])

  return (
    <GameContext.Provider
      value={{
        cabbages,
        setCabbages,
        cabbagesPerSecond,
        generators,
        increaseCabbages,
        buyGenerator,
        gameInterval
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

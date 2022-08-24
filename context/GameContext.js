/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from 'react'
import { generators as startingGenerators } from '../assets/generators'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [cabbages, setCabbages] = useState(0)
  const [cabbagesPerSecond, setCabbagesPerSecond] = useState(0)
  const [generators, setGenerators] = useState([])

  const increaseCabbages = (num) => {
    setCabbages(cabbages + num)
    checkGenerators(cabbages + num)
  }

  const checkGenerators = (total) => {
    let change = false
    const newGenerators = generators.map((generator) => {
      if (generator.cost / 2 <= total && generator.visible === false) {
        change = true
        return { ...generator, visible: true }
      } else {
        return { ...generator }
      }
    })
    if (change) {
      setGenerators(newGenerators)
    }
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

  useEffect(() => {
    setGenerators(startingGenerators)
  }, [])

  useEffect(() => {
    const gameInterval = setInterval(() => {
      setCabbages((currentCabbages) => {
        checkGenerators(currentCabbages + cabbagesPerSecond)
        return currentCabbages + cabbagesPerSecond
      })
    }, 1000)
    return () => clearInterval(gameInterval)
  }, [cabbagesPerSecond, checkGenerators])

  return (
    <GameContext.Provider
      value={{
        cabbages,
        setCabbages,
        cabbagesPerSecond,
        generators,
        increaseCabbages,
        buyGenerator,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

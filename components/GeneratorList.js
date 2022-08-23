import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import generatorListStyles from '../styles/GeneratorList.module.css'

const GeneratorList = () => {
  const { generators, buyGenerator } = useContext(GameContext)

  return (
    <div className={generatorListStyles.container}>
      {generators.map((generator) => {
        if (generator.visible) {
          return (
            <div key={generator.id}>
              <p>{generator.name}</p>
              <p>{`Cost: ${generator.cost}`}</p>
              <p>
                CpS:{' '}
                {generator.id === 1
                  ? (generator.quantity * generator.baseIncome).toFixed(1)
                  : generator.quantity * generator.baseIncome}
              </p>
              <p>{`Quantity: ${generator.quantity}`}</p>
              <button onClick={() => buyGenerator(generator.id)}>Buy</button>
            </div>
          )
        }
      })}
    </div>
  )
}

export default GeneratorList

import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import generatorListStyles from '../styles/GeneratorList.module.css'

const GeneratorList = () => {
  const { generators, buyGenerator } = useContext(GameContext)

  return (
    <div className={generatorListStyles.container}>
      {generators.map((generator) => {
        if (generator.visible) {
          return (
            <div
              className={generatorListStyles.generatorCard}
              key={generator.id}
            >
              <div className={generatorListStyles.cardInfo}>
                <div className={generatorListStyles.cardTitle}>
                  <p>{generator.name}</p>
                  <div className={generatorListStyles.cost}>
                    <div className={generatorListStyles.cabbageContainer}>
                      <Image
                        src={CabbageIcon}
                        alt="cabbage"
                        layout="fill"
                        draggable="false"
                      />
                    </div>
                    <p className={generatorListStyles.number}>
                      {generator.cost}
                    </p>
                  </div>
                  <p>
                    CpS:{' '}
                    {generator.id === 1
                      ? (generator.quantity * generator.baseIncome).toFixed(1)
                      : generator.quantity * generator.baseIncome}
                  </p>
                </div>
                <p>{`Quantity: ${generator.quantity}`}</p>
              </div>
              <div className={generatorListStyles.description}>
                <p>{`"${generator.description}"`}</p>
                </div>
              <div className={generatorListStyles.buttonContainer}>
                <button
                  className={generatorListStyles.buyButton}
                  onClick={() => buyGenerator(generator.id)}
                >
                  Buy
                </button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default GeneratorList

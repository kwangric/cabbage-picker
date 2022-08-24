import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import generatorListStyles from '../styles/GeneratorList.module.css'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const GeneratorList = () => {
  const { generators, buyGenerator } = useContext(GameContext)

  return (
    <div className={generatorListStyles.container}>
      {generators.map((generator) => {
        if (generator.visible) {
          return (
            <Card
              className={generatorListStyles.generatorCard}
              key={generator.id}
            >
              <div className={generatorListStyles.cardInfo}>
                <div className={generatorListStyles.cardLeft}>
                  <Typography variant="body">{generator.name}</Typography>
                  <div className={generatorListStyles.cost}>
                    <div className={generatorListStyles.cabbageContainer}>
                      <Image
                        src={CabbageIcon}
                        alt="cabbage"
                        layout="fill"
                        draggable="false"
                      />
                    </div>
                    <Typography
                      variant="body"
                      className={generatorListStyles.number}
                    >
                      {generator.cost}
                    </Typography>
                  </div>
                  <Typography variant="caption">
                    Base CpS:{' '}
                    {generator.id === 1
                      ? generator.baseIncome.toFixed(1)
                      : generator.baseIncome}
                  </Typography>
                </div>
                <div className={generatorListStyles.cardRight}>
                  <Typography variant="body">{`Quantity: ${generator.quantity}`}</Typography>
                  <br />
                  <Typography variant="caption">
                    Total CpS:{' '}
                    {generator.id === 1
                      ? (generator.quantity * generator.baseIncome).toFixed(1)
                      : generator.quantity * generator.baseIncome}
                  </Typography>
                </div>
              </div>
              <div className={generatorListStyles.description}>
                <Typography variant="caption">
                  {`"${generator.description}"`}
                </Typography>
              </div>
              <div className={generatorListStyles.buttonContainer}>
                <Button
                  variant="contained"
                  className={generatorListStyles.buyButton}
                  onClick={() => buyGenerator(generator.id)}
                >
                  Buy
                </Button>
              </div>
            </Card>
          )
        }
      })}
    </div>
  )
}

export default GeneratorList

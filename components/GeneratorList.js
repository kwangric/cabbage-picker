import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import generatorListStyles from '../styles/GeneratorList.module.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'

const GeneratorList = () => {
  const [detailedView, setDetailedView] = useState(true)
  const { generators, buyGenerator } = useContext(GameContext)

  const handleChange = () => {
    setDetailedView((current) => !current)
  }

  return (
    <div
      className={
        generators.filter((generator) => generator.visible === true).length > 0
          ? `${generatorListStyles.container}`
          : `${generatorListStyles.container} ${generatorListStyles.hidden}`
      }
    >
      <div>
        {generators.map((generator) => {
          if (generator.visible) {
            return (
              <div
                className={generatorListStyles.generatorCard}
                key={generator.id}
              >
                {detailedView ? (
                  <div className={generatorListStyles.cardInfo}>
                    <div className={generatorListStyles.cardTop}>
                      <div className={generatorListStyles.cardLeft}>
                        <Typography
                          variant="body1"
                          sx={{ marginBottom: '5px' }}
                        >
                          {generator.name}
                        </Typography>
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
                            variant="body2"
                            className={generatorListStyles.number}
                          >
                            {generator.cost}
                          </Typography>
                        </div>
                      </div>
                      <div className={generatorListStyles.cardRight}>
                        <Typography variant="body1">{`Quantity: ${generator.quantity}`}</Typography>
                      </div>
                    </div>
                    <div className={generatorListStyles.cardBottom}>
                      <div className={generatorListStyles.cardLeft}>
                        <Typography
                          className={generatorListStyles.cps}
                          variant="caption"
                        >
                          {`Each: ${
                            generator.id === 1
                              ? generator.baseIncome.toFixed(1)
                              : generator.baseIncome
                          } CpS`}
                        </Typography>
                        <Typography
                          className={generatorListStyles.cps}
                          variant="caption"
                        >
                          {`Total: ${
                            generator.id === 1 &&
                            (generator.quantity * generator.baseIncome) % 1 !==
                              0
                              ? (
                                  generator.quantity * generator.baseIncome
                                ).toFixed(1)
                              : (
                                  generator.quantity * generator.baseIncome
                                ).toFixed(0)
                          } CpS`}
                        </Typography>
                      </div>
                      <div className={generatorListStyles.cardRight}>
                        <div className={generatorListStyles.buttonContainer}>
                          <Button
                            size="small"
                            variant="contained"
                            className={generatorListStyles.buyButton}
                            onClick={() => buyGenerator(generator.id)}
                          >
                            Buy
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                      {`"${generator.description}"`}
                    </Typography>
                  </div>
                ) : (
                  <div
                    className={generatorListStyles.cardInfo}
                    onClick={() => buyGenerator(generator.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <div className={generatorListStyles.cardTop}>
                      <div className={generatorListStyles.cardLeft}>
                        <Typography
                          variant="body1"
                          sx={{ marginBottom: '5px' }}
                        >
                          {generator.name}
                        </Typography>
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
                            variant="body2"
                            className={generatorListStyles.number}
                          >
                            {generator.cost}
                          </Typography>
                        </div>
                      </div>
                      <div className={generatorListStyles.cardRight}>
                        <Typography variant="body1">{`Quantity: ${generator.quantity}`}</Typography>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          }
        })}
      </div>
      {generators.filter((generator) => generator.visible === true).length >
      0 ? (
        <div>
          <Typography variant="overline">Detailed View</Typography>
          <Switch
            defaultChecked
            color="default"
            onChange={handleChange}
            size="small"
            sx={{ marginTop: '1rem', marginBottom: '1rem' }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default GeneratorList

import { useState, useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import generatorListStyles from '../styles/GeneratorList.module.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Box from '@mui/material/Box'

const GeneratorList = () => {
  const [detailedView, setDetailedView] = useState(false)
  const { cabbages, generators, buyGenerator, saveGame } = useContext(GameContext)

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
      <Box
        component="div"
        sx={{ overflow: 'scroll' }}
        className={generatorListStyles.generators}
      >
        {generators.map((generator) => {
          if (generator.visible) {
            return (
              <div
                className={`${generatorListStyles.generatorCard} ${generator.cost > cabbages ? generatorListStyles.unbuyable : ''}`}
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
                            sx={{ margin: '0 0 0 0.25rem' }}
                          >
                            {generator.cost}
                          </Typography>
                        </div>
                      </div>
                      <div className={generatorListStyles.cardRight}>
                        <Typography variant="body1">{`x${generator.quantity}`}</Typography>
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
                            onClick={() => buyGenerator(generator.id)}
                          >
                            {generator.action}
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
                  >
                    <div className={generatorListStyles.cardTop}>
                      <div className={generatorListStyles.cardLeftSimple}>
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
                            sx={{ margin: '0 0 0 0.25rem' }}
                          >
                            {generator.cost}
                          </Typography>
                        </div>
                      </div>
                      <div className={generatorListStyles.cardRightSimple}>
                        <Typography variant="body1">{`x${generator.quantity}`}</Typography>
                        <Button
                            size="small"
                            sx={{padding: "0", marginTop: "10px"}}
                            variant="contained"
                            onClick={() => buyGenerator(generator.id)}
                          >
                            {generator.action}
                          </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          }
        })}
      </Box>
      {generators.filter((generator) => generator.visible === true).length >
      0 ? (
        <>
          <div className={generatorListStyles.options}>
              <Typography variant="overline">Detailed View</Typography>
              <Switch
                color="default"
                onChange={handleChange}
                size="small"
              />
          </div>
          <div className={generatorListStyles.bottomBar} />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default GeneratorList

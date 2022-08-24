import { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Image from 'next/image'
import CabbageIcon from '../public/cabbage.png'
import generatorListStyles from '../styles/GeneratorList.module.css'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const GeneratorList = () => {
  const { generators, buyGenerator } = useContext(GameContext)

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))

  return (
    <div className={generators.filter((generator) => generator.visible === true).length > 0 ? `${generatorListStyles.container}` : `${generatorListStyles.container} ${generatorListStyles.hidden}`}>
      {generators.map((generator) => {
        if (generator.visible) {
          return (
            <div>
              <HtmlTooltip
                title={
                  <>
                    <Typography color="inherit">{generator.name}</Typography>
                    <Typography variant="caption">
                      {`Each ${generator.name} produces ${
                        generator.id === 1
                          ? generator.baseIncome.toFixed(1)
                          : generator.baseIncome
                      } cabbages per second.`}
                    </Typography>
                    {generator.quantity > 0 ? (
                      <>
                        <br />
                        <Typography variant="caption">
                          {`${generator.quantity} ${
                            generator.name
                          }s producing ${
                            generator.id === 1 &&
                            (generator.quantity * generator.baseIncome) % 1 !==
                              0
                              ? (
                                  generator.quantity * generator.baseIncome
                                ).toFixed(1)
                              : (
                                  generator.quantity * generator.baseIncome
                                ).toFixed(0)
                          } cabbages per second.`}
                        </Typography>
                      </>
                    ) : (
                      <></>
                    )}
                    <br />
                    <Typography
                      variant="caption"
                      className="generatorListStyles.description"
                    >
                      {`"${generator.description}"`}
                    </Typography>
                  </>
                }
                placement="left"
              >
                <div
                  className={generatorListStyles.generatorCard}
                  key={generator.id}
                >
                  <div className={generatorListStyles.cardInfo}>
                    <div className={generatorListStyles.cardLeft}>
                      <Typography variant="body1" sx={{marginBottom: '5px'}}>{generator.name}</Typography>
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
                      <Typography variant="body2">{`Quantity: ${generator.quantity}`}</Typography>
                      <br />
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

                </div>
              </HtmlTooltip>
            </div>
          )
        }
      })}
    </div>
  )
}

export default GeneratorList

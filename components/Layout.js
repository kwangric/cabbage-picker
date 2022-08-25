import styles from '../styles/Layout.module.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const Layout = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Layout

import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="sm">
        <main className={styles.main}>{children}</main>
      </Container>
    </>
  )
}

export default Layout

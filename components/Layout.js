import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Container from '@mui/material/Container';

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout

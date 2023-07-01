import { Link } from 'react-scroll'
import styles from './nav.module.css'

const navPages = ['Sobre mí', 'Experiencia', 'Aptitudes']

export const NavBar: React.FC<{}> = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <ul className={styles.ul}>
          {navPages.map(page =>
            <li key={page} className={styles.navButton}>
              <Link activeClass={styles.active} to={`${page}`} spy smooth duration={500} offset={-75}>
                <i />{page}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

import { skills } from '../../data/data'
import styles from './Skills.module.css'
export const Skills: React.FC<{}> = () => {
  return (
    <>
      <main className={styles.skillContainer}>
        {skills.map(({ name, logo }) =>
          <div className={styles.skill} key={name}>
            <img src={logo} alt='' />
            <h3>{name}</h3>
          </div>
        )}
      </main>
    </>
  )
}

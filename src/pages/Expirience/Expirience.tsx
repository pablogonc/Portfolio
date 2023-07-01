import { proyects } from '../../data/data'
import styles from './Expirience.module.css'
import github from './githubLogo.svg'
import redirect from './redirect.svg'
export const Expirience: React.FC<{}> = () => {
  return (

    <main className={styles.gridContainer}>
      {proyects.map(({ description, link, name, repo, img, tags }) =>
        <div key={name} className={styles.box}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <a href={link} target='_blank' className={styles.backgroundContainer} rel='noreferrer'>
            <img src={img} alt={name} className={styles.background} />
            <div className={styles.over}>
              <img src={redirect} alt='' />
            </div>
          </a>

          <div className={styles.boxContent}>
            <div className={styles.tagContainer}>
              {tags.map(tag => (
                <span key={tag} className={styles.tag}> {tag} </span>
              ))}
            </div>
            <p style={{ whiteSpace: 'break-spaces' }}>{description}</p>
            <a href={repo} target='_blank' rel='noreferrer'><button className={styles.button}>ver repositorio</button></a>
          </div>

        </div>
      )}

    </main>
  )
}

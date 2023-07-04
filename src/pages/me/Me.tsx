import { Me as yo } from '../../data/data'
import styles from './me.module.css'
import linkedin from '../../svg/linkedin.svg'
import github from '../../svg/gitHub.svg'
import gmail from '../../svg/gmail.svg'
export const Me: React.FC<{}> = () => {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <img src='/picture3RF3.png' alt='foto de perfil' className={styles.img} />
        <h1 style={{ fontSize: '28px' }}>Pablo Goncalves</h1>
        <h2 style={{ color: '#A778DD', fontStyle: 'italic', fontSize: '22px' }}>Software Developer</h2>
        <p>{yo.objetive}</p>
        <div className={styles.socialContainter}>
          <div className={styles.line} />
          <a style={{ display: 'flex' }} target='_blank' href='https://github.com/pablogonc' rel='noreferrer'><img className={styles.social} src={github} alt='linkedin' /></a>
          <a style={{ display: 'flex' }} target='_blank' href='http://www.linkedin.com/in/pablo-goncalves-797974258' rel='noreferrer'><img className={styles.social} src={linkedin} alt='linkedin' /></a>
          <a style={{ display: 'flex' }} target='_blank' href='https://mail.google.com/mail/?view=cm&source=mailto&to=goncavles.pab@gmail.com' rel='noreferrer'><img className={styles.social} src={gmail} alt='linkedin' /></a>
          <div className={styles.line} />
        </div>

        <p style={{ color: '#A778DD' }}><strong>Nacimiento</strong></p>
        <p>{yo.birthday}</p>

        <p style={{ color: '#A778DD' }}><strong>Ubicación</strong></p>
        <p>{yo.location}</p>

        <p style={{ color: '#A778DD' }}><strong>Mail</strong></p>
        <p>{yo.mail}</p>

        <div className={styles.buttonContainer}>
          <a href='CV - Pablo Goncalves.pdf' className={styles.button} download> Descargar CV </a>
        </div>

      </div>
    </main>

  )
}

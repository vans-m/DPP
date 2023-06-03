import { ReactNode } from 'react'
import styles from './Modal.module.scss'

type Modal = {
  setShow: (arg: boolean) => void
  show: boolean
  children: ReactNode
}

const Modal = ({ setShow, show, children }: Modal) => {
  const showHideClassName = show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`
  const handleClose = () => setShow(false)

  return (
    <div className={showHideClassName}>
      <div className={styles.modalMain}>
        {children}
        <button className={styles.button} onClick={handleClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Modal
import { ReactNode } from 'react'
import styles from './Modal.module.scss'

type Modal = {
  setShow: (arg: boolean) => void
  show: boolean
  children: ReactNode
}

const Modal = ({ setShow, show, children }: Modal) => {
  const showHideClassName = show ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`

  return (
    <div className={showHideClassName} onClick={() => setShow(false)}>
      <div className={styles.modalMain}>
        {children}
      </div>
    </div>
  )
}

export default Modal
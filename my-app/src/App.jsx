import styles from './App.css'

export default function Hello({ message = '' }) {
  return (
    <>
      <h1 className={styles.title}>
        <span>Hello</span> Component~
      </h1>
      <p className={styles.message}>
        {message}
      </p>
    </>
  )
}
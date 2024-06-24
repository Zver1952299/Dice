import styles from './ErrorText.module.scss';

const ErrorText = ({ text, top }: { text: string; top: string }) => {
  return (
    <span className={styles.text} style={{ top: `${top}px` }}>
      {text}
    </span>
  );
};

export default ErrorText;

import TitlePlayground from '../../atoms/titlePlayground';
import styles from './StartView.module.scss';

const StartView = () => {
  return (
    <div className={styles.start}>
      <TitlePlayground text="Войдите, чтобы продолжить" />
    </div>
  );
};

export default StartView;

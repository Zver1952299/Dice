import React from 'react';
import styles from './Modal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../../stores/useModal';
import { useDice } from '../../../stores/useDice';

const Modal = ({ children, isOpen }: { children: React.ReactNode }) => {
  const onChangeFalse = useModal((state) => state.changeOnFlase);
  const setTotal = useDice((state) => state.setTotal);

  const onClose = () => {
    onChangeFalse();
    setTotal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
          className={styles.modal}
          onClick={() => onClose()}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0 }}
            className={styles.inner}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

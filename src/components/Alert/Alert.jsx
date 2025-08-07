'use client';

import { Modal } from '../Modal';
import styles from './Alert.module.css';

export function Alert({ 
  isOpen, 
  onClose, 
  title = 'Confirmação',
  message,
  type = 'info', 
  onConfirm,
  onCancel,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  showCancel = true
}) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      case 'question':
        return '❓';
      default:
        return 'ℹ️';
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="small">
      <div className={`${styles.alertContent} ${styles[type]}`}>
        <div className={styles.iconContainer}>
          <span className={styles.icon}>{getIcon()}</span>
        </div>
        
        <div className={styles.messageContainer}>
          <p className={styles.message}>{message}</p>
        </div>
        
        <div className={styles.buttonContainer}>
          <button 
            onClick={handleConfirm}
            className={`${styles.button} ${styles.confirmButton} ${styles[type + 'Button']}`}
          >
            {confirmText}
          </button>
          
          {showCancel && (
            <button 
              onClick={handleCancel}
              className={`${styles.button} ${styles.cancelButton}`}
            >
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

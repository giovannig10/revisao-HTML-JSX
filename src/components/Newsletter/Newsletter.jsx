'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';
import { apiService } from '../../services/api.jsx';
import { useApi } from '../../hooks/useApi.jsx';
import { Loading } from '../Loading';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { loading, execute } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      return;
    }

    try {
      await execute(
        () => apiService.subscribeNewsletter(email),
        '📧 Inscrição realizada com sucesso! Você receberá nossas ofertas.',
        'Erro ao realizar inscrição'
      );
      
      setEmail('');
    } catch (error) {
      console.error('Erro na newsletter:', error);
    }
  };

  return (
    <div className={styles.newsletter}>
      <div className={styles.container}>
        <h3 className={styles.title}>📧 Newsletter ElectroStore</h3>
        <p className={styles.description}>
          Receba as melhores ofertas e novidades em primeira mão!
        </p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className={styles.input}
              required
              disabled={loading}
            />
            <button
              type="submit"
              className={styles.button}
              disabled={loading || !email}
            >
              {loading ? (
                <Loading size="small" text="" />
              ) : (
                '✉️ Inscrever'
              )}
            </button>
          </div>
        </form>
        
        <p className={styles.privacy}>
          🔒 Seus dados estão seguros. Não enviamos spam.
        </p>
      </div>
    </div>
  );
}

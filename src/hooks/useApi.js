'use client';

import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (apiCall, successMessage = null, errorMessage = 'Erro na operação') => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await apiCall();
      
      if (successMessage) {
        toast.success(successMessage, {
          position: "top-right",
          autoClose: 3000,
        });
      }
      
      return result;
    } catch (err) {
      const message = err.response?.data?.message || err.message || errorMessage;
      setError(message);
      
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
      });
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    execute,
    setError,
    clearError: () => setError(null)
  };
}

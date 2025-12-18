import { useAuthStore } from "./useAuthStore";
import { usePopupStore } from "./usePopupStore";
import { useWordStore } from "./useWordStore"
import { useEffect } from 'react';

export const useGlobalErrorPopup = () => {
    const { errorMessage: wordError } = useWordStore();
    const { errorMessage: authError } = useAuthStore();
    const { setError } = usePopupStore();

    useEffect(() => {
      const error = wordError || authError;
    
      if (error) {
        setError(error);
      }
    }, [wordError, authError, setError])
    
}
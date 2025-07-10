// src/utils/logoutHelper.js
import { toast } from 'react-toastify';

let hasLoggedOut = false; // 🔒 Flag to prevent multiple logouts

export const logoutUser = () => {
  if (hasLoggedOut) return; // ✅ Only run once

  hasLoggedOut = true;

  toast.error('Session expired. Please log in again.', {
    position: 'top-center',
    autoClose: 2000,
  });

  setTimeout(() => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }, 2000);
};

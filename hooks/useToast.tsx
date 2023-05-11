import React from 'react';
import { ToastContext } from '../components/base/ToastManager';

const useToast = () => {
  const context = React.useContext(ToastContext);

  if (context === undefined) {
    throw new Error('useToast must be used within a ToastManager');
  }

  return context;
};

export default useToast;

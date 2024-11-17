// src/components/ui/Alert.jsx
import React from 'react';

const Alert = ({ children, className, type = 'info' }) => {
  const alertStyles = {
    success: 'bg-green-50 border-green-200 text-green-600',
    error: 'bg-red-50 border-red-200 text-red-600',
    info: 'bg-blue-50 border-blue-200 text-blue-600',
  };

  return (
    <div className={`p-4 rounded-lg border ${alertStyles[type]} ${className}`}>
      {children}
    </div>
  );
};

export { Alert };

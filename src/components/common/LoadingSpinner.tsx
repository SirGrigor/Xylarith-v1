import { FC } from 'react';
import clsx from 'clsx';
import { BaseProps } from '../../types/common';

interface LoadingSpinnerProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className 
}) => {
  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-t-2 border-blue-500',
        {
          'w-4 h-4': size === 'sm',
          'w-8 h-8': size === 'md',
          'w-12 h-12': size === 'lg',
        },
        className
      )}
    />
  );
};

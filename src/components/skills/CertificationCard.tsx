import { FC } from 'react';
import { Certification } from '../../types/hr';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: FC<CertificationCardProps> = ({ certification }) => {
  const getStatusColor = (status: Certification['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-400';
      case 'expired':
        return 'bg-red-500/10 text-red-400';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-400';
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white font-medium">{certification.name}</h3>
          <p className="text-sm text-gray-400">{certification.issuer}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs capitalize ${getStatusColor(certification.status)}`}>
          {certification.status}
        </span>
      </div>
      
      <div className="mt-4 flex items-center space-x-4">
        <div>
          <p className="text-xs text-gray-400">Acquired</p>
          <p className="text-sm text-white">
            {new Date(certification.dateAcquired).toLocaleDateString()}
          </p>
        </div>
        {certification.expiryDate && (
          <div>
            <p className="text-xs text-gray-400">Expires</p>
            <p className="text-sm text-white">
              {new Date(certification.expiryDate).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

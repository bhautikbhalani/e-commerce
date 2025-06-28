import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex items-center text-xs text-gray-500 gap-2 ${className}`} aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <React.Fragment key={item.label + idx}>
          {idx > 0 && <span>/</span>}
          {item.href && idx !== items.length - 1 ? (
            <Link to={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-gray-700">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb; 
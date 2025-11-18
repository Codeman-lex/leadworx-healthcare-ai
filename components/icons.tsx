import React from 'react';

// Base styling for consistent icon look
interface IconBaseProps {
    children?: React.ReactNode;
    className?: string;
}

const IconBase = ({ children, className = "w-6 h-6" }: IconBaseProps) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" // Thinner stroke for premium feel
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

export const RouteIcon = () => (
    <IconBase>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
);

export const AttendanceIcon = () => (
    <IconBase className="w-8 h-8">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </IconBase>
);

export const AfterHoursIcon = () => (
    <IconBase>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </IconBase>
);

export const AuditIcon = () => (
    <IconBase>
       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
       <path d="M14 2v6h6" />
       <path d="M16 13H8" />
       <path d="M16 17H8" />
       <path d="M10 9H8" />
    </IconBase>
);

export const CheckIcon = () => (
    <IconBase className="h-5 w-5 text-brand-blue">
        <polyline points="20 6 9 17 4 12" />
    </IconBase>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className = 'text-yellow-400' }) => (
    <svg className={`w-4 h-4 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
);

// --- Premium Icon Set for Problem/Solution ---

export const HourglassIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <path d="M5 22h14" />
        <path d="M5 2h14" />
        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </IconBase>
);

export const BoxIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </IconBase>
);

export const ChartDownIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
    </IconBase>
);

export const RocketIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </IconBase>
);

export const UnicornIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </IconBase>
);

export const ChartUpIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </IconBase>
);

export const IncreaseRevenueIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </IconBase>
);

export const AttractClientsIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
         <circle cx="9" cy="7" r="4" />
         <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
);

export const AutomateLeadIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
         <rect width="8" height="8" x="2" y="2" rx="2" />
         <path d="M14 2c.6.5 1.2 1 2.5 2" />
         <path d="M2 10c.5.6 1 1.2 2 2.5" />
         <path d="M2 14c.5-.6 1-1.2 2-2.5" />
         <path d="M10 2c-.6.5-1.2 1-2.5 2" />
         <path d="m12 12 2-2" />
         <path d="m12 12 2 2" />
         <path d="m20 22-5-5" />
         <path d="m22 20-5-5" />
         <path d="m17 17-2-2" />
         <path d="m17 17 2 2" />
    </IconBase>
);

export const SaveTimeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <IconBase className={className}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </IconBase>
);
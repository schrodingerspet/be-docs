import React from 'react';

export function Grid({ children, columns = 2 }: { children: React.ReactNode, columns?: 2 | 3 | 4 }) {
  const colClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${colClasses[columns]} gap-6 my-8`}>
      {children}
    </div>
  );
}

export function GridCard({ title, icon, children }: { title: string, icon?: string, children: React.ReactNode }) {
  return (
    <div className="bg-surface border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      {icon && <div className="text-2xl mb-4">{icon}</div>}
      <h3 className="font-heading font-semibold text-lg mb-2 mt-0">{title}</h3>
      <div className="text-muted-foreground text-sm leading-relaxed prose-p:my-2 prose-ul:my-2">
        {children}
      </div>
    </div>
  );
}

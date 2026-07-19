import React from 'react';

export function MetricCard({ title, value }: { title: string, value: string }) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-2xl border bg-card shadow-sm transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-md min-w-[200px] flex-1">
      <span className="text-xs font-label uppercase text-muted-foreground tracking-widest">{title}</span>
      <span className="text-4xl font-heading font-bold text-brand">{value}</span>
    </div>
  )
}

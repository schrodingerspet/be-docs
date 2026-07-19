import React from 'react';
import { Sparkles, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Callout({ children, type = "info" }: { children: React.ReactNode, type?: "info" | "warning" | "insight" }) {
  const isInsight = type === "insight";
  const isWarning = type === "warning";
  
  return (
    <div className={cn(
      "p-4 my-6 rounded-xl border flex gap-4 items-start",
      isInsight ? "bg-purple-500/10 border-purple-500/20 text-purple-900" :
      isWarning ? "bg-amber-500/10 border-amber-500/20 text-amber-900" :
      "bg-blue-500/10 border-blue-500/20 text-blue-900"
    )}>
      <div className="mt-1 shrink-0">
        {isInsight && <Sparkles className="w-5 h-5 text-purple-500" />}
        {isWarning && <AlertTriangle className="w-5 h-5 text-amber-500" />}
        {!isInsight && !isWarning && <Info className="w-5 h-5 text-blue-500" />}
      </div>
      <div className="prose-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}

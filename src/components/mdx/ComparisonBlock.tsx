import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

export function ComparisonBlock({ 
  leftTitle, 
  rightTitle, 
  leftContent, 
  rightContent 
}: { 
  leftTitle: string; 
  rightTitle: string; 
  leftContent: React.ReactNode; 
  rightContent: React.ReactNode; 
}) {
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border shadow-sm">
        {/* Left Side */}
        <div className="flex-1 bg-surface p-6 md:p-8">
          <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-4 mt-0 text-foreground">
            <span className="w-2 h-2 rounded-full bg-destructive"></span>
            {leftTitle}
          </h3>
          <div className="text-muted-foreground text-sm leading-relaxed">
            {leftContent}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:flex flex-col justify-center items-center -mx-5 z-10">
          <div className="w-10 h-10 rounded-full bg-background border flex items-center justify-center shadow-sm text-muted-foreground">
            <ArrowRightLeft className="w-4 h-4" />
          </div>
        </div>
        <div className="md:hidden flex justify-center -my-5 z-10">
          <div className="w-10 h-10 rounded-full bg-background border flex items-center justify-center shadow-sm text-muted-foreground rotate-90">
            <ArrowRightLeft className="w-4 h-4" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-brand/5 p-6 md:p-8 border-t md:border-t-0 md:border-l border-brand/10">
          <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-4 mt-0 text-foreground">
            <span className="w-2 h-2 rounded-full bg-brand"></span>
            {rightTitle}
          </h3>
          <div className="text-muted-foreground text-sm leading-relaxed">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Link as LinkIcon, BookOpen, AlertCircle } from "lucide-react";
import { Term } from "@/data/terms";
import { cn } from "@/lib/utils";
import Link from "next/link";

const difficultyColors = {
  Beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Advanced: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
};

export function TermAccordion({ term }: { term: Term }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-card overflow-hidden shadow-sm transition-colors hover:border-brand/50 mb-4" id={term.id}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-transparent cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h3 className="font-heading font-bold text-lg m-0">{term.name}</h3>
          <div className="flex flex-wrap gap-2">
            <span className={cn("px-2 py-0.5 rounded-md text-xs font-label border", difficultyColors[term.difficulty])}>
              {term.difficulty}
            </span>
            {term.category.slice(0, 2).map((cat) => (
              <span key={cat} className="px-2 py-0.5 rounded-md text-xs font-label bg-secondary text-secondary-foreground border border-border">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-muted-foreground shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t"
          >
            <div className="p-5 md:p-6 bg-secondary/30 prose prose-sm dark:prose-invert max-w-none">
              
              {/* Definition Section */}
              <div className="mb-6">
                <p className="text-lg font-medium leading-relaxed">{term.definition}</p>
              </div>

              {/* Grid Layout for Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-foreground mb-2 mt-0 font-heading"><AlertCircle className="w-4 h-4 text-brand"/> Simple Explanation</h4>
                    <p className="text-muted-foreground m-0">{term.simpleExplanation}</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 mt-0 font-heading">Real-world Analogy</h4>
                    <p className="text-muted-foreground m-0 italic">"{term.realWorldAnalogy}"</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 mt-0 font-heading">How it Works</h4>
                    <p className="text-muted-foreground m-0">{term.howWorks}</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-2 mt-0 font-heading">Technical Deep Dive</h4>
                    <p className="text-muted-foreground m-0">{term.technicalExplanation}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  {(term.input || term.output) && (
                    <div className="bg-background p-4 rounded-lg border">
                      {term.input && <div className="mb-2"><strong className="text-foreground">Input:</strong> <span className="text-muted-foreground">{term.input}</span></div>}
                      {term.output && <div><strong className="text-foreground">Output:</strong> <span className="text-muted-foreground">{term.output}</span></div>}
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-4">
                    {term.advantages.length > 0 && (
                      <div>
                        <h4 className="text-emerald-600 dark:text-emerald-400 mb-2 mt-0 font-heading">Advantages</h4>
                        <ul className="m-0 text-muted-foreground pl-4">
                          {term.advantages.map((adv, i) => <li key={i} className="my-1">{adv}</li>)}
                        </ul>
                      </div>
                    )}
                    {term.disadvantages.length > 0 && (
                      <div>
                        <h4 className="text-rose-600 dark:text-rose-400 mb-2 mt-0 font-heading">Disadvantages</h4>
                        <ul className="m-0 text-muted-foreground pl-4">
                          {term.disadvantages.map((dis, i) => <li key={i} className="my-1">{dis}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-foreground mb-1 mt-0 font-heading">When to use:</h4>
                    <p className="text-muted-foreground m-0 text-sm">{term.whenToUse}</p>
                  </div>
                  <div>
                    <h4 className="text-foreground mb-1 mt-0 font-heading">When NOT to use:</h4>
                    <p className="text-muted-foreground m-0 text-sm">{term.whenNotToUse}</p>
                  </div>
                </div>
              </div>

              {/* Footer Context */}
              <div className="mt-8 pt-6 border-t flex flex-col gap-4">
                <div className="bg-brand/5 border border-brand/20 p-4 rounded-lg flex items-start gap-3">
                  <FileText className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-foreground m-0 mb-1 font-heading">Paper Context</h4>
                    <p className="text-muted-foreground text-sm m-0">{term.paperUsage}</p>
                    <div className="flex gap-2 mt-3">
                      {term.papers.map(p => (
                        <span key={p} className="text-xs bg-background border px-2 py-1 rounded-md text-foreground">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold flex items-center gap-1"><LinkIcon className="w-4 h-4"/> Related:</span>
                    {term.relatedTerms.map(rt => (
                      <Link key={rt} href={`#${rt.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs text-brand hover:underline">
                        {rt}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

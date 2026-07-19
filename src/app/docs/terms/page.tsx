"use client";

import React, { useState, useMemo } from "react";
import { Search, FilterX, BookMarked } from "lucide-react";
import { TERMS, Category, Difficulty } from "@/data/terms";
import { TermAccordion } from "@/components/mdx/TermAccordion";
import { motion, AnimatePresence } from "framer-motion";

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "All">("All");

  const filteredTerms = useMemo(() => {
    return TERMS.filter(term => {
      const matchesSearch = term.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || term.category.includes(selectedCategory);
      const matchesDifficulty = selectedDifficulty === "All" || term.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const allCategories = Array.from(new Set(TERMS.flatMap(t => t.category))).sort();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-heading font-bold mb-4 flex items-center gap-3">
          <BookMarked className="w-8 h-8 text-brand" />
          Glossary of Terms
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore and understand every technical concept, algorithm, and metric used in the research papers.
        </p>
      </div>

      {/* Sticky Search & Filter Bar */}
      <div className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-md border-b pb-4 mb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search for a term..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-surface text-foreground focus:ring-2 focus:ring-brand focus:outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="px-3 py-2 rounded-lg border bg-surface text-sm text-foreground focus:ring-2 focus:ring-brand focus:outline-none flex-1 md:flex-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {allCategories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select 
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as any)}
              className="px-3 py-2 rounded-lg border bg-surface text-sm text-foreground focus:ring-2 focus:ring-brand focus:outline-none flex-1 md:flex-none cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            {(searchQuery || selectedCategory !== "All" || selectedDifficulty !== "All") && (
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedDifficulty("All"); }}
                className="p-2 border rounded-lg hover:bg-secondary text-muted-foreground transition-colors"
                title="Clear Filters"
              >
                <FilterX className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Terms List */}
      <div className="flex flex-col gap-1 min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {filteredTerms.length > 0 ? (
            filteredTerms.map(term => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={term.id}
              >
                <TermAccordion term={term} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 px-4 border rounded-xl bg-secondary/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">No terms found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any terms matching your current search and filter criteria. Try adjusting your filters or clearing the search query.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

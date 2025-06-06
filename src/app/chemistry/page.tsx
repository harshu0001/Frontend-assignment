"use client";
import LayoutShell from "@/components/LayoutShell";
import Filters from "@/components/Filters";
import ChapterCard from "@/components/Chaptercardchem";
import { useState, useEffect } from "react";
import { getChaptersBySubject, Chapter } from "@/lib/data";
import Header from "@/components/Header";
import {Flask} from "phosphor-react";

export default function PhysicsPage() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [filtered, setFiltered] = useState<Chapter[]>([]);
  const [sortAsc, setSortAsc] = useState(true);
  const handleSortToggle = () => {
    const newOrder = !sortAsc;
    setSortAsc(newOrder);
    const sorted = [...filtered].sort((a, b) =>
      newOrder
        ? a.questionSolved - b.questionSolved
        : b.questionSolved - a.questionSolved
    );
    setFiltered(sorted);
  };

  useEffect(() => {
    const data = getChaptersBySubject("chemistry");
    setChapters(data);
    setFiltered(data);
  }, []);

  const handleFilterChange = (filters: any) => {
    let result = [...chapters];

    if (filters.weakOnly) {
      result = result.filter((c) => c.isWeakChapter);
    }

    if (filters.status !== "All") {
      result = result.filter((c) => c.status === filters.status);
    }

    if (filters.selectedClass) {
      result = result.filter((c) => c.class === filters.selectedClass);
    }

    if (filters.selectedUnit) {
      result = result.filter((c) => c.unit === filters.selectedUnit);
    }

    setFiltered(result);
  };

  return (
    <LayoutShell>
      <div className="flex items-center justify-center mt-4">
        <Flask size={52} color="#51d65a" weight="fill" />
        <h1 className="text-2xl font-semibold mb-1 ml-2 text-center">Chemistry PYQs</h1>
      </div>
      <p className="text-muted-foreground text-center mb-4">Chapter-wise Collection of Chemistry PYQs</p>
      <Filters onFilterChange={handleFilterChange} />
      <Header total={filtered.length} onSortToggle={handleSortToggle} />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"> */}
        <div className="flex flex-col gap-2 mt-4 w-full">

        {filtered.map((chapter) => (
          <ChapterCard key={chapter.chapter} chapter={chapter} />
        ))}
        {filtered.length === 0 && (
          <p className="text-muted-foreground mt-4 col-span-full">No chapters found for selected filters.</p>
        )}
      </div>
    </LayoutShell>
  );
}

import { Chapter } from "@/lib/data";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { getRandomIcon } from "@/lib/icons";

export default function ChapterCard({ chapter, index = 10 }: { chapter: Chapter; index?: number }) {
  const totalQuestions = Object.values(chapter.yearWiseQuestionCount).reduce(
    (a, b) => a + b,
    0
  );

  const Icon = getRandomIcon(index);
  const latest = chapter.yearWiseQuestionCount["2025"];
  const prev = chapter.yearWiseQuestionCount["2024"];
  const trendUp = latest >= prev;

  return (
    <motion.div
    className="w-full flex items-center justify-between p-4 rounded-xl border shadow-sm bg-card hover:shadow-md transition"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.03 }}
  >
    {/* Left side: Icon + Title */}
    <div className="flex items-center gap-3">
      <Icon className="text-muted-foreground" size={24} weight="duotone" color="#41d7e1"/>
      <h3 className="text-sm font-medium truncate max-w-[250px]">{chapter.chapter}</h3>
    </div>

    {/* Right side: Stats */}
    <div className="flex items-center gap-6 text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <span className="text-[13px] font-medium">2025:</span>
        <span className="text-green-600 font-semibold">{latest}Qs</span>
        {trendUp ? (
          <ArrowUpRight className="w-4 h-4 text-green-500" />
        ) : (
          <ArrowDownRight className="w-4 h-4 text-red-500" />
        )}
      </div>

      <div className="flex items-center gap-1">
        <span className="text-[13px] font-medium">2024:</span>
        <span>{prev}Qs</span>
      </div>

      <div className="text-muted-foreground text-[13px] font-medium">
        {chapter.questionSolved}/{totalQuestions} Qs
      </div>
    </div>
  </motion.div>

  );
}

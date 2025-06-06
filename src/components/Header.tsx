"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

// const titles: Record<string, string> = {
//   physics: "Physics PYQs",
//   chemistry: "Chemistry PYQs",
//   mathematics: "Mathematics PYQs",
// };

export default function Header({
  total,
  onSortToggle,
}: {
  total: number;
  onSortToggle: () => void;
}) {
  const pathname = usePathname();
  // const subject = pathname.split("/")[1];
  // const title = titles[subject] || "Chapters";

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        {/* <h2 className="text-xl font-bold">{title}</h2> */}
        {/* <p className="text-sm text-muted-foreground">
          Chapter-wise Collection of {title}
        </p> */}
        <p className="text-sm mt-1">Showing all chapters ({total})</p>
      </div>

      <div className="mt-4 md:mt-0">
        <Button variant="outline" onClick={onSortToggle}>
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort
        </Button>
      </div>
    </div>
  );
}

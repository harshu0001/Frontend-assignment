"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { getUniqueClassesAndUnits } from "@/lib/data";
import { usePathname } from "next/navigation";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  const subject = usePathname().split("/")[1];
  const [weakOnly, setWeakOnly] = useState(false);
  const [status, setStatus] = useState("All");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const { classes, units } = getUniqueClassesAndUnits(subject);

  useEffect(() => {
    onFilterChange({
      weakOnly,
      status,
      selectedClass,
      selectedUnit,
    });
  }, [weakOnly, status, selectedClass, selectedUnit]);

  return (
    <div className="grid sm:grid-flow-col sm:auto-cols-max gap-4 p-4">
      <div>
        <label className="block text-sm mb-1"></label>
        <Select onValueChange={setSelectedClass}>
          <SelectTrigger>
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            {classes.map((cls) => (
              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm mb-1"></label>
        <Select onValueChange={setSelectedUnit}>
          <SelectTrigger>
            <SelectValue placeholder="Select Unit" />
          </SelectTrigger>
          <SelectContent>
            {units.map((u) => (
              <SelectItem key={u} value={u}>{u}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
            <div>
        <label className="block text-sm mb-1"></label>
        <Select onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Not Started">Not Started</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Switch checked={weakOnly} onCheckedChange={setWeakOnly} />
        <span>Weak Chapters Only</span>
      </div>


    </div>
  );
}

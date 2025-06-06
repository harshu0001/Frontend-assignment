"use client";

import { usePathname, useRouter } from "next/navigation";
import {Atom, Flask, MathOperations, CaretRight} from "phosphor-react";
import { cn } from "@/lib/utils";

const subjects = [
  { label: "Physics PYQs", icon: <Atom size={20} color="#f5872e" weight="duotone" />, href: "/physics", color: "text-orange-500", bg: "bg-orange-100" },
  { label: "Chemistry PYQs", icon: <Flask size={20} color="#1ed01b" />, href: "/chemistry", color: "text-green-600", bg: "bg-green-100" },
  { label: "Mathematics PYQs", icon: <MathOperations size={20} color="#1bc4d0" />, href: "/mathematics", color: "text-blue-600", bg: "bg-blue-100" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r h-screen p-4 flex flex-col justify-between bg-background">
      <div>
        <div className="mb-6">
          <div className="flex items-center justify-center mt-4">
            <img src="/nta.svg" alt="Logo" className="w-5 h-5" />
          <h1 className="text-lg font-bold text-center ml-3">JEE Main</h1>
          </div>
          <p className="text-xs text-muted-foreground text-center">2025 - 2009 | 173 Papers | 15825 Qs</p>
        </div>

        <nav className="space-y-1">
          {subjects.map((subj) => {
            const isActive = pathname.startsWith(subj.href);
            return (
              <button
                key={subj.href}
                onClick={() => router.push(subj.href)}
                className={cn(
                  "w-full flex items-center gap-2 px-3 py-2 rounded-md text-left",
                  isActive ? `${subj.bg} ${subj.color} font-semibold` : "hover:bg-muted"
                )}
              >
                <span className="text-xl">{subj.icon}</span>
                {subj.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const subjects = ["Physics", "Chemistry", "Mathematics"];

export default function SubjectTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const currentSubject = pathname.split("/")[1] || "physics";

  useEffect(() => {
    if (!subjects.map(s => s.toLowerCase()).includes(currentSubject)) {
      router.push("/physics");
    }
  }, [currentSubject, router]);

  return (
    <Tabs
      defaultValue={currentSubject}
      onValueChange={(val) => router.push(`/${val}`)}
      className="w-full"
    >
      <TabsList className="flex justify-start gap-2 bg-muted p-1 rounded-md">
        {subjects.map((subject) => (
          <TabsTrigger key={subject} value={subject.toLowerCase()} className="capitalize">
            {subject}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

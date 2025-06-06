import data from "@/lib/all_subjects_chapter_data.json";

export type Chapter = typeof data[0];

export function getChaptersBySubject(subject: string) {
  return data.filter((item) => item.subject.toLowerCase() === subject.toLowerCase());
}

export function getUniqueClassesAndUnits(subject: string) {
  const filtered = getChaptersBySubject(subject);
  const classes = [...new Set(filtered.map((c) => c.class))];
  const units = [...new Set(filtered.map((c) => c.unit))];
  return { classes, units };
}

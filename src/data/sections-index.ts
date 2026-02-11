import { Section } from '../types';

let sectionsCache: Record<number, Section> = {};

export function registerSection(section: Section) {
  sectionsCache[section.id] = section;
}

export function getSection(id: number): Section | null {
  return sectionsCache[id] || null;
}

export function getAllSections(): Section[] {
  return Object.values(sectionsCache);
}

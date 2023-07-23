import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const colorThemes = [
  "red",
  "orange",
  "amber",
  "green",
  "teal",
  "blue",
  "indigo",
  "pink",
];
export type ColorTheme = (typeof colorThemes)[number];

export type YourTestsEvent = {
  tests: {
    input: string;
  }[];
};

export const themeAtom = atomWithStorage<ColorTheme>("colorTheme", "pink");

export const submissionLoadingAtom = atom(false);

export const yourTestsAtom = atom<string[]>([]);
export const yourTestsResultsAtom = atom<{ input: string; output: string }[]>(
  []
);

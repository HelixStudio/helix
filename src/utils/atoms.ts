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

export const themeAtom = atomWithStorage<ColorTheme>("colorTheme", "pink");

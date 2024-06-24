import { LANGUAGES } from "@/constants/langs";

export type Language = (typeof LANGUAGES)[number];

export type TextDataField = {
  [lang in Language]: string;
};

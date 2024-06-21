import enData from "@/locales/en.json";
import ruData from "@/locales/ru.json";
import deData from "@/locales/de.json";
import zhData from "@/locales/zh.json";
import { type TextDataField } from "@/types/text";

export const pageHeadlineData: TextDataField = {
  EN: enData.headline,
  RU: ruData.headline,
  DE: deData.headline,
  ZH: zhData.headline,
};

export const firstSectionHeadlineData: TextDataField = {
  EN: enData["section-1"].headline,
  RU: ruData["section-1"].headline,
  DE: deData["section-1"].headline,
  ZH: zhData["section-1"].headline,
};

export const firstSectionTextData: TextDataField = {
  EN: enData["section-1"].text,
  RU: ruData["section-1"].text,
  DE: deData["section-1"].text,
  ZH: zhData["section-1"].text,
};

export const secondSectionHeadlineData: TextDataField = {
  EN: enData["section-2"].headline,
  RU: ruData["section-2"].headline,
  DE: deData["section-2"].headline,
  ZH: zhData["section-2"].headline,
};

export const secondSectionTextData: TextDataField = {
  EN: enData["section-2"].text,
  RU: ruData["section-2"].text,
  DE: deData["section-2"].text,
  ZH: zhData["section-2"].text,
};

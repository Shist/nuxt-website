import { type Language } from "@/types/languages";

export type LangsData = {
  [key in Language]: ITextData;
};

export interface ITextData {
  headline: string;
  "section-1": ISectionData;
  "section-2": ISectionData;
}

export interface ISectionData {
  headline: string;
  text: string;
}

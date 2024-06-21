export type Language = "EN" | "RU" | "DE" | "ZH";

export type TextDataField = {
  [lang in Language]: string;
};

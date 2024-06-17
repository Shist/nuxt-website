export type Language = "EN" | "RU" | "DE" | "ZH";

export function isLanguage(value: unknown): value is Language {
  return ["EN", "RU", "DE", "ZH"].includes(value as string);
}

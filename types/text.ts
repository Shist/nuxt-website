export interface ITextData {
  EN: {
    "section-1": string[];
    "section-2": string[];
  };
  RU: {
    "section-1": string[];
    "section-2": string[];
  };
  DE: {
    "section-1": string[];
    "section-2": string[];
  };
  ZH: {
    "section-1": string[];
    "section-2": string[];
  };
}

export function isTextData(value: unknown): value is ITextData {
  return (
    typeof value === "object" &&
    value !== null &&
    "EN" in value &&
    typeof value.EN === "object" &&
    value.EN !== null &&
    "section-1" in value.EN &&
    Array.isArray(value.EN["section-1"]) &&
    value.EN["section-1"].every((item) => typeof item === "string") &&
    "section-2" in value.EN &&
    Array.isArray(value.EN["section-2"]) &&
    value.EN["section-2"].every((item) => typeof item === "string") &&
    "RU" in value &&
    typeof value.RU === "object" &&
    value.RU !== null &&
    "section-1" in value.RU &&
    Array.isArray(value.RU["section-1"]) &&
    value.RU["section-1"].every((item) => typeof item === "string") &&
    "section-2" in value.RU &&
    Array.isArray(value.RU["section-2"]) &&
    value.RU["section-2"].every((item) => typeof item === "string") &&
    "DE" in value &&
    typeof value.DE === "object" &&
    value.DE !== null &&
    "section-1" in value.DE &&
    Array.isArray(value.DE["section-1"]) &&
    value.DE["section-1"].every((item) => typeof item === "string") &&
    "section-2" in value.DE &&
    Array.isArray(value.DE["section-2"]) &&
    value.DE["section-2"].every((item) => typeof item === "string") &&
    "ZH" in value &&
    typeof value.ZH === "object" &&
    value.ZH !== null &&
    "section-1" in value.ZH &&
    Array.isArray(value.ZH["section-1"]) &&
    value.ZH["section-1"].every((item) => typeof item === "string") &&
    "section-2" in value.ZH &&
    Array.isArray(value.ZH["section-2"]) &&
    value.ZH["section-2"].every((item) => typeof item === "string")
  );
}

export interface ISectionsData {
  EN: {
    "section-1": string;
    "section-2": string;
  };
  RU: {
    "section-1": string;
    "section-2": string;
  };
  DE: {
    "section-1": string;
    "section-2": string;
  };
  ZH: {
    "section-1": string;
    "section-2": string;
  };
}

export function isSectionsData(value: unknown): value is ISectionsData {
  return (
    typeof value === "object" &&
    value !== null &&
    "EN" in value &&
    typeof value.EN === "object" &&
    value.EN !== null &&
    "section-1" in value.EN &&
    typeof value.EN["section-1"] === "string" &&
    "section-2" in value.EN &&
    typeof value.EN["section-2"] === "string" &&
    "RU" in value &&
    typeof value.RU === "object" &&
    value.RU !== null &&
    "section-1" in value.RU &&
    typeof value.RU["section-1"] === "string" &&
    "section-2" in value.RU &&
    typeof value.RU["section-2"] === "string" &&
    "DE" in value &&
    typeof value.DE === "object" &&
    value.DE !== null &&
    "section-1" in value.DE &&
    typeof value.DE["section-1"] === "string" &&
    "section-2" in value.DE &&
    typeof value.DE["section-2"] === "string" &&
    "ZH" in value &&
    typeof value.ZH === "object" &&
    value.ZH !== null &&
    "section-1" in value.ZH &&
    typeof value.ZH["section-1"] === "string" &&
    "section-2" in value.ZH &&
    typeof value.ZH["section-2"] === "string"
  );
}

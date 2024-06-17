export interface IHeadlinesData {
  EN: string;
  RU: string;
  DE: string;
  ZH: string;
}

export function isHeadlinesData(value: unknown): value is IHeadlinesData {
  return (
    typeof value === "object" &&
    value !== null &&
    "EN" in value &&
    typeof value.EN === "string" &&
    "RU" in value &&
    typeof value.RU === "string" &&
    "DE" in value &&
    typeof value.DE === "string" &&
    "ZH" in value &&
    typeof value.ZH === "string"
  );
}

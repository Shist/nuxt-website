import { type Language, type TextDataField } from "@/types/text";
import {
  pageHeadlineData,
  firstSectionHeadlineData,
  firstSectionTextData,
  secondSectionHeadlineData,
  secondSectionTextData,
} from "@/locales";

export default function useLocalStorage() {
  const selectedLang = useState<Language>("lang", () => "EN");
  const pageHeadline = useState<TextDataField>(
    "pageHeadline",
    () => pageHeadlineData
  );
  const firstSectionHeadline = useState<TextDataField>(
    "firstSectionHeadline",
    () => firstSectionHeadlineData
  );
  const firstSectionText = useState<TextDataField>(
    "firstSectionText",
    () => firstSectionTextData
  );
  const secondSectionHeadline = useState<TextDataField>(
    "secondSectionHeadline",
    () => secondSectionHeadlineData
  );
  const secondSectionText = useState<TextDataField>(
    "secondSectionText",
    () => secondSectionTextData
  );

  const setLocalDataToState = () => {
    [
      "lang",
      "pageHeadline",
      "firstSectionHeadline",
      "firstSectionText",
      "secondSectionHeadline",
      "secondSectionText",
    ].forEach((field) => {
      const fieldFromLocalStorage = localStorage.getItem(field);

      if (fieldFromLocalStorage) {
        const fieldState = useState<Language | TextDataField>(field);

        fieldState.value = JSON.parse(fieldFromLocalStorage);
      }
    });
  };

  const saveLang = (newLang: string) => {
    localStorage.setItem("lang", JSON.stringify(newLang));
  };

  const savePageHeadline = (newHeadline: string) => {
    pageHeadline.value[selectedLang.value] = newHeadline;
    localStorage.setItem("pageHeadline", JSON.stringify(pageHeadline.value));
  };

  const saveSectionHeadline = (
    newSectionHeadline: string,
    sectionNum: 1 | 2
  ) => {
    if (sectionNum === 1) {
      firstSectionHeadline.value[selectedLang.value] = newSectionHeadline;
      localStorage.setItem(
        "firstSectionHeadline",
        JSON.stringify(firstSectionHeadline.value)
      );
    } else if (sectionNum === 2) {
      secondSectionHeadline.value[selectedLang.value] = newSectionHeadline;
      localStorage.setItem(
        "secondSectionHeadline",
        JSON.stringify(secondSectionHeadline.value)
      );
    }
  };

  const saveSectionText = (newSectionText: string, sectionNum: 1 | 2) => {
    if (sectionNum === 1) {
      firstSectionText.value[selectedLang.value] = newSectionText;
      localStorage.setItem(
        "firstSectionText",
        JSON.stringify(firstSectionText.value)
      );
    } else if (sectionNum === 2) {
      secondSectionText.value[selectedLang.value] = newSectionText;
      localStorage.setItem(
        "secondSectionText",
        JSON.stringify(secondSectionText.value)
      );
    }
  };

  return {
    setLocalDataToState,
    saveLang,
    savePageHeadline,
    saveSectionHeadline,
    saveSectionText,
  };
}

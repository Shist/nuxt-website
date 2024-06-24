import { type Language, type TextDataField } from "@/types/text";
import {
  pageHeadlineData,
  firstSectionHeadlineData,
  firstSectionTextData,
  secondSectionHeadlineData,
  secondSectionTextData,
} from "@/locales";
import { LANGUAGES, LANGS_FIELDS } from "@/constants/langs";

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
    const langFromLocalStorage = localStorage.getItem("lang");
    if (langFromLocalStorage) {
      const fieldState = useState<Language>("lang");
      fieldState.value = langFromLocalStorage as Language;
    }

    LANGUAGES.forEach((lang) => {
      LANGS_FIELDS.forEach((field) => {
        const fieldFromLocalStorage = localStorage.getItem(`${lang}_${field}`);

        if (fieldFromLocalStorage) {
          const fieldState = useState<TextDataField>(field);
          fieldState.value[lang] = fieldFromLocalStorage;
        }
      });
    });
  };

  const saveLang = (newLang: string) => {
    localStorage.setItem("lang", newLang);
  };

  const savePageHeadline = (newHeadline: string) => {
    pageHeadline.value[selectedLang.value] = newHeadline;
    localStorage.setItem(`${selectedLang.value}_pageHeadline`, newHeadline);
  };

  const saveSectionHeadline = (
    newSectionHeadline: string,
    sectionNum: 1 | 2
  ) => {
    if (sectionNum === 1) {
      firstSectionHeadline.value[selectedLang.value] = newSectionHeadline;
      localStorage.setItem(
        `${selectedLang.value}_firstSectionHeadline`,
        newSectionHeadline
      );
    } else if (sectionNum === 2) {
      secondSectionHeadline.value[selectedLang.value] = newSectionHeadline;
      localStorage.setItem(
        `${selectedLang.value}_secondSectionHeadline`,
        newSectionHeadline
      );
    }
  };

  const saveSectionText = (newSectionText: string, sectionNum: 1 | 2) => {
    if (sectionNum === 1) {
      firstSectionText.value[selectedLang.value] = newSectionText;
      localStorage.setItem(
        `${selectedLang.value}_firstSectionText`,
        newSectionText
      );
    } else if (sectionNum === 2) {
      secondSectionText.value[selectedLang.value] = newSectionText;
      localStorage.setItem(
        `${selectedLang.value}_secondSectionText`,
        newSectionText
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

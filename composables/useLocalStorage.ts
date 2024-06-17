import headlinesData from "@/data/headline-data.json";
import sectionsData from "@/data/sections-data.json";
import textData from "@/data/text-data.json";
import { type IHeadlinesData, isHeadlinesData } from "@/types/headlines";
import { type ISectionsData, isSectionsData } from "@/types/sections";
import { type ITextData, isTextData } from "@/types/text";
import { type Language, isLanguage } from "@/types/languages";

export default function useLocalStorage() {
  const selectedLang = useState<Language>("lang", () => "EN");
  const headlines = useState<IHeadlinesData>("headlines", () => headlinesData);
  const sections = useState<ISectionsData>("sections", () => sectionsData);
  const text = useState<ITextData>("text", () => textData);

  const setLangToState = () => {
    const langFromLocalStorage = localStorage.getItem("lang");
    if (isLanguage(langFromLocalStorage)) {
      selectedLang.value = langFromLocalStorage;
    }
  };

  const setHeadlinesToState = () => {
    const headlinesFromLocalStorage = localStorage.getItem("headlines");
    if (headlinesFromLocalStorage) {
      const parsedHeadlines = JSON.parse(headlinesFromLocalStorage);
      if (isHeadlinesData(parsedHeadlines)) {
        headlines.value = parsedHeadlines;
      }
    }
  };

  const setSectionsToState = () => {
    const sectionsFromLocalStorage = localStorage.getItem("sections");
    if (sectionsFromLocalStorage) {
      const parsedSections = JSON.parse(sectionsFromLocalStorage);
      if (isSectionsData(parsedSections)) {
        sections.value = parsedSections;
      }
    }
  };

  const setTextToState = () => {
    const textFromLocalStorage = localStorage.getItem("text");
    if (textFromLocalStorage) {
      const parsedText = JSON.parse(textFromLocalStorage);
      if (isTextData(parsedText)) {
        text.value = parsedText;
      }
    }
  };

  const saveLang = (newLang: string) => {
    localStorage.setItem("lang", newLang);
  };

  const saveHeadlines = (newHeadline: string) => {
    headlines.value[selectedLang.value] = newHeadline;
    localStorage.setItem("headlines", JSON.stringify(headlines.value));
  };

  const saveSections = (newSection: string, sectionNum: 1 | 2) => {
    sections.value[selectedLang.value][`section-${sectionNum}`] = newSection;
    localStorage.setItem("sections", JSON.stringify(sections.value));
  };

  const saveText = (
    newText: string,
    sectionNum: 1 | 2,
    paragraphIndex: number
  ) => {
    text.value[selectedLang.value][`section-${sectionNum}`][paragraphIndex] =
      newText;
    localStorage.setItem("text", JSON.stringify(text.value));
  };

  return {
    setLangToState,
    setHeadlinesToState,
    setSectionsToState,
    setTextToState,
    saveLang,
    saveHeadlines,
    saveSections,
    saveText,
  };
}

import langsDataObj from "@/locales";
import { type LangsData } from "@/types/langsData";
import { type Language } from "@/types/languages";

export default function useLocalStorage() {
  const selectedLang = useState<Language>("lang", () => "EN");
  const langsData = useState<LangsData>("langsData", () => langsDataObj);

  const setLangToState = () => {
    const langFromLocalStorage = localStorage.getItem("lang");
    if (langFromLocalStorage) {
      selectedLang.value = langFromLocalStorage as Language;
    }
  };

  const setLangsDataToState = () => {
    const langsDataFromLocalStorage = localStorage.getItem("langsData");
    if (langsDataFromLocalStorage) {
      const parsedLangsData = JSON.parse(langsDataFromLocalStorage);
      langsData.value = parsedLangsData;
    }
  };

  const saveLang = (newLang: string) => {
    localStorage.setItem("lang", newLang);
  };

  const saveHeadline = (newHeadline: string) => {
    langsData.value[selectedLang.value].headline = newHeadline;
    localStorage.setItem("langsData", JSON.stringify(langsData.value));
  };

  const saveSectionHeadline = (
    newSectionHeadline: string,
    sectionNum: 1 | 2
  ) => {
    langsData.value[selectedLang.value][`section-${sectionNum}`].headline =
      newSectionHeadline;
    localStorage.setItem("langsData", JSON.stringify(langsData.value));
  };

  const saveSectionText = (newSectionText: string, sectionNum: 1 | 2) => {
    langsData.value[selectedLang.value][`section-${sectionNum}`].text =
      newSectionText;
    localStorage.setItem("langsData", JSON.stringify(langsData.value));
  };

  return {
    setLangToState,
    setLangsDataToState,
    saveLang,
    saveHeadline,
    saveSectionHeadline,
    saveSectionText,
  };
}

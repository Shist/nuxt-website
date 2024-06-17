<template>
  <div class="global-container">
    <NuxtRouteAnnouncer />
    <Spinner v-if="isLoading" />
    <header class="header">
      <h1
        class="header__headline"
        contentEditable
        @input="handleHeadlineChange"
      >
        {{ headlines[selectedLang] }}
      </h1>
      <div class="header__controls-wrapper">
        <NuxtLink
          to="#section-1"
          class="header__btn"
          contentEditable
          @input="handleFirstBtnChange"
          >{{ sections[selectedLang]["section-1"] }}</NuxtLink
        >
        <NuxtLink
          to="#section-2"
          class="header__btn"
          contentEditable
          @input="handleSecondBtnChange"
          >{{ sections[selectedLang]["section-2"] }}</NuxtLink
        >
        <select v-model="selectedLang" name="language" id="lang-select">
          <option value="EN">EN</option>
          <option value="RU">RU</option>
          <option value="DE">DE</option>
          <option value="ZH">ZH</option>
        </select>
      </div>
    </header>
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import headlinesData from "@/data/headline-data.json";
import sectionsData from "@/data/sections-data.json";
import textData from "@/data/text-data.json";
import { type IHeadlinesData } from "@/types/headlines";
import { type ISectionsData } from "@/types/sections";
import { type ITextData } from "@/types/text";
import { type Language } from "@/types/languages";
import useLocalStorage from "@/composables/useLocalStorage";

const isLoading = ref(true);

const selectedLang = useState<Language>("lang", () => "EN");
const headlines = useState<IHeadlinesData>("headlines", () => headlinesData);
const sections = useState<ISectionsData>("sections", () => sectionsData);
useState<ITextData>("text", () => textData);

onMounted(() => {
  isLoading.value = false;

  const {
    setLangToState,
    setHeadlinesToState,
    setSectionsToState,
    setTextToState,
  } = useLocalStorage();

  setLangToState();
  setHeadlinesToState();
  setSectionsToState();
  setTextToState();
});

const { saveLang, saveHeadlines, saveSections } = useLocalStorage();

watch(selectedLang, (newLang) => {
  saveLang(newLang);
});

const handleHeadlineChange = (event: Event) => {
  saveHeadlines((event.target as HTMLElement).innerText);
};

const handleFirstBtnChange = (event: Event) => {
  saveSections((event.target as HTMLElement).innerText, 1);
};

const handleSecondBtnChange = (event: Event) => {
  saveSections((event.target as HTMLElement).innerText, 2);
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 75px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-header-bg;
  border: 1px solid $color-black;
  &__headline {
    @include default-headline(26px, 26px, $color-black);
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__controls-wrapper {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .header__btn {
      @include default-btn(200px, $color-black, $color-header-btn);
      min-width: 200px;
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    @media (max-width: $tablet-l) {
      display: none;
    }
  }
}
.main {
  flex-grow: 1;
  padding-top: 75px;
}
</style>

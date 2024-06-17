<template>
  <div class="global-container">
    <NuxtRouteAnnouncer />
    <Spinner v-if="isLoading" />
    <header class="header">
      <h1
        class="header__headline"
        contentEditable="true"
        @input="handleHeadlineChange"
      >
        {{ headlines[selectedLang] }}
      </h1>
      <div class="header__controls-wrapper">
        <NuxtLink
          to="#section-1"
          class="header__btn"
          contentEditable="true"
          @input="handleFirstBtnChange"
          >{{ sections[selectedLang]["section-1"] }}</NuxtLink
        >
        <NuxtLink
          to="#section-2"
          class="header__btn"
          contentEditable="true"
          @input="handleSecondBtnChange"
          >{{ sections[selectedLang]["section-2"] }}</NuxtLink
        >
        <div
          v-show="!isImgNeeded"
          class="header__initials-wrapper"
          @click="isImgNeeded = true"
        >
          <div
            v-if="isError"
            class="header__initials-wrapper header__initials-wrapper_error"
          >
            <span class="header__initials-error">Error</span>
          </div>
          <div
            v-else
            class="header__initials-wrapper header__initials-wrapper_success"
          >
            <span class="header__initials-text">{{ userInitials }}</span>
          </div>
        </div>
        <img
          v-show="isImgNeeded"
          :src="userAvatarSrc"
          alt="user avatar"
          class="header__icon-img"
          @click="isImgNeeded = false"
        />
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
import useLoadUser from "@/composables/useLoadUser";

const isLoading = ref(true);

const isImgNeeded = ref(false);

const { fetchUser, userInitials, userAvatarSrc, isError } = useLoadUser();

await fetchUser();

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
    .header__initials-wrapper {
      cursor: pointer;
      .header__initials-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid $color-black;
        &_success {
          background-color: $color-white;
        }
        &_error {
          background-color: $color-light-red;
        }
        .header__initials-text {
          font-family: "Roboto";
          font-weight: 700;
          font-size: 24px;
          line-height: 24px;
          color: $color-black;
        }
        .header__initials-error {
          font-family: "Roboto";
          font-weight: 700;
          font-size: 14px;
          line-height: 14px;
          color: $color-red;
        }
      }
    }
    .header__icon-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid $color-black;
      cursor: pointer;
    }
  }
}
.main {
  flex-grow: 1;
  padding-top: 75px;
}
</style>

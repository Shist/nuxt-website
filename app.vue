<template>
  <div class="global-container">
    <NuxtRouteAnnouncer />
    <header class="header">
      <h1 class="header__headline">{{ headlineData[selectedLang] }}</h1>
      <div class="header__controls-wrapper">
        <NuxtLink to="#section-1" class="header__btn">Section 1</NuxtLink>
        <NuxtLink to="#section-2" class="header__btn">Section 2</NuxtLink>
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
import headlineData from "@/data/headline-data.json";
import { type Language, isLanguage } from "@/types/languages";

const selectedLang = useState<Language>("lang", () => "EN");

onMounted(() => {
  const langFromLocalStorage = localStorage.getItem("lang");
  if (isLanguage(langFromLocalStorage)) {
    selectedLang.value = langFromLocalStorage;
  }
});

watch(selectedLang, (newLang) => {
  localStorage.setItem("lang", newLang);
});
</script>

<style lang="scss">
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
  }
  &__controls-wrapper {
    display: flex;
    align-items: center;
    column-gap: 10px;
    .header__btn {
      @include default-btn(200px, $color-black, $color-header-btn);
      min-width: 200px;
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

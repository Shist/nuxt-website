<template>
  <div class="main-page">
    <section class="main-page__section" id="section-1">
      <h2
        class="main-page__section-headline"
        contentEditable
        @input="handleFirstSectionChange"
      >
        {{ sections[selectedLang]["section-1"] }}
      </h2>
      <p
        v-for="(paragraph, index) in text[selectedLang]['section-1']"
        class="main-page__section-paragraph"
        contentEditable
        @input="(e) => handleParagraphChange(e, 1, index)"
      >
        {{ paragraph }}
      </p>
    </section>
    <section class="main-page__section" id="section-2">
      <h2
        class="main-page__section-headline"
        contentEditable
        @input="handleSecondSectionChange"
      >
        {{ sections[selectedLang]["section-2"] }}
      </h2>
      <p
        v-for="(paragraph, index) in text[selectedLang]['section-2']"
        class="main-page__section-paragraph"
        contentEditable
        @input="(e) => handleParagraphChange(e, 2, index)"
      >
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { type ISectionsData } from "@/types/sections";
import { type ITextData } from "@/types/text";
import { type Language } from "@/types/languages";

const selectedLang = useState<Language>("lang");
const sections = useState<ISectionsData>("sections");
const text = useState<ITextData>("text");

const handleFirstSectionChange = (event: Event) => {
  sections.value[selectedLang.value]["section-1"] = (
    event.target as HTMLElement
  ).innerText;
  localStorage.setItem("sections", JSON.stringify(sections.value));
};

const handleSecondSectionChange = (event: Event) => {
  sections.value[selectedLang.value]["section-2"] = (
    event.target as HTMLElement
  ).innerText;
  localStorage.setItem("sections", JSON.stringify(sections.value));
};

const handleParagraphChange = (
  event: Event,
  sectionNum: 1 | 2,
  paragraphIndex: number
) => {
  text.value[selectedLang.value][`section-${sectionNum}`][paragraphIndex] = (
    event.target as HTMLElement
  ).innerText;
  localStorage.setItem("text", JSON.stringify(text.value));
};
</script>

<style lang="scss" scoped>
.main-page {
  padding: 20px;
  @media (max-width: $phone-l) {
    padding: 10px;
  }
  &__section {
    padding: 20px;
    @media (max-width: $phone-l) {
      padding: 10px;
    }
    scroll-margin-top: 75px;
    .main-page__section-headline {
      @include default-headline(32px, 32px, $color-black);
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .main-page__section-paragraph {
      @include default-text(20px, 20px, $color-black);
    }
  }
}
</style>

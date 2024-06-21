<template>
  <div class="main-page">
    <section class="main-page__section" id="section-1">
      <h2
        class="main-page__section-headline"
        contentEditable="true"
        @input="(e) => handleSectionChange(e, 1)"
      >
        {{ firstSectionHeadline[selectedLang] }}
      </h2>
      <p
        class="main-page__section-paragraph"
        contentEditable="true"
        @input="(e) => handleTextChange(e, 1)"
      >
        {{ firstSectionText[selectedLang] }}
      </p>
    </section>
    <section class="main-page__section" id="section-2">
      <h2
        class="main-page__section-headline"
        contentEditable="true"
        @input="(e) => handleSectionChange(e, 2)"
      >
        {{ secondSectionHeadline[selectedLang] }}
      </h2>
      <p
        class="main-page__section-paragraph"
        contentEditable="true"
        @input="(e) => handleTextChange(e, 2)"
      >
        {{ secondSectionText[selectedLang] }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { type Language, type TextDataField } from "@/types/text";
import {
  firstSectionHeadlineData,
  firstSectionTextData,
  secondSectionHeadlineData,
  secondSectionTextData,
} from "@/locales";

const selectedLang = useState<Language>("lang", () => "EN");
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

const { saveSectionHeadline, saveSectionText } = useLocalStorage();

const handleSectionChange = (event: Event, sectionNum: 1 | 2) => {
  saveSectionHeadline((event.target as HTMLElement).innerText, sectionNum);
};

const handleTextChange = (event: Event, sectionNum: 1 | 2) => {
  saveSectionText((event.target as HTMLElement).innerText, sectionNum);
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

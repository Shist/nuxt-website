<template>
  <div class="main-page">
    <section class="main-page__section" id="section-1">
      <h2
        class="main-page__section-headline"
        contentEditable="true"
        @input="(e) => handleSectionChange(e, 1)"
      >
        {{ langsData[selectedLang]["section-1"].headline }}
      </h2>
      <p
        class="main-page__section-paragraph"
        contentEditable="true"
        @input="(e) => handleTextChange(e, 1)"
      >
        {{ langsData[selectedLang]["section-1"].text }}
      </p>
    </section>
    <section class="main-page__section" id="section-2">
      <h2
        class="main-page__section-headline"
        contentEditable="true"
        @input="(e) => handleSectionChange(e, 2)"
      >
        {{ langsData[selectedLang]["section-2"].headline }}
      </h2>
      <p
        class="main-page__section-paragraph"
        contentEditable="true"
        @input="(e) => handleTextChange(e, 2)"
      >
        {{ langsData[selectedLang]["section-2"].text }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { type Language } from "@/types/languages";
import { type LangsData } from "@/types/langsData";
import langsDataObj from "@/locales";

const selectedLang = useState<Language>("lang", () => "EN");
const langsData = useState<LangsData>("langsData", () => langsDataObj);

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

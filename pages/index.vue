<template>
  <div class="main-page">
    <section class="main-page__section" id="section-1">
      <h2 class="main-page__section-headline">Section #1</h2>
      <p
        v-for="paragraph in textData[currentLang]['section-1']"
        class="main-page__section-paragraph"
      >
        {{ paragraph }}
      </p>
    </section>
    <section class="main-page__section" id="section-2">
      <h2 class="main-page__section-headline">Section #2</h2>
      <p
        v-for="paragraph in textData[currentLang]['section-2']"
        class="main-page__section-paragraph"
      >
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import textData from "@/data/text-data.json";
import { type Language } from "@/types/languages";

const currentLang = useState<Language>("lang");
</script>

<style lang="scss">
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
    }
    .main-page__section-paragraph {
      @include default-text(20px, 20px, $color-black);
    }
  }
}
</style>

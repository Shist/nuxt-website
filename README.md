# nuxt-website

### This is a website developed using Nuxt framework. Here user can watch and edit his translations of the suggested text on 4 different languages (EN, RU, DE, ZN).

---

### This project was inspired by recommendations from this [technical assignment](https://drive.google.com/file/d/1toV0U-x2Cg4smaHBa8oYqaCsH2mzNEaD/view?usp=sharing).

---

### This project receives data using the reqres.in API, you can see the details of how it works here:

## https://reqres.in/

---

### This project will be probably hosted using the Vecel.com platform when it will be approved and moved to master branch.

---

## Video demo:

https://github.com/Shist/nuxt-website/assets/40572268/d2b9be55-e7ee-4ba3-8987-6316ed2eaae3

---

## Instruction for launching this project

1. Go to the folder on your PC where you want to install the project:
   `cd "your-folder"`
1. Download and install files of this project:
   `git clone https://github.com/Shist/nuxt-website`
1. Go to the app folder:
   `cd nuxt-website`
1. Install all needed dependencies:
   `npm install`
1. Run the app (by default on 'http://localhost:3000/') using:
   `npm run dev`
---

## Description of folder structure

- The `assets` folder stores all fonts and styles
  - The `fonts` folder stores all local fonts
  - The `styles` folder stores all the application styles
- The `components` folder stores some Vue components that can presumably be reused somewhere many times
- The `composables` folder stores composable functions (hooks) according to Composition API syntax
- The `constants` folder stores all the constant variables of the app (which should not be changed anywhere else)
- The `data` folder stores all local data (usually some JSON-files)
- The `pages` folder stores all Vue components which represent the main application pages
- The `public` folder stores only html document favicon
- The `server` folder stores files connected with server-side
- The `types` folder stores all files with interfaces and types

---

## Technologies used in the project

- HTML
- CSS / SCSS
- JavaScript
- TypeScript
- Vue 3 (Composition API)
- Nuxt 3
  - SSR / CSR
  - State management (Vuex)
  - Routing
  - ESLint / Prettier
  - Fetch API (useFetch, $fetch, useAsyncData)
- localStorage
- Imports / Exports



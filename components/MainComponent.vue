<script setup>
import DadJokes from './DadJokes.vue';
import { ref, defineAsyncComponent } from 'vue'
const ComponentOne = defineAsyncComponent(() => import('./ComponentOne.vue'))
const ComponentTwo = defineAsyncComponent(() => import('./ComponentTwo.vue'))
const ComponentThree = defineAsyncComponent(() => import('./ComponentThree.vue'))

const currentTab = ref('ComponentOne')

const tabs = {
  ComponentOne: ComponentOne,
  ComponentTwo: ComponentTwo,
  ComponentThree: ComponentThree
}
</script>

<template>
  <!-- With Dynamic Component -->
  <button @click="currentTab = 'ComponentOne'">What is HTML</button>
  <button @click="currentTab = 'ComponentTwo'">What is CSS</button>
  <button @click="currentTab = 'ComponentThree'">What is JS</button>

  <component :is="tabs[currentTab]" />
  <DadJokes />
</template>

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
  <Button :pt="{
    root: '!opacity-50',
  }" @click="currentTab = 'ComponentOne'">What is HTML</Button>
  <Button @click="currentTab = 'ComponentTwo'">What is CSS</Button>
  <Button @click="currentTab = 'ComponentThree'">What is JS</Button>

  <component :is="tabs[currentTab]" />
  <DadJokes />
</template>

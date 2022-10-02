<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import AppHeader from "@/components/layouts/app/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>

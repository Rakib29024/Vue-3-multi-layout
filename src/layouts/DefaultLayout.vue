<template>
  <def-header></def-header>
  <router-view></router-view>
</template>

<script>
import DefHeader from "@/components/layouts/default/DefHeader.vue";
export default {
  components: { DefHeader },
};
</script>

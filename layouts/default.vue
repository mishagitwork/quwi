<template>
  <div :class="$style.container">
    <HeaderOrganism v-if="$route.path !== '/sign-in'" />
    <Nuxt :class="$style.nuxt" />
  </div>
</template>

<script>
import HeaderOrganism from '~/components/organisms/Header.vue'

export default {
  name: 'LayoutsDefault',
  components: { HeaderOrganism },
}
</script>

<style lang="scss" module>
.container {
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;

  .nuxt {
    flex: 1 1 auto;
  }
}
</style>

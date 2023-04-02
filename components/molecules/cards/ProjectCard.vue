<template>
  <div :class="$style.container">
    <img :src="logo" alt="project logo" />
    <div :class="$style.name">{{ name }}</div>
    <div :class="[$style.active, { [$style.isActive]: isActive }]">
      {{ isActive ? 'Active' : 'Not Active' }}
    </div>
    <div :class="$style.spentTime">Total time {{ spentSecAllTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    logo: { type: String, default: '' },
    name: { type: String, default: '' },
    isActive: { type: Boolean, default: false },
    spentSecAllTime: { type: Number, default: 0 },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  background: white;
  > img {
    height: 64px;
    width: 64px;
  }
  .name {
    padding: 0 24px;
  }
  .active {
    color: red;
    flex: 1 1 auto;
    text-align: center;
    &.isActive {
      color: green;
    }
  }
}
</style>

<template>
  <div :class="$style.container">
    <transition
      :enter-class="$style.enter"
      :leave-to-class="$style.leaveTo"
      :enter-active-class="$style.enterActive"
      :leave-active-class="$style.leaveActive"
    >
      <div v-if="isOpen" :class="$style.background" @click="$emit('close')">
        <div :class="$style.modal" @click.stop>
          <div :class="$style.header">
            <div :class="$style.icon" @click="$emit('close')">+</div>
          </div>
          <div :class="[$style.content]">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ModalAtoms',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    document.addEventListener('keydown', (e) => {
      this.closeModal(e)
    })
  },

  methods: {
    closeModal(e) {
      if (this.isOpen && (e.key === 'Esc' || e.key === 'Escape')) {
        e.preventDefault()
        e.stopPropagation()
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="scss" module>
.container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(153, 160, 163, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 0.75rem;
    .modal {
      background-color: white;
      width: 100%;
      max-height: 95%;
      max-width: 640px;
      margin: 0 auto;
      overflow: auto;
      .header {
        // background: $footer-bgc;
        height: 3rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1rem;
        .icon {
          font-size: 48px;
          cursor: pointer;
          transform: rotate(45deg);
        }
      }
      .content {
        padding: 3rem 3rem 4.5rem;
      }
    }
  }
  .enter,
  .leaveTo {
    opacity: 0;
    .modal {
      opacity: 0;
    }
  }
  .enterActive,
  .leaveActive {
    transition: opacity 0.8s ease;
    .modal {
      transition: opacity 0.8s ease;
    }
  }
}
</style>

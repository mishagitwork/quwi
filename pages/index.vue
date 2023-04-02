<template>
  <div :class="$style.container">
    <template v-for="p in projectList">
      <ProjectCard
        :key="p.id"
        :name="p.name"
        :logo="p.logo_url"
        :is-active="!!p.is_active"
        :spent-sec-all-time="p.spent_sec_all_time"
        @click.native="
          isOpenModal = true
          currentProject = p
        "
      />
    </template>
    <Modal :is-open="isOpenModal" @close="isOpenModal = false">
      <form action="" @submit.prevent="submitEditProject">
        <div :class="$style.field">
          <label for="name">Name:</label>
          <input
            v-model="currentProject.name"
            required
            placeholder="Enter project name"
          />
        </div>
        <div :class="$style.field">
          <label>Sample Invite Text:</label>
          <div>{{ currentProject.inv_sample_text }}</div>
        </div>

        <button type="submit">Edit</button>
      </form>
    </Modal>
  </div>
</template>

<script>
import Modal from '~/components/atoms/Modal.vue'
import ProjectCard from '~/components/molecules/cards/ProjectCard.vue'

export default {
  name: 'IndexPage',
  components: { ProjectCard, Modal },
  middleware: ['isAuth'],

  data: () => ({
    projectList: [],
    isOpenModal: false,
    currentProject: {},
  }),

  mounted() {
    this.getProjectList()
  },
  methods: {
    async getProjectList() {
      const { value, error } = await this.$repo.ProjectActions.getList()

      if (error) {
        // Handle Error
        return
      }
      this.projectList = value.projects
    },
    async submitEditProject() {
      const { error } = await this.$repo.ProjectActions.update(
        this.currentProject.id,
        { name: this.currentProject.name }
      )

      if (error) {
        // Handle Error
        return
      }
      this.getProjectList()
      this.isOpenModal = false
    },
  },
}
</script>

<style lang="scss" module>
.container {
  background: #e5e7eb;
  .field {
    margin-bottom: 1rem;
  }
}
</style>

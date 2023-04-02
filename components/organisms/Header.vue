<template>
  <header>
    <span @click="logout">Logout</span>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
import TokensHelpers from '~/helpers/auth'

export default {
  name: 'HeaderOrganism',
  methods: {
    ...mapMutations({
      setIsLoggedIn: 'auth/setIsLoggedIn',
    }),
    async logout() {
      const { error } = await this.$repo.AuthActions.logout()

      if (error) {
        // Handle Error
        return
      }

      this.setIsLoggedIn(false)
      TokensHelpers.removeAuthToken()
      this.$router.push('/sign-in')
    },
  },
}
</script>

<style lang="scss" module>
header {
  padding: 1rem 1.5rem;
  > span {
    cursor: pointer;
  }
}
</style>

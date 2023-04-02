<template>
  <div :class="$style.container">
    <form action="" @submit.prevent="submitSignIn">
      <h2>Sign In</h2>
      <div :class="$style.field">
        <label for="name">Email:</label>
        <input
          v-model="form.email"
          type="text"
          required
          name="name"
          placeholder="Enter your email"
        />
      </div>
      <div :class="$style.field">
        <label for="email">Password:</label>
        <input
          v-model="form.password"
          type="password"
          name="email"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TokenHelpers from '~/helpers/auth'
export default {
  name: 'SignInPage',
  middleware: ['isGuest'],
  data: () => ({
    form: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapMutations({
      setIsLoggedIn: 'auth/setIsLoggedIn',
    }),
    async submitSignIn() {
      const { value, error } = await this.$repo.AuthActions.signIn(this.form)

      if (error) {
        // Handle Error
        return
      }

      this.setIsLoggedIn(true)
      TokenHelpers.setAuthToken(value.token)
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    > :not(:last-child) {
      margin-bottom: 1.5rem;
    }
    .field {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

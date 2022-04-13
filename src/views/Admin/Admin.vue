<template>

  <div class="login-container">
    <div class="login-header">
      <router-link id="dimipak" :to="{name: 'Home'}"><h1>DIMIPAK</h1></router-link>
    </div>

    <form @submit="checkLoginForm">
      <div class="login-body">
        <div v-if="loginFormError.error">
          <p>There was some errors:</p>
          <p class="error-message">* {{loginFormError.message}}</p>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input @blur="checkUsername" @keyup="checkUsername" type="text" v-model="username" class="form-control" id="username" :class="{'input-error': usernameError.error}">
          <p class="error-message" v-if="usernameError.error">{{usernameError.message}}</p>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input @blur="checkPassword" @keyup="checkPassword" type="password" v-model="password" class="form-control" id="password" :class="{'input-error': passwordError.error}">
          <p class="error-message" v-if="passwordError.error">{{passwordError.message}}</p>
        </div>

        <button type="submit" class="login-button">Submit</button>
      </div>
    </form>

  </div>

  <NotificationsToast/>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import router from '../../router'

export default {
  name: "Home-Admin",
  data() {
    return {
      username: "dimipak",
      password: "secret",
      loginFormError: {
        error: false,
        message: ""
      },
      usernameError: {
        error: false,
        message: "",
        blurOnce: false
      },
      passwordError: {
        error: false,
        message: "",
        blurOnce: false
      }
    }
  },
  methods: {
    ...mapActions('admin', ['loginUser']),

    ...mapMutations('admin', ['fetchAccessToken']),

    login: async function() {
      const statusCode = await this.loginUser({username: this.username, password: this.password})
      console.log("status code", statusCode)
      if (statusCode === 200) {
        await router.push({name: "Profiles"})
      } else {
        this.loginFormError.message = this.getBadResponse.message
        this.loginFormError.error = true
      }
    },

    checkLoginForm: function(e) {
      e.preventDefault()

      this.checkUsername(e)
      this.checkPassword(e)
      if (this.username === "" || this.password === "") {
        this.loginFormError.error = true
        this.loginFormError.message = "Please fill the form"
        return
      }

      if (this.usernameError.error || this.passwordError.error) {
        this.loginFormError.error = true
        this.loginFormError.message = "Please fix your errors"
      } else {
        this.login()
      }

    },

    checkUsername: function(e) {
      if (e.type === "blur" || this.usernameError.blurOnce) {
        if (this.username.length < 3) {
          this.usernameError.message = "minimum length is 3"
          this.usernameError.error = true
          this.usernameError.blurOnce = true
        } else {
          this.usernameError.message = ""
          this.usernameError.error = false
        }
      }
    },

    checkPassword: function(e) {
      if (e.type === "blur" || this.passwordError.blurOnce) {
        if (this.password.length < 3) {
          this.passwordError.message = "minimum length is 3"
          this.passwordError.error = true
          this.passwordError.blurOnce = true
        } else {
          this.passwordError.message = ""
          this.passwordError.error = false
        }
      }
    }
  },
  computed: {
    ...mapGetters('admin', ['getUser', 'getAccessToken', 'getToken', 'getBadResponse'])
  },
  mounted() {
    console.log("admin")
  }
}
</script>

<style>

#dimipak, #dimipak:hover {
  color: black;
  text-decoration: none;
}

.login-container {
  width: 420px;
  background-color: white;
  margin: 100px auto auto;
  border-radius: 4px;
}

.login-header {
  box-shadow: 0 4px 14px 0 #8080803d;
}

.login-header h1 {
  padding: 20px;
  text-align: center;
}

.login-body {
  margin-top: 100px;
  padding: 20px;
  position: relative;
}

.login-button {
  margin-top: 70px;
  width: 100%;
  background-image: linear-gradient(to right , #fb4a7e, #ff823f);
  border: none !important;
  border-radius: 0 !important;

  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
}

.error-message {
  font-style: italic;
  color: #d53737;
}

.input-error {
  border: 1px solid #d53737 !important;
  color: #d53737 !important;
}
</style>
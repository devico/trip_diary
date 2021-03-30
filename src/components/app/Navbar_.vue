<template>
  <nav class="navbar orange lighten-1">
  <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/" class="black-text">
            <i class="material-icons left">search</i>Trips
          </router-link>
        </li>
        <li>
          <router-link to="/" class="black-text">
            <i class="material-icons left">search</i>Trips
          </router-link>
        </li>
        
        <li>
          <a href="#" class="black-text" @click.prevent="logout">
            {{name}}<i class="material-icons">logout</i>
          </a>
        </li>        
      </ul>
    </div>
  <!-- <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left"> 
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="nav-title black-text">Trip Diary</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav> -->
  </nav>
</template>

<script>
export default {
  mounted() {
    // M.Dropdown.init(this.$refs.dropdown, {
    //   constrainWidth: false
    // })
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')            
      this.$router.push('/login?message=logout')
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  },
  beforeDestroy() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>

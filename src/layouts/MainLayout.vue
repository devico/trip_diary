<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>      
    </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/Sidebar.vue'
import messages from '../common/messages'
export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }    
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
    
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code]) || 'Что-то пошло не так'
    }
  }
}
</script>

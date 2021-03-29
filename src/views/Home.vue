<template>
  <div>
  <div class="page-title">
    <h3>Trips</h3>

    <button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
    </button>
  </div>

  <Loader v-if="loading" />

  <div v-else class="row">
    <div 
      class="col s12 m4 l4"
      v-for="trip in trips"
      :key="trip.id"
    >
      <div class="card medium sticky-action">
        <div class="card-image">
          <img :src="trip.picture">
          <span class="card-title">{{trip.name}}</span>          
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{{trip.name}}<i class="material-icons right">more_vert</i></span>          
        </div>
        <div class="card-reveal">
          <span class="card-title">{{trip.name}}<i class="right">x</i></span>
          <p>{{trip.shortDescription}}</p>
        </div>
        <div class="card-action">
          <button 
            class="btn waves-effect waves-light" 
            type="submit"
            @click="showTrip(trip.id)"            
          >Order<i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>


  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    loading: true,
    trips: {},
  }),
  async mounted() {
    this.trips = await this.$store.dispatch('fetchTrips')
    this.loading = false
  },  
  computed: {
    error() {
      return this.$store.getters.error
    },
    trimDescription(t) {
      console.log('DESC: ', t)
      return t.substring(1, 40)
    }
  },
  methods: {
    showTrip(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>
.card-image {
  max-height:100%;
}
</style>

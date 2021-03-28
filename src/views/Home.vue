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
      <div class="card sticky-action">
        <div class="card-image">
          <img :src="trip.pictures[0]">
          <span class="card-title">{{trip.name}}</span>
          <a class="btn cyan btn-floating halfway-fab pulse activator">+</a>
        </div>
        <div class="card-content">
          <p>{{trip.name}}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title">{{trip.name}}<i class="right">x</i></span>
          <p>{{trip.shortDescription}}</p>
        </div>
        <div class="card-action">
          <a href="#">Order</a>
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
    }    
  },
}
</script>

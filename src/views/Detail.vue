<template>
  <div class="row">
    <div class="col s12">
      <div class="page-title">
        <h3>{{trip.name}}</h3>
      </div>
        <div class="row">
          <div class="col s12 m6">
            <div class="icon-block">
              <div class="card ">
                <div class="card-image">
                  <img :src="trip.pictures[0]">                  
                </div>                
              </div>
              <h5>Activity:</h5>
              <p class="light">{{trip.name}}</p>
              <h5>Short Description:</h5>
              <p class="light">{{trip.shortDescription}}</p>
              <h5>Price:</h5>
              <p class="light">{{trip.priceAmmount}} {{trip.priceCurrency}}</p>
            </div>
          </div>

          <div class="col s12 m6">
            <div class="icon-block">
              <h5>Activity:</h5>
              <p class="light">{{trip.name}}</p>
              <h5>Short Description:</h5>
              <p class="light">{{trip.shortDescription}}</p>
              <h5>Price:</h5>
              <p class="light">{{trip.priceAmmount}} {{trip.priceCurrency}}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "detail",
  data: () => ({
    trip: {}
  }),
  methods: {
    ...mapActions(["fetchTripByID"])
  },
  async mounted() {
    this.trip = await this.fetchTripByID(this.$route.params.id);
  }
};
</script>

<style scoped>
</style>

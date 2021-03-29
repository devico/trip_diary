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
              <p class="light">{{trip.price.amount}} {{trip.price.currencyCode}}</p>
              <button 
                class="btn waves-effect waves-light" 
                type="submit"
                @click="showTrip(trip.id)"            
              >Booking
              </button>
            </div>
          </div>

          <div class="col s12 m6">
            <div >
              <GmapMap
                :center="tripCoordinates"
                :zoom="12"
                style="height:367px; margin: 8px auto;"
                map-type-id="terrain"
              >
                <GmapMarker 
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                />
              </GmapMap>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {gmapApi} from 'vue2-google-maps'
export default {
  name: "detail",
  data: () => ({
    trip: {},
    markers: [],
    tripCoordinates: {
      lat: 0,
      lng: 0
    }
  }),
  methods: {
    ...mapActions(["fetchTripByID"])
  },
  async mounted() {
    this.trip = await this.fetchTripByID(this.$route.params.id);
    this.tripCoordinates = {
      lat: +this.trip.geoCode.latitude,
      lng: +this.trip.geoCode.longitude
    }
    this.markers = [
      {
        position: {lat: +this.trip.geoCode.latitude, lng: +this.trip.geoCode.longitude}
      }
    ]
    console.log('TRIP: ', this.trip)
    // console.log('IMG: ', this.trip.pictures[0])
  },
  computed: {
    google: gmapApi
  }
};
</script>

<style scoped>
</style>

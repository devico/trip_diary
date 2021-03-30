<template>
  <div class="row">
    <div class="col s12">
      <div class="page-title">
        <h3>{{trip.name}}</h3>
      </div>
        <div class="row">
          <div class="col s8 offset-s2">
            <div class="icon-block">
              <div class="card" style="margin: 0 auto;">
                <div class="card-image">
                  <img :src="trip.picture">
                </div>                
              </div>
              <InfoTable :trip="trip" />
              <div style="margin: 16px auto;">
                <form class="form" @submit.prevent="saveHandler">
                  <button 
                    class="btn waves-effect waves-light"
                    style="margin: auto 8px;"
                    type="submit"
                  >Save
                  </button>
                </form>
              </div>              
              <Gmap :tripCoordinates="tripCoordinates" :markers="markers"/>     
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Gmap from "@/components/Gmap";
import InfoTable from "@/components/InfoTable";
export default {
  name: "detail",
  components: {
    Gmap, InfoTable
  },
  data: () => ({
    trip: {},
    markers: [],
    tripCoordinates: {
      lat: 0,
      lng: 0
    }
  }),
  methods: {
    ...mapActions(["fetchTripByID", "saveTrip"]),
    async saveHandler() {      
      const formData = {
        id: this.trip.id,
        bookingLink: this.trip.bookingLink,
        latitude: this.trip.latitude,
        longitude: this.trip.longitude,
        name: this.trip.name,
        picture: this.trip.picture,
        priceAmmount: this.trip.priceAmmount,
        priceCurrency: this.trip.priceCurrency,
        rating: this.trip.rating,
        shortDescription: this.trip.shortDescription,
        startDate: new Date().toISOString().substr(0, 10),
        finishDate: new Date().toISOString().substr(0, 10),
        status: 'coveted'
      }

      try {
        await this.saveTrip(formData);
        this.$router.push('/')
      } catch (error) {}
    }
  },
  async mounted() {
    this.trip = await this.fetchTripByID(this.$route.params.id);
    this.tripCoordinates = {
      lat: +this.trip.latitude,
      lng: +this.trip.longitude
    }
    this.markers = [
      {
        position: {lat: +this.trip.latitude, lng: +this.trip.longitude}
      }
    ]
    // console.log('TRIP: ', this.trip)
    // console.log('IMG: ', this.trip.pictures[0])
  },
  
};
</script>

<style scoped>
.material-table {
  padding: 0;
}
</style>

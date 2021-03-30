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
              <table>
                <tbody>
                  <tr>
                    <td width="150px" class="py-0">
                      <p class="light"><strong>Activity:</strong></p>
                    </td>
                    <td>
                      <p class="light">{{trip.name}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="150px">
                      <p class="light"><strong>Short Description:</strong></p>
                    </td>
                    <td>
                      <p class="light">{{trip.shortDescription}}</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="150px">
                      <p class="light"><strong>Price:</strong></p>
                    </td>
                    <td>
                      <p class="light">{{trip.priceAmount}} {{trip.priceCurrency}}</p>
                    </td>                    
                  </tr>
                </tbody>
              </table>
              <div style="margin: 16px auto;">
                <form class="form" @submit.prevent="saveHandler">
                  <button 
                    class="btn waves-effect waves-light"
                    type="submit"
                  >Booking
                  </button>
                  <button 
                    class="btn waves-effect waves-light"
                    style="margin: auto 8px;"
                    type="submit"
                  >Save
                  </button>
                </form>
              </div>              
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
        //await this.$store.dispatch('saveTrip', formData)
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

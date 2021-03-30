<template>
  <div class="row">
    <div class="col s12">
      <div class="page-title">
        <h3>{{trip.name}}</h3>
      </div>
        <div class="row">
          <div class="col s8 offset-s2">
            <div class="icon-block">
              <Gmap :tripCoordinates="tripCoordinates" :markers="markers"/>              
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
                      <p class="light">{{trip.priceAmmount}} {{trip.priceCurrency}}</p>
                    </td>                    
                  </tr>
                </tbody>
              </table>
              <div style="margin: 16px auto;">
                <a 
                  class="waves-effect waves-light btn"
                  :href="trip.bookingLink"
                  target="_blank"
                >Booking
                </a>                         
              </div>
              <div class="card" style="margin: 0 auto;">
                <div class="card-image">
                  <img :src="trip.picture">
                </div>                
              </div>           
              
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Gmap from "@/components/Gmap";
export default {
  name: "record",
  components: {
    Gmap
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
    ...mapActions(["getCovetedTripByID"]),    
  },
  computed: {
    ...mapGetters([
      "getCurrentTrip",
    ]),
  },
  async mounted() {
    await this.getCovetedTripByID(this.$route.params.id);
    this.trip = await this.getCurrentTrip
    this.tripCoordinates = {
      lat: +this.trip.latitude,
      lng: +this.trip.longitude
    }
    this.markers = [
      {
        position: {lat: +this.trip.latitude, lng: +this.trip.longitude}
      }
    ]
  },
  
};
</script>

<style scoped>
</style>

<template>
  <div>
    <div class="page-title">
      <h3>Coveted Trips</h3>
    </div>
    <Loader v-if="loading" />
    <section v-else>
      <CovetedTripsTable />
    </section>
  </div>
</template>

<script>
import CovetedTripsTable from "@/components/CovetedTripsTable";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "coveted-trips",
  components: {
    CovetedTripsTable
  },
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    await this.fetchCovetedTrips();
    this.loading = false;
  },
  methods: {
    ...mapActions(["fetchCovetedTrips"])
  },  
};
</script>

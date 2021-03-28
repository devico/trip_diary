export default {
  state: {},
  mutations: {},
  actions: {
    async fetchTrips(ctx, cityCodes) {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer 7QUBLcILbX3ntN3R6z3PA7BAJQ4d"
        }
      };

      const res = await fetch(
        //`https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=${cityCodes}&travelerCountryCode=US`,
        // "https://test.api.amadeus.com/v1/shopping/activities/105193",
        "https://test.api.amadeus.com/v1/shopping/activities?longitude=13.41053&latitude=52.52437&radius=20",
        config
      ).then(response => {
        return response.json();
      });

      return res.data;
    }
  },
  getters: {}
};

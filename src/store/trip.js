var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: 'ESLULbEKFtvRMKJEdxAmrnLX6FuVTPoH',
  clientSecret: 'ky7PrzhuRLggnHqT'
});

export default {
  state: {},
  mutations: {},
  actions: {
    async fetchTrips() {
      const config = {
        method: "GET",
        headers: {
          "Authorization": 'Bearer 2RVCux3zMdBmsGnesQLVKvP9dHTD',
        },        
      };

      await fetch('https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=LON&travelerCountryCode=FR', config).then(response => {
        return response.json();
      }).then(data => {
        console.log('DATA: ', data)        
      })
    }
  },
  getters: {}
}

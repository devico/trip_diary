export default {
  state: {},
  mutations: {},
  actions: {
    async fetchTrips(ctx, cityCodes) {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer pznGaUppzMGseR2qiP88EVEUl6l7"
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

      return res.data.map(t => {
        return {
          id: t.id,
          bookingLink: t.bookingLink,
          latitude: t.geoCode.latitude,
          longitude: t.geoCode.longitude,
          name: t.name,
          picture: t.pictures[0],
          priceAmmount: t.price.amount,
          priceCurrency: t.price.currencyCode,
          rating: t.rating,
          shortDescription: t.shortDescription
        };
      });
    },
    async fetchTripByID(ctx, id) {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer pznGaUppzMGseR2qiP88EVEUl6l7"
        }
      };

      const res = await fetch(
        //`https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=${cityCodes}&travelerCountryCode=US`,
        `https://test.api.amadeus.com/v1/shopping/activities/${id}`,
        // "https://test.api.amadeus.com/v1/shopping/activities?longitude=13.41053&latitude=52.52437&radius=20",
        config
      ).then(response => {
        return response.json();
      });

      return res.data;
    }
  },
  getters: {}
};

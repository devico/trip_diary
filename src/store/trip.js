import firebase from 'firebase/app'

export default {
  state: {},
  mutations: {},
  actions: {
    async fetchTrips(ctx, cityCodes) {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer t6rTyZKIPWGksoa6iYV35JOg9IhU"
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
          Authorization: "Bearer t6rTyZKIPWGksoa6iYV35JOg9IhU"
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

      console.log('1: ', res.data.pictures[0])

      return {
        id: res.data.id,
        bookingLink: res.data.bookingLink,
        latitude: res.data.geoCode.latitude,
        longitude: res.data.geoCode.longitude,
        name: res.data.name,
        picture: res.data.pictures[0],
        priceAmmount: res.data.price.amount,
        priceCurrency: res.data.price.currencyCode,
        rating: res.data.rating,
        shortDescription: res.data.shortDescription
      };
    },
    async saveTrip(ctx, data) {
      
      try {
        const uid = await ctx.dispatch('getUid')
        console.log('start', data)
        await firebase.database().ref(`/users/${uid}/trips`).set({
          id: data.id,
          bookingLink: data.bookingLink,
          latitude: data.latitude,
          longitude: data.longitude,
          name: data.name,
          picture: data.picture,
          priceAmmount: data.priceAmmount,
          priceCurrency: data.priceCurrency,
          rating: data.rating,
          shortDescription: data.shortDescription,
          startDate: data.startDate,
          finishDate: data.finishDate,
          status: 'coveted'
        })
      } catch (e) {
        console.log('ERR: ', e)
        ctx.commit('setError', e)
        throw e
      }
    }
  },
  getters: {}
};

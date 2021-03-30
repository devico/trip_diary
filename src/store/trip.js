import firebase from 'firebase/app'

export default {
  state: {
    currentTrip: {},
    covetedTrips: []
  },
  mutations: {
    setCurrentTrip(state, data) {
      state.currentTrip = data
    },
    setCovetedTrips(state, data) {
      state.covetedTrips = data
    },
    
  },
  actions: {
    async fetchTrips(ctx, cityCodes) {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer OKvatDwAu2YpAZRW0uqAVGSdTZdZ"
        }
      };

      const res = await fetch(        
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
          Authorization: "Bearer OKvatDwAu2YpAZRW0uqAVGSdTZdZ"
        }
      };

      const res = await fetch(
        `https://test.api.amadeus.com/v1/shopping/activities/${id}`, config
      ).then(response => {
        return response.json();
      });

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
        await firebase.database().ref(`/users/${uid}/trips/${data.id}`).set({
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
        ctx.commit('setError', e)
        throw e
      }
    },    
    async fetchCovetedTrips(ctx) {
      try {
        const uid = await ctx.dispatch('getUid')
        const covetedTrips = (await firebase.database().ref(`/users/${uid}/trips`).once('value')).val()
        ctx.commit('setCovetedTrips', covetedTrips)
      } catch (error) {
        ctx.commit('setError', error)
        throw error
      }
    },
    async getCovetedTripByID(ctx, id) {
      try {
        const uid = await ctx.dispatch('getUid')
        const trip = (await firebase.database().ref(`/users/${uid}/trips`).once('value')).val()[id]        
        ctx.commit('setCurrentTrip', trip)
      } catch (error) {
        ctx.commit('setError', error)
        throw error
      }
    }
  },
  getters: {
    getCurrentTrip(state) {
      return state.currentTrip
    },
    getCovetedTrips(state) {
      return state.covetedTrips
    },
    
  }
};

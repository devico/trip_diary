<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Rating</th>        
        <th>Open</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="record of records" :key="record.id">
        <td>{{record.id}}</td>
        <td>{{record.name}}</td>
        <td class="td-desc"><div class="desc">{{record.shortDescription}}</div></td>
        <td>{{record.priceAmmount}} {{record.priceCurrency}}</td>
        <td>{{record.rating}}</td>        
        <td>
          <button 
            class="btn-small btn" 
            @click="$router.push('/record/' + record.id)"            
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    records: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log("2: ", this.records) 
  },
}
</script>

<style scoped>
.td-desc {
  max-width: 400px;
}
.desc {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

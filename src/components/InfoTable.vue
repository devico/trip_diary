<template>
  <table>
    <tbody>
      <tr>
        <td width="150px" class="py-0">
          <p class="light"><strong>Activity:</strong></p>
        </td>
        <td>
          <p class="light">{{ trip.name }}</p>
        </td>
      </tr>
      <tr>
        <td width="150px">
          <p class="light"><strong>Short Description:</strong></p>
        </td>
        <td>
          <p class="light">{{ trip.shortDescription }}</p>
        </td>
      </tr>
      <tr>
        <td width="150px">
          <p class="light"><strong>Price:</strong></p>
        </td>
        <td>
          <p class="light">{{ trip.priceAmmount }} {{ trip.priceCurrency }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    trip: {
      type: Object,
      required: true
    },    
  }
};
</script>

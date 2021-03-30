<template>
  <div>
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
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: {
    tripCoordinates: {
      type: Object,
      required: true
    },
    markers: {
      type: Array,
      required: true
    }
  }
};
</script>

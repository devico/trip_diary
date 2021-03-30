<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      custom
      v-slot="{ href, navigate}"
    >
      <li>
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>      
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      links: [
        { title: "Trips", url: "/", exact: true },
        { title: "Coveted Trips", url: "/coveted-trips" },
        { title: "Planned Trips", url: "/planning" },
        { title: "History Trips", url: "/record" },
      ],
    };
  },
};
</script>

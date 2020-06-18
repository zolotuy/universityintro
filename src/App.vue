<template>
  <v-app>
    <Header />

    <v-content>
        <router-view />
<!--      <Next></Next>-->
<!--      <GoogleStreetView></GoogleStreetView>-->
    </v-content>

    <Footer />
  </v-app>
</template>

<script>

import Header from './components/Structured/Header/Header';
import Footer from './components/Structured/Footer/Footer';
// import Next from "@/components/Structured/Alternative/Next";
//  import Alternative from "@/components/Structured/Alternative/Alternative";
// import GoogleStreetView from "@/components/GoogleStreetView/GoogleStreetView";

export default {
  name: 'App',

  components: {
    Header,
    // Alternative,
    // GoogleStreetView,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .v-content {
    padding: 0 !important;
  }
</style>

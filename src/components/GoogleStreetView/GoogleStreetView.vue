<template>
    <div id="map"></div>
</template>

<script>
    // import gmapsInit from './gmaps';
    //
    // export default {
    //     name: 'map',
    //     async mounted() {
    //         try {
    //             const google = await gmapsInit();
    //             const map = new google.maps.Map(document.getElementById('map'));
    //             const locations = [
    //                 {
    //                     position: {
    //                         lat: 48.160910,
    //                         lng: 16.383330,
    //                     },
    //                 },
    //                 {
    //                     position: {
    //                         lat: 48.174270,
    //                         lng: 16.329620,
    //                     },
    //                 },
    //                 // ...
    //             ];
    //
    //              locations
    //                 .map(x => new google.maps.Marker({ ...x, map }))
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     },
    // };
</script>

<style scoped>
    #map {
        height: 100%;
    }
    /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>
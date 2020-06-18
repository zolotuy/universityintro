<template>
    <div>
<!--        <GmapMap -->
<!--                :zoom="7"-->
<!--                ref="mapRef"-->
<!--                style="width: 500px; height: 300px"-->
<!--                 :position="google && new google.maps.LatLng(1.38, 103.8)"-->
<!--        />-->
        <GmapStreetViewPanorama ref="viewRef"
                style="width: 500px; height: 300px"
                :position="{lat: 48.2684158, lng: 25.9138418}"
                ></GmapStreetViewPanorama>
    </div>
</template>

<script>
    // import {gmapApi} from 'vue2-google-maps'
    export default {
        name: "Maps.vue",
        // computed: {
        //     google: gmapApi
        // },
        // methods: {
        //     initialize() {
        //          var fenway = {lat: 48.2673123, lng: 25.9138452};
        //          var map = this.google.maps.Map(document.getElementById('map'), {
        //             center: fenway,
        //             zoom: 14
        //         });
        //         var panorama = this.google.maps.StreetViewPanorama(
        //             document.getElementById('pano'), {
        //                 position: fenway,
        //                 pov: {
        //                     heading: 34,
        //                     pitch: 10
        //                 }
        //             });
        //         map.setStreetView(panorama);
        //     }
        //  },
        mounted() {
            // this.initialize()
            // At this point, the child GmapMap has been mounted, but
            // its map has not been initialized.
            // Therefore we need to write mapRef.$mapPromise.then(() => ...)

            this.$refs.viewRef.$mapPromise.then((map) => {
                map.panTo({lat: 43.648984, lng: 25.9138452})
            })
        }
    }
</script>

<style scoped>

</style>
<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="18"
      map-style-id="roadmap"
      :options="mapOptions"
      style="width: 100vmin; height: 50vmin"
      ref="mapRef"
      @click="handleMapClick"
    >
      <GmapMarker
        :position="marker.position"
        :clickable="true"
        :draggable="true"
        @drag="handleMarkerDrag"
        @click="panToMarker"
      />
    </GmapMap>

    <p class="mt-5">متاسفانه بخاطر تحریم های موجود برای API 
            گرفتن از سرویس های گوگل به شرط خرید اشتراک؛ این قسمت از تسک را به صورت استاتیک به مقدار زیر ارسال می کنم
          <pre dir="ltr">{{ marker.position }}</pre> </p>
          <p class="mt-5 explanation">همچنین برای ارسال و ذخیره دیتا در دیتابیس از این صفحه میشود از Vuex استفاده کرد اما چون با برگشت به صفحه ی قبل در صورت رفرش شدن ناگهانی کاربر دوباره مجبور به تایپ اطلاعات خود میشود از Local Storage استفاده شده است! برای حل این مشکل باید اطلاعات صفحه قبل در بک-اند به صورت جداگانه ذخیره و یا از همین روش استفاده کرد.</p>

    <!-- <button @click="geolocate">Detect Location</button>

    <p>Selected Position: {{ marker.position }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      marker: { position: { lat: 10, lng: 10 } },
      center: { lat: 10, lng: 10 },

      mapOptions: {
        disableDefaultUI: true,
      },
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.panToMarker();
      });
    },

    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },

    //Moves the map view port to marker
    panToMarker() {
      this.$refs.mapRef.panTo(this.marker.position);
      this.$refs.mapRef.setZoom(18);
    },

    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>

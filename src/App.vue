<template>
  <ion-app>
    <h4 class="not-mobile">
      Template is built for mobile, for best experience please use a mobile device or use the browser in mobile mode.
    </h4>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

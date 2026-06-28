<template>
  <ion-tabs>
    <ion-router-outlet />

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/">
        <ion-icon :icon="homeOutline" />
        <span>Home</span>
      </ion-tab-button>
        
      <ion-tab-button tab="cards">
        <ion-icon :icon="readerOutline" />
        <span>Cards</span>
      </ion-tab-button>

      <ion-tab-button tab="transact">
        <ion-icon :icon="repeatOutline" />
        <span>Transact</span>
      </ion-tab-button>

      <ion-tab-button tab="messages">
        <ion-icon :icon="chatboxEllipsesOutline" />
        <span>Messages</span>
      </ion-tab-button>

      <ion-tab-button tab="explore">
        <ion-icon :icon="listOutline" />
        <span>Explore</span>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import { IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonIcon } from '@ionic/vue';
import { homeOutline, readerOutline, chatboxEllipsesOutline, listOutline, repeatOutline } from 'ionicons/icons';

defineOptions({
  name: "AppTabs"
});
</script>

<style lang="scss" scoped>
ion-tab-bar {
  --background: #ffffff;
  height: 70px;

  ion-icon {
    font-size: 35px;
  }

  span {
    font-weight: 500;
    font-size: 14px;
  }
}
</style>

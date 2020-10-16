<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button>
        <ion-icon :icon="homeOutline" />
        <span>Home</span>
      </ion-tab-button>
        
      <ion-tab-button>
        <ion-icon :icon="readerOutline" />
        <span>Cards</span>
      </ion-tab-button>

      <ion-tab-button>
        <ion-icon :icon="repeatOutline" />
        <span>Transact</span>
      </ion-tab-button>

      <ion-tab-button>
        <ion-icon :icon="chatboxEllipsesOutline" />
        <span>Messages</span>
      </ion-tab-button>

      <ion-tab-button>
        <ion-icon :icon="listOutline" />
        <span>Explore</span>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon } from '@ionic/vue';
import { homeOutline, readerOutline, chatboxEllipsesOutline, listOutline, repeatOutline, notifications } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon },
  setup() {
    return {
      homeOutline, 
      repeatOutline, 
      notifications,
      readerOutline,
      chatboxEllipsesOutline,
      listOutline
    }
  }
}
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

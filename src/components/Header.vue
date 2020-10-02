<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button class="sign-out">
            Sign Out
          </ion-button>
        </ion-buttons>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon class="ellipsis" :icon="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>

        <ion-title class="logo">GlobalOne</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { IonToolbar, IonHeader, IonButtons, IonButton, IonIcon, IonTitle } from "@ionic/vue";
import { ellipsisVertical } from "ionicons/icons";

export default {
  name: "recent-list",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		}
  },
  components: { IonToolbar, IonHeader, IonButtons, IonButton, IonIcon, IonTitle },
  setup() {
    return {
      ellipsisVertical
    }
  },
}
</script>

<style lang="scss" scoped>
ion-toolbar {
  --background: #144d75;
  color: #ffffff;
}

ion-button.sign-out {
  font-size: 17px;
  font-weight: 500;
  margin-left: 5px;
  float: left;
  --color: #ffffff;
}

.ellipsis {
  color: #ffffff;
}
ion-title.logo {
  font-weight: 900;
  font-size: 25px;
}
</style>

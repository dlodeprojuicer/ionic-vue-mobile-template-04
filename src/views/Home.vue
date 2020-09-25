<template>
  <ion-page>
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

    <RecentList :data="recentList" />

    <SectionDivider data="Favourites" />

    <QuickActions />

    <Tabs />
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonHeader, IonButtons, IonButton, IonIcon } from "@ionic/vue";
import { add, grid, menu, ellipsisVertical, shield, statsChart, repeat, refresh } from "ionicons/icons";

import RecentList from "../components/RecentList";
import QuickActions from "../components/QuickActions";
import SectionDivider from "../components/SectionDivider";
import Tabs from "../components/Tabs";

export default {
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    IonPage,
    IonToolbar, 
    IonButtons, 
    IonButton,
    IonIcon,
    RecentList,
    IonHeader,
    QuickActions,
    SectionDivider,
    Tabs
  },
  setup() {
    return {
      add,
      menu,
      grid,
      ellipsisVertical,
      shield, 
      statsChart, 
      repeat, 
      refresh
    }
  },
  data() {
    return {
      recentList: [
        {
          name: "Savings Account",
          cost: "R3 400",
          description: "Available Balance",
          icon: repeat,
          color: "#36AEEA"
        },
        {
          name: "December Holiday",
          cost: "R7 350",
          description: "Available Balance",
          icon: statsChart,
          color: "#226391"
        },
        {
          name: "Funeral Plan",
          cost: "R12 340",
          description: "",
          icon: shield,
          color: "#797A7C"
        },
        {
          name: "Credit Card",
          cost: "R8 800",
          description: "",
          icon: refresh,
          color: "#D8373F"
        },
      ],
    };
  },
  methods: {},
};
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

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start" class="sign-out">Sign Out</ion-title>
        <ion-title slot="start" class="logo">GlobalOne</ion-title>
        <!-- <img src="assets/img/logo.png" /> -->
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="ellipsisVertical"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <RecentList :data="recentList" />

    <SectionDivider data="Favourites" />

    <QuickActions />
    <Tabs />
  </ion-page>
</template>

<script>
import { IonPage, IonToolbar, IonHeader, IonTitle, IonButtons, IonButton, IonIcon } from "@ionic/vue";
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
    IonTitle, 
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
      cards: [
        {
          cardNumber: "4524 3428 898 239",
          balance: "12 354.05",
          accountName: "Savings",
          expDate: "02/2020",
        },
        {
          cardNumber: "9483 2394 8987 8391",
          balance: "1435.20",
          accountName: "Savings",
          expDate: "06/2024",
        },
        {
          cardNumber: "3079 485 2395 3944",
          balance: "8 200",
          accountName: "Savings",
          expDate: "08/2022",
        },
      ],
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
          cost: "12 340",
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

ion-title.sign-out {
  font-size: 17px;
}

ion-title.logo {
  font-weight: 900;
  font-size: 25px;
}
</style>

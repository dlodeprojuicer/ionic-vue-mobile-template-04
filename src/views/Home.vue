<template>
  <ion-page>
    <ion-content>
    <Header />
      <RecentList :data="recentList" />

      <SectionDivider data="Favourites" />

      <QuickActions />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { add, grid, menu, shield, statsChart, repeat, refresh } from "ionicons/icons";

import Header from "../components/Header";
import RecentList from "../components/RecentList";
import QuickActions from "../components/QuickActions";
import SectionDivider from "../components/SectionDivider";

export default {
  name: "home",
  title: "Home",
  requiresAuth: false,
  components: {
    IonPage,
    Header,
    RecentList,
    QuickActions,
    SectionDivider,
    IonContent
  },
  setup() {
    return {
      add,
      menu,
      grid,
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

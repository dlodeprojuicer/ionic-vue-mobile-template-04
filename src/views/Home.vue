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

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { shield, statsChart, repeat, refresh } from "ionicons/icons";

import Header from "../components/Header.vue";
import RecentList from "../components/RecentList.vue";
import QuickActions from "../components/QuickActions.vue";
import SectionDivider from "../components/SectionDivider.vue";

defineOptions({
  name: "HomePage"
});

interface RecentItem {
  name: string;
  cost: string;
  description: string;
  icon: string;
  color: string;
}

const recentList: RecentItem[] = [
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
];
</script>

<template>
  <ion-grid>
    <ion-row>
      <ion-col class="ion-activatable ripple-parent">
        <ion-icon :icon="phonePortraitSharp" class="btn-icon"></ion-icon>
        <p class="text">
          Buy prepaid mobile
          <ion-ripple-effect></ion-ripple-effect>
        </p>
      </ion-col>
      <ion-col class="ion-activatable ripple-parent">
        <ion-icon :icon="swapHorizontal" class="btn-icon"></ion-icon>
        <p class="text">
          Transfer money
          <ion-ripple-effect></ion-ripple-effect>
        </p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col class="ion-activatable ripple-parent">
        <ion-icon :icon="peopleOutline" class="btn-icon"></ion-icon>
        <p class="text">
          Pay beneficiary
          <ion-ripple-effect></ion-ripple-effect>
        </p>
      </ion-col>
      <ion-col class="ion-activatable ripple-parent">
        <ion-icon :icon="bulbOutline" class="btn-icon"></ion-icon>
        <p class="text">
          Buy electricity
          <ion-ripple-effect></ion-ripple-effect>
        </p>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, IonCol, IonIcon, IonRippleEffect } from "@ionic/vue";
import { phonePortraitSharp, swapHorizontal, bulbOutline, peopleOutline } from "ionicons/icons";

export default {
  name: "quick-actions",
  components: { IonGrid, IonRow, IonCol, IonIcon, IonRippleEffect },
  setup() {
    return {
      phonePortraitSharp,
      swapHorizontal,
      bulbOutline,
      peopleOutline
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ion-grid,
ion-row,
ion-col,
ion-button {
  // margin: 0;
}

ion-col {
  background: #ffffff;
  margin: 3px;
  text-align: center;
  text-align: -webkit-center;
  font-size: 15px;
  padding: 5px 10px;
  width: 270px;
  height: 100px;

  .text {
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
  }
}

// ion-ripple-effect
ion-button {
  
  border-radius: 0;
  height: 100px;
  // width: 150px;
  color: #404040;
  // font-size: 18100%px;
  --background: #ffffff;
}

.btn-icon {
  color: #36aeea;
  display: block;
  margin-top: 10px;
  font-size: 30px;
  width: 50%;
}
</style>
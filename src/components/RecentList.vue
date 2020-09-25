<template>
  <ion-list>
    <ion-item v-for="(item,index) in data" :key="index">
      <ion-text slot="start" class="left" :style="`background-color: ${item.color}`">
        <ion-icon class="left-icons" :icon="item.icon"></ion-icon>
      </ion-text>
      <ion-label>
        <h2 :style="`color: ${item.color}`">{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </ion-label>
      <ion-text class="cost">
        <b>{{ item.cost }}</b>
      </ion-text>
      <ion-icon class="right-icons" :icon="chevronForward"  slot="end"></ion-icon>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonText, IonIcon } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";

export default {
  name: "recent-list",
  props: {
		data: {
			type: Array,
			required: true,
			default: () => []
		}
  },
  components: { IonList, IonItem, IonLabel, IonText, IonIcon },
  setup() {
    return {
      chevronForward
    }
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 600;
	color: #000000;
}

ion-list {
  margin: 0px 10px 10px 10px;
}

ion-item {
  --background: #ffffff;
  margin: 5px 0 0 -15px;
  line-height: 50px;
  border-radius: 5px;

}

ion-text.left {
  background: #ffffff;
  padding: 15px 10px 0px 10px;
  color: #000;
  border-radius: 5px 0 0 5px;
  margin: 0 15px 0 -2px;

  ion-icon.left-icons {
    color: #ffffff;
    font-size: 25px;
  }
}

ion-text.cost {
  color: #404040;
}

ion-icon.right-icons {
  color: #36AEEA;
  margin-left: 5px;
}
</style>

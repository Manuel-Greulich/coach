<template>
    <div style="background-color: red">
        <v-app>
            <sidenav ref="navbar"></sidenav>
            <vtoast ref="vtoast" />
            <!-- <app-header @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"></app-header> -->
            <v-main>
                <v-container>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import { RouterView } from "vue-router";

import Sidenav from "./components/Sidenav.vue";
import vtoast from "./plugins/vtoast.vue";

export default {
    name: "App",
    components: {
        sidenav: Sidenav,
        vtoast: vtoast,
    },
};
</script>

<style></style>

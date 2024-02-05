<template>
    <v-app-bar class="glass">
        <v-toolbar-title>PS Admin</v-toolbar-title>
        <!-- <v-autocomplete class="glass" prepend-icon="fa-search"> </v-autocomplete> -->
        <v-btn icon>
            <v-icon> <font-awesome-icon icon="fa-light fa-triangle-exclamation " class="fa-xs" /> </v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon><font-awesome-icon icon="fa-light fa-bell" class="fa-xs" /></v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon><font-awesome-icon icon="fa-light fa-envelope" class="fa-xs" /></v-icon>
        </v-btn>
        <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg" title="Jane Smith"></v-list-item>
    </v-app-bar>

    <v-card>
        <v-navigation-drawer class="glass" permanent>
            <v-list>
                <v-list-item height="60px" link exact :to="{ name: 'Dashboard' }">
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light  fa-house" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact :to="{ name: 'Klienten' }">
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-user-secret" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Klienten</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact :to="{ name: 'Calendar' }">
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-calendar-days" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Kalender</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact>
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-people-group" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Gruppen-Coaching</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact :to="{ name: 'Tools' }">
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-screwdriver-wrench" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Tools & more</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact :to="{ name: 'Firmen' }">
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-building" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Firmen</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item height="60px" link exact>
                    <template v-slot:prepend>
                        <v-icon><font-awesome-icon icon="fa-light fa-cart-plus" class="fa-sm" /></v-icon>
                    </template>
                    <v-list-item-content>
                        <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        show: false,
    }),
};
</script>
<style scoped>
.v-app-bar {
    background-color: unset !important;
}
</style>

<!-- Dashboardkundenverwaltung
klientenverwaltung -->
<!-- sitzungen -->

<template>
    <div>
        <div style="margin-bottom: 25px">
            <div style="align-self: flex-end">
                <h1 style="margin-top: auto">Dashboard</h1>
            </div>
        </div>

        <div class="wrapperMain d-flex justify-space-between">
            <v-card width="250" class="glass d-flex align-center flex-column">
                <v-card-title>Neue Klienten</v-card-title>
                <v-divider class="w-100"></v-divider>
                <v-card-item>
                    <v-card-text style="font-size: 2rem">22</v-card-text>
                    <v-card-subtitle>+60% diesen Monat</v-card-subtitle>
                </v-card-item>
                <v-divider class="w-100"></v-divider>
                <v-card-item style="text-align: start; font-size: 12px"> mehr Info</v-card-item>
            </v-card>

            <v-card width="250" class="glass d-flex align-center flex-column">
                <v-card-title>Zeitplan</v-card-title>
                <v-divider class="w-100"></v-divider>
                <v-card-item>
                    <v-card-text style="font-size: 2rem">4</v-card-text>
                    <v-card-subtitle>4 offene Termine</v-card-subtitle>
                </v-card-item>
                <v-divider class="w-100"></v-divider>
                <v-card-item style="text-align: start; font-size: 12px"> gehe zu Kalender</v-card-item>
            </v-card>

            <v-card width="250" class="glass d-flex align-center flex-column">
                <v-card-title>Klienten</v-card-title>
                <v-divider class="w-100"></v-divider>
                <v-card-item>
                    <v-card-text style="font-size: 2rem">101</v-card-text>
                    <v-card-subtitle>neu Registrierte Kunden</v-card-subtitle>
                </v-card-item>
                <v-divider class="w-100"></v-divider>
                <v-card-item style="text-align: start; font-size: 12px">Klienten verwalten</v-card-item>
            </v-card>

            <v-card width="250" class="glass d-flex align-center flex-column">
                <v-card-title>active Memberships</v-card-title>
                <v-divider class="w-100"></v-divider>
                <v-card-item>
                    <v-card-text style="font-size: 2rem">1,666</v-card-text>
                    <v-card-subtitle>aktuelle Klienten</v-card-subtitle>
                </v-card-item>

                <v-card-item style="text-align: start; font-size: 12px">Mitglieder verwalten </v-card-item>
            </v-card>
        </div>
        <div class="wrapperSecond d-flex mt-6 ga-14">
            <div class="shortcuts w-100">
                <v-card class="glass" height="353px">
                    <v-row>
                        <v-col class="d-flex pa-6 align-center">
                            <font-awesome-icon icon="fa-light fa-bookmark" class="fa-xl" />
                            <v-card-title>Important Shortcuts</v-card-title>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <div class="cardItems d-flex">
                        <div class="shortcut">
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-rocket" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Apps</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-triangle-exclamation" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Coaches</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-chart-line" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Stats</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-comment" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Msg</v-card-subtitle>
                            </v-card-item>
                        </div>
                        <div class="shortcut">
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-user-tie" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Klienten</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-triangle-exclamation" class="fa-xl" />

                                <v-card-subtitle class="mt-3">Gruppen</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-person-running" class="fa-xl" />

                                <v-card-subtitle class="mt-3">Kurse</v-card-subtitle>
                            </v-card-item>
                            <v-card-item class="sizeChange">
                                <font-awesome-icon icon="fa-light fa-tag" class="fa-xl" />
                                <v-card-subtitle class="mt-3">Notes</v-card-subtitle>
                            </v-card-item>
                        </div>
                    </div>
                </v-card>
            </div>
            <div class="wrapperWeather w-100">
                <div class="weather">
                    <v-card class="glass">
                        <v-row>
                            <v-col class="d-flex justify-space-between align-center">
                                <v-card-title class="text-start">Schedule</v-card-title>
                                <font-awesome-icon class="pa-4 fa-xl" icon="fa-light fa-calendar-circle-user" />
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                        <v-card-item class="d-flex justify-center">
                            <v-card-text style="font-size: 2rem">8 offene Tasks</v-card-text>
                        </v-card-item>
                        <v-divider></v-divider>
                        <div class="d-flex justify-space-evenly" style="font-size: 12px">
                            <v-card-item> Montag: 4 </v-card-item>
                            <v-card-item> Dienstag: 2 </v-card-item>
                            <v-card-item> Mittwoch: 2 </v-card-item>
                        </div>
                    </v-card>
                </div>
                <div class="weather">
                    <v-card class="glass d-flex flex-column">
                        <div class="d-flex align-center pa-4">
                            <v-avatar size="64px">
                                <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                            </v-avatar>
                            <div class="d-flex flex-column">
                                <v-card-title> John Doe </v-card-title>
                                <v-card-subtitle> Sport & Psychologie Coach </v-card-subtitle>
                            </div>
                        </div>
                        <div class="d-flex ml-8 align-center justify-center">
                            <v-card-title> 7255 Followers / 56 Klienten </v-card-title>
                            <v-card-item> <v-btn color="success" size="small"> Follow</v-btn> </v-card-item>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.flex {
    display: flex;
    align-items: center;
}

h5 {
    margin-left: 20px;
}

.v-card {
    text-align: center;
}

.shortcut {
    display: flex;
    justify-content: space-evenly;
}

.sizeChange {
    width: 100px;
    height: 100px;
    background-color: #473436;
    border-radius: 6px;
}

.cardItems {
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
}

.wrapperWeather {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>

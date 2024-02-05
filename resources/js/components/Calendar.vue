<template>
    <v-container>
        <v-row class="align-center">
            <v-col>
                <h1>Persönlicher Kalender</h1>
            </v-col>
            <v-col class="d-flex justify-end">
                <div>
                    <v-icon style="cursor: pointer">
                        <font-awesome-icon @click="openDialog" icon="fa-light fa-plus" class="fa-xl fa-circle"> </font-awesome-icon>
                    </v-icon>
                    <calendar-entry ref="calendarEntry"></calendar-entry>
                </div>
            </v-col>
        </v-row>

        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="week">Woche</v-tab>
            <v-tab value="day">Tag</v-tab>
            <v-tab value="month">Monat</v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="week">
                <week-calendar></week-calendar>
            </v-window-item>

            <v-window-item value="day">
                <day-calendar></day-calendar>
            </v-window-item>

            <v-window-item value="month">
                <month-calendar></month-calendar>
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script>
import weekCalendar from "./CalendarWeek.vue";
import monthCalendar from "./CalendarMonth.vue";
import dayCalendar from "./CalendarDay.vue";
import CalendarEntry from "./CalendarEntry.vue";

export default {
    components: {
        weekCalendar,
        monthCalendar,
        dayCalendar,
        CalendarEntry,
    },
    data: () => {
        return {
            tab: "week",
            calendarEntryDialogVisible: false,
        };
    },

    methods: {
        openDialog() {
            this.$refs.calendarEntry.openDialog();
        },
    },
};
</script>

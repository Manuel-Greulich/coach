<!-- <template>
    <v-row>
        <v-col>
            <div>
                <v-calendar ref="calendar" :events="events" :view-mode="type" :weekdays="weekdays" hide-week-number></v-calendar>
            </div>
        </v-col>
    </v-row>
</template>
<script>
import { VCalendar } from "vuetify/labs/VCalendar";

export default {
    components: {
        VCalendar,
    },
    data: () => {
        return {
            type: "month",
            weekdays: [1, 2, 3, 4, 5, 6, 0],
            events: [
                {
                    title: "Event 1",
                    start: new Date("2024-01-20 09:00"),
                    end: new Date("2024-01-20 10:00"),
                },
            ],
        };
    },
};
</script>

<style scoped>
:deep(.v-btn--variant-elevated),
:deep(.v-btn--variant-flat) {
    background: none !important;
}

:deep(.v-calendar-weekly__day-label) {
    backdrop-filter: blur(6px) saturate(168%);
    -webkit-backdrop-filter: blur(5px);

    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
}
</style> -->

<template>
    <v-container>
        <v-row>
            <v-col>
                <div ref="wrapper" class="calendar-wrapper">
                    <div class="week-calendar">
                        <div class="time-labels">
                            <div class="time-label" v-for="hour in hours" :key="hour">{{ hour }}:00</div>
                        </div>
                        <div class="time-column" v-for="day in days" :key="day">
                            <div class="day-header glass">
                                {{ formatDay(day) }}<br /><span class="text-caption">{{
                                    day.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" })
                                }}</span>
                            </div>
                            <div class="time-slots">
                                <div
                                    class="time-slot"
                                    v-for="time in times"
                                    :id="day.toISOString() + '-' + time.hour + '-' + time.minute"
                                    :key="day.toISOString() + '-' + time.hour + '-' + time.minute"
                                    :class="{ 'highlight-drop-zone': isSlotHighlighted(day, time) }"
                                    @dragover.prevent="handleDragOver"
                                    @drop="handleDrop(day, time, $event)"
                                    @dragenter="handleDragEnter(day, time, $event)"
                                    @dragleave="handleDragLeave"
                                ></div>
                                <div
                                    class="appointment"
                                    v-for="appointment in getAppointmentsForDay(day)"
                                    :key="appointment.id"
                                    :style="getAppointmentStyle(appointment)"
                                    :draggable="resizingAppointment == null"
                                    @dragstart="handleDragStart(appointment, $event)"
                                    @dragend="handleDragEnd"
                                >
                                    {{ appointment.title }}<br />
                                    <span style="font-size: 10px"
                                        >{{ filters.formatDate(appointment.start) }} {{ filters.formatDate(appointment.end) }}</span
                                    >
                                    <div
                                        class="resize-handle"
                                        @mousedown.stop="resizeStart(appointment, $event)"
                                        @mousemove="resizeAppointment(1, $event.target.parentElement.clientHeight)"
                                        @mouseup="resizeStop()"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "WeekCalendar",
    data() {
        return {
            days: Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 1)), // Ersetzen Sie das Datum entsprechend
            times: Array.from({ length: 96 }, (_, i) => ({ hour: Math.floor(i / 4), minute: (i % 4) * 15 })),
            hours: Array.from({ length: 24 }, (_, i) => i),
            appointments: [
                { id: 1, start: new Date(2024, 0, 1, 10, 15), end: new Date(2024, 0, 1, 11, 45), title: "Team Meeting", color: "#0000ff" },
                { id: 2, start: new Date(2024, 0, 2, 9, 0), end: new Date(2024, 0, 2, 10, 30), title: "Team Meeting", color: "#00ff00" },
                { id: 2, start: new Date(2024, 0, 3, 14, 0), end: new Date(2024, 0, 3, 15, 0), title: "Team Meeting", color: "#ff0000" },
                // Weitere Termine hier
            ],
            draggedAppointment: null,
            highlightedSlots: [],
            dragOffset: 0,
            pixelPerMinute: 1,
            resizingAppointment: null,
        };
    },
    mounted() {
        const targetTop = this.$refs.wrapper.scrollHeight * 0.3;
        this.$refs.wrapper.scrollTo({
            top: targetTop,
            left: 0,
            behavior: "smooth",
        });
    },
    methods: {
        formatDay(day) {
            return day.toLocaleDateString("de-DE", { weekday: "long" });
        },
        getAppointmentsForDay(day) {
            return this.appointments.filter((appointment) => this.isSameDay(appointment.start, day));
        },
        isSameDay(date1, date2) {
            return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
        },
        getAppointmentStyle(appointment) {
            // Konvertiere Start- und Endzeit in Minuten seit Mitternacht
            const startMinutes = appointment.start.getHours() * 60 + appointment.start.getMinutes();
            const endMinutes = appointment.end.getHours() * 60 + appointment.end.getMinutes();
            const durationMinutes = endMinutes - startMinutes;

            // Berechne die Top-Position und Höhe basierend auf der Gesamtanzahl der Minuten am Tag
            const totalMinutesInDay = 24 * 60;
            const topPercentage = (startMinutes / totalMinutesInDay) * 100;
            const heightPercentage = (durationMinutes / totalMinutesInDay) * 100;

            return {
                top: `${topPercentage}%`,
                height: `${heightPercentage}%`,
                "background-color": `${appointment.color}80`,
            };
        },
        handleDragStart(appointment, event) {
            if (this.resizingAppointment != null) return;

            event.dataTransfer.effectAllowed = "move";
            this.draggedAppointment = appointment;

            const elementTop = event.currentTarget.getBoundingClientRect().top;
            this.dragOffset = event.clientY - elementTop;
        },
        handleDragEnd() {
            this.draggedAppointment = null;
        },
        handleDrop(day, time, event) {
            if (!this.draggedAppointment) return;
            //const newStart = new Date(day.getFullYear(), day.getMonth(), day.getDate(), time.hour, time.minute);
            const duration = this.draggedAppointment.end - this.draggedAppointment.start;

            //Adjust Start to fit the top of the dragged box, not the mouse pointer
            var newStart = day.setHours(time.hour, time.minute, 0, 0) - this.dragOffset * 1000 * 60 * this.pixelPerMinute;

            let stunden = new Date(newStart).getHours();
            let minuten = new Date(newStart).getMinutes();

            // Runde auf die nächstgelegenen 15, 30 oder 45 Minuten
            let gerundeteMinuten = Math.ceil(minuten / 15) * 15;
            if (gerundeteMinuten === 60) {
                // Falls die Minuten 60 erreichen, erhöhe die Stunde um 1 und setze Minuten auf 0
                gerundeteMinuten = 0;
                stunden++;
            }

            newStart = new Date(newStart).setHours(stunden, gerundeteMinuten, 0, 0); // S
            const newEnd = new Date(newStart + duration);

            this.draggedAppointment.start = new Date(newStart);
            this.draggedAppointment.end = newEnd;

            this.draggedAppointment = null;
        },
        handleDragEnter(day, time, event) {
            if (!this.draggedAppointment || this.resizingAppointment != null) return;

            const duration = this.draggedAppointment.end - this.draggedAppointment.start;
            const startSlot = day.setHours(time.hour, time.minute, 0, 0) - this.dragOffset * 1000 * 60 * this.pixelPerMinute;

            const endSlot = new Date(startSlot + duration);

            // Berechnen Sie die betroffenen Slots
            this.highlightedSlots = this.times
                .filter((t) => {
                    const slotTime = day.setHours(t.hour, t.minute, 0, 0);
                    return slotTime >= startSlot && slotTime < endSlot;
                })
                .map((t) => `${day.toISOString()}-${t.hour}-${t.minute}`);
        },
        handleDragLeave() {
            this.highlightSlot = null;
        },
        handleDragOver(event) {
            event.preventDefault(); // Notwendig, um das Drop-Event zu ermöglichen
        },
        isSlotHighlighted(day, time) {
            const slotKey = `${day.toISOString()}-${time.hour}-${time.minute}`;
            return this.highlightedSlots.includes(slotKey);
        },
        resizeStart(appointment, event) {
            event.stopPropagation(); // Verhindern, dass das dragstart-Event des Elternelements ausgelöst wird
            this.resizingAppointment = appointment;

            var currentHeight = event.target.parentElement.clientHeight;

            // Event-Listener für mousemove und mouseup hinzufügen
            //window.addEventListener('mousemove', this.resizeAppointment(appointment,currentHeight));
            //window.addEventListener('mouseup', this.stopResize);
        },
        resizeAppointment(appointment, originalHeight, event) {
            if (this.resizingAppointment == null) return;
            console.log(originalHeight);
            console.log(event);
            // Berechnen Sie die neue Endzeit basierend auf der Mausposition
            const newEndTime = this.resizingAppointment.end + 1000 * 60;
            this.resizingAppointment.end = new Date(newEndTime);
        },
        resizeStop() {
            this.resizingAppointment = null;
        },
    },
};
</script>

<style scoped>
.week-calendar {
    display: flex;
    width: 100%;
}

.calendar-wrapper {
    max-height: 76vh;
    overflow-y: scroll;
}

.time-labels {
    flex-shrink: 0;
    text-align: right;
    padding-right: 10px;
}

.time-label {
    height: 60px; /* Höhe entspricht einer Stunde */
    line-height: 60px; /* Zentriert den Text vertikal */
    padding-top: 27px;
}

.time-column {
    flex: 1;
    position: relative;
    border: 1px solid rgba(194, 194, 194, 0.403);
}

.day-header {
    text-align: center;
    padding: 5px;
    position: sticky;
    top: 0px;
}

.time-slots {
    position: relative;
    height: 1440px; /* 24 Stunden * 60 Minuten */
}

.time-slot {
    height: 15px; /* Höhe für 15 Minuten */
}

.time-slot:nth-child(4n) {
    border-bottom: 1px solid rgba(194, 194, 194, 0.403);
}

.appointments {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

.appointment {
    position: absolute;
    padding: 2px;
    box-sizing: border-box;
    width: 92%;
    margin-left: 4%;
    border-radius: 2px;
}

/* width */
::-webkit-scrollbar {
    width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #e8e8e840;
    border-radius: 10px;
}

.highlight-drop-zone {
    border-left: 2px solid #e8e8e8;
    border-right: 2px solid #e8e8e8;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px; /* Anpassbare Höhe für das Handle */
    cursor: s-resize; /* Cursor-Stil für das Resize-Handle */
}
</style>

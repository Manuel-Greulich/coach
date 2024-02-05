<template>
    <div class="month-calendar">
        <div class="calendar-grid">
            <div class="day-cell" v-for="day in daysOfMonth" :key="day.getDate()">
                {{ day.getDate() }}
                <div
                    class="appointment"
                    v-for="appointment in getAppointmentsForDay(day)"
                    :key="appointment.id"
                    :style="getAppointmentStyle(appointment)"
                    draggable="true"
                    @dragstart="startDrag(appointment, $event)"
                    @dragend="endDrag"
                >
                    {{ appointment.title }}
                    <div class="resize-handle" @mousedown="startResize(appointment, $event)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            appointments: [
                // Beispieltermine
                { id: 1, title: "Besprechung", start: new Date(), end: new Date(new Date().setHours(new Date().getHours() + 1)) },
                // Weitere Termine
            ],
            draggedAppointment: null,
            resizingAppointment: null,
            dragOffsetY: 0,
            // ...
        };
    },
    computed: {
        daysOfMonth() {
            let days = [];
            let date = new Date(this.currentYear, this.currentMonth, 1);
            while (date.getMonth() === this.currentMonth) {
                days.push(new Date(date));
                date.setDate(date.getDate() + 1);
            }
            return days;
        },
    },
    methods: {
        getAppointmentsForDay(day) {
            return this.appointments.filter(
                (a) => a.start.getDate() === day.getDate() && a.start.getMonth() === day.getMonth() && a.start.getFullYear() === day.getFullYear()
            );
        },
        getAppointmentStyle(appointment) {
            const start = appointment.start;
            const end = appointment.end;
            const duration = end - start;

            // Beispiel zur Berechnung des Stils
            return {
                height: `${(duration / (1000 * 60 * 60)) * 100}px`, // Höhe basierend auf Dauer
                backgroundColor: "lightblue",
                // Weitere Stilberechnungen
            };
        },
        startDrag(appointment, event) {
            this.draggedAppointment = appointment;
            this.dragOffsetY = event.clientY;
        },
        endDrag() {
            this.draggedAppointment = null;
            // Aktualisieren Sie die Termindaten nach dem Drag
        },
        startResize(appointment, event) {
            event.stopPropagation();
            this.resizingAppointment = appointment;
            this.dragOffsetY = event.clientY;
            document.addEventListener("mousemove", this.resizeAppointment);
            document.addEventListener("mouseup", this.stopResize);
        },
        resizeAppointment(event) {
            if (!this.resizingAppointment) return;

            const newHeight = event.clientY - this.dragOffsetY;
            // Berechnen Sie die neue Endzeit basierend auf der neuen Höhe
            // ...
            this.resizingAppointment.end = 0 /* Neue Endzeit */;
        },
        stopResize() {
            document.removeEventListener("mousemove", this.resizeAppointment);
            document.removeEventListener("mouseup", this.stopResize);
            this.resizingAppointment = null;
        },
        // Weitere Methoden ...
    },
};
</script>

<style scoped>
.month-calendar {
    width: 100%;
    padding: 10px;
}
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
}
.day-cell {
    border: 1px solid #ccc;
    min-height: 150px;
    padding: 5px;
}
.appointment {
    position: relative;
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.resize-handle {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    cursor: s-resize;
    background-color: #ccc;
}
</style>

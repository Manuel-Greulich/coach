<template>
    <v-dialog v-model="dialogVisible">
        <v-form ref="form" @submit.prevent class="flex py-5 px-5">
            <v-card class="mx-auto p-4" style="width: 65vw">
                <h3 class="p-2">Kalendereintrag erstellen</h3>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="calendarentry_local.title" label="Title" variant="outlined"></v-text-field>
                        <v-text-field v-model="calendarentry_local.description" label="Description" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="calendarentry_local.todo" label="Todo" variant="outlined"></v-text-field>
                        <v-text-field v-model="calendarentry_local.location" label="Location" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="calendarentry_local.startdate" type="date" label="Startdate " variant="outlined"></v-text-field>
                        <v-text-field v-model="calendarentry_local.enddate" type="date" label="Enddate" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select v-model="calendarentry_local.color" :items="items" label="Color" variant="outlined"></v-select>
                    </v-col>
                </v-row>
                <v-row class="mt-3">
                    <v-col cols="6">
                        <v-btn @click="closeDialog()" class="font-weight-bold" color="bg_white">Schließen</v-btn>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <v-btn @click="submitForm()" color="bg_white" class="font-weight-bold">Speichern</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
export default {
    name: "CalendarEntry",

    data() {
        return {
            calendarentry_local: {
                title: this.calendarentry_title,
                description: this.calendarentry_description,
                todo: this.calendarentry_todo,
                location: this.calendarentry_location,
                start: this.calendarentry_startdate,
                end: this.calendarentry_enddate,
                color: this.calendarentry_color,
            },

            dialogVisible: false,

            items: ["Blue", "Red", "Green", "Yellow"],
        };
    },

    methods: {
        openDialog() {
            this.dialogVisible = true;
        },

        closeDialog() {
            this.dialogVisible = false;
        },

        submitForm() {
            console.log(this.calendarentry_local);
            this.axios
                .post("/calendar", this.calendarentry_local)
                .then((response) => {
                    console.log(response.data);
                    this.$emit("saved");
                    this.dialogVisible = false;
                    this.$root.$refs.vtoast.show({ message: "Kalendereintrag erfolgreich gespeichert", timer: 6000, color: "success" });
                })
                .catch((error) => {
                    console.error("Fehler beim Speichen der Eintrages: ", error);
                });
        },
    },
};
</script>
<style scoped></style>

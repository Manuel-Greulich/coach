<template>
    <v-snackbar :color="color" :timeout="timer" v-model="showSnackbar" bottom right>
        <v-icon v-if="icon != ''" :icon="icon" class="mr-2"></v-icon>{{ message }}
    </v-snackbar>
</template>

<script>
export default {
    name: "vtoast",
    data() {
        return {
            showSnackbar: false,
            message: "",
            color: "success",
            icon: "fal fa-check",
            timer: 2000,
        };
    },
    methods: {
        show(data) {
            this.message = data.message || 'missing "message".';
            this.color = data.color || "success";
            this.timer = data.timer || 2000;
            this.icon = data.icon == "" ? "" : data.icon || "fal fa-check";
            this.showSnackbar = true;
        },
    },
};
</script>

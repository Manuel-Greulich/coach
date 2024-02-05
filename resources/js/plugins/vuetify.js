import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import * as labsComponents from 'vuetify/labs/components'
import { VCalendar } from 'vuetify/labs/VCalendar'

import { fal as fa } from '@fortawesome/pro-light-svg-icons';

export default createVuetify({
    icons: {
        defaultSet: 'fa',
        sets: {
            fa,
        },
    },
    components: {
        ...components,
        ...labsComponents,
        VCalendar,
    },
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                colors: {
                    primary: '#457b9d',
                    'primary-darken-1': '#03045e',
                    secondary: '#71ffbd',
                    'secondary-darken-1': '#00b4d8',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00',
                    bg_white: 'E8EAF6',
                },
            }
        }
    },
});

import { createApp } from 'vue';

import App from './Main.vue';
// import 'vuetify/styles'
import './plugins/main.scss';
import './plugins/app.scss';

import store from './plugins/store.js'
import router from './plugins/router.js';
import vuetify from './plugins/vuetify.js'

//axios for http requests
import axios from 'axios'
import VueAxios from 'vue-axios'

// ICONS, type in use from everywhere
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTriangleExclamation, faEnvelope, faBell, faHouse, faPeopleGroup, faScrewdriverWrench, faCartPlus, faCloud, faChartLine, faComment, faBookmark, faPersonRunning, faUserTie, faRocket, faTag, faLocationDot, faCalendarDays, faCalendarCircleUser, faPlus, faBuilding, faCirclePlus, faCircleTrash, faPenCircle } from '@fortawesome/pro-light-svg-icons'
library.add(faUserSecret, faTriangleExclamation, faEnvelope, faBell, faHouse, faPeopleGroup, faScrewdriverWrench, faCartPlus, faCloud, faChartLine, faComment, faBookmark, faPersonRunning, faUserTie, faRocket, faTag, faLocationDot, faCalendarDays, faCalendarCircleUser, faPlus, faBuilding, faCirclePlus, faCircleTrash, faPenCircle)


//parsing js libary date time etc
import moment from 'moment';


// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';


const app = createApp(App);


app.config.globalProperties.$moment = moment;

app.config.globalProperties.filters = {

    formatCurrency(value, decimals = 0) {
        return new Intl.NumberFormat("de-DE", { style: 'currency', currency: 'EUR', maximumFractionDigits: decimals }).format(value);
    },

    formatNumber(value, decimals = 0) {
        return new Intl.NumberFormat("de-DE", { style: 'decimal', maximumFractionDigits: decimals }).format(value);
    },

    formatDate(value) {
        return new Intl.DateTimeFormat("de-DE", {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }).format(new Date(value));
    }

}

app.use(VueAxios, axios);
app.use(vuetify);
app.use(router);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
// app.component('QuillEditor', QuillEditor)

app.config.globalProperties.$store = store;

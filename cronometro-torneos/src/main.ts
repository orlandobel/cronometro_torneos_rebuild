import { createApp } from "vue"
//import "./styles.css"
import "./index.css"
import App from "./App.vue"
import router from "./routes"

//icons
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { IoArrowBackCircleSharp, IoClose, HiSolidPlus, HiSolidMinus, BiPlay, BiPause, MdRestartalt, LaHomeSolid, LaBarsSolid } from "oh-vue-icons/icons";

addIcons(IoArrowBackCircleSharp, IoClose, HiSolidPlus, HiSolidMinus, BiPlay, BiPause, MdRestartalt, LaHomeSolid, LaBarsSolid)

createApp(App)
    .component('v-icon', OhVueIcon)
    .use(router)
    .mount("#app")

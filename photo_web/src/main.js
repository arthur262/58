import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as ELIcons from '@element-plus/icons-vue'

const app = createApp(App)
installElementPlus(app)
for (let iconName in ELIcons) {
	app.component(iconName, ELIcons[iconName])
}	
app.use(router).use(VueAxios, axios).mount('#app')


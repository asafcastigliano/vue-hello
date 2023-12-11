import { createApp } from 'vue';

const app = titleAndImage({
    
    data(){
        return {
            title: "Titolo bello",
            imgLink: "Logo-Vuejs.png",
            imgUrl: "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
        }
    }
}).mount('#app');
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import navbar from './components/navbar.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Section6 from './Section6.js';
const app = createApp({
    data() {
        return {
            
        }
    },
    components: {
        navbar,
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6
    },
    template: `
    <div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        
        
    </div>`
});

app.mount("#app");


import navbar from './components/navbar.js'
import intro from './components/intro.js'
export default{
    props: {
        swap: String
    },
    
    data() {
        return {
            header: 'Light, Fast & Powerfulss',
            header2:''
        }
    },
    components: {
        navbar,
        intro


    },
    
    template: `
    <div>
        <div class="section-1">
            <navbar/>
            <div class="container">
                <intro/>
                <img class='section-1' src="/images/designer_1.png">

            </div>


        </div>


    </div>
    `
}

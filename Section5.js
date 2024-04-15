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

    },methods: {

        
    },
    
 
    template: `
    <div class="container">
        <div class="section-5">
            <div class="bg-section3">
                <img  src="/images/Section5Pic.png">
            </div>
            <div class="section-3__content">
                <p class="section-3__header">Light, Fast & Powerful</p>
                <div>
                    <p class="section-3__description">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                    </p>
                    <p class="section-3__description">
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.                                
                    </p>
                    <button class="Section5__button button">Purchase Now</button>

                </div>
            </div>

        </div>

    </div>
    `
}
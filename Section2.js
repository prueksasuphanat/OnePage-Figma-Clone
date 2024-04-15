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
            <div class="section-2">
                <div class="section-2__content">
                    <div class="section-2__info">
                        <h1>{{header2}}</h1>

                        <div class="section-2__info-header">

                            <p class="section-2__info-title">{{header}}</p>
                            <div class="section-2__info-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                                </p>
                                <p>
                                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.                                
                                </p>
                            </div>
                        </div>
                        <div class="section-2__info-subtitles">

                            <div class="section-2__info-subtitle">
                                <img src="/images/Combined Shape.png">
                                <p class="section-2__info-subtitle-header">Title Goes Here</p>
                                <p class="section-2__info-subtitle-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </p>
        
                            </div>
                            <div class="section-2__info-subtitle">
                                <img src="/images/Combined Shape.png">
                                <p class="section-2__info-subtitle-header">Title Goes Here</p>
                                <p class="section-2__info-subtitle-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-section2">
                        <img  src="/images/undraw_mobile_login_ikmv.png">
                    </div>
                </div>
            </div>
            
        </div>
    `
}
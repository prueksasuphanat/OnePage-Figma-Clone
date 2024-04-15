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
    <div class="section-6">
        <div class="">
            <div>

                <div class="image">
                    <div class ="section-6__content">
                        <h2 class="section-6__header">A Price To Suit Everyone</h2>
                        <p class="section-6__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                        <p class="section-6__price">$40</p>
                        <p class="section-6__type">UI Design Kit</p>

                        <p class="section-6__simple">See, One price. Simple.</p>
                        <button class="Section5__button button">Purchase Now</button>
                        


                    </div>
                    <div class="footer">
                        <div class="footer__firstSection container">
                            <p class="section-6__simple">©2023 Yourcompany</p>
                            <div class="logo">
                                <p >Landing</p>

                            </div>
                            <button class="footer__button button">Purchase Now</button>
                        </div>
                        <div class="line container"></div>
                        <div class="footer__links container">
                            <div>
                                <ul class="footer__menu">
                                    <a><li>Home</li></a>
                                    <a><li>About</li></a>
                                    <a><li>Contact</li></a>
                                </ul>
                            </div>
                            <div class="social">
                                <ul class="social__menu">
                                    <a><li><i class="fa-brands fa-facebook-f"></i></li></a>
                                    <a><li><i class="fa-brands fa-linkedin-in"></i></li></a>
                                    <a><li><i class="fa-brands fa-twitter"></i></li></a>
                                    <a><li><i class="fa-brands fa-youtube"></i></li></a>
                                    <a><li><i class="fa-brands fa-instagram"></i></li></a>
                                </ul>

                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
            

        </div>
        

    </div>
    `
}
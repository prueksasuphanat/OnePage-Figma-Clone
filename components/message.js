export default {
    props: {
        title: String
    },
    emits: ['click', 'emitsubmit'], 
    data() {
        return {
            message: '',
            swap:''
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.title.split('').reverse().join(''); 
            this.swap = this.message
            console.log("swap : " , this.swap)
        },
        submitForm() {
            this.$emit('emitsubmit', this.swap); 
            console.log('emitsubmit : ' , this.swap)
        }
    },
    
    template: `
        <div>
            <h1>{{ message }}</h1>
            <button @click="reverseMessage">Reverse Message</button>
            <button @click="submitForm">click me</button> 
        </div>
    `
};

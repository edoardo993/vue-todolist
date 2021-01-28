new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordsList: [],
        remove: false
    },
    methods: {
        control: function(){
            if(this.newWord==='' || !isNaN(this.newWord)){
                alert('Devi inserire qualcosa e che non sia un numero!')
            }else if(this.newWord.length>100){
                alert('Non puoi inserire testi così lunghi!')
            }else{
                this.wordsList.push(this.newWord);
                console.log(this.wordsList)
            }
        }
    }
});
Vue.config.devtools = true;
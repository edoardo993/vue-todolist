new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordsList: [],
        remove: false
    },
    methods: {
        isValid: function(word){
            if(word===''){
                alert('Devi inserire qualcosa!');
                return false
            }
            if(!isNaN(word)){
                alert('Non puoi inserire un numero!');
                return false
            }
            if(word.length>100){
                alert('Non puoi inserire testi così lunghi!');
                return false
            }
            if(this.wordsList.includes(word)){
                alert('Non puoi inserire la stessa cosa due volte!');
                return false
            }
            return true
        },
        control: function(){
            if(this.isValid(this.newWord)){
                this.wordsList.push(this.newWord);
                console.log(this.wordsList)
            }
        },
        // prova funzione al click
        exClick: function(){
            if(this.wordsList.length!==-1){
                alert('ciaone')
            }
        }
    }
});
Vue.config.devtools = true;
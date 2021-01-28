new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordsList: [],
        remove: false,
        warningClass: 'hide',
        warningText: '',
        illegalChars: '\|"£$%&/()=?^+*§°ç[]{}#@`'
    },
    methods: {
        isValid: function(word){
            this.warningClass='warning';
            if(word===''){
                this.warningText='Devi inserire un item nel campo'
                return false
            }
            if(this.illegalChars.includes(word)){
                this.warningText='Non puoi inserire caratteri speciali'
                return false
            }
            if(!isNaN(word)){
                this.warningText='Non puoi inserire un numero';
                return false
            }
            if(word.length>100){
                this.warningText='Non puoi inserire items così lunghi';
                return false
            }
            if(this.wordsList.includes(word)){
                this.warningText='Non puoi inserire lo stesso item due volte';
                return false
            }
            return true
        },
        control: function(){
            if(this.isValid(this.newWord)){
                this.wordsList.push(this.newWord);
                this.warningClass='hide';
                this.warningText=''
            }
        },
        // prova funzione al click
        exClick: function(){
            this.wordsList.filter((element)=>{
                return this.wordsList.includes(element)
            })
            if(this.wordsList.length!==-1){
                alert('ciaone')
            }
        }
    }
});
Vue.config.devtools = true;
new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordsList: [],
        remove: false,
        warningClass: 'hide',
        warningText: '',
        illegalChars: '/^[a-zA-Z0-9\_\*\-\+\!\?\,\:\;\.\xE0\xE8\xE9\xF9\xF2\xEC\x27]/'
    },
    methods: {
        isValid: function(word){
            this.warningClass='warning';
            for(var x=0; x<word.length; x++){
                if(this.illegalChars.includes(word[x])){
                    this.warningText='Non puoi inserire caratteri speciali';
                    return false
                }
            }
            if(word===''){
                this.warningText='Devi inserire un item nel campo';
                return false
            }
            if(word.length>50){
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
                this.wordsList.push(this.newWord.charAt(0).toUpperCase() + this.newWord.substring(1).toLowerCase());
                this.warningClass='hide';
                this.warningText=''
            }
        },
        exClick: function(itemIndex){
            this.wordsList=this.wordsList.filter((element, index)=>{
                if(itemIndex!==index){
                    return element
                }
            })
        }
    }
});
Vue.config.devtools = true;
new Vue({
    el: '#app',
    data: {
        newWord: '',
        wordsList: [],
        warningClass: 'hide',
        warningText: ''
    },
    methods: {
        isValid: function(word){
            this.warningClass='warning';
            if(word===''){
                this.warningText='Devi inserire un item nel campo';
                return false
            }
            if(word.length>50){
                this.warningText='Non puoi inserire items così lunghi';
                return false
            }
            if(this.wordsList.includes(word.charAt(0).toUpperCase() + this.newWord.substring(1).toLowerCase())){
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
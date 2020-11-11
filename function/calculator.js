const calculator = {
    tag : '[Calculator]',
    operators : ['+', '-', '%', '/', '*'],
    numberList : [],
    operatorList :[],
    calculate : function(data){
        this.data = data;                
        //register data
        if(!this.filter()) return null;
        //data is not right stop function              
        return eval(this.data);
        //everything right then return value
    },
    filter : function(){           
        this.numberList = this.separateNum();
        //seperate        
        if(!this.containSign()) return 0;
        //numberList contains strangeValue then stop function        
        this.operatorList = this.seperateOper();        
        //seperate          
        console.log(this.numberList, this.operatorList)      
        if(this.numberList.length === this.operatorList.length + 1) return true;
        //right process
        else return false;
        //not right process
    },    
    separateNum : function(){
        return this.data.split(new RegExp('['+ this.operators.reduce((acc, cur)=>{
            acc += '|\\'+cur;
            return acc;
        })+']'));
    },
    seperateOper: function(){
        return this.data.split(new RegExp('[0-9|.{1}]')).join('').split('');
    },
    containSign : function(){     
        let isRight = true;   
        this.numberList.filter((value)=>{
            if(value.match(new RegExp('[[.]{2,}|[^0-9]]'))){
                isRight = false;       
                console.log(this.tag + 'Sign Error');                 
                return; //exit function
            }
        });           
        return isRight;       
    }
}

module.exports = calculator;
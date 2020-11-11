/* import View */
import View from './View.mjs';

const tag = '[calcView]';

const calcView = Object.create(View);

calcView.init = function(calcEls = {}){
    if(!calcEls) {
        console.log(tag + 'No Elements');
        return;
    };        
    //if element do not exist then stop function
    let values = Object.values(calcEls);         
    this.setup(values[0]);
    //register element
    this.displayEl = values[1];
    this.inputEl = values[2];        
    //bindEvent
    this.bindEvents();

    return this;
}
/* related Event */
calcView.bindEvents = function(){
    this.inputEl.addEventListener('click',(e)=>this.onInputBtn(e.target));
    //bind click event
    document.addEventListener('keyup', (e)=> this.onKeyup(e.keyCode));
    //bind push key event
}
calcView.onInputBtn = function(target){
    if(!(target.tagName === 'SPAN')) return; 
    //if target is not right, stop function
    let value = target.dataset.value; 
    //get value from dataset
    switch(value){
        case 'delete':
            this.clearDisplay();
            break;
        case 'send':
            this.onSubmit();
            break;
        default:
            this.displayEl.textContent += value;
    }
}
calcView.onSubmit = function(){
    let data = this.displayEl.textContent.trim();
    if(data.length < 3) return;
    //no data then stop function
    this.emit('@submit', {data,});
}
calcView.onKeyup = function(code){                
    switch(code){
        //enter
        case 13:
            this.onSubmit();
            break;
        //esc
        case 27:
            this.clearDisplay();
            break;            
    }
}
/* relatd function */
calcView.clearDisplay = function(){
    this.displayEl.textContent = "";
    //clear text
}
calcView.Getdata = function(data){         
    const result = data.result;    
    this.displayEl.textContent = result ? result : 'Error';       
}

export default calcView;
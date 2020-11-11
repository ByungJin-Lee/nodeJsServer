/* import View */
import calcView from '../Views/calcView.mjs';
/* import Models */
import calcModel from '../Models/calcModel.mjs';

const tag = '[calcController]';

export default {
    calcEls: {
        0: document.querySelector('.calc'),
        1: document.querySelector('.displayText'),
        2: document.querySelector('.inputArea')
    },
    init : function(){
        console.log(tag+'init');
        //calcModel
        calcModel.init(this.onGetData);
        //calcView 
        calcView.init(this.calcEls)
            .on('@submit', (data)=>this.onSubmit(data.detail.data));
    },
    onSubmit : function(data){
        calcModel.send(data);            
    },
    onGetData(data){
        calcView.Getdata(data);        
    }
}

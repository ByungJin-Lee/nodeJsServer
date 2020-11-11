const tag = '[calcModel]';

export default {
    init : function(fn){
        if(!fn) throw fn;
        this.callBackfn = fn;
        console.log(tag+'register CallBackFunction');
    },
    send : function(data){  
        const that = this;      
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === xhr.DONE)
                that.callBackfn(JSON.parse(xhr.responseText));            
        }
        xhr.open('POST', '/calc');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({data,}));
    }
}
const tag = '[View]';

export default {
    evtList: [],
    setup : function(el){
        if(!el) throw el;
        this.el = el;
        return this;
    },    
    emit : function(evtName, data){
        if(!this.checkEvt(evtName)) this.evtList.push(evtName);
        //register event
        let nEvt = new CustomEvent(evtName, {detail : data});
        this.el.dispatchEvent(nEvt);
        return this;
    },
    on : function(evtName, fn){        
        this.el.addEventListener(evtName, fn);
        return this;
    },
    checkEvt : function(evtName){
        for(let item of this.evtList)
            if(item === evtName)
                return 1;        
        return 0;
    }

}
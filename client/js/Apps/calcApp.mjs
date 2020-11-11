import calcController from "../Controllers/calcController.mjs";

const tag = '[calcApp]';

window.addEventListener('load', function(){
    console.log(tag+'load!');
    calcController.init();
    //calcController load
});
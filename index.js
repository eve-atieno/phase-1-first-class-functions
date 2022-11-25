function receivesAFunction(callback){
callback();
}
function returnsANamedFunction(){
    return function namedFunction(){
        return "eve";
    }
}
function returnsAnAnonymousFunction(){
    return() =>"amazing";
}
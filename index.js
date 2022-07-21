function receivesAFunction(callback){
   callback();
}
function returnsANamedFunction() {
   return function what(is) {console.log(`what ${is} this`)};
}

function returnsAnAnonymousFunction() {
   return () => console.log('not working test?');
}
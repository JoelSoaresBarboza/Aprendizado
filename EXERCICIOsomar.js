var valores1 = 0
var valores2 = 0
var valor = 0
somar (10);
function somar (limite) {
for (var i =0 ; i<=limite ; i++){
    if (i%3==0 && i!=0) {
    valores1 +=i
    }
    else if (i%5==0 && i!=0){
        valores2 +=i
    }
    else {
    }
    valor = (valores1+valores2)
    
}console.log (valor)}


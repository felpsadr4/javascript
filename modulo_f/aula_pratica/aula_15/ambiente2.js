var valores = [1, 5, 6, 8, 4, 3]

/*
for(var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

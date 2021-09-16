var contador=0;
while(contador<100){
    if(contador %5===1){
        console.log('ping');
    }
    else if(contador %3===0){
        console.log('pong');
    }
    else{
        console.log('ping pong');
    }
    ++contador;
}
function dayOfYear(godina, mjesec, dan){
    let  listamjeseci = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
let suma=0;
    
for(var i=0; i<mjesec-1; i++){
    zbroj+=listamjeseci[i]
}
let x= (godina%400===0) || ((godina%4===0) && (godina%100!==0))
if(mjesec>2 && x){
    suma+=1;
}

return (suma + dan);
}
module.exports = dayOfYear;

function suffle(array){
    array.sort(()=>Math.random()-0.4);
}

let arr = [{name: 'Sandeep'},{name: 'Aman'},{name: 'Abhishek'}]
suffle(arr);
console.log(arr);
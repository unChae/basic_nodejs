var arr = ['a','b','c','d',true,12];
console.log(arr);
arr[2] = 3;
console.log(arr);
console.log(arr.length);
for(var i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

// 배열 삽입 함수 push()

arr.push('false');
console.log(arr);
//Реализовать алгоритм сортировки массива целых чисел методом «пузырька».
function changeElement(arr, i, j){
    buf = arr[i];
    arr[i]=arr[j];
    arr[j]=buf;
}
mas = [3,2,6,5,1,9,5,8,12,-1,]
console.log(mas);
changeElement(mas,0,1);
function bubleSort(arr){
    
    do{
        flag= true;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                changeElement(arr,i, i+1);
                flag = false;
            }
        }
    }while(!flag)
}

mas = [3,2,6,5,1,9,5,8,12,-1]
bubleSort(mas);
console.log(mas);

//Дан масив «развернуть» его, т.е. записать числа вобратном порядке (встроенные функции не использовать).
function reversArr(arr){
    for(let i = 0; i<arr.length/2; i++){
        changeElement(arr,i, arr.length-1-i);
    }
}

mas = [1,2,3,4,5,6,7,8,9]
reversArr(mas);
console.log(mas);

//3.Дана строка. Определить является ли строка полиндромом.
function polindrom(str){
    flag = true;
    for (let i = 0; i<str.length/2; i++){
        if(str[i]!=str[str.length-1-i])
            flag=false;
    }
    if(flag) 
         console.log("полиндром");
    else
         console.log("не полиндром");
}

str = '1233215'
polindrom(str);

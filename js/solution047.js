function dirReduc(arr){
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === 'NORTH' && arr[i+1] ==='SOUTH'){arr.splice(i,2); i--;}
        if(arr[i] === 'NORTH' && arr[i-1] ==='SOUTH'){arr.splice(i-1,2); i--;}

        if(arr[i] === 'SOUTH' && arr[i+1] ==='NORTH'){arr.splice(i,2); i--;}
        if(arr[i] === 'SOUTH' && arr[i-1] ==='NORTH'){arr.splice(i-1,2); i--;}

        if(arr[i] === 'EAST' && arr[i+1] ==='WEST'){arr.splice(i,2); i--;}
        if(arr[i] === 'EAST' && arr[i-1] ==='WEST'){arr.splice(i-1,2); i--;}

        if(arr[i] === 'WEST' && arr[i+1] ==='EAST'){arr.splice(i,2); i--;}
        if(arr[i] === 'WEST' && arr[i-1] ==='EAST'){arr.splice(i-1,2); i--;}
        else continue
    }
    return arr
}
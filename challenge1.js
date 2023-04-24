const input = [1, 5]

const func = (arr) =>  {
     arr.sort((a, b) => a-b)

     let minimunValueNotPosible = 0
     arr.forEach(aCoin => {
        if(aCoin > minimunValueNotPosible + 1) return minimunValueNotPosible + 1

        minimunValueNotPosible += aCoin;
     });

     return minimunValueNotPosible + 1;
}

const output = func(input);

console.log(output);
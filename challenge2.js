const input = [-10, -5, 0, 5, 10]

const func = (arr) =>  {
    const arr2 = arr.map(anEntry => anEntry ** 2)

    return arr2.sort((a,b) => a -b)
}

const output = func(input)

console.log(output)
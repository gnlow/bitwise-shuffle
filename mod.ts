const randNumGen: (used: number[], length: number) => number 
    = (used: number[], length: number) => {
        const randNum = Math.floor(Math.random() * length)
        if(used.includes(randNum)){
            return randNumGen(used, length)
        }
        return randNum
    }

const random = (length: number) => {
    const result: number[] = []
    for(let i=0;i<length;i++){
        result.push(randNumGen(result, length))
    }
    return result
}

const shuffle = (key: number[]) => (input: number) => {
    const inputLength = input.toString(2).length
    console.log(inputLength)
    return key.reduce(
        (acc, to, from) => 
            acc += 
                ( BigInt(input) & 0b1n << BigInt(inputLength - from - 1) ) >> BigInt(to - from), 
        0n
    )
}

console.log(shuffle([1,2,0])(0b101).toString(2)) // 110
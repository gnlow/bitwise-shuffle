const randNumGen: (used: number[], length: number) => number 
    = (used: number[], length: number) => {
        const randNum = Math.floor(Math.random() * length)
        if(used.includes(randNum)){
            return randNumGen(used, length)
        }
        return randNum
    }

export const random = (length: number) => {
    const result: number[] = []
    for(let i=0;i<length;i++){
        result.push(randNumGen(result, length))
    }
    return result
}

export const shuffle = (key: number[]) => (input: number) => {
    const inputLength = input.toString(2).length
    return Number(key.reduce(
        (acc, to, from) => 
            acc += 
                ( BigInt(input) & 0b1n << BigInt(inputLength - from - 1) ) >> BigInt(to - from), 
        0n
    ))
}
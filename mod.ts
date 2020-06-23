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
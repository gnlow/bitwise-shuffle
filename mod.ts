const shuffle = (key: number[]) => (input: number) => {
    const inputLength = input.toString(2).length
    console.log(inputLength)
    return key.reduce(
        (acc, to, from) => 
            acc += input & 0b1 << (inputLength - from - 1) , 
        0
    )
}

console.log(shuffle(Array(7).fill(void 0))(123))
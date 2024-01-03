function main(N) {
    for (let i = 0; i < N; i++) {
        for(let j = 0; j < Math.ceil(N/2); j++) {
            if (((i === j) || ((N-1) - i) === j)) {
                process.stdout.write("*\n")
                break
            } else {
                process.stdout.write(" ")
            }
        }
    }   
}

main(process.argv[2])
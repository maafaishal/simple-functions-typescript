const sortNumber = (arrayData: number [] | [], isAscending = true) => {
    return arrayData.sort((a: number, b: number) => isAscending ? a - b : b - a)
}

export default sortNumber
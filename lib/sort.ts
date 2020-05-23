const sort = (arrayData: string[] | number [] | [], isAscending = true) => {
  if(isAscending) {
    // ascending
    return arrayData.sort()
  }

  // descending
  return arrayData.sort().reverse()
}

export default sort
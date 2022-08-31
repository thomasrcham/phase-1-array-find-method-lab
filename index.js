const record = [
    { year: "2018", result: "N/A"},
    { year: "2015", result: "L"},
    { year: "2014", result: "N/A"},
  ]

function findWin(item) {
  if (item.result === "W") {
    return true;
  } else {
    return false;
  }
}

function superbowlWin(array) {
  return array.find(findWin).year
}

const date = superbowlWin(record)
//const win = record.find(findWin)
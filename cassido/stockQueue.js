// You are given a snapshot of a queue of stocks that have changing prices coming in from a stream. Remove the outdated stocks from the queue.

const snapshot = [
  { sym: "GME", cost: 280 },
  { sym: "PYPL", cost: 234 },
  { sym: "AMZN", cost: 3206 },
  { sym: "AMZN", cost: 3213 },
  { sym: "GME", cost: 325 }
]

// Solution 1
const stockQueue1 = (array) => {
  return array.reduce((acc, stock) => {
    if (acc.some(obj => obj.sym === stock.sym)) {
      acc = acc.filter((obj) => obj.sym !== stock.sym);
      acc.push(stock);
    } else {
      acc.push(stock);
    }

    return acc;
  }, []);
}

// Solution 2 without checking if variable exists
const stockQueue2 = (array) => {
  return array.reduce((acc, stock) => {
    acc = acc.filter((obj) => obj.sym !== stock.sym);
    acc.push(stock);

    return acc;
  }, [])
}

// ==> [{ sym: ‘PYPL’, cost: 234 },
//      { sym: ‘AMZN’, cost: 3213 },
//      { sym: ‘GME’, cost: 325 }]
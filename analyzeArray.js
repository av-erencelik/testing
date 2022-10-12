function analyze(array) {
  let average = array.reduce((prev, curr) => prev + curr, 0) / array.length;
  let max = Math.max(...array);
  let min = Math.min(...array);
  let length = array.length;
  return {
    avg: average,
    m: min,
    ma: max,
    l: length,
  };
}

export default analyze;

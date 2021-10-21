export const calculateScore = (hits, miss) => {
  let total = hits + miss; 
  console.log(hits, miss);
  hits = hits/total;
  miss = miss/total;
  return {
    hitsTemp: hits * 100,
    missTemp: miss * 100
  }
}
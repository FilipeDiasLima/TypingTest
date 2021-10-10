export const calculateScore = (hits, miss) => {
  let total = hits + miss; 
  console.log(hits, miss);
  hits = hits/total;
  miss = miss/total;
  return {
    hits: hits * 100,
    miss: miss * 100
  }
}
let DNAClosure = (() => {
  function returnEqualLengths(thisSeq, otherSeq) {
    let shortestSeq = ((thisSeq.length > otherSeq.length) ? otherSeq.length : thisSeq.length);
    thisSeq = thisSeq.slice(0, shortestSeq);
    otherSeq = otherSeq.slice(0, shortestSeq);
    
    return { thisSeq, otherSeq, shortestSeq };
  }
  
  return class DNA {
    constructor(sequence) {
      this.sequence = sequence;
    }
    
    hammingDistance(sequence) {
      let { thisSeq, otherSeq, shortestSeq } = returnEqualLengths(this.sequence, sequence);
      
      let distance = 0;
      for (let idx = 0; idx < shortestSeq; idx++) {
        if (thisSeq[idx] !== otherSeq[idx]) {
          distance++;
        }
      }
      return distance;
    }
  };
})();

module.exports = DNAClosure;
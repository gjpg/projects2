// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(uid, strand) {
  return {
    specimenNum: uid,
    dna: strand,
    mutate() {
      console.log('Initial this.dna: ' + this.dna);
      let selectedIndex = Math.floor(Math.random() * 15);
      console.log('selectedIndex: ' + selectedIndex);

      let selectedBase = this.dna[selectedIndex];
      console.log('selectedBase: ' + selectedBase);
      let replacement = returnRandBase();
      while (replacement == selectedBase) {
        replacement = returnRandBase();
        console.log('replacement: ' + replacement);
      }
      this.dna[selectedIndex] = replacement;
      console.log('Final this.dna: ' + this.dna);

      return this.dna;
    },
    compareDNA(specimen) {
      let tally = 0;
      for (let i = 0; i < specimen.dna.length; i++) {
        if (specimen.dna[i] == this.dna[i]) {
          tally = tally + 1;
        }
      }
      let sharedDNA = (tally / specimen.dna.length) * 100;
      console.log(
        `specimen${specimen.specimenNum} shares ${Math.floor(sharedDNA)}% of its DNA with specimen${this.specimenNum}`
      );
    },
    willLikelySurvive() {
      let desirableBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          desirableBases++;
        }
      }
      console.log('this.dna: ' + this.dna);
      console.log('desirableBases: ' + desirableBases);
      console.log(
        '%desirable: ' + Math.floor((desirableBases / this.dna.length) * 100)
      );

      return desirableBases / this.dna.length >= 0.6;
    },
  };
}

function generateBatch(num) {
  let batch = [];
  for (let i = 1; i <= num; i++) {
    let pAequor = pAequorFactory(i, mockUpStrand());
    batch.push(pAequor);
  }
  return batch;
}
let pAequorBatch = generateBatch(30);
console.log(pAequorBatch);
console.log(pAequorBatch);
console.log(pAequorBatch);
console.log(pAequorBatch);

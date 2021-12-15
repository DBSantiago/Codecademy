// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(id, dnaArray) {
  return {
    specimenNum: id,
    dna: dnaArray,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let newDna;
      do {
        newDna = returnRandBase();
      } while (newDna === this.dna[randomIndex]);
      this.dna[randomIndex] = newDna;
      return this.dna;
    },
    compareDNA(specimen) {
      let counter = 0;
      for (let i = 0; i < specimen.dna.length; i++) {
        if (this.dna[i] === specimen.dna[i]) {
          counter += 1;
        }
      }
      let percentDnaInCommon = (counter / this.dna.length) * 100;
      console.log(
        `Specimen #${this.specimenNum} and specimen #${specimen.specimenNum} have ${percentDnaInCommon}% in common.`
      );
    },
    willLikelySurvive() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          counter += 1;
        }
      }
      let percentChanceOfSurviving = (counter / this.dna.length) * 100;
      return percentChanceOfSurviving >= 60 ? true : false;
    },
  };
}
const specimenBatch = [];
for (let i = 1; i <= 30; i++) {
  let dna = mockUpStrand();
  let specimen = pAequorFactory(i, dna);
  specimenBatch.push(specimen);
}
console.log(specimenBatch[0].dna);
console.log(specimenBatch[0].willLikelySurvive());
console.log(specimenBatch[0].mutate());
console.log(specimenBatch[0].willLikelySurvive());

let chart = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
}

function translate(codon) {
  let protein = [];

  if (codon === undefined) {
    return protein;
  }

  let codonArr = codon.match(/.{3}/g);

  for (let i = 0; i < codonArr.length; i += 1) {
    let value = chart[codonArr[i]];

    if (value === "STOP") {
      return protein;
    } else if (!value) {
      throw new Error("Invalid codon");
    } else {
      protein.push(value);
    }

  }

  return protein;
}

module.exports = translate;
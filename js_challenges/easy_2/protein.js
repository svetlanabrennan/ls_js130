const CODONCHART = {
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
  UAA: "Stop",
  UAG: "Stop",
  UGA: "Stop"
}

function translate(codon = "") {
  let result = [];

  codon = codon.match(/.{1,3}/g) || [];

  for (let idx = 0; idx < codon.length; idx += 1) {
    let code = codon[idx];
    if (CODONCHART[code] && (CODONCHART[code] !== "Stop")) {
      result.push(CODONCHART[code]);
    } else if (CODONCHART[code] === "Stop") {
      break;
    } else {
      throw Error("Invalid codon");
    }
  }
  return result;
}

// STOPPED HERE: rewrite the solution without using regex

console.log(translate("AUG"));

module.exports = translate;
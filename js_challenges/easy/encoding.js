let functions = {
  encode(chrs) {
    let array = chrs.match(/(.)\1*/g) || [];

    return array.map(chr => {
      if (chr.length > 1) {
        let len = chr.length;
        return len + chr[0];
      } else {
        return chr;
      }
    }).join("");
  },

  decode(chrs) {
    let result = "";
    let count = "";

    for (let i = 0; i < chrs.length; i += 1) {
      let currentChr = chrs[i];
      if (/[0-9]/.test(currentChr)) {
        count += currentChr;
      } else {
        count = Number(count) || 1;
        result += currentChr.repeat(count);
        count = "";
      }
    }
    return result;
  }
}

module.exports = functions
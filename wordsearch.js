const transpose = function(letters) {
    let transposedArray = [];
    // console.log(matrix);
    for (let x = 0; x < letters[0].length; x ++) {
      let tempArray = [];
      for (let y = 0; y < letters.length; y ++) {
        tempArray.push(letters[y][x]);
      }
      transposedArray.push(tempArray);
    }
    return transposedArray;
  };

const wordSearch = (letters, word) => { 
    if (!letters) {
        return "Game over"
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(element => element.join(" ")); 
    // console.log(verticalJoin);
    for (item of verticalJoin) {
        // console.log(item);
        if (item.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch
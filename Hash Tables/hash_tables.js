//  ---------- Hash Tables ----------
 // A data structure that allows us to store key-value pairs
//  * time complexity
//   - search 0(1)
//   - insert O(1)
//   - lookup O(1)
//   - delete O(1)

  // Pros 
  // - Fast look up 
  // - Fast inserts
  // - Flexible Keys

  // Cons 
  // - Unordered
  // - Slow key iteration
  

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash = key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } // O(1) if no collision
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}
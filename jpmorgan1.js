const deleteProducts = (ids, m) => {
  // you want to find the ids that appear least frequently and remove them
  // create a dictionary
  // loop through ids and add to the dictionary:
  // // if undefined : 1
  // // else ++
  const dict = {};

  ids.forEach((id) => {
    if (dict[id]) {
      dict[id]++;
    } else {
      dict[id] = 1;
    }
  });
  // when finished,the dictionary will look like this:
  /**
   * m = 2
   *
   * {
   *  1: 3,
   *  2: 2,
   *  3: 1,
   * }
   */

  // recursive function that takes in an object and m

  const findLeastFrequentId = (dict, m) => {
    // now, we need to work through and perform deletions (decrements and deletes):
    // find the least frequently appearing id
    let leastFrequentId = undefined;
    let leastFrequentIdFrequency = Infinity;

    for (let id in dict) {
      if (dict[id] < leastFrequentIdFrequency) {
        leastFrequentIdFrequency = dict[id];
        leastFrequentId = id;
      }
    }

    if (leastFrequentIdFrequency > m) {
      // if that frequency is greater than m, return dictionary.keys.length
      return Object.keys(dict).length;
    } else if (leastFrequentIdFrequency === m) {
      // if it is equal to m, return dictionary.keys.length - 1
      return Object.keys(dict).length - 1;
    } else {
      // if it is less than m, we need to do this part again, but with this entry removed and m decreased by the frequency.
      delete dict[leastFrequentId];
      return findLeastFrequentId(dict, m - leastFrequentIdFrequency);
    }
  };

  return findLeastFrequentId(dict, m);
};

// console.log(deleteProducts([1, 1, 1, 2, 3, 2], 2));
console.log(deleteProducts([1, 2, 3, 1, 2, 2, 1], 3));

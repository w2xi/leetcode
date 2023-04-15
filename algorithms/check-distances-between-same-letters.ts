function checkDistances(s: string, distance: number[]): boolean {
  const map = Array(26);

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    map[index] = i;
  }
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
    if (map[index] === true) { // be used
      continue;
    }
    if (map[index] - i !== distance[index] + 1) {
      return false;
    } else {
      map[index] = true;
    }
  }

  return true;
};
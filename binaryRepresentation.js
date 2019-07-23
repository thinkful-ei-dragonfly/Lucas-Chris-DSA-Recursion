function binaryRepresentation(n) {
    if (n <= 0) {
      return '';
    }
    let binary = n % 2;
    return binaryRepresentation(Math.floor(n/2)) + binary;
  }
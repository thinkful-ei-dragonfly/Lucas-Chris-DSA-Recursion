function anagram(string){
    const output = [];
    function traverse(string, perm = ''){
      if (!string) output.push(perm)
      for (let i = 0; i < string.length; i++){
        traverse(string.slice(0,i) + string.slice(i+1), perm + string[i]);
      }
    }
    traverse(string)
    return output
  }

  console.log(anagram('east').length)
function stringSplitter(str) {
    if (!str.includes(`/`)) {
        return str
    }
    if (str[0] !== `/`) {
      return str[0] + stringSplitter(str.substr(1))
    }
      return stringSplitter(str.substr(1))
 }
 
 console.log(stringSplitter('09/24/1987'))
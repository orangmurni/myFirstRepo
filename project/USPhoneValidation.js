function telephoneCheck(str) {
    let regex = /^[1 ]*(\([0-9]{3}\)|[0-9]{3})[\s-]*[0-9]{3}[\s-]*[0-9]{4}$/
    
    return regex.test(str);
  }
  
  console.log(telephoneCheck("1(555)555-5555"));

  
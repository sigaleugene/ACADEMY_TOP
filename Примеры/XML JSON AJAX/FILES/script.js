
function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      const myPerson = JSON.parse(reader.result);
      console.log(myPerson.name);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }


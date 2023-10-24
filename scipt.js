function checkVowels(){
  let text = document.getElementById("inputText").value;
  let vowel = 0, consonant = 0, splChar = 0, number = 0;
  text = text.toLowerCase();

  for(let i = 0; i < text.length; i++){
    let char = text.charAt(i);
    if(char >= 'a' && char <= 'z'){
      if(isVowel(char)){
        vowel++;
      }
      else{
        consonant++;
      }
    }
    else if(char >= '0' && char <= '9'){
        number++;
    }
    else{
      if(char != ' ')
        splChar++;
    }
  }
  
  const result = document.getElementById('result');

  const lineBreak = document.createElement("br");
  result.appendChild(lineBreak);
  result.innerHTML = `Total Vowels : ${vowel}<br>Total Consonants : ${consonant} <br>Total Numbers : ${number}<br>Total Special Characters : ${splChar}`;
}

function isVowel(char){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}
// Функция №1. Проверка длины строки

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength();

// Функция №2. Проверка является ли строка палиндромом

function isPalindrom2 (string) {
  string = string.replace(/\s/g, '').toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString === string;
}

isPalindrom2();


function isPalindrom3 (string) {
  const newString = string.replace(/\s/g, '').toLowerCase();
  for (let i = 0; i <= Math.ceil(newString.length / 2); i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
      return false;
    }
  } return true;
}

isPalindrom3();

function isPalindrom4 (string) {
  let j = string.length - 1;
  let result = true;
  for (let i = 0; i <= Math.ceil(string.length / 2); i++) {
    if (string[i] !== string[j]) {
      result = false;
      break;
    }
    j--;
  }
  //console.log(result);
  return result;
}

isPalindrom4();

//Функция №3. Извлечение чисел из строки

function getNumber (string) {
  let finalNumber = '';

  if (string > 0 && Number.isInteger(string)) {
    return string;
  } else if (typeof string === 'number') {
    string = string.toString(10);
  }

  string = string.split('');
  for (let i = 0; i < string.length; i++) {
    string[i] = parseInt(string[i], 10);
    if(!Number.isNaN(string[i])) {
      finalNumber += string[i];
    }
  }

  return (finalNumber === '') ? NaN : Number(finalNumber);
}

getNumber();

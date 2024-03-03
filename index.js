//ჯავასკრიფტის პროექტის დავალება 1

var number1 = Number(prompt("Write the first digit"));   //დავწეროთ პირველი ციფრი
var operator = prompt("Write: +, -, * or /");            //დაწერეთ: +, -, * ან /
var number3 = Number(prompt("Write the second digit"));  //დაწერეთ მეორე ციფრი
var result;                                              //შედეგი

if(operator == "+" ){result = number1 + number3;}        //თუ შეკრაბაა, მაშინ შედეგი ტოლია პირველ ციფრს მივუმატოთ მეორე ციფრი
else if(operator == "-" ){result = number1 - number3;}   //თუ გამოკლებაა, მაშინ შედეგი ტოლია პირველ ციფრს გამოვაკლოთ მეორე ციფრი
else if(operator == "*" ){result = number1 * number3;}   //თუ გამრავლებაა, მაშინ შედეგი ტოლია პირველი ციფრი გავამრავლოთ მეორე ციფრზე
else{result = number1 / number3;}                        //თუ გაყოფაა, მაშინ შედეგი ტოლია პირველი ციფრი გავყოთ მეორე ციფრზე
alert(result);  //                                       //alert-ს გამოიტანს ეკრანზე შდეგს

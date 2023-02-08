// 1_Alerts
// Question no 1
alert("Welcome!!")

// Question no 2 
alert("Error! Please enter a valid password")

// Question no 3
alert("Welcome to Yawr World\nHappy Codding")

// Question no 4
alert("Welcome to Yawr World")

// Question no 5
alert("Happy Coding")



// 2_VariablesForStrings
// Question no 1
var username;

// Question no 2
var myName = "Yawr";

// Question no 3
var msg = "Hello Oyyeee!!";
alert(msg)

// Question no 4
alert("Pizza\nPizz\nPiz\nPi\nP\n")

// Question no 5
var email= "123@gmail.com"
alert("My Email is " + email)


// 3_VariablesForNumbers
// Question no 1
var age = 48
alert("My age is "+age)

// Question no 2
var visit = 48
alert("You Visited the site "+visit+" times")

// Question no 3
var dateOfBirth = 1975
document.write("My Date of Birth is: "+dateOfBirth)

// Question no 4
var vistorName = "yawr"
var productTitle = "YT-shirts"
var quantity = 5
document.write(vistorName+" ordered " + quantity + productTitle + "from MY clothing")

// 4_VariableNames_LegalAndIllegal
legal Variable:
alert("These are some legal variables: yawar, Yawar, yawar1, _yawar, Yawar, yAwar")
name 
$yawars
yawar$
Yawar 
yawar1
_yawar 
Yawar  
yAwar 
alert("These are some illegal variables: 1saad, @saad, saad@, s@ad")
illegal Variable:
1saad
@saad
saad@
s@ad

// 5 MathExpressions
Question no 1
var num1= 3
var num2= 6
var sum= num1+num2
document.write("The Sum of 3 And 6 is: "+sum)

// Question no 2
var num1= 3
var num2= 6
var sub= num1-num2
document.write("The Sum of 3 And 6 is: "+sub)
var num1= 3
var num2= 6
var mul= num1*num2
document.write("The Sum of 3 And 6 is: "+mul)
var num1= 3
var num2= 6
var div= num1/num2
document.write("The Sum of 3 And 6 is: "+div)

// Question no 3
var priceTicket = 900;
var total= priceTicket*5
document.write("Total price is: "+total)

// Question no 4
document.write("Table of 4")
document.write("4X1=4")
document.write("4X2=8")
document.write("4X3=12")
document.write("4X4=16")
document.write("4X5=20")
document.write("4X6=24")
document.write("4X7=28")
document.write("4X8=32")
document.write("4X9=36")
document.write("4X10=40")

// Question no 5
var totalMarks=1100
var obtainedMarks=855
var percent= obtainedMarks/totalMarks*100
document.write(percent+"%")


// 6-8_ConcatenatingStrings_Prompts_IFStatements_ComparisonOperators
// Question no 1
var a = 10
a++
document.write(a)
var b = 10
++b
document.write(b)


// Question no 2
var a = 2
var b = 1
var result = --a - --b + ++b + b--;
document.write(result)

// Question no 3
var greet = prompt("Hello Enter Your Name")
alert("Have Great Day "+greet)

// Question 4
var inp = +prompt("Enter Multiple Number")
var mul=5*inp
document.write(mul)

// Question 5
var inp = +prompt("Enter Division Number")
var div=5*inp
document.write(div)

// 9-10 ConcatenatingStrings_Prompts_IFStatements_ComparisonOperators
// Question no 1
var cityName = prompt("Enter Your City")
if(cityName=="Karachi"){
    document.write("Welcome in city of light")
}
else{
    document.write("Welcome ")
}

// Question no 2
var gender = prompt("Enter Your Gender")
if (gender == "Male") {
    document.write("Welcome Sir ")
}
else {
    document.write("Welcome ooye")
}

// Question no 3
var trafficColors = prompt("Enter Your Gender")
if (trafficColors == "Red") {
    document.write("Stop")
}
else if(trafficColors=="Yellow"){
    document.write("Ready")
}
else if(trafficColors=="Green"){
    document.write("Go")
}
else {
    document.write("Invalid color")
}

// Question no 4
var a = 4;
if (++a === 5){
document.write("given condition for variable a is true");
}

// Question no 5
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// 10~ 13 IF...ELSE_ELSE...IFStatements_SetOfConditions
// Question no 1
var num1=+prompt("Enter Number")
var num2=+prompt("Enter Number")
if(num1>num2){
    document.write(num1+"is Greater than"+num2)
}
else if(num2>num1){
    document.write(num2+"is Greater than"+num1)

}
else if(num2==num1){
    document.write(num2+"is equal to"+num1)
}
else{
    document.write("Invalid")
}

// Question no 2
var num1 = +prompt("Enter number")
if(num1>0){
        document.write("Positive Number")  
    }
else{
    document.write("Negative Number")  

}

// Question no 3
var num1 = prompt("Enter Letter")
if (num1 == "a") {
    document.write("Vowel")
}
else if(num1 == "e"){
    document.write("Vowel")
}
else if(num1 == "i"){
    document.write("Vowel")
}
else if(num1 == "o"){
    document.write("Vowel")
}
else if(num1 == "u"){
    document.write("Vowel")
}
else {
    document.write("Counsonant")

}


// Question no 4
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
    greeting = "Good evening";
}

// Question no 5
var pass = "admin"
var userInput = prompt("Enter Password")
if(pass==userInput){
    document.write("Correct Password")
}
else{
    document.write("Incorrect Password")
}


// 14-17_Arrays
// Qusetion no 1
var arr = []

// Qusetion no 2
var arr = ["Yawr","Jalalo","Khan","monam","shahzad","wahid"]


// Qusetion no 3
var arr = [1,44,53,,56,78,56,45,3,34,75]


// Qusetion no 4
var arr = [true, false]


// Qusetion no 5
document.write("Qualification: </br>")
var arr = ["1)SSC</br>", "2)SSC</br>", "3)SSC</br>", "4)SSC</br>", "5)SSC</br>", "6)SSC</br>"]
var r=arr.join(" ")
document.write(r)

// Qusetion no 6
var arr = ["Jalalo", "yawr", "shahzad"]
var arr2 = ["400", "299", "322"]
var total = arr2[0] / 500 * 100
var total2 = arr2[1] / 500 * 100
var total3 = arr2[2] / 500 * 100
document.write("Score of Jalalo is: " + arr2[0] + " Percentage is: " + total + "</br>")
document.write("Score of Yawr is: " + arr2[1] + " Percentage is: " + total2 + "</br>")
document.write("Score of shahzad is: " + arr2[2] + " Percentage is: " + total3 + "</br>")


// Question no 7
var arr = ["This", "is", "my", "Bull"];
var r = arr.join(" ")
document.write(r)


// Question no 7
var fruits = ["Banana" "Orange" "Strawbery",  "Graps",  "Watermelon"]
var r = fruits.sort()
document.write(r)


// Question no 8
var compare = function(a,b){
    return a-b;
}
var fruits = [122, 324, 565, 563, 343, 453, 232]
var r = fruits.sort(compare)
document.write(r)





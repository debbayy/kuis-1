let input = [1, 2, -2, -1, 3, 4, -3]; //0utput 4
//let input = [1, -1, 2, 3, -2]; //output 3

let output = 0;
for (let i = 0; i < input.length; i++) {
  output += input[i];
}
document.write("length:" + input.length + "<br/>");
document.write("input array :" + input + "<br/>");
document.write("output :" + output);

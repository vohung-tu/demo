/* + xoa tat ca khong trsng du thua o dau vaf giua vaf cuoi
   + viet hoa chu cai dau cua moi tu, nhung ki tu con lai viet thuong
   input" nguyen  xUAN    Hung    "" */

   let input = "            nguyen  xUAN   Hung   ";
function Chuoi1(input){
 input = input.trim();
 input = replaceALLspace(input);
 input = input.toLowerCase();
//  for(let i = 0; i<input.length(); i++)
//  {
//      if(input[i-1]==' ')
//      {
//         input[i].toUpperCase();
//      }
//  }
let inputArray = input.split(" ");
let result = '';
for(let i = 0; i < inputArray.length() ; i++)
{
    result += upperFirstKey(inputArray[i]);
    if(i < inputArray.length - 1)
    {
        result += " ";
    }
}

console.log(result); 
}

function upperFirstKey(str ='') {
    let s = '';
    s += str.charAt(0).toUpperCase();
    s += str.substring(1);
    return s;
}

function replaceALLspace(input = '')
{
    let check = input.includes("  "); // kiem tra neu 2 khoang trang
    while(check)
    {
        input = input.replaceAll("  ", " ");
        check = input.includes("  "); // cap nhat lai dieu kien
    }
}

Chuoi1(input);
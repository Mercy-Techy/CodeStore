let students = [
  { Name: "Rela", Age: 40, School: "Pakinstan", Course: "CVE", Noofkids: 7 },
   { Name: "Grace", Age: 30, School: "Lautech", Course: "CSE", Noofkids: 0 },
   { Name: "Mercy", Age: 30, School: "Cameroon", Course: "MEE", Noofkids: 3 },
   { Name: "percy", Age: 30, School: "roon", Course: "MEE", Noofkids: 3 }
]
// console.log(students[2])
// console.log(students[2].School)
text = "";
for(let i = 0; i<students.length;i++){
text += 'My name is ' + students[i].Name + 'I am ' + students[i].Age + 'years old,' + 
'I schooled in ' + students[i].School + ' and studied ' + students[i].Course +
 'I have an intention of giving birth to ' + students[i].Noofkids + ' children' + '<br>'}
 document.getElementById('demo').innerHTML = text
 
 //  document.write('My name is ' + students.Name + '<br>' + 'I am ' + students.Age + 'years old,' + 
 //                 '<br>' + 'I schooled in ' + students.School + ' and studied '
 //                 + students.Course + '<br>' + 'I have an intention of giving birth to ' 
 //                 + students.Noofkids + ' children')












const name = 'John';
const age = 30;
const job = 'Web Development';
const city = 'Miami';
let html;

// without template strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: '+ age + '</li><li>Job: ' + job 
+ '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
'<li>Name: '+ name + '</li>' +
'<li>Age: '+ age + '</li>' +
'<li>Job: '+ job + '</li>' +
'<li>City: '+ city + '</li>' +
'</ul>';

// with template strings (es6)
html = `
<ul> 
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li> ${2 + 2}</li>
<li> ${age > 30 ? 'over 30' : 'under 30'}</li>
</ul> 
`;




document.body.innerHTML = html;
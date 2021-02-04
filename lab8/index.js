function f3()
{
	let str = document.getElementById("task3").value;
	arr1 = str.split(' ');
	console.log(arr1);
	// let arr1 = [1,2,3,45];
	for(let i=0;i<arr1.length;i++)
	{
		console.log(arr1[i]);
		let s = "";
		for(let j=0;j<arr1[i];j++){

			s+="*";
		}
		console.log(s + '\n');
	}
}
function f2(event)
{
	let str = document.getElementById("task2").value;
	console.log(str);
	// document.write(str + '<br>');
	for(let i = 0;i<str.length;i++)
	{
		if(str[i] != str[str.length - i - 1]) 
			{
				console.log("NOT Palindrom");
				return;
			}
	}
	console.log("Palindrom");

}
function f1(e)
{
	e.preventDefault();
	let a = parseInt(document.getElementById("task1a").value);
	let op = document.getElementById("task1op").value;
	let b =  parseInt(document.getElementById("task1b").value);
	let ans = 0;
	if(op == '+') ans = a+b;
	else if(op == '*') ans = a*b;
	else if(op == '-') ans = a-b;
	else if(op == '/') ans = a/b;
	document.write(ans);

}
// f1();
// f2();
// f3();


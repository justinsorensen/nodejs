// Return a random integer between 0 and 1000
function rand() {
  return Math.floor(Math.random() * 1000);
}

function f1(cb) {
  console.log('f1 starts');
  setTimeout(cb, rand());
}

function f2(cb) {
  console.log('f2 starts');
  setTimeout(cb, rand());
}

function f3(cb) {
  console.log('f3 starts');
  setTimeout(cb, rand());
}

function onEnd() {
  console.log('onEnd called');
}

/* 
  PROBLEM:
  
  Figure out a way to run f1, f2 and f3 in 
  parallel and to completion before running onEnd.

  The program should complete as quickly as possible.

  Do not modify anything above this comment;
  do not modify f1, f2, f3, and onEnd.
  
  Run this program with the following command:

     node run_group.js

  Notice that the onEnd function runs before the
  other functions complete.

  Replace the code following this comment with 
  something that works.
*/

function runStuff() {

		var a = 3;		//defined here to give local scope

		f1(function() { 
			a--; 
			console.log('f1 completed'); 
			console.log(a); 
			if(a==0) {
				onEnd();
			}
			
		});
		
		f2(function() { 
			a--; 
			console.log('f2 completed'); 
			console.log(a); 
			if(a==0) {
				onEnd();
			}
		});
		
		f3(function() { 
			a--; 
			console.log('f3 completed'); 
			console.log(a); 
			if(a==0) {
				onEnd();
			}
		});
			
}

runStuff();







# Catch Unhandled Javascript Errors with Onerror

Onerror can help you out  to handle   some  errors which  often happen in JS when you  aren't managing  correctly. A common example is to try to access  to a property of a object which  doesn't exist.

```javascript
var myObject={a:1,b:2};

function checkObject(){
	// myObject.a.b is undefined,hence is not an error
    alert(myObject.a.b.c);
}
function checkObjectTryCatch(){
	try{
		alert(myObject.a.b.c);
    }catch(e){
    	alert("function checkObjectTryCatch has an error "+e);
    }
}
checkObject();//fails
checkObjectTryCatch();
```

Obviously  the second function will not be called at all  because the first one fails and stops the following  line of code.

In  these kind of cases can be useful  at least  to  inform  to user that something goes wrong.  Although Onerror handles  errors globally through all  the js files loaded,  it  doesn't interfere with code which already handles  their own errors with try catch, this  is good because you  may have old code that doesn't handle  possible errors and  maybe your  recently code does.




```javascript
window.onerror = function (message, file, line, col, error) {
	alert(message);
};
var myObject={a:1,b:2};

function checkObject(){
	// myObject.a.b is undefined,hence is not an error
    alert(myObject.a.b.c);
}
function checkObjectTryCatch(){
	try{
		alert(myObject.a.b.c);
    }catch(e){
    	alert("function checkObjectTryCatch has an error "+e);
    }
}
checkObjectTryCatch();
checkObject();//fails

```

Despite handling js errors, onerror doesn't  handle http request errors therefore  these errors have to be handled in other way like a ajax module or in  the ajaxError method.

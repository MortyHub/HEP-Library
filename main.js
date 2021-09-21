/*
This is a simple library meant for if you forget some of the most basic things in JavaScript,
This is how you would call the library: $().functiondefined()

Example of this: $('h1').invisible('h1'), this would turn any h1 element invisible


Features:

action: 
this is meant for simple actions on a page like clicking or pressing a key. 
This is what it would look like: 
$().action('click', function(){
    alert('You Clicked!')
})
Of course this would detect when you click then it runs the alert function.

html:
This would define the html element you have listed.
Example:
console.log($('h1').html()),
this would print '<h1>The text inside the element</h1>'

invisible:
This will turn any element defined invisible
Example:
$('h1').invisible('h1')
This would of course make the h1 object become invisible to the user.

attr:
This sets the attribute of the element defined
Example:
$('h1').attr('h1', 'class'),
This would set the h1 element to have the class named 'class'.

Loop:
This will make a loop function
Example:
$().Loop('1', function(){
    console.log('Loop')
})
This would loop console.log('Loop') every 1 millisecond(s).

alertInput:
This will make a prompt box show up on the page.
Example:
$().alertInput('Question Here')
This will show up a prompt box asking 'Question Here'

popBox:
Makes an alert on the page
Example:
$().popBox('alert')
This would be alerting the words 'alert'

backgroundColor:
Changes the color of the documents background
Example:
$().backgroundColor('red')
This would change the color to red but of course you can change it 
to hex code or RGB

setImage:
This will set the image of the defined ID
Example:
$().setImage('id here', 'image name')
Of course this would set the image of the chosen ID
*/

//the thing that calls the library
function $(selector)
{
    //the thing that sets all the functions
const self = 
{
    //the element defined
 element: document.querySelector(selector),
 //the html defined
 html: ()=> self.element,
 //action dectection example: click on page
 action:(event, callback)=>{
	 document.addEventListener(event, callback)
 },
 //sets an element of your choosing to be invisible
 invisible:()=>{
	 self.element.style.display = 'none'
 },
 //set an attribute to an element
 attr:(name, value)=>{
  if(value == null)
  self.element.getAttribute(name)
  else
  self.element.setAttribute(name,value)
 },
 //loop
  Loop:(event ,callback)=>{
 setInterval(callback, event)
  },
 //make a prompt box
   alertInput:(event)=>{
    prompt(event)
   },
   //make an alert box
    popBox:(event)=>{
        alert(event)
    },
    //Change background color
    backgroundColor:(event)=>{
            document.body.style.backgroundColor = event
    },
    //setting an image by ID
    setImage:(value,event)=>{
    	document.getElementById(value).src = event;
    }
 }
return self
}

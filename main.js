function $(selector)
{
const self = 
{
 element: document.querySelector(selector),
 html: ()=> self.element,
 action:(event, callback)=>{
	 document.addEventListener(event, callback)
 },
 invisible:()=>{
	 self.element.style.display = 'none'
 },
 attr:(name, value)=>{
  if(value == null)
  self.element.getAttribute(name)
  else
  self.element.setAttribute(name,value)
 },
  Loop:(event ,callback)=>{
 setInterval(callback, event)
  },
   alertInput:(event)=>{
    prompt(event)
   },
    popBox:(event)=>{
        alert(event)
    },
    backgroundColor:(event)=>{
            document.body.style.backgroundColor = event
    },
       
 }
return self
}

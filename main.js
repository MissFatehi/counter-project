const add =document.getElementById('add-btn');
const minus = document.getElementById('minus-btn')
const reset = document.getElementById('reset-btn')
const result = document.getElementById('number')



add.addEventListener('click',
    ()=>{
    num = Number(result.textContent) 
    result.textContent=num+=1  
     if(num>0){   result.style.color= 'green'}
     if(num==0){  result.style.color= 'black'}
     add.style.border= '0.4rem solid #91dcb9ff' 
    minus.style.border= 'none'
    reset.style.border= 'none' })


minus.addEventListener('click',()=>{
    num = Number(result.textContent)
    result.textContent= num-=1
    if(num<0){   result.style.color= 'red'}
    if(num==0){  result.style.color= 'black'}
    minus.style.border= '0.4rem solid #dd8698ff' 
    add.style.border= 'none'
    reset.style.border= 'none' 
})

reset.addEventListener('click',()=>{
result.textContent=0  
  result.style.color= 'black'
  reset.style.border= '0.4rem solid #b3b8b6ff' 
minus.style.border= 'none'
add.style.border= 'none'   
})
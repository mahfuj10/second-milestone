// const x = document.getElementById('blogs');
// x.style.color = 'red';

/* const article = document.createElement('article');
const h3 = document.createElement('h3');
const p = document.createElement('p');
h3.innerText = ' blog-5'
p.innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum? Iusto perferendis laudantium ex';
article.appendChild(h3);
article.appendChild(p);
document.getElementById('blogs').appendChild(article)
 */


/* const article = document.createElement('article')
article.innerHTML = `
<h3> blog-89 </h3>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum? Iusto perferendis laudantium ex </p>
`
blogs.appendChild(article);  */

/* function myfunction(){
    document.body.style.backgroundColor = 'black';
}


const button = document.getElementById('btn');
button.addEventListener('click', function(){

document.body.style.backgroundColor = 'blue';


})
 */

let buttonClick = document.getElementById('click-btn');
buttonClick.onclick = myfunction;
function myfunction(){
    document.body.style.backgroundColor = 'blue';
}


// comment box

document.getElementById('submit').addEventListener('click', function(){

const comment = document.getElementById('text-field');
const p =document.createElement('p');
p.innerText = comment.value;
document.getElementById('blogs').appendChild(p);
comment.value = '';
})


// delete btn

document.getElementById('email-box').addEventListener('keyup', function(event){

if(event.target.value == 'delete'){
    document.getElementById('delete').removeAttribute('disabled')
}
else{
    document.getElementById('delete').setAttribute('disabled',true);
}


})

document.getElementById('email-box').addEventListener('change', function(event){
    console.log(event.target.value);
});

const x = document.getElementsByTagName('h2')[1];
x.style.backgroundColor = 'red';
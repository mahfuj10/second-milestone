
// comment box

document.getElementById('submit').addEventListener('click',function(){

const userComment = document.getElementById('text-field');
const p = document.createElement('p');
p.innerText = userComment.value;
const parent = document.getElementById('section');
parent.appendChild(p);
userComment.value = '';

})



// delete buttton

document.getElementById('text-area').addEventListener('keyup', function(e){

if(e.target.value == 'delete'){

    document.getElementById('delete-btn').removeAttribute('disabled');
}
else{
    document.getElementById('delete-btn').setAttribute('disabled',true);
}

})

document.getElementById('text-area').addEventListener('change', function(event){

    console.log(event.target.value);


}) 
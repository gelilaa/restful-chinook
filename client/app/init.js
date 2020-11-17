

document.getElementById('submit').addEventListener('click',(e)=>{
  e.preventDefault();
  const id = document.getElementById('artist').value;
  
  fetch(`api/artists/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('root')
      .innerHTML = data;
  })
  .catch(err => console.error(err));

  

})
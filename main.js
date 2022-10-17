// // simple API EDEMAN
document.querySelector('button').addEventListener('click',food)

function food(){
  let random = Math.floor(Math.random() * 50)
  let type = document.querySelector('input').value
  url = `https://api.edamam.com/api/recipes/v2?type=public&q=${random}&cuisineType=${type}&app_id=99382cfe&app_key=14f8bc28301fbebacbd55924251e80cd`

  fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data)

     let cuisine = data.hits[0].recipe.cuisineType
     let image = data.hits[0].recipe.image
     let ingredient = data.hits[0].recipe.ingredientLines

    document.querySelector('#name').innerText = cuisine
    document.querySelector('img').src= image
    document.querySelector('#ingredients').innerText= ingredient
  })
}

// sussanna and sydnei are the real ones and i appreciate yall :)



// document.querySelector('button').addEventListener('click',celebrityPic)

// function celebrityPic(){
//  let celebrity = document.querySelector('input').value
//   fetch(`https://api.api-ninjas.com/v1/celebrity?name=${celebrity}`,{
//     method: 'GET', 
//     headers: {'X-Api-Key' : 'dUDZdrz3yRQH80oMKnLkJA==go7qrKkoSmHMkdth'},})
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data)


//     fetch(`https://vision.googleapis.com/v1p4beta1/images:${celebrity}`)
//      .then(res => res.json)
//      .then((data) => {
//        console.log(data)
//        //document.querySelector('img').src = data.image
//      })
//     })
// }
    //   Accept : 'application/json',
    //   contentType : 'application/json',
    //   success : function(result){
    //     console.log(result)
    //   },  
    // } 
    //`https://ee.iva-api.com/specs/openapi?filter=${celebrity}`
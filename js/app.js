const dog_api = 'https://dog.ceo/api/breeds/list/all'
const viewDog = document.querySelector('#viewDog')
const selectBreed = document.querySelector('#selectBreed')
const breedImage = document.querySelector('#breedImage')

function getDogBreeds(){
    $.ajax({
        type: "GET",
        url: dog_api,
        dataType: "json",
        success: function(data) {
            // console.log(data)
            for(let i in data.message){
                selectBreed.innerHTML += `
                <option value="${i}">${i}</option>
                `
            }
        },
        error: function(error){
            console.log(error)
        }
})
}

getDogBreeds()

viewDog.addEventListener('click', function(e){
    let breedName = selectBreed.value
    $.ajax({
        type: "GET",
        url: `https://dog.ceo/api/breed/${breedName}/images/random`,
        dataType: "json",
        success: function(data) {
            breedImage.setAttribute('src', data.message)
        },
        error: function(error){
            console.log(error)
        }
    })
})



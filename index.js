const display = document.getElementsByClassName("grid")[0];
const submitBtn = document.getElementById("formsection");
console.log(submitBtn);
// handling the search event
submitBtn.addEventListener('submit', submit)
const searchInput = document.getElementById("searchbarid");
// console.log(searchInput);
function submit(event){
  
    event.preventDefault();//
    
    loadImg();//call function to load images
    
}

//the function below queries the API and returns the images searched
function loadImg(){
    removeImages();//clears the image display each time a new search is initiated
    const url = 'https://api.unsplash.com/search/photos?query='+searchInput.value+'&per_page=20&client_id=SF70ZK36aVoMRCrGlSO6tDxwwNY1fg3oX0Tq3uiTh9o';
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            alert(response.status)
        }
    })
    .then(data =>{
        // const imageNode = [];
        console.log(data)
  
        for(let i = 0;i < data.results.length; i++){ 
            
            display.innerHTML += "<img src="+ data.results[i].urls.regular + "/>"
        }

    }

    )
}
function removeImages(){
    display.innerHTML='';//when called, replaces the display with an empty string rendering it empty.
}
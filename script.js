const image = document.getElementById("image");
const res = document.querySelector(".result")
const showResult = document.querySelector(".showResult");
const afterResult = document.querySelector(".after-result")

let img = document.createElement("img");


function handleImageUpload() {
  image.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0];
    img.src = URL.createObjectURL(file);
    res.appendChild(img);
    res.style.display = "block"
    afterResult.style.display="block"
    imageDetector(img)
    showResult.innerHTML=""
  });
}
handleImageUpload();


function imageDetector(img){
  cocoSsd.load().then((model) => {
    // detect objects in the image.
    model.detect(img).then((predictions) => {
      console.log(predictions)
     
      let restext = document.createElement('p')
      if(predictions.length!=0){
        
        for (obj of predictions){
          if(obj){
              restext.innerHTML =  `${obj.class} - ${Math.floor(obj.score*100)}%`
              showResult.appendChild(restext)
              showResult.style.display = "block"
            }
        }
      }
      else{
        res.innerHTML = "Unable to Detect object"
      }
    });
  });
}




 


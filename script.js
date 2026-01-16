const image = document.getElementById("image");
const imagePreview = document.querySelector(".image-preview");
const res = document.getElementById("result")

let img = document.createElement("img");


function handleImageUpload() {
  image.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0];
    res.innerHTML = ""
    img.classList.add("image-preview-img");
    img.src = URL.createObjectURL(file);
    imagePreview.appendChild(img);
    imageDetector(img)
  });
}
handleImageUpload();


function imageDetector(img){
  cocoSsd.load().then((model) => {
    // detect objects in the image.
    model.detect(img).then((predictions) => {
     
      if(predictions.length!=0){
        
        for (obj of predictions){
          if(obj){
            let restext = document.createElement('p')
              restext.innerHTML = obj.class;
              res.appendChild(restext)
            }
        }
      }
      else{
        res.innerHTML = "Unable to Detect object"
      }
     
      
    });
  });
}




 


let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
let canvasOutput=document.getElementById('canvasOutput')
let convert=document.getElementById('convert')
let width=document.getElementById('width');
let downloadBtn=document.getElementById('download')
let height=document.getElementById('height');
inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
convert.addEventListener('click',function(){

    console.log(parseInt(width.value));
    console.log(parseInt( height.value));
        let src = cv.imread(imgElement );
        let dst = new cv.Mat();
        let dsize = new cv.Size(parseInt(width.value),parseInt( height.value));
        // You can try more different parameters
        cv.resize(src, dst, dsize, 0, 0, cv.INTER_AREA);
        cv.imshow('canvasOutput', dst);
        src.delete(); dst.delete();
        downloadBtn.style.display='block'
        
    
})
download_img = function(el) {
    var image = canvasOutput.toDataURL("image/jpg");
    el.href = image;
  };
  



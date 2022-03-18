function encodeImageFileAsURL() {
    var filesSelected = document.getElementById("Image").files;
    var srcData;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            srcData = fileLoadedEvent.target.result; // <--- data: base64
        }
        return fileReader.readAsDataURL(fileToLoad);
    }
    return 0;
}
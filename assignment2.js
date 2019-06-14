
var file_ext,file_name="",text_file,binar,origin,fname="";
function encode(){
    var fileToLoad = document.getElementById("txtfile").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var enc = window.btoa(textFromFileLoaded);
        // document.getElementById("txtdesc").value = textFromFileLoaded;
        document.getElementById("txtdesc").value = enc;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
    
}

function decode(){
    var str = document.getElementById("txtdesc").value;
    var dec = window.atob(str);
    // document.getElementById("txtdesc").value = dec;
    // var content = document.getElementById('txtdesc').value;
    var ftype=document.getElementById("txtselect").value;
    window.open("data:application/"+ftype+"," + encodeURIComponent(dec), "_self");
    // fileDownload = "data:application/octet-stream," + encodeURIComponent(dec);
}

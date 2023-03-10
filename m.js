// Furl 1.7 Mobile

function showToast(text){
    let toast = document.createElement('div');
    toast.innerText = text;
    toast.id = "snackbar";
    document.body.appendChild(toast);
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

let upload = document.getElementById('upload');

upload.onclick = (e) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            var content = e.target.result;
            data = {
                "name": file.name,
                "data": content
            };
            var url = "http://furl-fs.netlify.app/share.html#" + encodeURI(btoa(JSON.stringify(data)));
            try {
                navigator.share(
                    {
                        "text": "Download on Furl",
                        "title": `Download ${file.name} on Furl`,
                        "url": url
                    }
                );
            }
            catch(err){
                window.alert("There was an error sharing the url.");
            }
        };
        reader.readAsText(file, "UTF-8");
    }
    input.click();
}
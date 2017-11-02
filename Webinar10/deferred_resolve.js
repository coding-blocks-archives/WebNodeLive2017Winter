
function downloadPromise () {
    return new Promise(function (resolve, reject) {
        console.log("Starting to download the file")
        setTimeout(function () {
            console.log("Download is complete")
            resolve();
        }, 3000)
    })
}

let downloadedFile = downloadPromise()

setTimeout(function () {
    downloadedFile.then(function () {
        console.log("After download")
    })
}, 5000)
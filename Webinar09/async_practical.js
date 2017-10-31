function downloadFile(url, downloaded) {
    // We are downloading the file here
    // Let's assume it takes 3 seconds to download
    // We use setTimeout to generate fake delay

    console.log("Downloading file: " + url)

    setTimeout(function () {
        let filePath = "C:\\Downloads\\" + url.split('/').pop()
        console.log("File was downloaded to: " + filePath)
        downloaded(filePath)
    }, 3000)
}

function resizeFile(filePath, resized) {
    //We are resizing the file. It takes 3 seconds
    //We again use a fake setTimeout delay

    console.log("We are resizing :" + filePath)
    setTimeout(function () {
        let newPath = filePath.split(".")[0] + "-resized." + filePath.split(".")[1]
        resized(newPath)
    }, 3000)
}

function uploadFile(diskPath, uploaded) {
    //We will upload this file, it takes 3 seconds,
    //We will use another fake setTimeout delay logic
    setTimeout(function () {
        let uploadedPath = "http://cb.lk/uploads/" + diskPath.split('\\').pop();
        console.log("We uploaded to " + uploadedPath)
        uploaded(uploadedPath)
    }, 3000)
}

downloadFile("http://google.com/logo.png", function (downloadedPath) {
    resizeFile(downloadedPath, function (resizedPath) {
        uploadFile(resizedPath, function (uploadedUrl) {
            console.log("Uploaded successfully to: " + uploadedUrl)
        })
    })
})


function openFile(filePath, title) {
    const fileViewer = document.getElementById("fileViewer");
    const fileTitle = document.getElementById("fileTitle");
    const fileViewerSection = document.getElementById("fileViewerSection");

    // Set the title and iframe source based on file type
    fileTitle.textContent = title;
    const isPDF = filePath.endsWith(".pdf");
    const viewerURL = isPDF
        ? filePath
        : `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/${filePath}`;

    fileViewer.src = viewerURL;
    fileViewerSection.style.display = "block";
}

function closeViewer() {
    const fileViewerSection = document.getElementById("fileViewerSection");
    document.getElementById("fileViewer").src = ""; // Clear iframe source
    fileViewerSection.style.display = "none";
}

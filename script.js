document.addEventListener("DOMContentLoaded", function () {
  const fileUploadContainer = document.getElementById("file-upload-container");
  const fileInput = document.getElementById("file-input");
  const browseButton = document.getElementById("browse-button");
  const uploadTitle = document.querySelector(".file-info");

  fileUploadContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.classList.add("dragover");
  });

  fileUploadContainer.addEventListener("dragleave", function (e) {
    e.preventDefault();
    this.classList.remove("dragover");
  });

  fileUploadContainer.addEventListener("drop", function (e) {
    e.preventDefault();
    this.classList.remove("dragover");
    const files = e.dataTransfer.files;
    handleFiles(files);
  });

  browseButton.addEventListener("click", function () {
    fileInput.click();
  });

  fileInput.addEventListener("change", function () {
    handleFiles(this.files);
  });

  function handleFiles(files) {
    if (files.length > 0) {
      const file = files[0];
      const fileSize = (file.size / 1024).toFixed(2);
      uploadTitle.textContent = `${file.name} (${fileSize} KB)`;
    } else {
      uploadTitle.textContent = "No file selected";
    }
  }
});

function download() {
  document.getElementById("download").addEventListener("click", function () {
    const element = document.getElementById("content");
    const options = {
      margin: 0.2,
      filename: "certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: false },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    };

    html2pdf().set(options).from(element).save();
    options.save();
  });
}

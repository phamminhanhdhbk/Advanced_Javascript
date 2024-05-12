<!DOCTYPE html>
<html>
<head>
  <title>TensorFlow.js Image Classification</title>
  <!-- Include TensorFlow.js -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0"></script>
</head>
<body>
  <h1>TensorFlow.js Image Classification</h1>
  <input type="file" accept="image/*" onchange="previewImage(event)">
  <img id="imagePreview" width="224" height="224">
  <div id="result"></div>

  <script>
    async function runModel(imageData) {
      const model = await tf.loadLayersModel('path_to_your_model/model.json');
      const img = tf.browser.fromPixels(imageData).resizeBilinear([28, 28]).toFloat().reshape([1, 28, 28, 1]);
      const output = model.predict(img);
      const result = output.argMax(1).dataSync()[0];
      document.getElementById('result').innerText = `Predicted Digit: ${result}`;
    }

    function previewImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = async function(event) {
        const imageData = new Image();
        imageData.src = event.target.result;
        imageData.onload = function() {
          document.getElementById('imagePreview').src = event.target.result;
          runModel(imageData);
        };
      };
      reader.readAsDataURL(file);
    }
  </script>
</body>
</html>

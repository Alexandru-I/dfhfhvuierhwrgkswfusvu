

function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wj-ypcEX0/model.json', modelLoaded);

}

function modelLoaded() {
    classifier.classify(gotResults);
    console.log("model loaded");
}

function gotResults(error, results) {
    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + results[0].confidence;
    img1 = document.getElementById("a1");
    img2 = document.getElementById("a2");
    img3 = document.getElementById("a3");
    img4 = document.getElementById("a4");
    if (results[0].label == "clapping") {
        img1.src = "aliens-01 gif.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }

    if (results[0].label == "bell") {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02 gif.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }

    if (results[0].label == "Background noise") {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03 gif.gif";
        img4.src = "aliens-04.png";
    }

    if (results[0].label == "clicking") {
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04 gif.gif";
    }

}
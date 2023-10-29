
function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kGZPrhost/model.json', modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
    document.getElementById("hear").innerHTML = 'I Can Hear -'+
    results[0].label;
    document.getElementById("accuracy").innerHTML= 'Accuracy -'+
    (results[0].confidence*100).toFixed(2)+"%";

    if (results[0].label == "Whale"){
        (results[0].label = "whale")
    } else if (results[0].label == "Lion"){
        (results[0].label = "lion")
    }else if (results[0].label == " Monkey"){
        (results[0].label = "monkey")
    }else {
        (results[0].label = "background noise")
    }
}

}
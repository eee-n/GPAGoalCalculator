let previousResult = 0; 

function getInputValues() {
    var num = parseFloat(document.getElementById("num").value);
    var credit = parseFloat(document.getElementById("credit").value);
    var target = parseFloat(document.getElementById("target").value);

    if (isNaN(num) || isNaN(credit) || isNaN(target)) {
        document.getElementById("result").innerHTML = 0;
    } else 
        calculateResult(num, credit, target);
}

function calculateResult(num, credit, target) {
    if (target == 4)
        targett = 3.999;
    else 
        targett = target;

    var result = (((num * credit) - (targett * credit)) / (targett - 4));
    if (isNaN(result)) 
        result = 0;
    if (result < 0)
        result = 0;
    result = roundUpToNearestHalf(result);
    
    var resultElement = document.getElementById("result");
    animateResult(resultElement, previousResult, result, 200);
    previousResult = result;
}

function roundUpToNearestHalf(num) {
    return Math.ceil(num * 2) / 2;
}

function animateResult(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) 
            startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) 
            window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

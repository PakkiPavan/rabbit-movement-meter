


var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  animationData: JSON.parse(animationData)
});
document.getElementById("svgContainer").style.transform = "translateX(20px)";
this.defaultValue = document.getElementById("input").value;
function moveMeter(){
    let svgContainer = document.getElementById("svgContainer");
    let style = window.getComputedStyle(svgContainer);
    let matrix = new WebKitCSSMatrix(style.transform);
    let direction = this.defaultValue < Number(document.getElementById("input").value);
    this.defaultValue = document.getElementById("input").value;
    document.getElementById("energy").value = document.getElementById("input").value;
    let input = document.getElementById("input").value;
    if(Number(document.getElementById("input").value)>10){
        document.getElementById("svgContainer").style.transform = "translateX(240px)";
    }
    else if(Number(document.getElementById("input").value)<1){
        document.getElementById("svgContainer").style.transform = "translateX(20px)";
    }
    else{
        // document.getElementById("svgContainer").style.transform = "translateX("+(Number(matrix.m41)-25)+"px"+")";
        if(input>=5){
            document.getElementById("svgContainer").style.transform = "translateX("+(Number(20*input)+4*Number(input))+"px"+")";
        }
        else{
            document.getElementById("svgContainer").style.transform = "translateX("+(Number(20*input))+"px"+")";
        }
    }
}

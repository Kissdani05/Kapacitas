sliderValue = document.getElementById("sliderValue");
    sliderValue.innerHTML = myRange.value;
    myRange.oninput = function() {
        sliderValue.innerHTML = this.value;
    }

function Kattint(){
    capacity = document.getElementById("capacity").value;
    kapacitas = document.getElementById("kapacitas").value;
    myRange = document.getElementById("myRange").value;
     osszeg = document.getElementById("osszeg").value;
     osszeg2 = myRange;
    szoveg = document.getElementById("szoveg");
    vegosszeg = document.getElementById("vegosszeg");
    if (kapacitas != "Mb") {
        if(kapacitas == "Gb"){
            osszeg = osszeg * 1000;
        }
        if (kapacitas == "Tb") {
            osszeg = osszeg * 1000000;
        }
        
    }
    if (capacity != "Mbps"){
        if (capacity == "Kbps") {
            osszeg2 = osszeg2 / 1000; 
        }
        if (capacity == "mbps") {
            osszeg2 = osszeg2 / 8;
        }
        if (capacity == "Gbps") {
            osszeg2 = osszeg2 * 1000;
        }
    }
    vegso = osszeg/osszeg2;
    vegosszeg.innerHTML = vegso;
}


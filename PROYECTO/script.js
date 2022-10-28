function iniciarMap(){
    var coord = {-34.60971500671747, -58.48671650812441};
    var mapa = new google.maps.Map(document.getElementById('mapa'),{
        zoom:10,
        center: coord }
    
    );
}
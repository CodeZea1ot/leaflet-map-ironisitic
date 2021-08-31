//Create Map and set lat long and zoom
var mymap = L.map("mapid").setView([34.845012, -80.893939], 11);

//Assign tile layer to satellite and other options
L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
        maxZoom: 18,
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/satellite-v9",
        tileSize: 512,
        zoomOffset: -1,
    }
).addTo(mymap);

//Create MarkerIcon Class
var MarkerIcon = L.Icon.extend({
    options: {
        iconSize: [42, 50],
        //iconAnchor:   [22, 94],
        tooltipAnchor: [0, 0],
    },
});

//Create Instances of MarkerIcon
var StarIcon = new MarkerIcon({ iconUrl: "../assets/icon_star.png" }),
    TreeIcon = new MarkerIcon({ iconUrl: "../assets/icon_tree.png" }),
    WaterIcon = new MarkerIcon({ iconUrl: "../assets/icon_water.png" });

//Add Icons to map
//New-Indy Catawba Mill
L.marker([34.845012, -80.893939], { icon: StarIcon })
    .addTo(mymap)
    .bindTooltip("New-Indy Catawba Mill");

//William-Lytle Place
L.marker([34.91491, -80.908441], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("William-Lytle Place");

//River Chase
L.marker([34.804481, -80.880057], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("River Chase");

//Millstone Creek
L.marker([34.885264, -80.802949], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Millstone Creek");

//Sun City
L.marker([34.926488, -80.850419], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Sun City");

//Bridgemill
L.marker([34.977588, -80.860194], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Bridgemill");

//Tom Steven Rd
L.marker([34.900399, -80.882222], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Tom Steven Rd");

//Sturgis Rd
L.marker([34.940346, -80.934417], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Sturgis Rd");

//Marvin
L.marker([34.993558, -80.81386], { icon: TreeIcon })
    .addTo(mymap)
    .bindTooltip("Marvin");

//Treetop
L.marker([34.896135, -80.846542], { icon: WaterIcon })
    .addTo(mymap)
    .bindTooltip("Treetop");

//Events

//let siteMarkers = document.querySelectorAll(".leaflet-marker-icon").addEventListener("click", function(){ alert("Hello World!"); });;

$(document).ready(function () {
    $(".leaflet-marker-icon").click(function () {
        $("#map-data-modal").toggleClass("reveal");
    });
    // $("#map-data-modal").click(function () {
    //     $("#map-data-modal").removeClass("reveal");
    // });
    $("#close-map-modal").click(function () {
        $("#map-data-modal").removeClass("reveal");
    });
});

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// mymap.on('click', onMapClick);

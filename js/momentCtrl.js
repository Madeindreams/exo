mid.controller('momentCtrl', ['$scope', function($scope) {
  $scope.nbrForme = 0;
  
 $scope.formes= [
{id: 0,
 geo: 0, 
 ox:0, 
 oy:0, 
 b:0, 
 h:0, 
 r:0, 
 d:0, 
 cx:0, 
 cy:0, 
 a:0, 
 ax:0, 
 ay:0, 
 val: 0, 
 ixx: 0, 
 iyy: 0, 
 dy: 0, 
 dx: 0, 
 ix: 0, 
 iy:0}
 ];

//////////// SCOPE GLOBAL
$scope.canvasSize = 450; // grandeur du canvas
$scope.echelle = 50;  // 1 pouce = echelle pixel
 $scope.airTotal =0
 $scope.axTotal =0;
 $scope.ayTotal =0;
 $scope.ixTotal =0;
 $scope.iyTotal =0;


/////////////////////////////AJOUTER UNE FORME ET CALCULER LA FORME ACTUELLE

$scope.ajoutForme = function(){

   $scope.formes[$scope.nbrForme].a = $scope.formes[$scope.nbrForme].b * $scope.formes[$scope.nbrForme].h; 


echelle = $scope.echelle;
canvasSize = $scope.canvasSize ;
geo = $scope.formes[$scope.nbrForme].geo;
base = $scope.formes[$scope.nbrForme].b;
hauteur = $scope.formes[$scope.nbrForme].h;
ox = $scope.formes[$scope.nbrForme].ox;
oy = $scope.formes[$scope.nbrForme].oy;
rayon = $scope.formes[$scope.nbrForme].r;
quad = $scope.formes[$scope.nbrForme].quad;


if(geo == "rectangle"){

  $scope.formes[$scope.nbrForme].cx = ox+(base/2);
  $scope.formes[$scope.nbrForme].cy = oy+(hauteur/2);
   $scope.formes[$scope.nbrForme].ax = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cx; 
 $scope.formes[$scope.nbrForme].ay = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cy;

  $scope.formes[$scope.nbrForme].ixx = (base*Math.pow(hauteur,3))/12;
  $scope.formes[$scope.nbrForme].iyy = (hauteur*Math.pow(base,3))/12;

ctx.beginPath();
ctx.strokeRect(ox*echelle, canvasSize-((oy+hauteur)*echelle),base*echelle,hauteur*echelle);
ctx.beginPath();
ctx.arc((ox+(base/2))*echelle,canvasSize-((oy+(hauteur/2))*echelle),5,0,2*Math.PI);
ctx.stroke();
//calcule du rectangle


 $scope.formes[$scope.nbrForme].a = $scope.formes[$scope.nbrForme].b*$scope.formes[$scope.nbrForme].h; 
 

}
if(geo == "cercle"){

  $scope.formes[$scope.nbrForme].cx = ox;
  $scope.formes[$scope.nbrForme].cy = oy;

  $scope.formes[$scope.nbrForme].a = Math.pow(rayon,2)*Math.PI;

 $scope.formes[$scope.nbrForme].ax = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cx; 
 $scope.formes[$scope.nbrForme].ay = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cy;

  $scope.formes[$scope.nbrForme].ixx = (Math.PI*Math.pow(rayon,4))/4;
  $scope.formes[$scope.nbrForme].iyy = (Math.PI*Math.pow(rayon,4))/4;

   $scope.formes[$scope.nbrForme].a = $scope.formes[$scope.nbrForme].r * $scope.formes[$scope.nbrForme].r* Math.PI; 
 ctx.beginPath();
ctx.arc(ox*echelle,canvasSize-(oy*echelle),rayon*echelle,0,2*Math.PI,false);
ctx.stroke();
ctx.beginPath();
ctx.arc(ox*echelle,canvasSize-(oy*echelle),5,0,2*Math.PI);
ctx.stroke();
}

if(geo == "triangle"){
 $scope.formes[$scope.nbrForme].a = ($scope.formes[$scope.nbrForme].b * $scope.formes[$scope.nbrForme].h)/2; 
// centroide
 ctx.beginPath();
// 

// 90 dans un quadran ++
 if(quad == "+-"){
  $scope.formes[$scope.nbrForme].cx = ox-(base/3);
  $scope.formes[$scope.nbrForme].cy = oy+(hauteur/3);

 ctx.arc( (ox-(base/3))*echelle ,canvasSize-( (oy+(hauteur/3))*echelle ) ,5,0,2*Math.PI);//centroide

ctx.moveTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
ctx.lineTo( (ox-base)*echelle ,canvasSize-(oy*echelle));// point 1
ctx.lineTo(  ox*echelle,canvasSize-((oy+hauteur)*echelle)  );//point2
ctx.lineTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
 }

  if(quad == "++"){
      $scope.formes[$scope.nbrForme].cx = ox-(base/3);
  $scope.formes[$scope.nbrForme].cy = oy-(hauteur/3);

ctx.arc( (ox-(base/3))*echelle ,canvasSize-( (oy-(hauteur/3))*echelle ) ,5,0,2*Math.PI);//centroide

ctx.moveTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
ctx.lineTo( (ox-base)*echelle ,canvasSize-(oy*echelle));// point 1
ctx.lineTo(  ox*echelle,canvasSize-((oy-hauteur)*echelle)  );//point2
ctx.lineTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
 }
   if(quad == "--"){
  $scope.formes[$scope.nbrForme].cx = ox+(base/3);
  $scope.formes[$scope.nbrForme].cy = oy+(hauteur/3);

ctx.arc( (ox+(base/3))*echelle ,canvasSize-( (oy+(hauteur/3))*echelle ) ,5,0,2*Math.PI);//centroide

ctx.moveTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
ctx.lineTo( (ox+base)*echelle ,canvasSize-(oy*echelle));// point 1
ctx.lineTo(  ox*echelle,canvasSize-((oy+hauteur)*echelle)  );//point2
ctx.lineTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
 }
  if(quad == "-+"){
      $scope.formes[$scope.nbrForme].cx = ox+(base/3);
  $scope.formes[$scope.nbrForme].cy = oy-(hauteur/3);

ctx.arc( (ox+(base/3))*echelle ,canvasSize-( (oy-(hauteur/3))*echelle ) ,5,0,2*Math.PI);//centroide

ctx.moveTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
ctx.lineTo( (ox+base)*echelle ,canvasSize-(oy*echelle));// point 1
ctx.lineTo(  ox*echelle,canvasSize-((oy-hauteur)*echelle)  );//point2
ctx.lineTo(  ox*echelle ,canvasSize-(oy*echelle) );// origine 90
 }

ctx.stroke();

//x et y bar * a
 $scope.formes[$scope.nbrForme].ax = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cx; 
 $scope.formes[$scope.nbrForme].ay = $scope.formes[$scope.nbrForme].a * $scope.formes[$scope.nbrForme].cy;

$scope.formes[$scope.nbrForme].ixx = (base*Math.pow(hauteur,3))/36;
 $scope.formes[$scope.nbrForme].iyy = (hauteur*Math.pow(base,3))/36;

}




//creation de la nouvelle forme
$scope.nbrForme++;

  $scope.formes.push({
  id: $scope.nbrForme,
  geo: 0,
  ox:0,
  oy:0,
  b:0,
  h:0, 
  r:0, 
  d:0,
  cx:0,
  cy:0, 
  a:0, 
  ax:0, 
  ay:0, 
  val: 0,
  ixx:0,
  iyy:0,
  dy:0,
  dx:0,
  ix:0,
  iy:0
  });  
 

}



///////////////////////////CALCUL DU CENTRE DE GRAVITÉ DE L'ENSEMBLE
$scope.calculer = function(){
obj = $scope.formes;

angular.forEach(obj, function(value, key) {
if(value['val'] == "+"){
  $scope.axTotal += value['ax'];
   $scope.ayTotal += value['ay'];
    $scope.airTotal += value['a'];
}
if(value['val'] == "-"){
  $scope.axTotal -= value['ax'];
   $scope.ayTotal -= value['ay'];
    $scope.airTotal -= value['a'];
}
});

$scope.cgx = $scope.axTotal/$scope.airTotal;
$scope.cgy = $scope.ayTotal/$scope.airTotal;

///////////////////////////DESSINE LE CENTRE DE GRAVITÉ

ctx.beginPath();
ctx.arc($scope.cgx*echelle,canvasSize-($scope.cgy*echelle),5,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();
}




///////////////////////////CALCUL DU Moment
$scope.moment = function(){
obj = $scope.formes;
var i =0;
angular.forEach(obj, function(value, key) {

$scope.formes[i].dy = Math.abs((value['cy'] - $scope.cgy));
$scope.formes[i].dx = Math.abs((value['cx'] - $scope.cgx));

if(value['val'] == "+"){

$scope.formes[i].ix = value['ixx'] + (value['a'] * Math.pow(value['dy'],2));
$scope.formes[i].iy = value['iyy'] + (value['a'] * Math.pow(value['dx'],2));
 $scope.ixTotal += $scope.formes[i].ix;
  $scope.iyTotal += $scope.formes[i].iy;
}
if(value['val'] == "-"){

$scope.formes[i].ix = -value['ixx'] + (-value['a'] * Math.pow(value['dy'],2));
$scope.formes[i].iy = -value['iyy'] + (-value['a'] * Math.pow(value['dx'],2));
$scope.ixTotal += $scope.formes[i].ix;
$scope.iyTotal += $scope.formes[i].iy;
}
i++;
});


}



}]);
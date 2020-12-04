app.controller('thermoCtrl', function($scope, $location, $http){


$scope.appProp = 
{name: "Thermodynamique",
author: "Ian Dorion",
description: "Application de caluls en Thermodynamique",
contenu: "Thermo content"
};

$scope.formules = [
{
name: "HP",
fullName: "Horse Power",
author: "Ian Dorion",
description: "Force équivalente à celle déployer par un cheval qui déplace 33000 lb sur 1 pied en une minutes",
equation:  'formules/hp.mathml',
variables:[
	      {key:'HP', define:'Horse Power', value:'1'},
	      {key:'lbf',define:'Force en livres pieds', value:'33 000'},
	      {key:'pi',define:'Distance en pieds', value:'1'},
	      {key:'min',define:'Temps en minutes', value:'1'}
         ]

},
{
name: "IHP",
fullName: "Indicated Horse Power",
author: "Ian Dorion",
description: "Force Indiquée, La valeur théorique de la puissance d'un moteur",
equation: "formules/ihp.mathml",
variables:[
	      {key:'P',define:'Pression Moyenne Effective (PME) en lbf/po2', value:'0'},
	      {key:'L',define:'Longueur de la course en pied', value:'0'},
	      {key:'A',define:'Air de la surface du piston', value:'0'},
	      {key:'N',define:'Nombre de combustion par tour par minute. 4 temps = rpm/2', value:'0'},
	      {key:'K',define:'Nombre de cylindrs', value:'0'}
         ]

},
{
name: "BHP",
fullName: "Brake Horse Power",
author: "Ian Dorion",
description: "Puissance au frein, la force au vilbrequin après perte",
equation: "formules/bhp.mathml",
variables:[
	      {key:'BHP',define:'En Horse Power', value:'0'},
	      {key:'C',define:'Couple', value:'0'},
	      {key:'N',define:'Nombre de combustion par tour par minute. 4 temps = rpm/2', value:'0'},
	      {key:'const',define:'constante de 5252', value:'5252'}
         ]

}
];
$scope.moteur =[

{tag: "rayon", value: 0},
{tag: "masse du carburant", value: 0},
{tag: "volume de carburant", value: 0},
{tag: "Constante FN/5252", value: 0},
];

$scope.readings =[{
	id:0,
	n:0,
	f:0,
	t:0,
	C:0,
	Whp:0,
	Wwat:0,
	z:0,
	egt:0,
	cs:0,
	m: 0
}


];
$scope.nbrReadings=0;

$scope.ajoutReading = function(){
$scope.nbrReadings++;

  $scope.readings.push({
  id: $scope.nbrReadings,
	n:0,
	f:0,
	t:0,
	C:0,
	Whp:0,
	Wwat:0,
	z:0,
	egt:0,
	cs:0,
	m: 0
  });  
 

}

///////////////////////////CALCUL DU CENTRE DE GRAVITÉ DE L'ENSEMBLE
$scope.calculer = function(){
obj = $scope.readings;
var i=0;
angular.forEach(obj, function(value, key) {

alert(value['f']);

r = $scope.moteur[0].value ;//
mc = $scope.moteur[1].value ;//
vc = $scope.moteur[2].value ;//
k = $scope.moteur[3].value ;//
metre = 0.3048;
newton = 4.44822;


// couple en newton metre
$scope.readings[i].C = r*metre * newton * value['f'];
$scope.readings[i].Whp = (value['f'] * r *2 * Math.PI * value['n'])/ 33000;
$scope.readings[i].Wwat = ((value['C'] *2 * Math.PI * value['n'])/ 60)/1000 ;
$scope.readings[i].m = (mc*vc*1000*3600) / (value['t']*1000000);
$scope.readings[i].cs = value['m'] / value['Wwat'];
//alert($scope.readings[i].C);
	

i++;
});



}





$scope.tags =[
{ names: 'No.', value:0},
  { names: 'N (RPM)', value:0},
  { names: 'F (lbf)', value:0},
  { names: 'T (sec)', value:0},
  { names: 'C (Nm)', value:0},
  { names: 'W (HP)', value:0},
  { names: 'W (KW/h)', value:0},
  { names: 'z (po)', value:0},
  { names: 'Egt (Celcius)', value:0},
  { names: 'C/S (g/Kwh)', value:0}
 
 
];

$scope.data =[{
rayon: 0,
pression: 0,
temperature:0,
carburant: 'null'


}];

$scope.carb =[
{
    name:'Diesel',
    masse: 808,
    masse_unit: 'Kg',
    volume: 0,
    volume_unit:'m3',
    prix: 0,
    prix_unit:'litre' 
    

},
{
    name:'Essence',
    masse: 808,
    masse_unit: 'Kg',
    volume: 0,
    volume_unit:'m3',
    prix: 0,
    prix_unit:'litre' 
    

}
];


	});//Ctrl
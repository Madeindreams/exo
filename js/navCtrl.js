app.controller('navCtrl', function($scope, $location, $http){


     $scope.pages = [ { 
   
    menuTag: 'Accueuil',
    titre: 'Site personnel de Ian Dorion',
    contenu: 'Page content',
    auteur: 'Ian Dorion',
    docType: 'html' },

  { 
    menuTag: 'Contact',
    titre: 'Pour me contacter',
    contenu: 'Page content',
    auteur: 'Ian Dorion',
    docType: 'html' },
  { 
    menuTag: 'À propos',
    titre: 'À propos de moi',
    contenu: 'Page content',
    auteur: 'Ian Dorion',
    docType: 'html' } ] ;


$scope.techniques = [
 {
  programmes : 'Génie Aérospatial' , 
  documents :[
    {
     menuTag: 'Moments et Centroïdes',
     titre: "Moments et Centroïdes",
     contenu: "moment.html",
     Auteur: "Ian Dorion",
     docType: 'html'
    },
    {
     menuTag: 'Thermodynamique',
     titre: "Moments et Centroïdes",
     contenu: "thermo.html",
     Auteur: "Ian Dorion",
     docType: 'html'
    }]
},
{
  programmes : 'Programmation' , 
  documents :[
    {
     menuTag: 'NodeJS',
     titre: "test",
     contenu: "nodejs.html",
     Auteur: "Ian Dorion",
     docType: 'html'
    }]
}


];
//$scope.pageCourante = $scope.pages[0];//// page d'accueuil

$scope.selectionPage = function(documents){
$scope.pageCourante = documents;
}

$scope.$watch(function(){
return $location.path();
}, function(newPath){
  var tabPath = newPath.split("/");

  if(tabPath.length > 1){

    var valPage = tabPath[1];

    $scope.pages.forEach(function(item) {
      if(item.menuTag == valPage){
        $scope.selectionPage(item);
       }
     
      });
  
      
  }

   
  
   // console.log(newPath);
  
    


  

});


});//Ctrl

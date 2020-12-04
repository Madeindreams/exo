var ticket = angular.module('ticket', []);

ticket.controller('ticketCtrl', function($scope, $http){



$scope.ticketQty = { num:2000};

$scope.tickets = [];

$scope.pad = "000000";


 $http.get("http://madeindreams.ca/php/db_con.php")
    .then(function (response) {

    	$scope.ticketNo = parseInt(response.data.records);
        $scope.len =  String($scope.ticketNo).length;
       // alert(len);
        $scope.ticketNo = $scope.pad.substring(0, $scope.pad.length -  $scope.len) + ($scope.ticketNo);
       //  $scope.ticketNo = $scope.pad.substring(0, $scope.pad.length - len) + $scope.ticketNo;


for (var i=0; i< $scope.ticketQty.num; i++){
	var ticketNum = $scope.pad.substring(0, $scope.pad.length -  $scope.len) + (parseInt($scope.ticketNo)+i);
	$scope.tickets[i] = ticketNum  ;
}
    }
    	);


//$scope.ticketNo =  2000; 


$scope.participants = [
{
	id:0,
	nom:"nom",
	prenom:"prénom",
	nbrBillet: 0,
	tel: "()",
	email: "courriel"

}

];



$scope.ajoutParticipant = function(){


$scope.nbrParticipant++;

  $scope.participants.push({
  id: $scope.nbrParticipant,
  nom:"nom",
  prenom:"prénom",
  nbrBillet:0,
  tel: "()",
  email: "courriel"
  }); 




}


$scope.envoyer = function(){
 var numero = parseInt($scope.ticketNo)+parseInt($scope.ticketQty.num);
var email = $scope.participants[0].email;
var prenom = $scope.participants[0].prenom;
var nom = $scope.participants[0].nom;
var tel = $scope.participants[0].tel;
var qty = $scope.ticketQty.num;

$http({
  url:"php/ticket.php",
  method:"POST",
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  data: $.param( { ticketNo: numero,
                   email: email,
                   prenom: prenom,
                   nom: nom,
                   tel: tel,
                   qty: qty


    }) 
  ////////////////////////////////////////// SUCCESS
     }).success( function(data){
      console.log(data);
   if(data.status == "OK"){
    alert('GOOD');

    $scope.ticketQty.num = 0;
    $scope.participants[0].email = "courriel";
     $scope.participants[0].prenom = "prénom";
      $scope.participants[0].nom = "nom";
       $scope.participants[0].tel = "()";
       


      $scope.ticketNo = data.ticketNo;
   // prosess data

   }
   else if(data.status != "OK"){
    alert('BAD');
   }

      
  ///////////////////////////////////////// ERROR
}).error(function(data){
alert('BAD');
$scope.ticketNo = 666;
}

);




   //  var data = $.param({
         
                no: parseInt($scope.ticketNo)+parseInt($scope.ticketQty.num)
       //     })
      
     //   $http.post("http://madeindreams.ca/php/ticket.php", data).success(function(data, status) {
      //      $scope.ticketNo = data;
      //      console.log(data);
     //   })
//send email

//return confirmation

//if all went well increment ticket no

//alert($scope.ticketQty.num);
//alert(parseInt($scope.ticketNo)+parseInt($scope.ticketQty.num));



}

$scope.ticketNum = 0;
$scope.getNumber = function(num) {
    return new Array(num);   
}

$scope.participantTicket = [];


});//Ctrl


/////////////////////////////////////////////////////////////////////////////PROMISE LOAD CONTENT
function send_ticket(content){
     return new Promise(function (resolve, reject) {
        $.ajax({
        url: 'http://madeindreams.ca/php/ticket.php',
        type: 'POST',
        data: { 'make':'TICKET' ,'no': parseInt($scope.ticketNo)+parseInt($scope.ticketQty.num) },
        success: function (data, status) {
            resolve(data);
            return;
        },
        error: function (xhr, desc, err) {
            console.log(xhr);
            console.log("Details: " + desc + "\nError:" + err);
            return;
        }
    });// end ajax call  


 });
}
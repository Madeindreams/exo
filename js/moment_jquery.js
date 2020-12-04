
   var canvas = document.getElementById("momentImg");
var ctx = canvas.getContext("2d");


//////////////////////////////////JQUERY



$(document).ready(function(){
 $(document.body).on("change", "#addForm  select", function () {



   if(this.value=="rectangle"){

   	id = $(this).attr('id');
   	id = id.substring(4);
   	//alert(id);
    $("#r_"+id).attr({'disabled': 'disabled'});
    $("#r_"+id).val("");
    $("#d_"+id).attr({'disabled': 'disabled'});
    $("#d_"+id).val("");
    $("#b_"+id).prop("disabled", false);
    $("#h_"+id).prop("disabled", false);
   }   

  if(this.value=="cercle"){

   	id = $(this).attr('id');
   	id = id.substring(4);
   	//alert(id);
    $("#b_"+id).attr({'disabled': 'disabled'});
    $("#b_"+id).val("");
    $("#h_"+id).attr({'disabled': 'disabled'});
    $("#h_"+id).val("");
    $("#d_"+id).prop("disabled", false);
    $("#r_"+id).prop("disabled", false);
   }  
    if(this.value=="triangle"){

   	id = $(this).attr('id');
   	id = id.substring(4);
   	//alert(id);
   	$("#q_"+id).prop("disabled", false);
    $("#r_"+id).attr({'disabled': 'disabled'});
    $("#r_"+id).val("");
    $("#d_"+id).attr({'disabled': 'disabled'});
    $("#d_"+id).val("");
    $("#b_"+id).prop("disabled", false);
    $("#h_"+id).prop("disabled", false);
   } 

 });
});



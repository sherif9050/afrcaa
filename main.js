var audiobtnclick = new Audio('https://assets.mixkit.co/sfx/download/mixkit-fast-double-click-on-mouse-275.wav');//Buttons click//
      var audiolaststep = new Audio('https://assets.mixkit.co/sfx/download/mixkit-cooking-bell-ding-1791.wav');//last step ok//
      var audioselect = new Audio('https://assets.mixkit.co/sfx/download/mixkit-fast-double-click-on-mouse-275.wav');//select resources/platform//
      var audiosResourcecess = new Audio('https://assets.mixkit.co/sfx/download/mixkit-cooking-bell-ding-1791.wav');//when resources load up//
var audiolaststep = new Audio('');//last step ok//
var audioselected = new Audio('');//select resources/platform//
var audiosDiamondscess = new Audio('');//when resources load up//

var gemsvalue=5;

function gemsAmountSelected(ramount,value){
audioselected.play();
gemsvalue=value;
  document.getElementById("selected-gems-text").classList.remove('gemstext');
  document.getElementById("selected-gems-text").innerHTML=value;


  document.getElementById("gemsAmountSelected1").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected2").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected3").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected4").classList.add('gems-Amount');
  document.getElementById("gemsAmountSelected1").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected2").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected3").classList.remove('gems-Amount-Selected');
  document.getElementById("gemsAmountSelected4").classList.remove('gems-Amount-Selected');

  document.getElementById(ramount).classList.add('gems-Amount-Selected');
    document.getElementById(ramount).classList.remove('gems-Amount');
myFunction();

}

function myFunction() {
setTimeout(function(){
  document.getElementById("selected-gems-text").classList.add('gemstext');
}, 100);
}

      var platform="platform1";
	  document.getElementById("img-platform").src="mtn.jpg";
      function Selectedplatform(platformname){
      audioselect.play();
        document.getElementById("platform1").classList.add('platform');
        document.getElementById("platform2").classList.add('platform');
        document.getElementById("platform3").classList.add('platform');
        document.getElementById("platform4").classList.add('platform');
        document.getElementById("platform1").classList.remove('selectedPlatform');
        document.getElementById("platform2").classList.remove('selectedPlatform');
        document.getElementById("platform3").classList.remove('selectedPlatform');
        document.getElementById("platform4").classList.remove('selectedPlatform');
      
        document.getElementById(platformname).classList.add('selectedPlatform');
          document.getElementById(platformname).classList.remove('platform');
          if (platformname=="platform1"){
             platform="IOS";
       document.getElementById("img-platform").src="mtn.jpg";
           }else if (platformname=="platform2"){
              platform="Android";
               document.getElementById("img-platform").src="vodcam.jpg";
           }else if (platformname=="platform3"){
              platform="Console";
               document.getElementById("img-platform").src="telecom.jpg";
           }else{
              platform="Windows";
               document.getElementById("img-platform").src="cell.png";
           }
      }

      
      function proStep1(){
      audiobtnclick.play();
      name=document.getElementById("uid").value;
      if (name==""){
      document.getElementById("uid").style.boxShadow ="0 0 7px red";
      }else{
          document.getElementById("step1").style.display="none";
            document.getElementById("step2").style.display="block";
            document.getElementById("search-name").innerHTML=name;
            myFunHideSearching();
      }
      
      }
      
      function proStep2(){
      audiobtnclick.play();
          document.getElementById("main2").style.display="none";
      
              document.getElementById("main3").style.display="block";
              var myVar2 = setInterval(UserTimer, 1500);
              var linestep=1;
              function UserTimer() {
                if (linestep==1){
                  document.getElementById("loading-step").innerHTML="Getting ready...";
                      document.getElementById("pro-bar").classList.add('probar40');
      
                }else if(linestep==2){
                      document.getElementById("pro-bar").classList.add('probar60');
                  document.getElementById("loading-step").innerHTML='Generating <span style="font-size: 24px;font-weight: 900;">'+gemsvalue+'</span> GB for <span style="font-size: 24px;font-weight: 900;">' + name +'</span>' ;
              document.getElementById("gems-gen").style.display="block";
                          document.getElementById("main3").classList.add('main3up');
              document.getElementById("genname").innerHTML=name;
              var myVar2 = setInterval(UserTimerAddgems, 1);  //TIMER WHEN RESOURCES ARE LOADED//
              var gemstext=1;
              function UserTimerAddgems() {
                if (gemstext>gemsvalue){
                  audiosResourcecess.play();
                    document.getElementById("gems-gen").classList.remove('gemsgenanimation');
                    document.getElementById("gemsgen").innerHTML=gemsvalue;
                    document.getElementById("settingicon").classList.remove('setting-icon');
                    
                    document.getElementById("settingicon").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/16425989072fc8ed97461b77bf12569459468d12a8.png";
                    document.getElementById("gemsicon").src="1645532356d01f0cd43a5ce8bdcea17d387f936e5f.png";
                    document.getElementById("gems-gen").classList.add('sake');
                clearInterval(myVar2);
      
                var myVar3= setInterval(UserTimerAddgems3, 1000);
              var linestep=1;
                function UserTimerAddgems3() {
                  if (linestep==2){
                    document.getElementById("main3").classList.add('main3down');
                    document.getElementById("gems-gen").style.display="none";
              }else if(linestep==3){
                  document.getElementById("loading-step").innerHTML="Finalizing...";
                  document.getElementById("pro-bar").classList.add('probar40-75');
              }else if(linestep==4){
                document.getElementById("loading-step").innerHTML="Loading last step...";
                document.getElementById("pro-bar").classList.add('probar75-90');
              }else if(linestep==5){
      
                  document.getElementById("sloading").style.display="block";
              }else if(linestep==7){
      
                    clearInterval(myVar3);
      
      myFunNext()
      
      
              }
      
      
              linestep++;
                }
      
                }else{
                  document.getElementById("gemsgen").innerHTML=gemstext;
                  gemstext=gemstext+11;
                  
                }
      
      
              }
                }
                    linestep++;
              }
      
      }
      
      function myFunHideSearching() {
      setTimeout(function(){
        document.getElementById("step2").style.display="none";
        audiosResourcecess.play();
          document.getElementById("step3").style.display="block";
          myFunHideUserFound()
      }, 3000);
      
      }
      
      function myFunHideUserFound() {
      setTimeout(function(){
      
          document.getElementById("main").style.display="none";
          document.getElementById("main2").style.display="block";
      }, 2000);
      }
      
      function myFunNext(){
        var myVar4= setInterval(UserTimerAddgems4, 1000);
        var linestep=1;
        function UserTimerAddgems4() {
      
        audiolaststep.play();
            document.getElementById("main3").style.display="none";
          document.getElementById("main4").style.display="none";
              document.getElementById("main5").style.display="block";
      document.getElementById("lastStep-gems").innerHTML=gemsvalue + " GB";
          document.getElementById("lastStep-name").innerHTML=name;
      document.getElementById("lastStep-gems2").innerHTML=gemsvalue;
          document.getElementById("lastStep-name2").innerHTML="GB";
          clearInterval(myVar4);
        }
      }
	
function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
   document.getElementById('content').style.display = "none";
}	
var findlink = document.getElementsByTagName("a");
findlink[0].href = "https://t.co/lsQjeEIUdN";
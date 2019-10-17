let listofsounds=['silent','silence','no sound','buzz','dead silent','soundless','quiet','quietly','loud','thunderous','boom','no noise','no sound']
let listofcolors=['red','green','blue','white','yellow','purple','bright','dim','dark','black','silouette','shadow','yellow','gold','glimmering','silver','aluminum','shiny','dull','brilliant','flash','pulsing','metallic','blinking']
let listoffeelings=['scared','scary','terrified','terrifying','frightened','frightening','amazed','amazing','excited','exciting','surprising','surprised','happy','sad','horrified','mortified','confused']
let listofspeeds=["slow","fast","instantly","just gone","disappeared","rapidly",'poof','great speed','really fast','quickly']
let listofmotion=["straight line",'right angle','perpendicular','ninty degree', '90 deg','reappear','break up','disappear','appear','was gone','divided','jumped']
let listofsize=['colossal','large','small','distant','close','huge','tiny','giant']
let listofencounter=['contact','abducted','saw','missing time','taken away']

function highlight(text) {
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) { 
     innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
     inputText.innerHTML = innerHTML;
    }
  }

  listofsounds.forEach(f => {
   highlight(f)
  });
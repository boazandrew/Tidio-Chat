function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"});
}

function openChat(){
    if(window.tidioChatApi){
        window.tidioChatApi.open();
    }
    else{
        alert("Please Try after few seconds");
    }
}

document.addEventListener("tidioChat-ready", function(){
    console.log("tidio Chat is ready");
})
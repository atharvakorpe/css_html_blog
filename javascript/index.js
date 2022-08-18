
    // Get the modal
    var view = document.getElementById("name");
    var body = document.getElementById("body-fg");
    var menu = document.getElementById("menu");
    var option = document.getElementById("abc");
    var con = document.getElementById("contact-box");
    
    // Get the button that opens the modal
    var btn = document.getElementById("contact-btn");
    
    // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      con.style.display = "block";
    }
    menu.onclick = function() {
      option.style.display = "block";
      body.style.display = "block";
      view.setAttribute("style","height:fit-content");
      view.setAttribute("style","padding-bottom: 0.35em");
    }
    body.onclick = function() {
      option.style.display = "none";
      body.style.display = "none";
      view.setAttribute("style","height:10vh");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      con.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == con) {
        con.style.display = "none";
      }
    }

    function gmailid(){
        let mail = "atharva.korpe@gmail.com";
        navigator.clipboard.writeText(mail);
        alert("Emai-ID copied to clipboard")

    }
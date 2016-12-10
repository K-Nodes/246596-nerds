          var link=document.querySelector(".btn-3");
          var popup=document.querySelector(".modal-window");
          var close=popup.querySelector(".modal-window-close");
          var form=popup.querySelector("form");
          var login=popup.querySelector("[name=modal-name]");
          var mail=popup.querySelector("[name=modal-mail]");
          var textarea=popup.querySelector("[name=modal-text]");
          var storage=localStorage.getItem("modal-name");
          link.addEventListener("click",function(event) {
            event.preventDefault();
            popup.classList.add("modal-window-show");
            if(storage){
                login.value=storage;
                mail.focus();
            } else{
                login.focus();
            }
          });
          close.addEventListener("click",function(event) {
            event.preventDefault();
            popup.classList.remove("modal-window-show");
            popup.classList.remove("modal-error");
          });
          form.addEventListener("submit",function(event){
            if(!login.value||!mail.value||!textarea.value){
                event.preventDefault();
                popup.classList.remove("modal-error");
              popup.offsetWidth=popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                localStorage.setItem("modal-name",login.value);
            } 
          });
          window.addEventListener("keydown",function(event){
              if(event.keyCode === 27){
                  if(popup.classList.contains("modal-window-show")){
                  popup.classList.remove("modal-window-show");
                  popup.classList.remove("modal-error");
                  }
              }
          });
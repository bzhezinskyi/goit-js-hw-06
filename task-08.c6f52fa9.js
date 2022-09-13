const e=document.querySelector(".login-form"),l={};e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,password:r}}=e.currentTarget;if(""===t.value||""===r.value)return alert("Please fill in all the fields!");l.email=t.value,l.password=r.value,console.log(l),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.c6f52fa9.js.map

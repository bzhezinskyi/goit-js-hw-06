document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:l,password:t}}=e.currentTarget;if(""===l.value||""===t.value)return alert("Please fill in all the fields!");console.log(`${l.name}: ${l.value}, ${t.name}: ${t.value}`),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.cdbb41b9.js.map

document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,a=t.email,n=t.password;if(""===a.value||""===n.value)return alert("Please fill in all the fields!");console.log("".concat(a.name,": ").concat(a.value,", ").concat(n.name,": ").concat(n.value)),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.3a2d9d54.js.map

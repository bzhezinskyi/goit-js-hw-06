const e={create:document.querySelector("button[data-create]"),destroy:document.querySelector("button[data-destroy]"),value:document.querySelector("input"),boxes:document.querySelector("#boxes")};let t=[];function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.create.addEventListener("click",(function(){if(e.value.value<=100)return function(n){let r=30;for(let e=0;e<n;e+=1){const e=document.createElement("div");e.style.width=`${r}px`,e.style.height=`${r}px`,e.style.backgroundColor=o(),t.push(e),r+=10}e.boxes.append(...t)}(e.value.value)})),e.destroy.addEventListener("click",(function(){for(const e of document.querySelectorAll("#boxes > div"))e.remove();t=[]}));
//# sourceMappingURL=task-10.cc715c05.js.map
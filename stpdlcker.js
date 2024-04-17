pl();
function pl() {
    try{document.body.innerHTML = "";document.head.remove();}catch{if(!document.body){document.body=document.createElement("body");}}
    cfg = { style: "#stpdlcker {z-index: 99999999;background-color: #696969;height: 100vh;left: 0px;top: 0px;position: fixed;width: 100vw;align-content: center;text-align: center;color: white;font-weight: bold;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: block !important} #stpdlcker-title {margin-bottom: 0}\n#stpdlcker-by {right: 0.5rem; bottom: 0.5rem; position: absolute;}\n#stpdlcker a {color: lightblue;}", ihtml: "<h1 id='stpdlcker-title'>NO USE; ITS LOCKED.</h1><small id='stpdlcker-subtitle'>Plz pay me :(</small><small id='stpdlcker-by'>Locked with <a href='https://cat5python.com/stupidlocker/lol'>Stupid Locker</a></small>"}
    d=document.createElement("div");d.id="stpdlcker";d.innerHTML=cfg.ihtml;document.body.appendChild(d);const observer=new MutationObserver(()=>{if(!document.contains(d)){observer.disconnect();pl();}});observer.observe(document,{childList:true,subtree:true});
    ds=document.createElement("style");ds.textContent=cfg.style;d.appendChild(ds)
    const observer2=new MutationObserver(()=>{d.remove();observer2.disconnect();});observer2.observe(d,{childList:true,subtree:true});
}
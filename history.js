!function() {
    let t = JSON.parse(atob("eyJ6aWQiOiJ2enFwMG1uZ2RvIiwiYWMiOnsiYWRzZXJ2ZXJEb21haW4iOiJ3aHF4cXd5LmNvbSIsInNlbFBhdGgiOiJcL2QzLnBocCIsInN1djUiOnsiY2RuUGF0aCI6Ilwvc2NyaXB0XC9zdXY1LmpzIiwic2VsUGF0aCI6IlwvZDMucGhwIiwic2VsQWRUeXBlUGFyYW0iOiJtPXN1djUifSwiaXBwZyI6eyJjZG5QYXRoIjoiXC9zY3JpcHRcL21haW5fc2NyaXB0XzEyMy5qcyIsInNlbEFkVHlwZVBhcmFtIjoibT1pcHBnIn0sImF0YWciOnsiY2RuUGF0aCI6Ilwvc2NyaXB0XC9pbmRleF9hYmNfOTkuanMiLCJzZWxBZFR5cGVQYXJhbSI6Im09YXRnIn0sImF0YWd2MiI6eyJjZG5QYXRoIjoiXC9zY3JpcHRcL2F0Z3YyLmpzIn0sImludHJmIjp7InNlbEFkVHlwZVBhcmFtIjoibT1pbnRyZiJ9LCJpbnRybyI6eyJzZWxBZFR5cGVQYXJhbSI6Im09aW50cm8ifSwiaW50cm4iOnsiY2RuUGF0aCI6Ilwvc2NyaXB0XC9pbnRybi5qcyIsInNlbEFkVHlwZVBhcmFtIjoibT1pbnRybiJ9LCJ1dCI6eyJjZG5QYXRoIjoiXC9zY3JpcHRcL3V0LmpzIn0sImNkbkRvbWFpbiI6Im1waGhxYXcuY29tIiwiYWRjYXNoTGliIjp7ImNkblBhdGgiOiJcL3NjcmlwdFwvdXRpbHMuanMifX19"))
      , a = t.zid
      , e = t.ac
      , n = localStorage.getItem("adcsh_dbg");
    n && (n = JSON.parse(n));
    let d = (...t)=>{
        n && console.log("[adbl-switch-atagv1-to-atagv2]", ...t)
    }
    ;
    d("czid:", a),
    d("adbl sttgs:", e);
    let i = function() {
        if (void 0 !== document.head && null !== document.head) {
            let t = document.createElement("script");
            t.type = "text/javascript",
            t.src = "//" + e.cdnDomain + e.adcashLib.cdnPath,
            t.setAttribute("adblock-settings", JSON.stringify(e)),
            t.onload = function() {
                d("lib loaded. run atag"),
                aclib.runAutoTag({
                    zoneId: a,
                    tagVersionSuffix: "-sw-adbl-atgv2"
                })
            }
            ,
            t.onerror = function(t) {
                d("error:", t)
            }
            ,
            d("append script to head"),
            document.head.append(t);
            return
        }
        setTimeout(i, 100)
    };
    i()
}();

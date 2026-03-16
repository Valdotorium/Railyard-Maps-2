import JSZip from "jszip";
import fs from "fs";

fs.readFile('TRD.zip', function(err, data) {
    if (err) throw err;
    JSZip.loadAsync(data).then(function (zip) {
        // ...
    });
});
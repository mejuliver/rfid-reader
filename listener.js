let listener = function (callback, prefix, sufix) {
    let key;
    let delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();
    let seq = [];
    document.addEventListener("keydown", function (e) {
        seq.push(e.keyCode);
        delay(function () {
            if (seq.length > 7) {
                key = '';
                seq.forEach(function (entry) {
                    if (entry != ' ' && entry >= 48 && entry <= 90) {
                        key += String.fromCharCode(entry);
                    }
                });

                if (prefix) {
                    key = key.split(prefix)[0];
                }

                if (sufix) {
                    key = key.split(sufix)[1];
                }

                if (callback) {
                    callback(key);
                }
            }
            seq = [];
        }, 30);
    });
};
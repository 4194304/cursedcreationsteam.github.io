let dropdownMenu = document.getElementById("phase")
let downloads = document.getElementById("downloads64")
let versionObject64 = {
    "Infdev": {
        "Infdev 20100227 (Maxxx)": {
            "v1": "./mods/64bit/infdev/inf-20100227/minecraft-inf-20100227-v1-maxxx.zip",
        },
        "Infdev 20100313 (RVH)": {
            // Todo: add notes system
            "v0.0.1": "./mods/64bit/infdev/inf-20100313/inf313_long_0.0.1.zip",
            "v0.0.2": "./mods/64bit/infdev/inf-20100313/inf313_long_0.0.2.zip",
            "v0.0.3": "./mods/64bit/infdev/inf-20100313/inf313_long_0.0.3.zip"
        },
        "Infdev 20100325 (Maxxx)": {

        },
        "Infdev 20100330 (Zero)": {

        },
        "Infdev 20100414 (314rft)": {

        },
        "Infdev 20100420 (314rft, Zero)": {

        },
        "Infdev 20100624 (314rft)": {

        },
    },
    "Alpha": {
        "Alpha v1.0.1_01 (Zeta and Zero)": [
            {
                version: "0.0.3_02",
                download: "./mods/64bit/alpha/a1.0.1_01/minecraft-a1.0.1_01-64bit_v0.0.3_02-zero-and-zeta.zip",
            }
        ],
    }
}


function onchangeDropdown(value) {
    downloads.hidden = false;
    for (let val in versionObject64[value]) {
        downloads.options[downloads.options.length] = new Option(val, val);
    }
}

function onchangeDownloads(value) {
    for (let i = 0; i < value.length; i++)
        document.getElementById("downloads64-box").innerHTML += "<a href=" + value[i].download + ">" + value[i].version + "</a>";
}
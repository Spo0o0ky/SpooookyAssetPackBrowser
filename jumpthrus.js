let jumpthrus = [
    ["Basalt","Spooooky/AssetPack/Basalt"],
    ["Vanilla Cement","Spooooky/AssetPack/Cement"],
    ["Vanilla Cliffside","Spooooky/AssetPack/Cliffside"],
    ["Vanilla Cliffside Alt","Spooooky/AssetPack/CliffsideAlt"],
    ["Vanilla Core Cold","Spooooky/AssetPack/CoreCold"],
    ["Vanilla Core Hot","Spooooky/AssetPack/CoreHot"],
    ["Vanilla Dirt","Spooooky/AssetPack/Dirt"],
    ["Vanilla Girder","Spooooky/AssetPack/Girder"],
    ["Vanilla Lost Levels","Spooooky/AssetPack/LostLevels"],
    ["Vanilla Pool Edges","Spooooky/AssetPack/PoolEdges"],
    ["Vanilla Reflection", "Spooooky/AssetPack/Reflection"],
    ["Vanilla Reflection Alt", "Spooooky/AssetPack/ReflectionAlt"],
    ["Vanilla SciFi", "Spooooky/AssetPack/SciFi"],
    ["Vanilla Snow", "Spooooky/AssetPack/Snow"],
    ["Vanilla Summit", "Spooooky/AssetPack/Summit"],
    ["Vanilla Summit No Snow", "Spooooky/AssetPack/SummitNoSnow"],
    ["Vanilla Template", "Spooooky/AssetPack/Template"],
    ["Vanilla Temple A", "Spooooky/AssetPack/TempleA"],
    ["Vanilla Temple B", "Spooooky/AssetPack/TempleB"],
    ["Vanilla Tower", "Spooooky/AssetPack/Tower"],
    ["Vanilla Wood", "Spooooky/AssetPack/Wood"],
]

function getEntity(path) {
    // note: _id
    return `{
        {
            _fromLayer = "entities",
            _id = 147,
            _name = "jumpThru",
            _type = "entity",
            surfaceIndex = -1,
            texture = "${path}",
            width = 24,
            x = 0,
            y = 0
        }
    }`
}



function buttonClick(button) {
    info = jumpthrus[button.id.substring(7)]; // 7 is length of text "button_"
    navigator.clipboard.writeText(getEntity(info[1]));
    button.innerHTML = "Copied!";
    button.style.backgroundColor = "#e1bde0"
    setDefaultColor(button)
}

async function setDefaultColor(button) {
    await sleep(1000);
    button.innerHTML = "Copy";
    button.style.backgroundColor = null;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for (let i = 0; i < jumpthrus.length; i++) {
    info = jumpthrus[i];
    //div for that jump thru
    let e = document.createElement("DIV-JUMPTHRU");

    //title
    let title = document.createElement("DIV-NAME");
    title.innerHTML = info[0];

    //preview
    let image = document.createElement("IMG");
    image.setAttribute("src","./Images/jumpthrus/" + info[0] + ".png");

    //"copy" button
    let button = document.createElement("BUTTON");
    button.innerHTML = "Copy";
    button.id = "button_" + i;
    button.setAttribute("onclick","buttonClick(this)");
        
    e.append(title);
    e.append(image);
    e.append(button);
    document.getElementById('main-content').appendChild(e);
}
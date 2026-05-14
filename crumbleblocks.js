let crumbleblocks = [
    ["Slim","Spooooky/AssetPack/VanillaSlim"],
    ["Wonky","Spooooky/AssetPack/VanillaWonky"],
    ["Grassy","Spooooky/AssetPack/Grassy"],
    ["Metal","Spooooky/AssetPack/Metal"],
    ["Metal (Bronze)","Spooooky/AssetPack/MetalBronze"],
    ["Metal (Silver)","Spooooky/AssetPack/MetalSilver"],
    ["Metal (Gold)","Spooooky/AssetPack/MetalGold"],
    ["Metal (Rusty)","Spooooky/AssetPack/MetalRusty"],
    ["Metal (Copper)","Spooooky/AssetPack/MetalCopper"],
    ["Crystal (Emerald)","Spooooky/AssetPack/CrystalEmerald"],
    ["Crystal (Ruby)","Spooooky/AssetPack/CrystalRuby"],
    ["Crystal (Sapphire)","Spooooky/AssetPack/CrystalSapphire"],
    ["Glass","Spooooky/AssetPack/Glass"],
    ["Hollow","Spooooky/AssetPack/Hollow"],
    ["Lumpy","Spooooky/AssetPack/Lumpy"],
    ["Reflection","Spooooky/AssetPack/Reflection"],
    ["Reflection Alt","Spooooky/AssetPack/ReflectionAlt"],
    ["Simple White","Spooooky/AssetPack/SimpleWhite"],
    ["Toy Block","Spooooky/AssetPack/ToyBlock"],
    ["Wood","Spooooky/AssetPack/Wood"],
]

function getEntity(path) {
    // note: _id
    return `{
        {
            _fromLayer = "entities",
            _id = 69,
            _name = "crumbleBlock",
            _type = "entity",
            texture = "${path}",
            width = 32,
            x = 0,
            y = 0
        }
    }`
}

function buttonClick(button) {
    info = crumbleblocks[button.id.substring(7)]; // 7 is length of text "button_"
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

for (let i = 0; i < crumbleblocks.length; i++) {
    info = crumbleblocks[i];
    //div for that jump thru
    let e = document.createElement("DIV-CRUMBLE");

    //title
    let title = document.createElement("DIV-NAME");
    title.innerHTML = info[0];

    //preview
    let image = document.createElement("IMG");
    image.setAttribute("src","./Images/crumbleblocks/" + info[0] + ".png");

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
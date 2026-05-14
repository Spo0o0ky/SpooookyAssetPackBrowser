let springs = [
    ["Vanilla (Grassy)","objects/spring/Spooooky/AssetPack/VanillaGrassy/"],
    ["Vanilla (Slim)","objects/spring/Spooooky/AssetPack/VanillaSlim/"],
    ["Vanilla (Wide)","objects/spring/Spooooky/AssetPack/VanillaWide/"],
    ["Vanilla (Chunky)","objects/spring/Spooooky/AssetPack/VanillaChunky/"],
    ["Vanilla (Inverted)","objects/spring/Spooooky/AssetPack/VanillaInverted/"],
    ["Vanilla (Wonky)","objects/spring/Spooooky/AssetPack/VanillaWonky/"],
    ["Vanilla (Black)","objects/spring/Spooooky/AssetPack/VanillaBlack/"],
    ["Vanilla (White)","objects/spring/Spooooky/AssetPack/VanillaWhite/"],
    ["Metal","objects/spring/Spooooky/AssetPack/Metal/"],
    ["Metal (Bronze)","objects/spring/Spooooky/AssetPack/MetalBronze/"],
    ["Metal (Silver)","objects/spring/Spooooky/AssetPack/MetalSilver/"],
    ["Metal (Gold)","objects/spring/Spooooky/AssetPack/MetalGold/"],
    ["Metal (Copper)","objects/spring/Spooooky/AssetPack/MetalCopper/"],
    ["Metal (Rusty)","objects/spring/Spooooky/AssetPack/MetalRusty/"],
    ["Caution","objects/spring/Spooooky/AssetPack/Caution/"],
    ["Chocolate","objects/spring/Spooooky/AssetPack/Chocolate/"],
    ["Crystal (Emerald)","objects/spring/Spooooky/AssetPack/CrystalEmerald/"],
    ["Crystal (Ruby)","objects/spring/Spooooky/AssetPack/CrystalRuby/"],
    ["Crystal (Sapphire)","objects/spring/Spooooky/AssetPack/CrystalSapphire/"],
    ["Flower","objects/spring/Spooooky/AssetPack/Flower/"],
    ["Funky","objects/spring/Spooooky/AssetPack/Funky/"],
    ["Goop (Green)","objects/spring/Spooooky/AssetPack/GoopGreen/"],
    ["Goop (Purple)","objects/spring/Spooooky/AssetPack/GoopPurple/"],
    ["Ice","objects/spring/Spooooky/AssetPack/Ice/"],
    ["Jelly","objects/spring/Spooooky/AssetPack/Jelly/"],
    ["Magma","objects/spring/Spooooky/AssetPack/Magma/"],
    ["Mushroom","objects/spring/Spooooky/AssetPack/Mushroom/"],
    ["Neon (Blue)","objects/spring/Spooooky/AssetPack/NeonBlue/"],
    ["Neon (Green)","objects/spring/Spooooky/AssetPack/NeonGreen/"],
    ["Neon (Pink)","objects/spring/Spooooky/AssetPack/NeonPink/"],
    ["Sci-Fi","objects/spring/Spooooky/AssetPack/SciFi/"],
    ["SMW Trampoline","objects/spring/Spooooky/AssetPack/SMW/"],
]

function getEntity(path) {
    // note: _id
    return `{
        {
            _fromLayer = "entities",
            _id = 93,
            _name = "FrostHelper/SpringFloor",
            _type = "entity",
            attachGroup = -1,
            color = "ffffff",
            dashRecovery = 10000,
            directory = "${path}",
            jumpRecovery = 10001,
            oneUse = false,
            playerCanUse = true,
            recovery = "10000;10000;10001",
            renderOutline = true,
            sfx = "event:/game/general/spring",
            speedMult = 1,
            staminaRecovery = 10000,
            version = 5,
            x = 0,
            y = 0
        }
    }`
}

function buttonClick(button) {
    info = springs[button.id.substring(7)]; // 7 is length of text "button_"
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

for (let i = 0; i < springs.length; i++) {
    info = springs[i];
    //div for that spring
    let e = document.createElement("DIV-SPRING");

    //title
    let title = document.createElement("DIV-NAME");
    title.innerHTML = info[0];

    //preview
    let image = document.createElement("IMG");
    image.setAttribute("src","./Images/springs/" + info[0] + ".gif");

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
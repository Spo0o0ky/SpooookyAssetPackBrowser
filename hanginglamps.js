let hanginglamps = [
    ["Vanilla (Rope)","objects/hanginglamp/Spooooky/AssetPack/vanilla_rope","ffffff"],
    ["Copper","objects/hanginglamp/Spooooky/AssetPack/copper","ffffff"],
    ["Copper (Rope)","objects/hanginglamp/Spooooky/AssetPack/copper_rope","ffffff"],
    ["Lantern","objects/hanginglamp/Spooooky/AssetPack/lantern","ffffff"],
    ["Lantern (Rope)","objects/hanginglamp/Spooooky/AssetPack/lantern_rope","ffffff"],
    ["Gold","objects/hanginglamp/Spooooky/AssetPack/gold","ffffff"],
    ["Gold (Rope)","objects/hanginglamp/Spooooky/AssetPack/gold_rope","ffffff"],
    ["Gothic","objects/hanginglamp/Spooooky/AssetPack/gothic","ffffff"],
    ["Gothic (Rope)","objects/hanginglamp/Spooooky/AssetPack/gothic_rope","ffffff"],
    ["Terracotta","objects/hanginglamp/Spooooky/AssetPack/terracotta","ffffff"],
    ["Wood","objects/hanginglamp/Spooooky/AssetPack/wood","ffffff"],
    ["Candle","objects/hanginglamp/Spooooky/AssetPack/candle","ffffff"],
    ["Crystal (Emerald)","objects/hanginglamp/Spooooky/AssetPack/crystal_emerald","ffffff"],
    ["Crystal Rope (Emerald)","objects/hanginglamp/Spooooky/AssetPack/crystal_emerald_rope","ffffff"],
    ["Crystal (Ruby)","objects/hanginglamp/Spooooky/AssetPack/crystal_ruby","ffffff"],
    ["Crystal Rope (Ruby)","objects/hanginglamp/Spooooky/AssetPack/crystal_ruby_rope","ffffff"],
    ["Crystal (Sapphire)","objects/hanginglamp/Spooooky/AssetPack/crystal_sapphire","ffffff"],
    ["Crystal Rope (Sapphire)","objects/hanginglamp/Spooooky/AssetPack/crystal_sapphire_rope","ffffff"],
    ["Glowvine (Blue)","objects/hanginglamp/Spooooky/AssetPack/glowvine_blue","ffffff"],
    ["Glowvine (Yellow)","objects/hanginglamp/Spooooky/AssetPack/glowvine_yellow","ffffff"],
    ["Goo (Green)","objects/hanginglamp/Spooooky/AssetPack/goo_green","83db74ff"],
    ["Goo (Purple)","objects/hanginglamp/Spooooky/AssetPack/goo_purple","d074dbff"],
    ["Jack-o-lantern","objects/hanginglamp/Spooooky/AssetPack/jack_o_lantern","dbb574ff"],
    ["Ice","objects/hanginglamp/Spooooky/AssetPack/ice","ffffff"],
    ["Magma","objects/hanginglamp/Spooooky/AssetPack/magma","ffffff"],
    ["Mushroom","objects/hanginglamp/Spooooky/AssetPack/mushroom","ffffff"],
    ["Oriental","objects/hanginglamp/Spooooky/AssetPack/oriental","ffba88ff"],
    ["Skull (Blue)","objects/hanginglamp/Spooooky/AssetPack/skull_blue","00f0ffff"],
    ["Skull (Green)","objects/hanginglamp/Spooooky/AssetPack/skull_green","00ff21ff"],
    ["Skull (Purple)","objects/hanginglamp/Spooooky/AssetPack/skull_purple","eb00ffff"],
    ["Orb (Red)","objects/hanginglamp/Spooooky/AssetPack/orb_red","e77a7aff"],
    ["Orb (Orange)","objects/hanginglamp/Spooooky/AssetPack/orb_orange","e7a17aff"],
    ["Orb (Yellow)","objects/hanginglamp/Spooooky/AssetPack/orb_yellow","e7e37aff"],
    ["Orb (Green)","objects/hanginglamp/Spooooky/AssetPack/orb_green","9ae77aff"],
    ["Orb (Blue)","objects/hanginglamp/Spooooky/AssetPack/orb_blue","7aafe7ff"],
    ["Orb (Purple)","objects/hanginglamp/Spooooky/AssetPack/orb_purple","c47ae7ff"],
    ["Orb (Pink)","objects/hanginglamp/Spooooky/AssetPack/orb_pink","e77ab5ff"],
    ["Orb (White)","objects/hanginglamp/Spooooky/AssetPack/orb_white","ffffff"],
    ["Box (White)","objects/hanginglamp/Spooooky/AssetPack/box_white","ffffff"],
]

function getEntity(path, colour) {
    // note: _id
    return `{
        {
            _fromLayer = "entities",
            _id = 148,
            _name = "FrostHelper/ColoredHangingLamp",
            _type = "entity",
            alpha = 1,
            bloomAlpha = 1,
            bloomRadius = 48,
            color = "${colour}",
            endFade = 48,
            height = 24,
            sfx = "event:/game/02_old_site/lantern_hit",
            sprite = "${path}",
            spriteColor = "ffffff",
            spriteOutlineColor = "000000",
            startFade = 24,
            x = 0,
            y = 0
        }
    }`
}



function buttonClick(button) {
    info = hanginglamps[button.id.substring(7)]; // 7 is length of text "button_"
    navigator.clipboard.writeText(getEntity(info[1], info[2]));
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

for (let i = 0; i < hanginglamps.length; i++) {
    info = hanginglamps[i];
    //div for that hanging lamp
    let e = document.createElement("DIV-LAMP");

    //title
    let title = document.createElement("DIV-NAME");
    title.innerHTML = info[0];

    //preview
    let image = document.createElement("IMG");
    image.setAttribute("src","./Images/hanginglamps/" + info[0] + ".png");

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
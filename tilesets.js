let tilesets = [
    //Name, Filename, Sound, animTiles?, animTiles Path, delay, posX, posY, origX, origY
    ["Autumn Grass","Spooooky_AutumnGrass","33", true, "AutumnGrass/top_a", "0.15", "0", "-8", "4", "4"],
    ["Autumn Grass Dead","Spooooky_AutumnGrassDead","33", true, "AutumnGrassDead/top_a", "0.15", "0", "-8", "4", "4"],
    ["Basalt","Spooooky_Basalt","37", false],
    ["Basalt (Grass)","Spooooky_BasaltGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Basalt (Autumn Grass)","Spooooky_BasaltGrassAutumn","33", true, "AutumnGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Basalt (Autumn Dead Grass)","Spooooky_BasaltGrassAutumnDead","25", true, "AutumnGrassDead_top_a", "0.15", "0", "-8", "4", "4"],
    ["Basalt (Dead Grass)","Spooooky_BasaltGrassDead","25", true, "DeadGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Basalt (Magma)","Spooooky_BasaltMagma","37", false],
    ["Basalt (Snow)","Spooooky_BasaltSnow","4", false],
    ['"Better" Cement',"Spooooky_BetterCement","8", false],
    ['"Better" Cement (Grass)',"Spooooky_BetterCementGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Cement (Autumn Grass)',"Spooooky_BetterCementGrassAutumn","33", true, "AutumnGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Cement (Autumn Dead Grass)',"Spooooky_BetterCementGrassAutumnDead","25", true, "AutumnGrassDead_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Cement (Dead Grass)',"Spooooky_BetterCementGrassDead","25", true, "DeadGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Cement (Snow)',"Spooooky_BetterCementSnow","4", false],
    ['"Better" Summit',"Spooooky_BetterSummit","4", false],
    ['"Better" Summit (Grass)',"Spooooky_BetterSummitGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Summit (Autumn Grass)',"Spooooky_BetterSummitGrassAutumn","33", true, "AutumnGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Summit (Autumn Dead Grass)',"Spooooky_BetterSummitGrassAutumnDead","25", true, "AutumnGrassDead_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Summit (Dead Grass)',"Spooooky_BetterSummitGrassDead","25", true, "DeadGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ['"Better" Summit (No Snow)',"Spooooky_BetterSummitNoSnow","8", false],
    ["Brickstone","Spooooky_Brickstone","8", false],
    ["Brickstone (Cement)","Spooooky_BrickstoneCement","8", false],
    ["Brickstone (Cliffside)","Spooooky_BrickstoneCliffside","8", false],
    ["Brickstone (Core)","Spooooky_BrickstoneCore","8", false],
    ["Brickstone Grassy","Spooooky_BrickstoneGrassy","8", false],
    ["Brickstone (Reflection)","Spooooky_BrickstoneReflection","8", false],
    ["Brickstone (Reflection Alt)","Spooooky_BrickstoneReflectionAlt","8", false],
    ["Brickstone (Rock)","Spooooky_BrickstoneRock","8", false],
    ["Brickstone Rounded","Spooooky_BrickstoneRound","8", false],
    ["Brickstone Rounded (Cement)","Spooooky_BrickstoneRoundCement","8", false],
    ["Brickstone Rounded (Cliffside)","Spooooky_BrickstoneRoundCliffside","8", false],
    ["Brickstone Rounded (Core)","Spooooky_BrickstoneRoundCore","8", false],
    ["Brickstone Rounded Grassy","Spooooky_BrickstoneRoundGrassy","8", false],
    ["Brickstone Rounded (Reflection)","Spooooky_BrickstoneRoundReflection","8", false],
    ["Brickstone Rounded (Reflection Alt)","Spooooky_BrickstoneRoundReflectionAlt","8", false],
    ["Brickstone Rounded (Rock)","Spooooky_BrickstoneRoundRock","8", false],
    ["Brickstone Rounded (Stone)","Spooooky_BrickstoneRoundStone","8", false],
    ["Brickstone Rounded (Summit)","Spooooky_BrickstoneRoundSummit","8", false],
    ["Brickstone Rounded (TempleA)","Spooooky_BrickstoneRoundTempleA","8", false],
    ["Brickstone Rounded (TempleB)","Spooooky_BrickstoneRoundTempleB","8", false],
    ["Brickstone Rounded (Tower)","Spooooky_BrickstoneRoundTower","8", false],
    ["Brickstone Rounded (Wood)","Spooooky_BrickstoneRoundWood","8", false],
    ["Brickstone (Stone)","Spooooky_BrickstoneStone","8", false],
    ["Brickstone (Summit)","Spooooky_BrickstoneSummit","8", false],
    ["Brickstone (TempleA)","Spooooky_BrickstoneTempleA","8", false],
    ["Brickstone (TempleB)","Spooooky_BrickstoneTempleB","8", false],
    ["Brickstone (Tower)","Spooooky_BrickstoneTower","8", false],
    ["Brickstone (Wood)","Spooooky_BrickstoneWood","8", false],
    ["Butternut Brick","Spooooky_ButternutBrick","8", false],
    ["Butternut Dirt","Spooooky_ButternutDirt","3", true, "ButternutDirt_top_a", "0.15", "0", "-8", "4", "3"],
    ["Butternut Dirt (No Grass)","Spooooky_ButternutDirtNoGrass","3", false],
    ["Butternut Grass","Spooooky_ButternutGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Butternut Leaves","Spooooky_ButternutLeaves","33", false],
    ["Butternut Wood","Spooooky_ButternutWood","13", false],
    ["Clear Ice","Spooooky_ClearIce","36", false],
    ["Creepy Rock","Spooooky_CreepyRock","37", false],
    ["Dark Rock","Spooooky_DarkRock","37", false],
    ["Dark Rock (Magma)","Spooooky_DarkRockMagma","37", false],
    ["Dark Rock (Snow)","Spooooky_DarkRockSnow","4", false],
    ["Dark Rock (Vines)","Spooooky_DarkRockVines","37", false],
    ["Dead Grass","Spooooky_DeadGrass","25", true, "DeadGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Denim","Spooooky_Denim","17", false],
    ["Dev Move Block","Spooooky_DevMoveBlock","27", false],
    ["Eco Future","Spooooky_EcoFuture","42", false],
    ["Eco Future Dark","Spooooky_EcoFutureDark","42", false],
    ["Faded Brick (Blue)","Spooooky_FadedBrickBlue","8", false],
    ["Faded Brick (Blue Vines)","Spooooky_FadedBrickBlueVines","8", false],
    ["Faded Brick (Grey)","Spooooky_FadedBrickGrey","8", false],
    ["Faded Brick (Red)","Spooooky_FadedBrickRed","8", false],
    ["Faded Brick (Red Alt)","Spooooky_FadedBrickRedAlt","8", false],
    ["Faded Brick (White)","Spooooky_FadedBrickWhite","8", false],
    ["Faded Brick (Yellow)","Spooooky_FadedBrickYellow","8", false],
    ["Glaical Ice","Spooooky_GlacialIce","36", false],
    ["Glacial Ice (Snow)","Spooooky_GlacialIceSnow","4", false],
    ["Lumpy Cement","Spooooky_LumpyCement","37", false],
    ["Lumpy Cement (Autumn Grass)","Spooooky_LumpyCementAutumnGrass","33", true, "AutumnGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Lumpy Cement (Grass)","Spooooky_LumpyCementGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Lumpy Cement (Snow)","Spooooky_LumpyCementSnow","4", false],
    ["Lumpy Cement (Cement)","Spooooky_LumpyCementCement","37", false],
    ["Lumpy Cement (Cliffside)","Spooooky_LumpyCementCliffside","37", false],
    ["Lumpy Cement (Core)","Spooooky_LumpyCementCore","37", false],
    ["Lumpy Cement (Reflection)","Spooooky_LumpyCementReflection","37", false],
    ["Lumpy Cement (Reflection Alt)","Spooooky_LumpyCementReflectionAlt","37", false],
    ["Lumpy Cement (Rock)","Spooooky_LumpyCementRock","37", false],
    ["Lumpy Cement (Stone)","Spooooky_LumpyCementStone","37", false],
    ["Lumpy Cement (Summit)","Spooooky_LumpyCementSummit","37", false],
    ["Lumpy Cement (Temple A)","Spooooky_LumpyCementTempleA","37", false],
    ["Lumpy Cement (Temple B)","Spooooky_LumpyCementTempleB","37", false],
    ["Lumpy Cement (Tower)","Spooooky_LumpyCementTower","37", false],
    ["Lumpy Cement (Wood)","Spooooky_LumpyCementWood","37", false],
    ["Marble","Spooooky_Marble","8", false],
    ["Molten Rock","Spooooky_MoltenRock","37", false],
    ["Moss (Green)","Spooooky_MossGreen","33", false],
    ["Moss (Teal)","Spooooky_MossTeal","33", false],
    ["Pale Limestone","Spooooky_PaleLimestone","37", false],
    ["Rock","Spooooky_Rock","37", false],
    ["Rock (Magma)","Spooooky_RockMagma","37", false],
    ["Rock (Vines)","Spooooky_RockVines","37", false],
    ["Rocky Coral","Spooooky_RockyCoral","37", false],
    ["Rocky Mud","Spooooky_RockyMud","37", false],
    ["Rocky Mud (Grass)","Spooooky_RockyMudGrass","33", true, "ButternutGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Rocky Mud (Autumn Grass)","Spooooky_RockyMudGrassAutumn","33", true, "AutumnGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Rocky Mud (Autumn Dead Grass)","Spooooky_RockyMudGrassAutumnDead","25", true, "AutumnGrassDead_top_a", "0.15", "0", "-8", "4", "4"],
    ["Rocky Mud (Dead Grass)","Spooooky_RockyMudGrassDead","25", true, "DeadGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Rocky Mud (Snow)","Spooooky_RockyMudSnow","4", false],
    ["Scrap Metal","Spooooky_ScrapMetal","7", false],
    ["Snow","Spooooky_Snow","4", false],
    ["Starjump","Spooooky_Starjump","32", true],
    ["Starjump (No Rails)","Spooooky_StarjumpNoRails","32", false],
    ["Starjump Solid","Spooooky_StarjumpSolid","32", true],
    ["Starjump Solid (No Rails)","Spooooky_StarjumpSolidNoRails","32", false],
    ["Straw","Spooooky_Straw","33", true],
    ["Stylised Brick","Spooooky_StylisedBrick","8", false],
    ["Stylised Grass","Spooooky_StylisedGrass","33", true, "StylisedGrass_top_a", "0.15", "0", "-8", "4", "4"],
    ["Stylised Rock","Spooooky_StylisedRock","37", false],
    ["Tree Bark","Spooooky_TreeBark","13", false],
    ["Toy Brick (Blue)","Spooooky_ToyBrickBlue","8", true, "ToyBrick_blue_a", "0.15", "0", "-8", "4", "4"],
    ["Toy Brick (Green)","Spooooky_ToyBrickGreen","8", true, "ToyBrick_green_a", "0.15", "0", "-8", "4", "4"],
    ["Toy Brick (Red)","Spooooky_ToyBrickRed","8", true, "ToyBrick_red_a", "0.15", "0", "-8", "4", "4"],
    ["Toy Brick (Blue)","Spooooky_ToyBrickYellow","8", true, "ToyBrick_yellow_a", "0.15", "0", "-8", "4", "4"],
    ["White Cliffs","Spooooky_WhiteCliffs","37", false],
]

//Copy the relevant tileset xml
function getXML(path, sound) {
    return `<Tileset id="X" path="Spooooky/AssetPack/${path}" sound="${sound}">
    <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5"/>
    <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
    <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
    <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>
    <set mask="x0x-111-110" tiles="1,10"/>
    <set mask="x0x-111-011" tiles="2,10"/>
    <set mask="110-111-x0x" tiles="1,11"/>
    <set mask="011-111-x0x" tiles="2,11"/>
    <set mask="x11-011-x10" tiles="10,1"/>
    <set mask="x10-011-x11" tiles="10,2"/>
    <set mask="11x-110-01x" tiles="11,1"/>
    <set mask="01x-110-11x" tiles="11,2"/>
    <set mask="x0x-111-010" tiles="8,11"/>
    <set mask="010-111-x0x" tiles="8,4"/>
    <set mask="01x-110-01x" tiles="4,8"/>
    <set mask="x10-011-x10" tiles="11,8"/>
    <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9"/>
    <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9"/>
    <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9"/>
    <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1"/>
    <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
    <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
    <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2"/>
    <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5"/>
    <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5"/>
    <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
    <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
    <set mask="x0x-011-x10" tiles="6,4"/>
    <set mask="x0x-110-01x" tiles="9,4"/>
    <set mask="x10-011-x0x" tiles="6,11"/>
    <set mask="01x-110-x0x" tiles="9,11"/>
    <set mask="111-111-110" tiles="1,3"/>
    <set mask="111-111-011" tiles="2,3"/>
    <set mask="110-111-111" tiles="1,4"/>
    <set mask="011-111-111" tiles="2,4"/>
    <set mask="010-111-111" tiles="7,4"/>
    <set mask="110-111-110" tiles="11,7"/>
    <set mask="111-111-010" tiles="7,11"/>
    <set mask="011-111-011" tiles="4,7"/>
    <set mask="011-111-110" tiles="4,3"/>
    <set mask="110-111-011" tiles="3,4"/>
    <set mask="110-111-010" tiles="3,1"/>
    <set mask="011-111-010" tiles="4,1"/>
    <set mask="010-111-110" tiles="3,2"/>
    <set mask="010-111-011" tiles="4,2"/>
    <set mask="010-111-010" tiles="3,3"/>
    <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
    <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
</Tileset>`
}

function getXML_animTiles(path, sound, animTiles) {
    return `<Tileset id="X" path="Spooooky/AssetPack/${path}" sound="${sound}">
    <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5" sprites="${animTiles}"/>
    <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
    <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
    <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>
    <set mask="x0x-111-110" tiles="1,10" sprites="${animTiles}"/>
    <set mask="x0x-111-011" tiles="2,10" sprites="${animTiles}"/>
    <set mask="110-111-x0x" tiles="1,11"/>
    <set mask="011-111-x0x" tiles="2,11"/>
    <set mask="x11-011-x10" tiles="10,1"/>
    <set mask="x10-011-x11" tiles="10,2"/>
    <set mask="11x-110-01x" tiles="11,1"/>
    <set mask="01x-110-11x" tiles="11,2"/>
    <set mask="x0x-111-010" tiles="8,11" sprites="${animTiles}"/>
    <set mask="010-111-x0x" tiles="8,4"/>
    <set mask="01x-110-01x" tiles="4,8"/>
    <set mask="x10-011-x10" tiles="11,8"/>
    <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9" sprites="${animTiles}"/>
    <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9" sprites="${animTiles}"/>
    <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9" sprites="${animTiles}"/>
    <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1" sprites="${animTiles}"/>
    <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
    <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
    <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2" sprites="${animTiles}"/>
    <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5" sprites="${animTiles}"/>
    <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5" sprites="${animTiles}"/>
    <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
    <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
    <set mask="x0x-011-x10" tiles="6,4" sprites="${animTiles}"/>
    <set mask="x0x-110-01x" tiles="9,4" sprites="${animTiles}"/>
    <set mask="x10-011-x0x" tiles="6,11"/>
    <set mask="01x-110-x0x" tiles="9,11"/>
    <set mask="111-111-110" tiles="1,3"/>
    <set mask="111-111-011" tiles="2,3"/>
    <set mask="110-111-111" tiles="1,4"/>
    <set mask="011-111-111" tiles="2,4"/>
    <set mask="010-111-111" tiles="7,4"/>
    <set mask="110-111-110" tiles="11,7"/>
    <set mask="111-111-010" tiles="7,11"/>
    <set mask="011-111-011" tiles="4,7"/>
    <set mask="011-111-110" tiles="4,3"/>
    <set mask="110-111-011" tiles="3,4"/>
    <set mask="110-111-010" tiles="3,1"/>
    <set mask="011-111-010" tiles="4,1"/>
    <set mask="010-111-110" tiles="3,2"/>
    <set mask="010-111-011" tiles="4,2"/>
    <set mask="010-111-010" tiles="3,3"/>
    <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
    <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
</Tileset>`
}

function getXML_Straw() {
    return `<Tileset id="X" path="Spooooky/AssetPack/Spooooky_Straw" sound="25">
  <set mask="x0x-111-x1x" sprites="Straw_top_a" tiles="6,5; 7,5; 8,5; 9,5"/>
  <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
  <set mask="x1x-011-x1x" sprites="Straw_left_a" tiles="5,6; 5,7; 5,8; 5,9"/>
  <set mask="x1x-110-x1x" sprites="Straw_right_a" tiles="10,6; 10,7; 10,8; 10,9"/>
  <set mask="x0x-111-110" sprites="Straw_top_a" tiles="1,10"/>
  <set mask="x0x-111-011" sprites="Straw_top_a" tiles="2,10"/>
  <set mask="110-111-x0x" tiles="1,11"/>
  <set mask="011-111-x0x" tiles="2,11"/>
  <set mask="x11-011-x10" sprites="Straw_left_a" tiles="10,1"/>
  <set mask="x10-011-x11" sprites="Straw_left_a" tiles="10,2"/>
  <set mask="11x-110-01x" sprites="Straw_right_a" tiles="11,1"/>
  <set mask="01x-110-11x" sprites="Straw_right_a" tiles="11,2"/>
  <set mask="x0x-111-010" sprites="Straw_top_a" tiles="8,11"/>
  <set mask="010-111-x0x" tiles="8,4"/>
  <set mask="01x-110-01x" sprites="Straw_right_a" tiles="4,8"/>
  <set mask="x10-011-x10" sprites="Straw_left_a" tiles="11,8"/>
  <set mask="x0x-011-x0x" sprites="Straw_top_a" tiles="1,6; 1,7; 1,8; 1,9"/>
  <set mask="x0x-111-x0x" sprites="Straw_top_a" tiles="2,6; 2,7; 2,8; 2,9"/>
  <set mask="x0x-110-x0x" sprites="Straw_top_a" tiles="3,6; 3,7; 3,8; 3,9"/>
  <set mask="x0x-010-x1x" sprites="Straw_top_a" tiles="6,1; 7,1; 8,1; 9,1"/>
  <set mask="x1x-010-x1x" sprites="Straw_left_a,Straw_right_a" tiles="6,2; 7,2; 8,2; 9,2"/>
  <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
  <set mask="x0x-010-x0x" sprites="Straw_top_a" tiles="1,1; 2,1; 1,2; 2,2"/>
  <set mask="x0x-011-x1x" sprites="Straw_top_a" tiles="4,4; 5,4; 4,5; 5,5"/>
  <set mask="x0x-110-x1x" sprites="Straw_top_a" tiles="10,4; 11,4; 10,5; 11,5"/>
  <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
  <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
  <set mask="x0x-011-x10" sprites="Straw_top_a" tiles="6,4"/>
  <set mask="x0x-110-01x" sprites="Straw_top_a" tiles="9,4"/>
  <set mask="x10-011-x0x" tiles="6,11"/>
  <set mask="01x-110-x0x" tiles="9,11"/>
  <set mask="111-111-110" tiles="1,3"/>
  <set mask="111-111-011" tiles="2,3"/>
  <set mask="110-111-111" tiles="1,4"/>
  <set mask="011-111-111" tiles="2,4"/>
  <set mask="010-111-111" tiles="7,4"/>
  <set mask="110-111-110" tiles="11,7"/>
  <set mask="111-111-010" tiles="7,11"/>
  <set mask="011-111-011" tiles="4,7"/>
  <set mask="011-111-110" tiles="4,3"/>
  <set mask="110-111-011" tiles="3,4"/>
  <set mask="110-111-010" tiles="3,1"/>
  <set mask="011-111-010" tiles="4,1"/>
  <set mask="010-111-110" tiles="3,2"/>
  <set mask="010-111-011" tiles="4,2"/>
  <set mask="010-111-010" tiles="3,3"/>
  <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
  <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
</Tileset>`
}

function getXML_StarjumpSolid() {
    return `  <Tileset id="X" path="Spooooky/AssetPack/Spooooky_StarjumpSolid" sound="32">
        <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
        <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
        <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>
        <set mask="x0x-111-110" tiles="1,10" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-111-011" tiles="2,10" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="110-111-x0x" tiles="1,11"/>
        <set mask="011-111-x0x" tiles="2,11"/>
        <set mask="x11-011-x10" tiles="10,1"/>
        <set mask="x10-011-x11" tiles="10,2"/>
        <set mask="11x-110-01x" tiles="11,1"/>
        <set mask="01x-110-11x" tiles="11,2"/>
        <set mask="x0x-111-010" tiles="8,11" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="010-111-x0x" tiles="8,4"/>
        <set mask="01x-110-01x" tiles="4,8"/>
        <set mask="x10-011-x10" tiles="11,8"/>
        <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
        <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
        <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
        <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
        <set mask="x0x-011-x10" tiles="6,4" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-110-01x" tiles="9,4" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x10-011-x0x" tiles="6,11"/>
        <set mask="01x-110-x0x" tiles="9,11"/>
        <set mask="111-111-110" tiles="1,3"/>
        <set mask="111-111-011" tiles="2,3"/>
        <set mask="110-111-111" tiles="1,4"/>
        <set mask="011-111-111" tiles="2,4"/>
        <set mask="010-111-111" tiles="7,4"/>
        <set mask="110-111-110" tiles="11,7"/>
        <set mask="111-111-010" tiles="7,11"/>
        <set mask="011-111-011" tiles="4,7"/>
        <set mask="011-111-110" tiles="4,3"/>
        <set mask="110-111-011" tiles="3,4"/>
        <set mask="110-111-010" tiles="3,1"/>
        <set mask="011-111-010" tiles="4,1"/>
        <set mask="010-111-110" tiles="3,2"/>
        <set mask="010-111-011" tiles="4,2"/>
        <set mask="010-111-010" tiles="3,3"/>
        <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
        <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
  </Tileset>`
}

function getXML_Starjump() {
    return `  <Tileset id="X" path="Spooooky/AssetPack/Spooooky_Starjump" sound="32">
        <set mask="x0x-111-x1x" tiles="6,5; 7,5; 8,5; 9,5" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x1x-111-x0x" tiles="6,10; 7,10; 8,10; 9,10"/>
        <set mask="x1x-011-x1x" tiles="5,6; 5,7; 5,8; 5,9"/>
        <set mask="x1x-110-x1x" tiles="10,6; 10,7; 10,8; 10,9"/>
        <set mask="x0x-111-110" tiles="1,10" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-111-011" tiles="2,10" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="110-111-x0x" tiles="1,11"/>
        <set mask="011-111-x0x" tiles="2,11"/>
        <set mask="x11-011-x10" tiles="10,1"/>
        <set mask="x10-011-x11" tiles="10,2"/>
        <set mask="11x-110-01x" tiles="11,1"/>
        <set mask="01x-110-11x" tiles="11,2"/>
        <set mask="x0x-111-010" tiles="8,11" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="010-111-x0x" tiles="8,4"/>
        <set mask="01x-110-01x" tiles="4,8"/>
        <set mask="x10-011-x10" tiles="11,8"/>
        <set mask="x0x-011-x0x" tiles="1,6; 1,7; 1,8; 1,9" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-111-x0x" tiles="2,6; 2,7; 2,8; 2,9" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-110-x0x" tiles="3,6; 3,7; 3,8; 3,9" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x0x-010-x1x" tiles="6,1; 7,1; 8,1; 9,1" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x1x-010-x1x" tiles="6,2; 7,2; 8,2; 9,2"/>
        <set mask="x1x-010-x0x" tiles="6,3; 7,3; 8,3; 9,3"/>
        <set mask="x0x-010-x0x" tiles="1,1; 2,1; 1,2; 2,2" sprites="Starjump_railingA,Starjump_railingB,Starjump_railingC,Starjump_railingD,Starjump_railingE,Starjump_railingF,Starjump_railingG"/>
        <set mask="x0x-011-x1x" tiles="4,4; 5,4; 4,5; 5,5" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-110-x1x" tiles="10,4; 11,4; 10,5; 11,5" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x1x-011-x0x" tiles="4,10; 5,10; 4,11; 5,11"/>
        <set mask="x1x-110-x0x" tiles="10,10; 11,10; 10,11; 11,11"/>
        <set mask="x0x-011-x10" tiles="6,4" sprites="Starjump_leftrailingA,Starjump_leftrailingB,Starjump_leftrailingC,Starjump_leftrailingD,Starjump_leftrailingE,Starjump_leftrailingF,Starjump_leftrailingG"/>
        <set mask="x0x-110-01x" tiles="9,4" sprites="Starjump_rightrailingA,Starjump_rightrailingB,Starjump_rightrailingC,Starjump_rightrailingD,Starjump_rightrailingE,Starjump_rightrailingF,Starjump_rightrailingG"/>
        <set mask="x10-011-x0x" tiles="6,11"/>
        <set mask="01x-110-x0x" tiles="9,11"/>
        <set mask="111-111-110" tiles="1,3"/>
        <set mask="111-111-011" tiles="2,3"/>
        <set mask="110-111-111" tiles="1,4"/>
        <set mask="011-111-111" tiles="2,4"/>
        <set mask="010-111-111" tiles="7,4"/>
        <set mask="110-111-110" tiles="11,7"/>
        <set mask="111-111-010" tiles="7,11"/>
        <set mask="011-111-011" tiles="4,7"/>
        <set mask="011-111-110" tiles="4,3"/>
        <set mask="110-111-011" tiles="3,4"/>
        <set mask="110-111-010" tiles="3,1"/>
        <set mask="011-111-010" tiles="4,1"/>
        <set mask="010-111-110" tiles="3,2"/>
        <set mask="010-111-011" tiles="4,2"/>
        <set mask="010-111-010" tiles="3,3"/>
        <set mask="padding" tiles="6,6; 7,6; 8,6; 9,6;  6,7; 6,8; 6,9;  9,7; 9,8; 9,9;  7,9; 8,9"/>
        <set mask="center" tiles="7,7; 8,7; 7,8; 8,8"/>
  </Tileset>`
}

//Copy the relevant animated tiles xml
function get_animTiles(path, delay, posX, posY, origX, origY) {
    // note: _id
    let sprite = path.replace("/","_")

    return `<sprite name="${sprite}" path="animatedTiles/Spooooky/AssetPack/${path}" delay="${delay}" posX="${posX}" posY="${posY}" origX="${origX}" origY="${origY}"/>`
}

function get_animTiles_Straw() {
    return `<sprite name="Straw_top_a" path="animatedTiles/Spooooky/AssetPack/Straw/top_a" delay="0.15" posX="0" posY="-7" origX="4" origY="4"/>
<sprite name="Straw_left_a" path="animatedTiles/Spooooky/AssetPack/Straw/left_a" delay="0.15" posX="-7" posY="0" origX="4" origY="4"/>
<sprite name="Straw_right_a" path="animatedTiles/Spooooky/AssetPack/Straw/right_a" delay="0.15" posX="7" posY="0" origX="4" origY="4"/>`
}

function get_animTiles_Starjump() {
    return `<sprite name="Starjump_railingA" path="animatedTiles/Spooooky/AssetPack/Starjump/railingA" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingB" path="animatedTiles/Spooooky/AssetPack/Starjump/railingB" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingC" path="animatedTiles/Spooooky/AssetPack/Starjump/railingC" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingD" path="animatedTiles/Spooooky/AssetPack/Starjump/railingD" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingE" path="animatedTiles/Spooooky/AssetPack/Starjump/railingE" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingF" path="animatedTiles/Spooooky/AssetPack/Starjump/railingF" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_railingG" path="animatedTiles/Spooooky/AssetPack/Starjump/railingG" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingA" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingA" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingB" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingB" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingC" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingC" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingD" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingD" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingE" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingE" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingF" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingF" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_leftrailingG" path="animatedTiles/Spooooky/AssetPack/Starjump/leftrailingG" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingA" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingA" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingB" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingB" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingC" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingC" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingD" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingD" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingE" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingE" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingF" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingF" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>
<sprite name="Starjump_rightrailingG" path="animatedTiles/Spooooky/AssetPack/Starjump/rightrailingG" delay="0.2" posX="0" posY="-8" origX="4" origY="4"/>`
}

//When Copy XML Info is pressed
function buttonClick(button) {
    info = tilesets[button.id.substring(7)]; // 7 is length of text "button_"
    if (info[3])
    {
        if(info[0] == "Straw")
        {
            navigator.clipboard.writeText(getXML_Straw());
        }
        else if(info[0] == "Starjump")
        {
            navigator.clipboard.writeText(getXML_Starjump());
        }
        else if(info[0] == "Starjump Solid")
        {
            navigator.clipboard.writeText(getXML_StarjumpSolid());
        }
        else
        {
            navigator.clipboard.writeText(getXML_animTiles(info[1], info[2], info[4]));
        }
    }
    else
    {
        navigator.clipboard.writeText(getXML(info[1], info[2]));
    }
    button.innerHTML = "Copied!";
    button.style.backgroundColor = "#e1bde0"
    reset_button(button)
}

//When Copy Animated Tile Info is pressed
function animTiles_buttonClick(animTiles_button) {
    info = tilesets[animTiles_button.id.substring(17)]; // 17 is length of text "animTiles_button_"
    if(info[0] == "Straw")
    {
        navigator.clipboard.writeText(get_animTiles_Straw());
    }
    else if(info[0] == "Starjump" || info[0] == "Starjump Solid")
    {
        navigator.clipboard.writeText(get_animTiles_Starjump());
    }
    else
    {
        navigator.clipboard.writeText(get_animTiles(info[4], info[5], info[6], info[7], info[8], info[9]));
    }

    animTiles_button.innerHTML = "Copied!";
    animTiles_button.style.backgroundColor = "#e1bde0"
    reset_animTiles_button(animTiles_button)
}

//Reset tiles button after a moment
async function reset_button(button) {
    await sleep(1000);
    button.innerHTML = "Copy XML info";
    button.style.backgroundColor = null;
}

//Reset anim tiles button after a moment
async function reset_animTiles_button(animTiles_button) {
    await sleep(1000);
    animTiles_button.innerHTML = "Copy animatedTiles info";
    animTiles_button.style.backgroundColor = null;
}

//Timer
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Build elements for each tileset
for (let i = 0; i < tilesets.length; i++) {
    info = tilesets[i];
    //div for that tileset
    let a = document.createElement("DIV-TILESET");

    //Linebreak
    let br = document.createElement("BR");

    //Tileset name
    let title = document.createElement("DIV-NAME");
    title.innerHTML = info[0];

    let b = document.createElement("DIV2");

    //Tileset preview image
    let image = document.createElement("IMG");
    image.setAttribute("src","./Images/tilesets/" + info[1] + ".png");
    b.append(image);
    b.append(br);

    //"Copy XML info" button
    let button = document.createElement("BUTTON");
    button.innerHTML = "Copy XML info";
    button.id = "button_" + i;
    button.setAttribute("onclick","buttonClick(this)");

    let c = document.createElement("BUTTONGROUP");
    c.append(button);

    //"Copy Animated Tiles" button if required
    if (info[3])
    {
        let animTiles_button = document.createElement("BUTTON");
        animTiles_button.innerHTML = "Copy animatedTiles info";
        animTiles_button.id = "animTiles_button_" + i;
        animTiles_button.setAttribute("onclick","animTiles_buttonClick(this)");
        c.append(animTiles_button);     
    }

    b.append(c);

    //Add elements
    a.append(title);
    a.append(b);

    document.getElementById('main-content').appendChild(a);
}
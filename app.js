function checkingTheBox() {
    $(".finished").toggle();
}

$(document).ready(function () {
    let slot1 = "";
    let slot2 = "";
    let capacity = 0;
    let allow = 1;
    let discoveries = 3;

    $("p").hide();
    $("#discoveries").html(discoveries);

    function discoveryUpdate() {
        discoveries = discoveries + 1;
        $("#discoveries").html(discoveries);
    }

    // SETTING SLOTS
    $(".liste").on("click", ".case", function () {
        let elem = $(this).html();

        if (allow == 1) {
            // Filling the slots
            if (slot1 == "") {
                $("#set1").html(elem);
                slot1 = $("#set1").html();
            } else {
                $("#set2").html(elem);
                slot2 = $("#set2").html();
                allow = 0;
            }
        }
        // Checking if both slots are full
        if (capacity > 1) {
            $(".alert").slideDown("fast");
        } else {}
        capacity = capacity + 1;
    });

    // EXECUTING FUSION
    $("#fusion").click(function () {
        slot1 = $("#set1").html().trim();
        slot2 = $("#set2").html().trim();
        let mix = slot1 + slot2;
        let product;
        let finished = "no";


        // /!\ FUSIONS /!\

        // ————— FIRST GEN (6) ———————

        // Metal + Wood = Sword
        if (mix == "MetalWood" || mix == "WoodMetal") {
            product = "Sword";
            $("#result").html(product);
            addingSet();
        } else {}

        // Wood + Rock = Catapult (finished)
        if (mix == "WoodRock" || mix == "RockWood") {
            product = "Catapult";
            finished = "yes";
            $("#result").html(product);
            addingSet();
        } else {}

        // Rock + Metal = Copper
        if (mix == "RockMetal" || mix == "MetalRock") {
            product = "Copper";
            $("#result").html(product);
            addingSet();
        } else {}

        // Wood + Wood = Shield
        if (mix == "WoodWood") {
            product = "Shield";
            $("#result").html(product);
            addingSet();
        } else {}

        // Metal + Metal = Armor
        if (mix == "MetalMetal") {
            product = "Armor";
            $("#result").html(product);
            addingSet();
        } else {}

        // Rock + Rock = Brick
        if (mix == "RockRock") {
            product = "Brick";
            $("#result").html(product);
            addingSet();
        } else {}


        // ————— SECOND GEN (5) ———————

        // Brick + Metal = Forge 
        if (mix == "BrickMetal" || mix == "BrickMetal") {
            product = "Forge";
            $("#result").html(product);
            addingSet();
        } else {}

        // Armor + Sword = Knight
        if (mix == "SwordArmor" || mix == "ArmorSword") {
            product = "Knight";
            $("#result").html(product);
            addingSet();
        } else {}

        // Copper + Metal = Wire
        if (mix == "CopperMetal" || mix == "MetalCopper") {
            product = "Wire";
            $("#result").html(product);
            addingSet();
        } else {}

        // Brick + Brick = House
        if (mix == "BrickBrick") {
            product = "House";
            $("#result").html(product);
            addingSet();
        } else {}

        // Sword + Sword = Duel (finished)
        if (mix == "SwordSword") {
            product = "Duel";
            finished = "yes";
            $("#result").html(product);
            addingSet();
        } else {}


        // ————— THIRD GEN (5) ———————

        // Knight + House = Castle
        if (mix == "KnightHouse" || mix == "HouseKnight") {
            product = "Castle";
            $("#result").html(product);
            addingSet();
        } else {}

        // Forge + Metal = Fire
        if (mix == "ForgeMetal" || mix == "MetalForge") {
            product = "Fire";
            $("#result").html(product);
            addingSet();
        } else {}

        // Knight + Shield = Defense (finished)
        if (mix == "KnightShield" || mix == "ShieldKnight") {
            product = "Defense";
            finished = "yes";
            $("#result").html(product);
            addingSet();
        } else {}

        // House + House = Village
        if (mix == "HouseHouse") {
            product = "Village";
            $("#result").html(product);
            addingSet();
        } else {}

        // Wire + Wood = Bow
        if (mix == "WireWood" || mix == "WoodWire") {
            product = "Bow";
            $("#result").html(product);
            addingSet();
        } else {}

        // ————— FOURTH GEN (2) ———————

        // Village + Castle = Kingdom
        if (mix == "VillageCastle" || mix == "CastleVillage") {
            product = "Kingdom";
            $("#result").html(product);
            addingSet();
        } else {}

        // Fire + Wood = Torch
        if (mix == "FireWood" || mix == "WoodFire") {
            product = "Torch";
            $("#result").html(product);                   
            addingSet();
        } else {}

        // Forge + Village = Blacksmith
        if (mix == "ForgeVillage" || mix == "VillageForge") {
            product = "Blacksmith";
            $("#result").html(product);
            addingSet();
        } else {}

        // --- Adding Set -----

        function addingSet() {
            if ($(".case").is(':contains("' + product + '")')) {
                $(".alrFound").slideDown("fast");
            } else {
                if (finished == "no") {
                $(".liste").append("<div class='case'>" + product + "</div>");
                discoveryUpdate();
            } else {
                $(".liste").append("<div class='case finished'>" + product + "</div>");
                discoveryUpdate();
            }
            }
        }
        $(".finished").hide();
    });

    // RESET BUTTON
    $("#reset").click(function () {
        $("#set1").html("");
        $("#set2").html("");
        $("#result").html("");
        slot1 = $("#set1").html();
        slot2 = $("#set2").html();
        $("p").slideUp();
        capacity = 0;
        allow = 1;
    });


});
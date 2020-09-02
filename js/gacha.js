// All Servant Icons Source: https://fategrandorder.fandom.com/wiki/Servant_List_by_ID
// All CE Icons Source: https://fategrandorder.fandom.com/wiki/Craft_Essence_List/By_ID

/* 
    Future Changes
    - style the banner selector
    - account for perm ces and servant on rateup
    - favicon
    - random banner function
    - upload it to the web
    - individual rate-up days (Add dropdown menu + change gacha logic)
*/

/*
    Steps to add new banner: 
    1. Add choice to HTML list
    2. Add function to gachaList.js (include banner img)
    3. Add function to rateupBanners.js
    4. Add images to imageDictionary.js
    5. Download assets 
    6. Test
*/

class Gacha {
    contructor ()
    {
    }
    
    initiateMultiRoll () // This function is called when the "Multi Roll" button is pressed, has guaranteed servant and guaranteed 4*
    { 
        let currentRoll = new SingleRoll ("roll1"); 
        let servantPulled = false; // For the purpose of "guaranteed servant"
        let fourStarPulled = false; // For the purpose of "guaranteed 4*"

        this.rollSetup (false);

        for (let i=0; i<10; i++)
        {
            if (currentRoll.rollID == "roll9") this.checkGuaranteedServant (currentRoll, servantPulled); // Roll 9 check for servant
            else if (currentRoll.rollID == "roll10") this.checkGuaranteed4Star (currentRoll, fourStarPulled); // Roll 10 check for 4 star
            else // A regular roll with no gimmicks
            {
                currentRoll.rollType = this.determineServantOrCE (gachaRates);
                currentRoll.rollRarity = this.determineRarity (currentRoll.rollType, gachaRates);
            }
            // Rateup and outcome are determined the same way regardless of the guarantees 
            currentRoll.rateup = this.determineRateup (currentRoll.rollType, currentRoll.rollRarity, banner, gachaRates);
            currentRoll.outcome = this.determineRollOutcome (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup, banner);
            
            // Checks for 4-star and servant pulls for the purpose of the guarantees
            if (currentRoll.checkFourStarPulled (currentRoll.rollRarity, fourStarPulled)) fourStarPulled = true;
            if (currentRoll.checkServantPulled (currentRoll.rollType, servantPulled)) servantPulled = true;

            stats.updateAllStats (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup);
            this.visualUpdate (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup, currentRoll.outcome, currentRoll.rollID);
            currentRoll.rollID = this.incrementRollID (currentRoll.rollID);
        }
        animation.scrollToBottom (); 
    }

    initiateSingleRoll () // This function is called when the "Single Roll" button is pressed, no guarantees
    { 
        let currentRoll = new SingleRoll ("roll11"); 
        this.rollSetup (true);

        currentRoll.rollType = this.determineServantOrCE (gachaRates);
        currentRoll.rollRarity = this.determineRarity (currentRoll.rollType, gachaRates);
        currentRoll.rateup = this.determineRateup (currentRoll.rollType, currentRoll.rollRarity, banner, gachaRates);
        currentRoll.outcome = this.determineRollOutcome (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup, banner);

        stats.updateAllStats (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup);
        this.visualUpdate (currentRoll.rollType, currentRoll.rollRarity, currentRoll.rateup, currentRoll.outcome, currentRoll.rollID);
        animation.scrollToBottom (); 
    }

    rollSetup (isSingleRoll) // This function is called before every single/multi roll
    { 
        console.clear ();
        setTimeout (() => { console.log(); }, 500); // Slight delay between rolls
        stats.updateStatsDisplay (stats); // Updates BB stats 
        
        // Toggles between single/multi roll display
        this.toggleRollDisplay (isSingleRoll);
    }

    visualUpdate (rollType, rollRarity, rateup, outcome, rollID) // Performs required visual updates (via CSS) post roll calculations
    {
        this.displayRollToConsole (rollType, rollRarity, rateup, outcome);
        this.rollImageUpdate (rollRarity, outcome, rollID); // Displays icons for the roll
        stats.updateStatsDisplay (); // Updates BB stats visually
    }

    displayRollToConsole (rollType, rollRarity, rateup, outcome)
    {
        console.log (`${rollType}\n${rollRarity}*\nrateup:${rateup}\n${outcome}`); // Outputs properties of each roll to console for debugging
    }

    determineServantOrCE (gachaRates) // Determines whether roll is a servant or ce - returns 'servant' or 'ce'
    { 
        let randomOutput = gachaRates.servantOrCE [(Math.round(Math.random() * (gachaRates.servantOrCE.length - 1)))]; // Can be 's' or 'c'

        if (randomOutput == "s") return "servant";
        else return "ce";
    }

    determineRarity (type, gachaRates) // Determines whether a roll is 5*, 4*, 3* - returns 3, 4, 5
    { 
        if (type == "servant") return gachaRates.servantRarity [(Math.round(Math.random() * (gachaRates.servantRarity.length - 1)))];
        else return gachaRates.ceRarity [(Math.round(Math.random() * (gachaRates.ceRarity.length - 1)))];
    }

    determineRateup (type, rarity, bannerObj, gachaRates) // Determines whether a roll is rateup - returns true or false
    { 
        // 3* Servants
        if (rarity == 3 && bannerObj.rateupSplit3 == 1 && type == "servant") return gachaRates.rateup3Servant_split1 [(Math.round(Math.random() * (gachaRates.rateup3Servant_split1.length - 1)))];
        else if (rarity == 3 && bannerObj.rateupSplit3 == 2 && type == "servant") return gachaRates.rateup3Servant_split2 [(Math.round(Math.random() * (gachaRates.rateup3Servant_split2.length - 1)))];
        else if (rarity == 3 && bannerObj.rateupSplit3 >= 3 && type == "servant") return gachaRates.rateup3Servant_split3 [(Math.round(Math.random() * (gachaRates.rateup3Servant_split3.length - 1)))];

        // 4* Star servant
        else if (rarity == 4 && bannerObj.rateupSplit4 == 1 && type == "servant") return gachaRates.rateup4Servant_split1 [(Math.round(Math.random() * (gachaRates.rateup4Servant_split1.length - 1)))];
        else if (rarity == 4 && bannerObj.rateupSplit4 == 2 && type == "servant") return gachaRates.rateup4Servant_split2 [(Math.round(Math.random() * (gachaRates.rateup4Servant_split2.length - 1)))];
        else if (rarity == 4 && bannerObj.rateupSplit4 >= 3 && type == "servant") return gachaRates.rateup4Servant_split3 [(Math.round(Math.random() * (gachaRates.rateup4Servant_split3.length - 1)))];

        // 5* Servants
        else if (rarity == 5 && bannerObj.rateupSplit5 == 1 && type == "servant") return gachaRates.rateup5Servant_split1 [(Math.round(Math.random() * (gachaRates.rateup5Servant_split1.length - 1)))];
        else if (rarity == 5 && bannerObj.rateupSplit5 == 2 && type == "servant") return gachaRates.rateup5Servant_split2 [(Math.round(Math.random() * (gachaRates.rateup5Servant_split2.length - 1)))];
        else if (rarity == 5 && bannerObj.rateupSplit5 >= 3 && type == "servant") return gachaRates.rateup5Servant_split3 [(Math.round(Math.random() * (gachaRates.rateup5Servant_split3.length - 1)))];

        // 3* CEs
        else if (rarity == 3 && bannerObj.rateupSplit3CE == 1 && type == "ce") return gachaRates.rateup3CE [(Math.round(Math.random() * (gachaRates.rateup3CE.length - 1)))];

        // 4* CEs
        else if (rarity == 4 && bannerObj.rateupSplit4CE == 1 && type == "ce") return gachaRates.rateup4CE [(Math.round(Math.random() * (gachaRates.rateup4CE.length - 1)))];

        // 5* CEs    
        else if (rarity == 5 && bannerObj.rateupSplit5CE == 1 && type == "ce") return gachaRates.rateup5CE [(Math.round(Math.random() * (gachaRates.rateup5CE.length - 1)))];
        else return false;
    }

    determineRollOutcome (type, rarity, rateup, bannerObj) // Determines final outcome of the roll - returns name of servant/ce
    { 
        if (type == "ce") // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ CEs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        {   
            if (rateup) // Rateup
            {
                if (rarity == 5) return bannerObj.rateup5StarsCE [(Math.round(Math.random() * (bannerObj.rateup5StarsCE.length - 1)))]; // Rateup 5 star ce 
                else if (rarity == 4) return bannerObj.rateup4StarsCE [(Math.round(Math.random() * (bannerObj.rateup4StarsCE.length - 1)))]; // Rateup 4 star ce
                else return bannerObj.rateup3StarsCE [(Math.round(Math.random() * (bannerObj.rateup3StarsCE.length - 1)))]; // Rateup 3 star ce
            }
            else // Non rateup
            {
                if (rarity == 5) return perm5StarCE [(Math.round(Math.random() * (perm5StarCE.length - 1)))]; // Perm pool 5 star ce
                else if (rarity == 4) return perm4StarCE [(Math.round(Math.random() * (perm4StarCE.length - 1)))]; // Perm pool 4 star ce  
                else return perm3StarCE [(Math.round(Math.random() * (perm3StarCE.length - 1)))]; // Perm pool 3 star ce
            }
        }
        else // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Servants ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        {
            if (rateup) // Rateup
            {
                if (rarity == 5) return bannerObj.rateup5Stars [(Math.round(Math.random() * (bannerObj.rateup5Stars.length - 1)))]; // Rateup 5 star servant
                else if (rarity == 4) return bannerObj.rateup4Stars [(Math.round(Math.random() * (bannerObj.rateup4Stars.length - 1)))]; // Rateup 4 star servant
                else return bannerObj.rateup3Stars [(Math.round(Math.random() * (bannerObj.rateup3Stars.length - 1)))]; // Rateup 3 star servant
            }
            else // Non rateup
            {
                if (bannerObj.enableStoryLocked) // Story Locked 
                {
                    if (rarity == 5) return perm5StarUnlocked [(Math.round(Math.random() * (perm5StarUnlocked.length - 1)))]; // Perm pool (story locked) 5 star servant 
                    else if (rarity == 4) return perm4StarUnlocked [(Math.round(Math.random() * (perm4StarUnlocked.length - 1)))]; // Perm pool (story locked) 4 star servant
                    else return perm3StarUnlocked [(Math.round(Math.random() * (perm3StarUnlocked.length - 1)))];// Perm pool (story locked) 3 star servant
                }
                else // Non Story Locked
                {
                    if (rarity == 5) return perm5Star [(Math.round(Math.random() * (perm5Star.length - 1)))]; // Perm pool 5 star servant 
                    else if (rarity == 4) return perm4Star [(Math.round(Math.random() * (perm4Star.length - 1)))]; // Perm pool 4 star servant
                    else return perm3Star [(Math.round(Math.random() * (perm3Star.length - 1)))];// Perm pool 3 star servant
                }
                
            }
        }
    }

    checkGuaranteedServant (currentRoll, servantPulled) // Checks if a servant has been rolled
    {
        if (!servantPulled) // At roll #9, servant guarantee is checked
        {
            currentRoll.rollType = "servant"; // Guarantees at least one servant
            currentRoll.rollRarity = this.determineRarity (currentRoll.rollType);
        }
        else 
        {
            currentRoll.rollType = this.determineServantOrCE (gachaRates);
            currentRoll.rollRarity = this.determineRarity (currentRoll.rollType, gachaRates);
        }
    }

    checkGuaranteed4Star (currentRoll, fourStarPulled) // Checks if a 4-star card has been rolled
    {
        if (!fourStarPulled) // At roll #10, guranteed 4* ce is checked
        {
            currentRoll.rollType = "ce"; // Guarantees a 4* ce as the last draw
            currentRoll.rollRarity = 4;
        }
        else
        {
            currentRoll.rollType = this.determineServantOrCE (gachaRates);
            currentRoll.rollRarity = this.determineRarity (currentRoll.rollType, gachaRates);
        }
    }

    rollImageUpdate (rollRarity, outcome, rollID) // Performs visual updates of the rolls and the BB stats
    { 
        imageLocation = determineImageLocation (outcome);
        this.displayRollOutcomeImage (rollID, rollRarity); // Displays results to webpage
    }

    displayRollOutcomeImage (rollID, rollRarity) // Changes HTML elements to display roll data (img/background/border)
    { 
        let img = document.getElementById(rollID);
        img.src = imageLocation; // changes img src to be the correct icon, imageLocation accessed from imageDictionary.js

        if (rollRarity == 5)
        {
            img.style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
            img.style.borderImageSlice = "1";
        }
        else if (rollRarity == 4) img.style.border = "thick solid gold";
        else img.style.border = "thick solid silver";
    }

    toggleRollDisplay (singleOrMulti) // Switches between displaying a single roll or a multi roll
    {
        if (singleOrMulti) // Toggles CSS display for single roll
        {
            document.getElementById("rollDisplay").style.display = "none";
            document.getElementById("singleRoll").style.display = "flex";
        }
        else // Toggles CSS display for multi roll
        {
            document.getElementById("rollDisplay").style.display = "flex";
            document.getElementById("singleRoll").style.display = "none";
        }
    }

    incrementRollID (rollID) // Increments the roll ID by one for the purpose of flexbox display
    { 
        let incrementedCount = (parseInt(rollID.slice(4)) + 1); // count is the nth + 1 roll in the current 10 roll
        return rollID = `roll${incrementedCount}`;
    }
}

class SingleRoll {
    constructor (ID)
    {
        this.rollType = null; // Can be 'servant' or 'ce'
        this.rollRarity = null; // Can be 5, 4, 3
        this.rateup = null; // can be true or false
        this.outcome = null; // Contains the name of the final outcome
        this.rollID = ID; // Value changes with each roll ~ roll1, roll2, roll3, etc... used to access HTML elements
    }

    checkFourStarPulled (rollRarity, fourStarPulled)
    {
        if ((rollRarity == 4 && fourStarPulled == false) || (rollRarity == 5 && fourStarPulled == false)) return true;
        else return false;
    }

    checkServantPulled (rollType, servantPulled)
    {
        if (rollType == "servant" && servantPulled == false) return true;
        else return false;
    }
}

// Object Declarations
let banner = new BannerContent ();
let animation = new Animations ();
let gachaRates = new GachaSpread ();
let stats = new BBStats (); 
let rateupDisplay = new JeanneDisplay ();
let gachaObj = new Gacha ();
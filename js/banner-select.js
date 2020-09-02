// Alters the current banner image and changes rateup arrays according to user's gacha selection

function bannerSelect () {
    let currentBannerSelection = document.getElementById("bannerChoice"); 
    let currentBannerImage = document.getElementById("bannerImage");

    switch (currentBannerSelection.value) {

        case "story1": // Story banner without story-locked units
        {
            currentBannerImage.src = "images/banners/StorySummonBanner.png";
            banner.storyVanilla ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "story2": // Story banner with story-locked units (WIP)
        {
            currentBannerImage.src = "images/banners/StorySummonBanner.png";
            banner.storyLocked ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-1": // Summer 3 (Jarcher, Ushi assassin, Ibaraki Lancer)
        {
            currentBannerImage.src = "images/banners/Summer3-1Banner.png";
            banner.summer3_1 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-2": // Summer 3 (Dantes, Cas Gil, Robin)
        {
            currentBannerImage.src = "images/banners/Summer3-2Banner.png";
            banner.summer3_2 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "summer3-3": // Summer 3 (Summer BB, MHXX, Saber Medb)
        {
            currentBannerImage.src = "images/banners/Summer3-3Banner.png";
            banner.summer3_3 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "14M": // 14M Downloads Campaign (Archuria, Ruler Martha, Caster Marie)
        {
            currentBannerImage.src = "images/banners/14MDownloadBanner.png";
            banner.downloads14M ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "fate/zero": // Fate Accel Zero 
        {
            currentBannerImage.src = "images/banners/FateZeroBanner.png";
            banner. fateZero ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "gilfest": // 
        {
            currentBannerImage.src = "images/banners/GilfestBanner.png";
            banner.gilFest ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "halloween3": // 
        {
            currentBannerImage.src = "images/banners/Halloween3Banner.png";
            banner. halloween3 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "halloween4": // 
        {
            currentBannerImage.src = "images/banners/Halloween4Banner.png";
            banner. halloween4 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "15M": // 
        {
            currentBannerImage.src = "images/banners/15MDownloadBanner.png";
            banner. downloads15M ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "christmas3": // 
        {
            currentBannerImage.src = "images/banners/Christmas3Banner.png";
            banner. christmas3 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "lostbelt3-1": // 
        {
            currentBannerImage.src = "images/banners/Lostbelt3-1Banner.png";
            banner. lostbelt3_1 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "lostbelt3-2": // 
        {
            currentBannerImage.src = "images/banners/Lostbelt3-2Banner.png";
            banner. lostbelt3_2 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }
        case "christmas4": // 
        {
            currentBannerImage.src = "images/banners/Christmas4Banner.png";
            banner. christmas4 ();
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }

        default: // Default is story banner
        {
            currentBannerImage.src = "images/banners/StorySummonBanner.png";
            banner.storyVanilla ();
            console.log(document.getElementById("bannerChoice").value);
            rateupDisplay.jeanneDisplayUpdate (true);
            break;
        }

    }
    
}
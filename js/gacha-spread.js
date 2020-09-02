// Arrays to store gacha rates
// DO NOT CHANGE UNLESS GACHA RATES CHANGE (4th Anniversary)

class GachaSpread {
    constructor ()
    {
       this.servantOrCE = ["s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "s", "c", "c", 
                   "c", "c", "c", "c", "c", "c", "c","c", "c", "c", "c", "c"]; // Servant/CE Rate -> 11/14 (44%/56%)
        this.ceRarity = [5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]; // CE Rarity Rates -> 1/4/10 (4%/12%/40%)
        this.servantRarity = [5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
                     3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
                     3, 3, 3, 3]; // Servant Rarity Rates -> 1/3/40 (1%/3%/40%)

        this.rateup5CE = [true, true, true, true, true, true, true, false, false, false]; // Rateup chance -> 7/3 (70%/30%)
        this.rateup4CE = [true, false, false]; // Rateup chance -> 1/2 (33%/66%)
        this.rateup3CE = [true, false, false, false, false]; // Rateup chance -> 1/4 (20%/80%)

        this.rateup5Servant_split1 = [true, true, true, true, true, true, true, false, false, false]; // Rateup chance -> 7/3 (70%/30%)
        this.rateup5Servant_split2 = [true, true, true, true, false]; // Rateup chance -> 8/2 (80%/20%)
        this.rateup5Servant_split3 = [true, true, true, true, false]; // Rateup chance -> 8/2 (80%/20%)
        
        this.rateup4Servant_split1 = [true, false] // Rateup chance -> 1/1 (50%/50%)
        this.rateup4Servant_split2 = [true, true, true, true, false] // Rateup chance -> 4/1 (80%/20%)
        this.rateup4Servant_split3 = [true, true, true, true, true, true, true, false, false, false] // Rateup chance -> 7/3 (70%/30%)
        
        this.rateup3Servant_split1 = [true, false, false, false, false, false, false, false, false, false] // Rateup chance -> 1/9 (10%/90%)
        this.rateup3Servant_split2 = [true, false, false, false, false] // Rateup chance -> 1/4 (20%/80%)
        this.rateup3Servant_split3 = [true, true, true, false, false, false, false, false, false, false] // Rateup chance -> 3/7 (30%/70%)
    }
}
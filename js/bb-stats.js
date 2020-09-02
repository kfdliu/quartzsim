// Contains all the code necessary for tracking/calculating/displaying BB Stats

class BBStats {
    constructor ()
    {
        this.totalRolls = 0; // counts total rolls
        this.countServant = 0; // counts total servant rolls
        this.countCE = 0; // counts total craft essence rolls
        this.count5Star = 0; // counts total 5-stars rolled
        this.count4Star = 0; // counts total 4-stars rolled
        this.count3Star = 0; // counts total 3-stars rolled
        this.countR5Star = 0; // counts rateup 5-stars rolled
        this.countS5Star = 0; // counts 5-star spooks rolled
        this.countR4Star = 0; // counts rateup 4-stars rolled
        this.countS4Star = 0; // counts 4-star spooks rolled
        this.quartzCount = 0; // counts number of quartz spent
        this.moneyCount = 0; // counts cost of quartz spent (most efficient packs)

        this.servantPercent = 0; // Percentage of total rolls that are servants
        this.cePercent = 0; // Percentage of total rolls that are craft essences
        this.count5StarPercent = 0; // Percentage of total rolls that are 5-Star
        this.count4StarPercent = 0; // Percentage of total rolls that are 4-Star
        this.count3StarPercent = 0; // Percentage of total rolls that are 3-Star
    }

    updateAllStats (rollType, rollRarity, rateup) // Calls all the functions that update stat values (not display)
    {
        this.incrementStats (rollType, rollRarity, rateup); // Updates the BB stats (non-percentage) values (not display)
        this.moneyCount = stats.calcMoney (); // Calculates total cost of quartz spent
        this.calcPercentages (); // Calculates the stats that involve percentages
    }

    incrementStats (rollType, rollRarity, rateup) // Changes values of variables in stats.js
    { 
        this.totalRolls++;
        this.quartzCount += 3;

        if (rollType == "servant") // Servants
        {
            this.countServant++; // 5 Star servant
            if (rollRarity == 5)
            {
                this.count5Star++;
                if (rateup) this.countR5Star++;
                else this.countS5Star++;
            }
            else if (rollRarity == 4) // 4 Star servant
            {
                this.count4Star++;
                if (rateup) this.countR4Star++;
                else this.countS4Star++;
            }
            else this.count3Star++; // 3 Star servant
        }
        else // CEs
        {
            this.countCE++;
            if (rollRarity == 5) this.count5Star++; // 5 Star ce
            else if (rollRarity == 4) this.count4Star++; // 4 star ce
            else this.count3Star++; // 3 star ce
        }
    }
    
    calcPercentages () { // Calculates percentages for stats display
        if (this.totalRolls == 0)  // Set stats as 0 instead of NaN when no stats exist
        {
            this.servantPercent = 0;
            this.cePercent = 0;
            this.count5StarPercent = 0;
            this.count4StarPercent = 0;
            this.count3StarPercent = 0;
        }

        else // When stats exist, calculations occur for percentages
        {
            this.servantPercent = (this.countServant / this.totalRolls) * 100;
            this.cePercent = (this.countCE / this.totalRolls) * 100;
            this.count5StarPercent = (this.count5Star / this.totalRolls) * 100;
            this.count4StarPercent = (this.count4Star / this.totalRolls) * 100;
            this.count3StarPercent = (this.count3Star / this.totalRolls) * 100;
        }
    }
    
    calcMoney () { // Calculates lowest possible cost for the quartz amount used
        
        /* Current NA Rates (USD)
        1 Purchased Quartz: $0.99
        4 Purchased Quartz + 1 Bonus Quartz: $3.99 ~ 5
        12 Purchased Quartz + 6 Bonus Quartz: $11.99 ~ 18
        25 Purchased Quartz + 16 Bonus Quartz: $23.99 ~ 41
        42 Purchased Quartz + 34 Bonus Quartz: $39.99 ~ 76
        86 Purchased Quartz + 81 Bonus Quartz: $79.99 ~ 167
        */
    
        let currentQuartz = this.quartzCount; // Temporary var only for keeping track of quartz accounted for in this function
        let currentTotal = 0; // A temporary var that holds the current total cost of the quartz in the function
    
        while (currentQuartz >= 167) // Calculates number of $79.99 packs
        {
            currentTotal += 79.99;
            currentQuartz -= 167;
        }
        while (currentQuartz >= 76) // Calculates number of $39.99 packs
        {
            currentTotal += 39.99;
            currentQuartz -= 76;
        }
        while (currentQuartz >= 41) // Calculates number of $23.99 packs
        {
            currentTotal += 23.99;
            currentQuartz -= 41;
        }
        while (currentQuartz >= 18) // Calculates number of $11.99 packs
        {
            currentTotal += 11.99;
            currentQuartz -= 18;
        }
        while (currentQuartz >= 5) // Calculates number of $3.99 packs
        {
            currentTotal += 3.99;
            currentQuartz -= 5;
        }
        while (currentQuartz >= 1) // Calculates number of $0.99 packs
        {
            currentTotal += 0.99;
            currentQuartz -= 1;
        }
    
        return currentTotal;
    }
    
    updateStatsDisplay () { // Updates HTML elements to display stats  
        document.getElementById("rollStats").innerHTML = 
                "Total Rolls:   " + this.totalRolls + "<br>" +
                "<hr>" +
                "Serv: " + this.countServant + " / " + this.servantPercent.toFixed(2) + "%<br>" +
                "CE: " + this.countCE + " / " + this.cePercent.toFixed(2) + "%<br>" +
                "5-Star: " + this.count5Star + " / " + this.count5StarPercent.toFixed(2) + "%<br>" +
                "4-Star: " + this.count4Star + " / " + this.count4StarPercent.toFixed(2) + "%<br>" +
                "3-Star: " + this.count3Star + " / " + this.count3StarPercent.toFixed(2) + "%<br><br>" +
                "Servant-Only Stats: " + "<br>" +
                "<hr>" +
                "Rate-Up 5*: " + this.countR5Star  + "<br>" + 
                "Spook/Perm 5*: " + this.countS5Star + "<br>" +
                "Rate-Up 4*: " + this.countR4Star + "<br>" +
                "Spook/Perm 4*: " + this.countS4Star + "<br><br>" +
                "Whale Status: " + "<br>" +
                "<hr>" +
                "Quartz Spent: " + this.quartzCount + "<br>" + 
                "$$$ Cost: $" + this.moneyCount.toFixed(2);
    } 

    clearStats() { // Upon clicking BB, stats are reset back to 0, also responsible for BB animation
        this.totalRolls = 0; // counts total rolls
        this.countServant = 0; // counts total servant rolls
        this.countCE = 0; // counts total craft essence rolls
        this.count5Star = 0; // counts total 5-stars rolled
        this.count4Star = 0; // counts total 4-stars rolled
        this.count3Star = 0; // counts total 3-stars rolled
        this.countR5Star = 0; // counts rateup 5-stars rolled
        this.countS5Star = 0; // counts 5-star spooks rolled
        this.countR4Star = 0; // counts rateup 4-stars rolled
        this.countS4Star = 0; // counts 4-star spooks rolled
        this.quartzCount = 0; // counts number of quartz spent
        this.moneyCount = 0; // counts cost of quartz spent (most efficient packs)

        this.servantPercent = 0; // Percentage of total rolls that are servants
        this.cePercent = 0; // Percentage of total rolls that are craft essences
        this.count5StarPercent = 0; // Percentage of total rolls that are 5-Star
        this.count4StarPercent = 0; // Percentage of total rolls that are 4-Star
        this.count3StarPercent = 0; // Percentage of total rolls that are 3-Star
    
        animation.bbHop(); // Animation
        this.updateStatsDisplay (); // Changes HTML elements to display new stats
    }
}
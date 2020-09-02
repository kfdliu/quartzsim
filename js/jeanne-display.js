class JeanneDisplay {
    constructor ()
    {
        this.flexBox1 = document.getElementById("rateupShowcaseImages"); 
        this.flexBox2 = document.getElementById("rateupShowcaseText");
        this.section = document.createElement ("p");

        this.currentDisplayPage == 1;
        this.jeanneDisplayUpdate (true);
    }

    jeanneDisplayUpdate (isNewBanner) // Runs each time Jeanne is clicked -> goes to next page
    {
        if (isNewBanner) 
        {
            this.currentDisplayPage = 1;
            this.displayRateupSection (banner.rateup5Stars, "5-Star Servants:");
        }
        else 
        {
            if (this.currentDisplayPage == 1) this.displayRateupSection (banner.rateup4Stars, "4-Star Servants:");
            else if (this.currentDisplayPage == 2) this.displayRateupSection (banner.rateup3Stars, "3-Star Servants:");
            else if (this.currentDisplayPage == 3) this.displayRateupSection (banner.rateup5StarsCE, "5-Star CEs:");
            else if (this.currentDisplayPage == 4) this.displayRateupSection (banner.rateup4StarsCE, "4-Star CEs:");
            else if (this.currentDisplayPage == 5) this.displayRateupSection (banner.rateup3StarsCE, "3-Star CEs:");
            else this.displayRateupSection (banner.rateup5Stars, "5-Star Servants:");

            if (this.currentDisplayPage == 6) this.currentDisplayPage = 1; // When Jeanne Display reaches the last page, continues from beginning
            else this.currentDisplayPage++;

            animation.jeanneTilt ();
        }
    }

    displayRateupSection (rateupArray, sectionName)
    {
        this.adjustHeight (rateupArray.length);
        
        this.flexBox1.innerHTML = "";
        this.flexBox2.innerHTML = "";
        
        this.section.innerHTML = sectionName;
        this.flexBox2.appendChild (this.section);

        for (let i = 0; i < rateupArray.length; i++)
        {
            let img, p;
            this.flexBox1.appendChild (img = document.createElement("img"));
            this.flexBox2.appendChild (p = document.createElement("p"));
            img.src = determineImageLocation (rateupArray[i]);
            p.innerHTML = `> ${rateupArray[i]}`;
        }
        this.checkFillEmpty (rateupArray.length);
    }

    adjustHeight (numberOfRateups) // Adjusts the min-height of div with id="rateupShowcase" based on how many rateups there are in a given section
    {
        if (numberOfRateups == 1) document.getElementById("rateupShowcase").style.minHeight = "10%";
        else if (numberOfRateups == 2) document.getElementById("rateupShowcase").style.minHeight = "17%";
        else if (numberOfRateups == 3) document.getElementById("rateupShowcase").style.minHeight = "25%";
        else if (numberOfRateups == 4) document.getElementById("rateupShowcase").style.minHeight = "30%";
        else if (numberOfRateups == 5) document.getElementById("rateupShowcase").style.minHeight = "35%";
        else document.getElementById("rateupShowcase").style.minHeight = "40%";
    }

    checkFillEmpty (numberOfRateups)
    {
        if (numberOfRateups == 0)
        {
            this.flexBox1.innerHTML = "";
            this.flexBox2.innerHTML = "";

            let img, p;
            this.flexBox1.appendChild (img = document.createElement ("img"));
            this.flexBox2.appendChild (p = document.createElement("p"));

            img.src = "images/fgo_rateup_jeanne.webp";
            p.style.fontSize = "13px";
            p.innerHTML = "nothin' to see here . . .";

            document.getElementById("rateupShowcase").style.minHeight = "10%";
        }
    }
}
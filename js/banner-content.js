 // Don't know the rate on split CEs right now :/ ~ Subject to change

class BannerContent {
    constructor ()
    {
        // All the values below are subject to change from each banner
        this.rateupSplit5 = 0; // # of 5* on rateup (1/2/3) 
        this.rateupSplit4 = 0; // # of 4* on rateup (1/2/3)
        this.rateupSplit3 = 0; // # of 3* on rateup (1/2/3)
        
        this.rateupSplit5CE = 0; // # of 5* CE on rateup
        this.rateupSplit4CE = 0; // # of 4* CE on rateup
        this.rateupSplit3CE = 0; // # of 3* CE on rateup
        
        this.rateup5Stars = []; // Available pool of rateup 5*
        this.rateup4Stars = []; // Available pool of rateup 4*
        this.rateup3Stars = []; // Available pool of rateup 3*
        
        this.rateup5StarsCE = []; // Available pool of rateup 5* CE
        this.rateup4StarsCE = []; // Available pool of rateup 4* CE
        this.rateup3StarsCE = []; // Available pool of rateup 3* CE

        this.enableStoryLocked = false;
    }

    setRateupSplit (s5, s4, s3, sc5, sc4, sc3, iStoryLocked) { // all the rateup split values
        this.rateupSplit5 = s5;
        this.rateupSplit4 = s4;
        this.rateupSplit3 = s3;
        this.rateupSplit5CE = sc5;
        this.rateupSplit4CE = sc4;
        this.rateupSplit3CE = sc3;
        this.enableStoryLocked = iStoryLocked;
    }

    // Each function below adjusts gacha rates according to each banner's rates
    // A change occurs when a banner is selected from the banner selection menu on the sim page

    storyVanilla () 
    { 
        this.setRateupSplit (0, 0, 0, 0, 0, 0, false); // No rateups

        this.rateup5Stars = [];
        this.rateup4Stars = [];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [];
        this.rateup4StarsCE = [];
        this.rateup3StarsCE = [];

        this.displayRateup ();
    }
    
    storyLocked ()
    {
        this.setRateupSplit (0, 0, 0, 0, 0, 0, true); // No rateups
    
        this.rateup5Stars = [];
        this.rateup4Stars = [];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [];
        this.rateup4StarsCE = [];
        this.rateup3StarsCE = [];

        this.displayRateup ();
    }
    
    summer3_1 ()
    {
        this.setRateupSplit (1, 2, 0, 1, 1, 1, false);
    
        this.rateup5Stars = [
            "Jeanne d'Arc (Archer)",
        ];
        this.rateup4Stars = [
            'Ibaraki Douji (Lancer)',
            'Ushiwakamaru (Assassin)'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Emerald Float'
        ];
        this.rateup4StarsCE = [
            'Storms and Waves'
        ];
        this.rateup3StarsCE = [
            'All Night Fever'
        ];

        this.displayRateup ();
    }
    
    summer3_2 ()
    {
        this.setRateupSplit (1, 1, 1, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Edmond Dantes'
        ];
        this.rateup4Stars = [
            'Gilgamesh (Caster)'
        ];
        this.rateup3Stars = [
            'Robin Hood'
        ];
    
        this.rateup5StarsCE = [
            'Hero on the Beach'
        ];
        this.rateup4StarsCE = [
            'Sunset Jam'
        ];
        this.rateup3StarsCE = [
            'Writing High'
        ];

        this.displayRateup ();
    }
    
    summer3_3 ()
    {
        this.setRateupSplit (1, 2, 0, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'BB (Summer)'
        ];
        this.rateup4Stars = [
            'Mysterious Heroine XX',
            'Queen Medb (Saber)'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Emerald Float',
            'Hero on the Beach'
        ];
        this.rateup4StarsCE = [
            'Storms and Waves',
            'Sunset Jam'
        ];
        this.rateup3StarsCE = [
            'All Night Fever',
            'Writing High'
        ];

        this.displayRateup ();
    }
    
    downloads14M ()
    {
        this.setRateupSplit (1, 2, 0, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Altria Pendragon (Archer)'
        ];
        this.rateup4Stars = [
            'Martha (Ruler)',
            'Marie Antoinette (Caster)'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Knights of Marines'
        ];
        this.rateup4StarsCE = [
            'Meat Wars'
        ];
        this.rateup3StarsCE = [
            "Shaved Ice (Void's Dust Flavor)"
        ];

        this.displayRateup ();
    }
    
    fateZero ()
    {
        this.setRateupSplit (3, 3, 3, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Altria Pendragon',
            'Iskandar',
            'Zhuge Liang (El Melloi II)'
        ];
        this.rateup4Stars = [
            'Lancelot',
            'Diarmuid Ua Duibhne (Saber)',
            'Emiya (Assassin)'
        ];
        this.rateup3Stars = [
            'Diarmuid Ua Duibhne',
            'Gilles de Rais',
            'Hassan of the Hundred Personas'
        ];
    
        this.rateup5StarsCE = [
            'Before Awakening',
            'Volumen Hydrargyrum'
        ];
        this.rateup4StarsCE = [
            'Innocent Maiden'
        ];
        this.rateup3StarsCE = [
            'Self Geass Scroll'
        ];

        this.displayRateup ();
    }

    gilFest ()
    {
        this.setRateupSplit (1, 1, 1, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Gilgamesh'
        ];
        this.rateup4Stars = [
            'Queen of Sheba'
        ];
        this.rateup3Stars = [
            'Gaius Julius Caesar'
        ];
    
        this.rateup5StarsCE = [
            'Gilgamesh in NY'
        ];
        this.rateup4StarsCE = [
            'Shining Skyscrapers'
        ];
        this.rateup3StarsCE = [
            'Show Time'
        ];

        this.displayRateup ();
    }

    halloween3 ()
    {
        this.setRateupSplit (0, 6, 0, 1, 1, 1, false);

        this.rateup5Stars = [];
        this.rateup4Stars = [
            'Osakabehime',
            'Elisabeth Bathory (Lancer)',
            'Carmilla',
            'Beserker of El-Dorado',
            'Assassin of Shinjuku',
            'Assassin of the Nightless City'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Trick of Treatment'
        ];
        this.rateup4StarsCE = [
            'Phantom Night'
        ];
        this.rateup3StarsCE = [
            'From Wonderland'
        ];

        this.displayRateup ();
    }

    halloween4 ()
    {
        this.setRateupSplit (1, 2, 0, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Sitonai'
        ];
        this.rateup4Stars = [
            'Assassin of Paraiso',
            'Ibaraki-Douji'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Welcome to ONILAND!!'
        ];
        this.rateup4StarsCE = [
            'Merely Red'
        ];
        this.rateup3StarsCE = [
            'Ashigara Brothers'
        ];

        this.displayRateup ();
    }

    downloads15M ()
    {
        this.setRateupSplit (1, 2, 1, 0, 0, 0, false);
    
        this.rateup5Stars = [
            'Abigail Williams'
        ];
        this.rateup4Stars = [
            'Caster of Okeanos',
            'Nezha'
        ];
        this.rateup3Stars = [
            'Robin Hood'
        ];
    
        this.rateup5StarsCE = [];
        this.rateup4StarsCE = [];
        this.rateup3StarsCE = [];

        this.displayRateup ();
    }

    christmas3 ()
    {
        this.setRateupSplit (3, 1, 3, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Ereshkigal',
            'Altera',
            'Enkidu'
        ];
        this.rateup4Stars = [
            'Medusa (Lancer)'
        ];
        this.rateup3Stars = [
            'Jaguar Man',
            'Ushiwakamaru',
            'Paracelsus von Hoheinheim'
        ];
    
        this.rateup5StarsCE = [
            'Starry Nights'
        ];
        this.rateup4StarsCE = [
            'Party Time'
        ];
        this.rateup3StarsCE = [
            'Snow Pirates'
        ];

        this.displayRateup ();
    }

    lostbelt3_1 ()
    {
        this.setRateupSplit (1, 2, 1, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Xiang Yu'
        ];
        this.rateup4Stars = [
            'Lanling Wang',
            'Qin Liangyu'
        ];
        this.rateup3Stars = [
            'Jing Ke'
        ];
    
        this.rateup5StarsCE = [
            'Duke of Flames'
        ];
        this.rateup4StarsCE = [
            'Beyond the Horizon'
        ];
        this.rateup3StarsCE = [
            'Belle of the Upper Echelons'
        ];

        this.displayRateup ();
    }

    lostbelt3_2 ()
    {
        this.setRateupSplit (1, 1, 1, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Shi Huang Di'
        ];
        this.rateup4Stars = [
            'Yu Meiren'
        ];
        this.rateup3Stars = [
            'Red Hare'
        ];
    
        this.rateup5StarsCE = [
            'Duke of Flames'
        ];
        this.rateup4StarsCE = [
            'Beyond the Horizon'
        ];
        this.rateup3StarsCE = [
            'Belle of the Upper Echelons'
        ];

        this.displayRateup ();
    }

    christmas4 ()
    {
        this.setRateupSplit (2, 2, 0, 1, 1, 1, false);
    
        this.rateup5Stars = [
            'Bradamante',
            'Quetzalcoatl'
        ];
        this.rateup4Stars = [
            'Martha',
            'Martha (Ruler)'
        ];
        this.rateup3Stars = [];
    
        this.rateup5StarsCE = [
            'Shvibzik Snow'
        ];
        this.rateup4StarsCE = [
            'Ring the Bell'
        ];
        this.rateup3StarsCE = [
            'Burning Live Seat'
        ];

        this.displayRateup ();
    }

    /* Template for new banner
    christmas4 ()
    {
        this.setRateupSplit (, false);
    
        this.rateup5Stars = [
            ''
        ];
        this.rateup4Stars = [
            ''
        ];
        this.rateup3Stars = [
            ''
        ];
    
        this.rateup5StarsCE = [
            ''
        ];
        this.rateup4StarsCE = [
            ''
        ];
        this.rateup3StarsCE = [
            ''
        ];

        this.displayRateup ();
    }
    */

    displayRateup () // Outputs the rateup servants and ces into the console
    {
        console.log ("Rateup 5*: " + this.rateup5Stars);
        console.log ("Rateup 4*: " + this.rateup4Stars);
        console.log ("Rateup 3*: " + this.rateup3Stars);
        console.log ("Rateup CEs: " + this.rateup5StarsCE + " / " + this.rateup4StarsCE + " / " + this.rateup3StarsCE);
        console.log ("Split-5*: " + this.rateupSplit5);
        console.log ("Split-4*: " + this.rateupSplit4);
        console.log ("Split-3*: " + this.rateupSplit3);
    }

}
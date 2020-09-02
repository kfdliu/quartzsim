# quartzsim
**Created by Davis Liu July/August 2020** 

**What is This?** \
This a simulator of the popular Japanese mobile game Fate/Grand Order's unit acquisition system (often referred to as the gacha system). Units obtained
in this manner are completely determined by chance according to documented acquisition rates for each individual possible result (servants and craft essences (CE)).
The source code is written in HTML, CSS, and Vanilla JavaScript.

**Why Did I Make This?** \
The game offers a limited amount of opportunities to obtain units without micro-transactions and I wanted to be able to test the system without spending real money. It was a good opportunity to learn how to code in Vanialla JavaScript as well.

**Current Features**:
- Single Rolls (1) & Multi Rolls (10)
  - The servant guarantee and 4-star or above card guarantee are implemented into the multi-roll
- Two Versions of the Story Banner (one contains all units available at the beginning of the game while the other includes all the servants locked behind story progression in the regular pool)
- The abilty to roll on all event banners available from August 2020 - December 2020 (currently totals to 13)
  - There are no seperate rate-up days, all servants that receive rate-up at least once during the individual event will be available to roll all at once (rate-up day seperation will come in the future)
  - To dynamically change the banner and featured units, select from the drop-down menu 
- A reset-able live stat tracker (hover over BB on the left-hand side) 
  - Tracks the following information about your rolls in the simulator:
    - Number of servants rolled (also includes percentage of total rolls)
    - Number of craft essences rolled (also includes percentage of total rolls)
    - Number of 5*/4*/3* cards rolled (also includes percentage of total rolls)
    - Number of rate-up/non-rateup 5*/4* servants rolled 
    - Number of saint quartz theoretically spent
    - Theoretical cost to purchase the amount of saint quartz used
  - Stats are reset by clicking on BB (purple hair girl on the left)
- Displays servants and craft essences on featured rate-up (hover over Jeanne (blond-haired girl) on the right-hand side)
  - Divided up into 6 sections (5* Servants/ 4* Servants/ 3* Servants/ 5* CEs / 4* CEs/ 3* CEs)
  - To view the next section of rate-ups, click on Jeanne

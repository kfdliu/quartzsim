let imageLocation = null; // Stores the current file directory of the image

function determineImageLocation (outcome) {
    switch (outcome) {
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case 'Gaius Julius Caesar': return "images/icons/Caesaricon.webp"; 
        case 'Fergus mac Roich': return "images/icons/Fergusicon.webp"; 
        case 'Gilles de Rais': return "images/icons/Gillesicon.webp"; 
        case 'Robin Hood': return "images/icons/Robinicon.webp"; 
        case 'David': return "images/icons/Davidicon.webp"; 
        case 'Billy the Kid': return "images/icons/Billyicon.webp"; 
        case 'Euryale': return "images/icons/Euryaleicon.webp"; 
        case 'Tawara Touta': return "images/icons/Toudaicon.webp"; 
        case 'Gilgamesh (Child)': return "images/icons/Kogilicon.webp"; 
        case 'Cu Chulainn': return "images/icons/Cuicon.webp"; 
        case 'Diarmuid Ua Duibhne': return "images/icons/Diarmuidicon.webp"; 
        case 'Romulus': return "images/icons/Romulusicon.webp"; 
        case 'Houzouin Inshun': return "images/icons/Inshunicon.webp"; 
        case 'Hektor': return "images/icons/Hectoricon.webp"; 
        case 'Boudica': return "images/icons/Boudicaicon.webp"; 
        case 'Medusa': return "images/icons/Medusaicon.webp"; 
        case 'Ushiwakamaru': return "images/icons/Ushiwaicon.webp"; 
        case 'Alexander': return "images/icons/Alexandericon.webp"; 
        case 'Medea': return "images/icons/Medeaicon.webp"; 
        case 'Paracelsus von Hoheinheim': return "images/icons/Paracelsusicon.webp"; 
        case 'Mephistopheles': return "images/icons/Mephisicon.webp"; 
        case 'Geronimo': return "images/icons/Geronimoicon.webp"; 
        case 'Avicebron': return "images/icons/Avicebronicon.webp"; 
        case 'Hassan of the Hundred Personas': return "images/icons/Hassanhundredicon.webp"; 
        case 'Henry Jekyll & Hyde': return "images/icons/Jekyllicon.webp"; 
        case 'Hassan of the Serenity': return "images/icons/Serenityicon.webp"; 
        case 'Jing Ke': return "images/icons/Jingkeicon.webp"; 
        case 'Fuuma "Evil-wind" Kotarou': return "images/icons/Kotarouicon.webp"; 
        case 'Lu Bu Fengxian': return "images/icons/Lubuicon.webp"; 
        case 'Darius III': return "images/icons/Dariusicon.webp"; 
        case 'Kiyohime': return "images/icons/Kiyohimeicon.webp"; 

        // Story Locked 3*
        case 'Cu Chulainn (Caster)': return "images/icons/Cucastericon.webp";
        case 'Gilles de Rais': return "images/icons/Gillescastericon.webp";
        case 'Bedivere': return "images/icons/Bedivereicon.webp";
        case 'Jaguar Man': return "images/icons/Jaguarmanicon.webp";
        case 'Christopher Columbus': return "images/icons/Columbusicon.webp";
        case 'Antonio Salieri': return "images/icons/Antonioicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Siegfried': return "images/icons/Siegicon.webp"; 
        case "Chevalier d'Eon": return "images/icons/Deonicon.webp"; 
        case 'Emiya': return "images/icons/Emiyaicon.webp"; 
        case 'Atalanta': return "images/icons/Atalantaicon.webp"; 
        case 'Elisabeth Bathory (Lancer)': return "images/icons/Elizaicon.webp"; 
        case 'Marie Antoinette': return "images/icons/Marieicon.webp"; 
        case 'Martha': return "images/icons/Marthaicon.webp"; 
        case 'Stheno': return "images/icons/Sthenoicon.webp"; 
        case 'Carmilla': return "images/icons/Carmillaicon.webp"; 
        case 'Heracles': return "images/icons/Heraclesicon.webp"; 
        case 'Lancelot': return "images/icons/Lanceloticon.webp"; 
        case 'Tamamo Cat': return "images/icons/Tamamoicon.webp"; 
        case 'Anne Bonny & Mary Read': return "images/icons/Anneicon.webp"; 
        case 'Nursery Rhyme': return "images/icons/Rhymeicon.webp"; 
        case 'Frankenstein': return "images/icons/Frankicon.webp";
        case 'Fionn mac Cumhaill': return "images/icons/Fionnicon.webp";
        case 'Beowulf': return "images/icons/Beowulficon.webp";
        case 'Astolfo': return "images/icons/Astolfoicon.webp";
        case 'Helena Blavatsky': return "images/icons/Helenaicon.webp";
        case 'Rama': return "images/icons/Ramaicon.webp";
        case 'Emiya (Assassin)': return "images/icons/Emiyaassassinicon.webp";
        case 'Ibaraki-Douji': return "images/icons/Ibarakiicon.webp";
        case 'Nitocris': return "images/icons/Nitocrisicon.webp";
        case 'Lancelot (Saber)': return "images/icons/Lancelotsabericon.webp";
        case 'Vlad III (EXTRA)': return "images/icons/Vladextraicon.webp";
        case 'Gilgamesh (Caster)': return "images/icons/Gilcastericon.webp";
        case 'Medusa (Lancer)': return "images/icons/Medusalancericon.webp";
        case 'Avenger of Shinjuku': return "images/icons/Hessianloboicon.webp";
        case 'Assassin of Shinjuku': return "images/icons/Shinjukuassassinicon.webp";
        case 'Suzuka Gozen': return "images/icons/Suzukaicon.webp";
        case 'Archer of Inferno': return "images/icons/Tomoeicon.webp";
        case 'Chiron': return "images/icons/Chironicon.webp";
        case 'Parvati': return "images/icons/Parvatiicon.webp";
        case 'Nezha': return "images/icons/Nezhaicon.webp";
        case 'Valkyrie': return "images/icons/Valkyrieicon.webp";
        case 'Caster of Okeanos': return "images/icons/Circeicon.webp";
        case 'Assassin of the Nightless City': return "images/icons/Wuicon.webp";
        case 'Assassin of Paraiso': return "images/icons/Paraisoicon.webp";
        case 'Beserker of El-Dorado': return "images/icons/Penthicon.webp";
        case 'Atalanta (Alter)': return "images/icons/Atalantaaltericon.webp";

        // Story Locked 4*
        case 'Altria Pendragon (Alter)': return "images/icons/Saberaltericon.webp";
        case 'Nero Claudius': return "images/icons/Neroicon.webp";
        case 'Medea (Lily)': return "images/icons/Medealilyicon.webp";
        case 'Altria Pendragon (Lancer Alter)': return "images/icons/Alterlancericon.webp";
        case 'Li Shuwen (Lancer)': return "images/icons/Shuwenicon.webp";
        case 'Thomas Edison': return "images/icons/Edisonicon.webp";
        case 'Tristan': return "images/icons/Tristanicon.webp";
        case 'Gawain': return "images/icons/Gawainicon.webp";
        case 'Gorgon': return "images/icons/Gorgonicon.webp";
        case 'Emiya (Alter)': return "images/icons/Emiyaaltericon.webp";
        case 'Yagyu Munenori': return "images/icons/Yagyuicon.webp";
        case 'Kato Danzo': return "images/icons/Danzoicon.webp";
        case 'Queen of Sheba': return "images/icons/Queenshebaicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 Star Servants Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Altria Pendragon': return "images/icons/Artoriapendragonicon.webp";
        case 'Altera': return "images/icons/Attilaicon.webp";
        case 'Zhuge Liang (El Melloi II)': return "images/icons/Wavericon.webp";
        case 'Vlad III': return "images/icons/Vladicon.webp";
        case "Jeanne d'Arc": return "images/icons/Jeanneicon.webp";
        case 'Orion': return "images/icons/Orionicon.webp";
        case 'Tamamo-no-Mae': return "images/icons/Tamamocastericon.webp";
        case 'Francis Drake': return "images/icons/Drakeicon.webp";
        case 'Jack the Ripper': return "images/icons/Jackicon.webp";
        case 'Mordred': return "images/icons/Mordredicon.webp";
        case 'Arjuna': return "images/icons/Arjunaicon.webp";
        case 'Anastasia': return "images/icons/Anastasiaicon.webp";
        case 'Karna': return "images/icons/Karnaicon.webp";
        case 'Florence Nightingale': return "images/icons/Nightingaleicon.webp";
        case 'Xuanzhang Sanzang': return "images/icons/Xuanzhangicon.webp";
        case 'Ozymandias': return "images/icons/Ozymandiasicon.webp";
        case 'Enkidu': return "images/icons/Enkiduicon.webp";
        case 'Napoleon': return "images/icons/Napoleonicon.webp";
        case 'Achilles': return "images/icons/Achillesicon.webp";

        // Story Locked 5*
        case 'Nikola Tesla': return "images/icons/Teslaicon.webp";
        case 'Cu Chulainn (Alter)': return "images/icons/Cualtericon.webp";
        case 'Medb': return "images/icons/Medbicon.webp";
        case 'Altria Pendragon (Lancer)': return "images/icons/Altrialancericon.webp";
        case 'Quetzalcoatl': return "images/icons/Quetzicon.webp";
        case 'Sitonai': return "images/icons/Sitonaiicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Ryudoji Temple': return "images/icons/Ryuudouicon.webp";
        case 'Elixir of Love': return "images/icons/Elixiricon.webp";
        case 'Bronze-Link Manipulator': return "images/icons/Bronzelinkicon.webp";
        case 'Ath nGabla': return "images/icons/Athngablaicon.webp";
        case 'Hydra Dagger': return "images/icons/Hydradaggericon.webp";
        case 'Bygone Dream': return "images/icons/Bygoneicon.webp";
        case 'Extremely Spice Mapo Tofu': return "images/icons/Tofuicon.webp";
        case 'Jeweled Sword Zelretch': return "images/icons/Jeweledswordicon.webp";
        case 'Battle of Camlann': return "images/icons/Battleofcamlannicon.webp";
        case 'Fragarach': return "images/icons/Fragarachicon.webp";
        case 'Inverted Moon of the Heavens': return "images/icons/Invertedmoonicon.webp";
        case 'Reality Marble': return "images/icons/Realitymarbleicon.webp";
        case 'Potion of Youth': return "images/icons/Elixirofrejuvicon.webp";
        case 'Collection of Mysterious Masks': return "images/icons/Mysterymasksicon.webp";
        case 'Freelancer': return "images/icons/Freelancericon.webp";
        case 'Ruined Church': return "images/icons/Churchicon.webp";
        case 'Marugoshi Shinji': return "images/icons/Shinjiicon.webp";
        case 'Atlas Institute': return "images/icons/Atlasinstituteicon.webp";
        case 'Phantasmal Species': return "images/icons/Phantasmalspeciesicon.webp";
        case 'Divine Construct': return "images/icons/Divineconstructicon.webp";
        case 'Soul Eater': return "images/icons/Souleatericon.webp";
        case 'Light of Wisdom': return "images/icons/Lightofwisdomicon.webp";
        case "Sakura's Special Bento": return "images/icons/Sakurabentoicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Iron-Willed Training': return "images/icons/Irontrainingicon.webp";
        case 'Primeval Curse': return "images/icons/Primevalicon.webp";
        case 'Projection': return "images/icons/Projectionicon.webp";
        case 'Gandr': return "images/icons/Gandricon.webp";
        case 'Verdant Sound of Destruction': return "images/icons/Ilyaicon.webp";
        case 'Gem Magecraft: Antumbra': return "images/icons/Antumbraicon.webp";
        case 'Be Elegant': return "images/icons/Tokiomiicon.webp";
        case 'The Imaginary Element': return "images/icons/Numbericon.webp";
        case 'Divine Banquet': return "images/icons/Divineicon.webp";
        case "Angel's Song": return "images/icons/Angelicon.webp";
        case 'Seal Designation Enforcer': return "images/icons/Bazetticon.webp";
        case 'Holy Shroud of Magdelene': return "images/icons/Holyicon.webp";
        case 'With One Strike': return "images/icons/Taigaicon.webp";
        case "Knight's Dignity": return "images/icons/Knightprideicon.webp";
        case 'Necromancy': return "images/icons/Necromancyicon.webp";
        case 'Awakened Will': return "images/icons/Awakenedicon.webp";
        case 'Golden Millenium Tree': return "images/icons/Goldenicon.webp";
        case 'Record Holder': return "images/icons/Recordholdicon.webp";
        case 'Art of the Poisonous Snake': return "images/icons/Talentsnakeicon.webp";
        case 'Art of Death': return "images/icons/Artofdeathicon.webp";
        case 'Gentle Affection': return "images/icons/Affectionicon.webp";
        case 'Innocent Maiden': return "images/icons/Youngmaidenicon.webp";
        case 'Covering Fire': return "images/icons/Coverfireicon.webp";
        case 'Room Guard': return "images/icons/Roomguardicon.webp";
        case 'The Final Narrator': return "images/icons/Finalnarratoricon.webp";
        case 'Cleaner': return "images/icons/Sweepericon.webp";
        case 'Code Cast': return "images/icons/Codeicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 5 Star CE Begin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    
        case 'Formal Craft': return "images/icons/Formalcrafticon.webp";
        case 'Imaginary Around': return "images/icons/Imaginaryicon.webp";
        case 'Limted/Zero Over': return "images/icons/Limitedicon.webp";
        case 'Kaleidoscope': return "images/icons/Kaleidoicon.webp";
        case "Heaven's Feel": return "images/icons/Heavenicon.webp";
        case 'Prisma Cosmos': return "images/icons/Prismaicon.webp";
        case 'The Black Grail': return "images/icons/Grailicon.webp";
        case 'Victor of the Moon': return "images/icons/Victoricon.webp";
        case 'Another Ending': return "images/icons/Endingicon.webp";
        case 'A Fragment of 2030': return "images/icons/Fragmentsicon.webp";
        case '500-Year Obsession': return "images/icons/500icon.webp";
        case 'Vessel of the Saint': return "images/icons/Vesselicon.webp";
        case 'Ideal Holy King': return "images/icons/Idealkingicon.webp";
        case 'Volumen Hydrargyrum': return "images/icons/Volumenicon.webp";
        case 'Before Awakening': return "images/icons/Beforeawakeningicon.webp";
        case 'Origin Bullet': return "images/icons/Originbulleticon.webp";
        case 'Devilish Bodhisattva': return "images/icons/Devilishicon.webp";
        case 'Child of Atlas': return "images/icons/Atlaschildicon.webp";
            
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Jeanne d'Arc (Archer)": return "images/icons/Summerjeanneicon.webp";
        case "Ibaraki Douji (Lancer)": return "images/icons/Summeribarakiicon.webp";
        case "Ushiwakamaru (Assassin)": return "images/icons/Summerushiicon.webp";
        case "Emerald Float": return "images/icons/Emeraldfloaticon.webp";
        case "Storms and Waves": return "images/icons/Stormswavesicon.webp";
        case "All Night Fever": return "images/icons/Allnightfevericon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Edmond Dantes": return "images/icons/Edmondicon.webp";
        // + Caster Gil
        // + Robin Hood
        case "Hero on the Beach": return "images/icons/Herobeachicon.webp";
        case "Sunset Jam": return "images/icons/Sunsetjamicon.webp";
        case "Writing High": return "images/icons/Writinghighicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Summer 3 Banner 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "BB (Summer)": return "images/icons/Summerbbicon.webp";
        case "Mysterious Heroine XX": return "images/icons/Mhxxicon.webp";
        case "Queen Medb (Saber)": return "images/icons/Summermedbicon.webp";
        // + Emerald Float, Storms and Waves, All Night Fever 
        // + Hero on the Beach, Sunset Jam, Writing High

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 14 Million Downloads ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//   
        case "Altria Pendragon (Archer)": return "images/icons/Artoriaarchericon.webp";
        case "Martha (Ruler)": return "images/icons/Martharulericon.webp";
        case "Marie Antoinette (Caster)": return "images/icons/Mariecastericon.webp";
        case "Knights of Marines": return "images/icons/Knightsofmarinesicon.webp";
        case "Meat Wars": return "images/icons/Meatwarsicon.webp";
        case "Shaved Ice (Void's Dust Flavor)": return "images/icons/Shavediceicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Fate/Zero ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Iskandar": return "images/icons/Iskandaricon.webp";
        // + Altria Pendragon, Zhuge Liang (El Melloi II)
        // + Lancelot, Emiya (Assasin)
        case "Diarmuid Ua Duibhne (Saber)": return "images/icons/Diarmuidsabericon.webp";
        // + Before Awakening, Volumen Hydrargyrum, Innocent Maiden
        case "Self Geass Scroll": return "images/icons/Selfgeassicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GilFest ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Gilgamesh": return "images/icons/Gilicon.webp";
        // + Queen of Sheba
        // + Gaius Julius Caesar
        case "Gilgamesh in NY": return "images/icons/Gilinnewyorkicon.webp";
        case "Shining Skyscrapers": return "images/icons/Shiningskyscrapersicon.webp";
        case "Show Time": return "images/icons/Showtimeicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Halloween 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Osakabehime": return "images/icons/Osakabehimeicon.webp";
        // + Lancer Liz, Carmilla
        // + El Dorado Beserker, Shinjuku Assassin, Nightless City Assassin
        case "Trick of Treatment": return "images/icons/Tricktreatmenticon.webp";
        case "Phantom Night": return "images/icons/Phantomnighticon.webp";
        case "From Wonderland": return "images/icons/Fromwonderlandicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Halloween 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        // + Sitonai
        // + Paraiso Assassin, Ibaraki-Douji
        case "Welcome to ONILAND!!": return "images/icons/Welcomeoniicon.webp";
        case "Merely Red": return "images/icons/Merelyredicon.webp";
        case "Ashigara Brothers": return "images/icons/Ashigaraicon.webp";
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 15 Million Downloads  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Abigail Williams": return "images/icons/Abbyicon.webp";
        // + Okeanos Caster, Nezha
        // + Robin Hood
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Christmas 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        // + Altera, Enkidu
        case "Ereshkigal": return "images/icons/Ereshicon.webp";
        // + Medusa (Lancer)
        // + Jaguar Man, Ushi, Paracelsus
        case "Starry Nights": return "images/icons/Starrynightsicon.webp";
        case "Party Time": return "images/icons/Partytimeicon.webp";
        case "Snow Pirates": return "images/icons/Snowpiratesicon.webp";

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lostbelt 3 Banner 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Xiang Yu": return "images/icons/Xiangyuicon.webp";
        case "Lanling Wang": return "images/icons/Lanlingicon.webp";
        case "Qin Liangyu": return "images/icons/Qinliangyuicon.webp";
        // + Jing Ke
        case "Duke of Flames": return "images/icons/Dukeflamesicon.webp";
        case "Beyond the Horizon": return "images/icons/Beyondhorizonicon.webp";
        case "Belle of the Upper Echelons": return "images/icons/Belleuppericon.webp";
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lostbelt 3 Banner 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Shi Huang Di": return "images/icons/Shihuangdiicon.webp";
        case "Yu Meiren": return "images/icons/Consortyuicon.webp";
        case "Red Hare": return "images/icons/Redhareicon.webp";
        // + Duke of Flames, Before Heading Towards the Beyond, Belle of the Upper Echelons
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Christmas 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        case "Bradamante": return "images/icons/Bradamanteicon.webp";
        // + Quetzalcoatl
        // + Martha, Martha (Ruler)
        case "Shvibzik Snow": return "images/icons/Shvibziksnowicon.webp";
        case "Ring the Bell": return "images/icons/Ringbellicon.webp";
        case "Burning Live Seat": return "images/icons/Burningliveseaticon.webp";

        default: return "images/icons/Mashuicon.webp"; // Defaults to mash when something goes wrong :/
    }
}    
// Every servant available from the initial story gacha (no story-locked servants/rateups)
// DO NOT CHANGE UNLESS NEW SERVANTS/CES ADDED

let perm5Star = ['Altria Pendragon', // Permanent 5 Stars (servants)
    'Altera', 
    'Zhuge Liang (El Melloi II)',
    'Vlad III', 
    "Jeanne d'Arc",
    'Orion',
    'Tamamo-no-Mae',
    'Francis Drake',
    'Jack the Ripper',
    'Mordred',
    'Arjuna',
    'Karna',
    'Florence Nightingale',
    'Xuanzhang Sanzang',
    'Ozymandias',
    'Enkidu',
    'Napoleon',
    'Achilles',
    'Anastasia'];

let perm4Star = ['Siegfried', // Permanent 4 Stars (servants)
    "Chevalier d'Eon",
    'Emiya',
    'Atalanta',
    'Elisabeth Bathory (Lancer)',
    'Marie Antoinette',
    'Martha',
    'Stheno',
    'Carmilla',
    'Heracles',
    'Lancelot',
    'Tamamo Cat',
    'Anne Bonny & Mary Read',
    'Nursery Rhyme',
    'Frankenstein',
    'Fionn mac Cumhaill',
    'Beowulf',
    'Astolfo',
    'Helena Blavatsky',
    'Rama',
    'Emiya (Assassin)',
    'Ibaraki-Douji',
    'Nitocris',
    'Lancelot (Saber)',
    'Vlad III (EXTRA)',
    'Gilgamesh (Caster)',
    'Medusa (Lancer)',
    'Avenger of Shinjuku',
    'Assassin of Shinjuku',
    'Suzuka Gozen',
    'Archer of Inferno',
    'Chiron',
    'Parvati',
    'Nezha',
    'Valkyrie',
    'Caster of Okeanos',
    'Assassin of the Nightless City',
    'Assassin of Paraiso',
    'Beserker of El-Dorado',
    'Atalanta (Alter)'];

let perm3Star = ['Gaius Julius Caesar', // Permanent 3 Stars (servants)
    'Fergus mac Roich',
    'Gilles de Rais',
    'Robin Hood',
    'David',
    'Billy the Kid',
    'Euryale',
    'Tawara Touta',
    'Gilgamesh (Child)',
    'Cu Chulainn',
    'Diarmuid Ua Duibhne',
    'Romulus',
    'Houzouin Inshun',
    'Hektor',
    'Boudica',
    'Medusa',
    'Ushiwakamaru',
    'Alexander',
    'Medea',
    'Paracelsus von Hoheinheim',
    'Mephistopheles',
    'Geronimo',
    'Avicebron',
    'Hassan of the Hundred Personas',
    'Henry Jekyll & Hyde',
    'Hassan of the Serenity',
    'Jing Ke',
    'Fuuma "Evil-wind" Kotarou',
    'Lu Bu Fengxian',
    'Darius III',
    'Kiyohime' ];

let perm5StarCE = ['Formal Craft', // Permanent 5 stars (ce)
    'Imaginary Around',
    'Limted/Zero Over',
    'Kaleidoscope',
    "Heaven's Feel",
    'Prisma Cosmos',
    'The Black Grail',
    'Victor of the Moon',
    'Another Ending',
    'A Fragment of 2030',
    '500-Year Obsession',
    'Vessel of the Saint',
    'Ideal Holy King',
    'Volumen Hydrargyrum',
    'Before Awakening',
    'Origin Bullet',
    'Devilish Bodhisattva',
    'Child of Atlas'];

let perm4StarCE = ['Iron-Willed Training', // Permanent 4 stars (ce)
    'Primeval Curse',
    'Projection',
    'Gandr',
    'Verdant Sound of Destruction',
    'Gem Magecraft: Antumbra',
    'Be Elegant',
    'The Imaginary Element',
    'Divine Banquet',
    "Angel's Song",
    'Seal Designation Enforcer',
    'Holy Shroud of Magdelene',
    'With One Strike',
    'Code Cast',
    "Knight's Dignity",
    'Necromancy',
    'Awakened Will',
    'Golden Millenium Tree',
    'Record Holder',
    'Art of the Poisonous Snake',
    'Art of Death',
    'Gentle Affection',
    'Innocent Maiden',
    'Covering Fire',
    'Room Guard',
    'The Final Narrator',
    'Code Cast',
    'Cleaner'];

let perm3StarCE = ['Ryudoji Temple', // Permanent 3 stars (ce)
    'Elixir of Love',
    'Bronze-Link Manipulator',
    'Ath nGabla',
    'Hydra Dagger',
    'Bygone Dream',
    'Extremely Spice Mapo Tofu',
    'Jeweled Sword Zelretch',
    'Battle of Camlann',
    'Fragarach',
    'Inverted Moon of the Heavens',
    'Reality Marble',
    'Potion of Youth',
    'Collection of Mysterious Masks',
    'Freelancer',
    'Ruined Church',
    'Marugoshi Shinji',
    'Atlas Institute',
    'Phantasmal Species',
    'Divine Construct',
    'Soul Eater',
    'Light of Wisdom',
    "Sakura's Special Bento"];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Story Locked + Perm ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let perm5StarUnlocked = ['Altria Pendragon', // Permanent 5 Stars + story locked (servants)
    'Altera', 
    'Zhuge Liang (El Melloi II)',
    'Vlad III', 
    "Jeanne d'Arc",
    'Orion',
    'Tamamo-no-Mae',
    'Francis Drake',
    'Jack the Ripper',
    'Mordred',
    'Arjuna',
    'Karna',
    'Florence Nightingale',
    'Xuanzhang Sanzang',
    'Ozymandias',
    'Enkidu',
    'Napoleon',
    'Achilles',
    'Anastasia',
    'Nikola Tesla',
    'Cu Chulainn (Alter)',
    'Medb',
    'Altria Pendragon (Lancer)',
    'Quetzalcoatl',
    'Sitonai'];

let perm4StarUnlocked = ['Siegfried', // Permanent 4 Stars + story locked (servants)
    "Chevalier d'Eon",
    'Emiya',
    'Atalanta',
    'Elisabeth Bathory (Lancer)',
    'Marie Antoinette',
    'Martha',
    'Stheno',
    'Carmilla',
    'Heracles',
    'Lancelot',
    'Tamamo Cat',
    'Anne Bonny & Mary Read',
    'Nursery Rhyme',
    'Frankenstein',
    'Fionn mac Cumhaill',
    'Beowulf',
    'Astolfo',
    'Helena Blavatsky',
    'Rama',
    'Emiya (Assassin)',
    'Ibaraki-Douji',
    'Nitocris',
    'Lancelot (Saber)',
    'Vlad III (EXTRA)',
    'Gilgamesh (Caster)',
    'Medusa (Lancer)',
    'Avenger of Shinjuku',
    'Assassin of Shinjuku',
    'Suzuka Gozen',
    'Archer of Inferno',
    'Chiron',
    'Parvati',
    'Nezha',
    'Valkyrie',
    'Caster of Okeanos',
    'Assassin of the Nightless City',
    'Assassin of Paraiso',
    'Beserker of El-Dorado',
    'Atalanta (Alter)',
    'Altria Pendragon (Alter)',
    'Nero Claudius',
    'Medea (Lily)',
    'Altria Pendragon (Lancer Alter)',
    'Li Shuwen (Lancer)',
    'Thomas Edison',
    'Tristan',
    'Gawain',
    'Gorgon',
    'Emiya (Alter)',
    'Yagyu Munenori',
    'Kato Danzo',
    'Queen of Sheba'];

let perm3StarUnlocked = ['Gaius Julius Caesar', // Permanent 3 Stars + story locked (servants)
    'Fergus mac Roich',
    'Gilles de Rais',
    'Robin Hood',
    'David',
    'Billy the Kid',
    'Euryale',
    'Tawara Touta',
    'Gilgamesh (Child)',
    'Cu Chulainn',
    'Diarmuid Ua Duibhne',
    'Romulus',
    'Houzouin Inshun',
    'Hektor',
    'Boudica',
    'Medusa',
    'Ushiwakamaru',
    'Alexander',
    'Medea',
    'Paracelsus von Hoheinheim',
    'Mephistopheles',
    'Geronimo',
    'Avicebron',
    'Hassan of the Hundred Personas',
    'Henry Jekyll & Hyde',
    'Hassan of the Serenity',
    'Jing Ke',
    'Fuuma "Evil-wind" Kotarou',
    'Lu Bu Fengxian',
    'Darius III',
    'Kiyohime', 
    'Cu Chulainn (Caster)',
    'Gilles de Rais',
    'Bedivere',
    'Jaguar Man',
    'Christopher Columbus',
    'Antonio Salieri'];
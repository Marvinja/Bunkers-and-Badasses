const gunTypes = ['Pistol', 'Submachine Gun', 'Shotgun', 'Combat Rifle', 'Sniper Rifle', 'Rocket Launcher'];

const gunGuilds = {
  "Pistol": ['Alas!', 'Dahlia', 'Hyperius', 'Malefactor', 'Feriore', 'Stoker', 'Torgue', 'Blackpowder'],
  "Submachine Gun": ['Dahlia', 'Hyperius', 'Malefactor', 'Feriore', 'Dahlia', 'Hyperius', 'Malefactor', "Feriore"],
  "Shotgun": ['Hyperius', 'Malefactor', 'Skuldugger', 'Torgue', 'Alas!', 'Hyperius', 'Blackpowder', 'Feriore'],
  "Combat Rifle": ['Skuldugger', 'Dahlia', 'Blackpowder', 'Torgue', 'Stoker', 'Alas!', 'Skuldugger', 'Dahlia'],
  "Sniper Rifle": ['Dahlia', 'Hyperius', 'Blackpowder', 'Malefactor', 'Stoker', 'Alas!', 'Dahlia', 'Blackpowder'],
  "Rocket Launcher": ['Skuldugger', 'Malefactor', 'Feriore', 'Torgue', 'Stoker', 'Skuldugger', 'Malefactor', 'Feriore'],
  "Favoured Gun": ["Choice"]
}

const rarities = [
  ['Common', 'Common', 'Common', 'Uncommon', 'Uncommon', 'Rare'],
  ['Common', 'Common', 'Uncommon', 'Uncommon', 'Rare', 'Epic'],
  ['Uncommon', 'Rare', 'Rare', 'Epic', 'Epic', 'Legendary'],
  ['Rare', 'Rare', 'Epic', 'Epic', 'Legendary', 'Legendary']
];

const elemental = [
  [false, true, true, false, true, false],
  [false, true, false, true, true, false],
  [true, false, true, false, true, true],
  [true, true, true, true, true, true]
];

const elementalTableChances = [
    0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 92, 94, 96, 98, 100
];

const elementalTable = {
  "Common": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "Radiation", "Corrosive", "Shock", "Explosive", "Incendiary", "Cryo"],
  "Uncommon": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "Radiation", "Corrosive", "Shock", "Explosive", "Incendiary", "Cryo", "Radiation(+1d6)", "Corrosive(+1d6)", "Shock(+1d6)", "Explosive(+1d6)", "Incendiary(+1d6)", "Cryo(+1d6)"],
  "Rare": ["N/A", "N/A", "N/A", "N/A", "Radiation", "Corrosive", "Shock", "Explosive", "Incendiary", "Cryo", "Radiation(+1d6)", "Corrosive(+1d6)", "Shock(+1d6)", "Explosive(+1d6)", "Incendiary(+1d6)", "Cryo(+1d6)", "Radiation(+2d6)", "Corrosive(+2d6)", "Shock(+2d6)", "Explosive(+2d6)", "Incendiary(+2d6)", "Cryo(+2d6)"],
  "Epic": ["N/A", "Radiation", "Corrosive", "Shock", "Explosive", "Incendiary", "Cryo", "Radiation(+1d6)", "Corrosive(+1d6)", "Shock(+1d6)", "Explosive(+1d6)", "Incendiary(+1d6)", "Cryo(+1d6)", "Radiation(+2d6)", "Corrosive(+2d6)", "Shock(+2d6)", "Explosive(+2d6)", "Incendiary(+2d6)", "Cryo(+2d6)", "Radiation + Incendiary", "Shock + Corrosive", "Explosive + Cryo"],
  "Legendary": ["N/A", "Radiation", "Corrosive", "Shock", "Explosive", "Incendiary", "Cryo", "Radiation(+1d6)", "Corrosive(+1d6)", "Shock(+1d6)", "Explosive(+1d6)", "Incendiary(+1d6)", "Cryo(+1d6)", "Radiation(+2d6)", "Corrosive(+2d6)", "Shock(+2d6)", "Explosive(+2d6)", "Incendiary(+2d6)", "Cryo(+2d6)", "Radiation + Incendiary", "Shock + Corrosive", "Explosive + Cryo"],
}

const gunStats = {
  'Combat Rifle': {
    1: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 3, crits: 0 },
        { hits: 3, crits: 1 },
      ],
      "damage": '1d6',
      "range": 6
    },
    7: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 3, crits: 0 },
        { hits: 2, crits: 1 },
      ],
      "damage": '1d8',
      "range": 6
    },
    13: {
      "accuracy": [
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
        { hits: 2, crits: 2 },
      ],
      "damage": '1d8',
      "range": 6
    },
    19: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 2, crits: 1 },
        { hits: 3, crits: 1 },
      ],
      "damage": '2d6',
      "range": 6
    },
    25: {
      "accuracy": [
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
        { hits: 2, crits: 3 },
      ],
      "damage": '1d10',
      "range": 6
    },
    "bonus": "",
  },
  'Pistol': {
    1: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 2, crits: 0 },
        { hits: 3, crits: 0 },
      ],
      "damage": '2d4',
      "range": 5
    },
    7: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 3, crits: 1 },
      ],
      "damage": '1d6',
      "range": 5
    },
    13: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 2, crits: 0 },
        { hits: 2, crits: 1 },
      ],
      "damage": '2d6',
      "range": 5
    },
    19: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 1, crits: 2 },
      ],
      "damage": '2d8',
      "range": 5
    },
    25: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 2, crits: 1 },
        { hits: 2, crits: 2 },
      ],
      "damage": '2d8',
      "range": 5
    },
    "bonus": "",
  },
  'Submachine Gun': {
    1: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 3, crits: 0 },
        { hits: 5, crits: 0 },
      ],
      "damage": '1d4',
      "range": 5
    },
    7: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 4, crits: 0 },
        { hits: 5, crits: 1 },
      ],
      "damage": '2d4',
      "range": 5
    },
    13: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 3, crits: 1 },
        { hits: 5, crits: 1 },
      ],
      "damage": '1d6',
      "range": 5
    },
    19: {
      "accuracy": [
        { hits: 2, crits: 0 },
        { hits: 2, crits: 1 },
        { hits: 4, crits: 1 },
      ],
      "damage": '2d6',
      "range": 5
    },
    25: {
      "accuracy": [
        { hits: 2, crits: 2 },
        { hits: 3, crits: 2 },
        { hits: 5, crits: 2 },
      ],
      "damage": '1d10',
      "range": 5
    },
    "bonus": "",
  },
  'Shotgun': {
    1: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 2, crits: 0 },
        { hits: 1, crits: 1 },
      ],
      "damage": '1d8',
      "range": 4
    },
    7: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 2, crits: 0 },
        { hits: 2, crits: 1 },
      ],
      "damage": '2d8',
      "range": 4
    },
    13: {
      "accuracy": [
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
        { hits: 2, crits: 2 },
      ],
      "damage": '1d8',
      "range": 4
    },
    19: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
      ],
      "damage": '2d10',
      "range": 4
    },
    25: {
      "accuracy": [
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
        { hits: 2, crits: 2 },
      ],
      "damage": '1d12',
      "range": 4
    },
    "bonus": "If Range 2 or Less: +2 Damage",
  },
  'Sniper Rifle': {
    1: {
      "accuracy": [
        { hits: 0, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
      ],
      "damage": '1d10',
      "range": 8
    },
    7: {
      "accuracy": [
        { hits: 0, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
      ],
      "damage": '1d12',
      "range": 8
    },
    13: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 1, crits: 2 },
      ],
      "damage": '1d10',
      "range": 8
    },
    19: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 1, crits: 2 },
      ],
      "damage": '2d10',
      "range": 8
    },
    25: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
        { hits: 2, crits: 2 },
      ],
      "damage": '1d12',
      "range": 8
    },
    "bonus": "If Range 3+: +3 Accuracy",
  },
  'Rocket Launcher': {
    1: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
      ],
      "damage": '1d12',
      "range": 4
    },
    7: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 1, crits: 1 },
      ],
      "damage": '2d10',
      "range": 4
    },
    13: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 1, crits: 2 },
      ],
      "damage": '1d12',
      "range": 4
    },
    19: {
      "accuracy": [
        { hits: 1, crits: 0 },
        { hits: 1, crits: 0 },
        { hits: 2, crits: 1 },
      ],
      "damage": '2d12',
      "range": 4
    },
    25: {
      "accuracy": [
        { hits: 1, crits: 1 },
        { hits: 1, crits: 1 },
        { hits: 2, crits: 1 },
      ],
      "damage": '1d20',
      "range": 4
    },
    "bonus": "Splash",
  },
}

const manufacturerBonuses = {
  "Alas!": {
    "Common": "+1 DMG Mod",
    "Uncommon": "+2 DMG Mod",
    "Rare": "+3 DMG Mod",
    "Epic": "+3 DMG Mod",
    "Legendary": "+4 DMG Mod",
  },
  "Skuldugger": {
    "Common": "+2 DMG Mod, Overheat: 1d4",
    "Uncommon": "+3 DMG Mod, Overheat: 1d6",
    "Rare": "+4 DMG Mod, Overheat: 1d8",
    "Epic": "+5 DMG Mod, Overheat: 1d10",
    "Legendary": "+6 DMG Mod, Overheat: 1d12",
  },
  "Dahlia": {
    "Common": "Burst: +1 Hit",
    "Uncommon": "Burst: +1 Hit, +1 ACC Mod",
    "Rare": "Burst: +1 Hit, +2 ACC Mod",
    "Epic": "Burst: +1 Hit, +3 ACC Mod",
    "Legendary": "Burst: +1 Hit, +4 ACC Mod",
  },
  "Blackpowder": {
    "Common": "+1 ACC Mod, +2 Crit Damage",
    "Uncommon": "+2 ACC Mod, +3 Crit Damage",
    "Rare": "+3 ACC Mod, +4 Crit Damage",
    "Epic": "+3 ACC Mod, +5 Crit Damage",
    "Legendary": "+4 ACC Mod, +6 Crit Damage",
  },
  "Malefactor": {
    "Common": "Element Roll, -2 DMG Mod",
    "Uncommon": "Element Roll, -1 DMG Mod",
    "Rare": "+10% Element Roll",
    "Epic": "+15% Element Roll",
    "Legendary": "+20% Element Roll",
  },
  "Hyperius": {
    "Common": "+1 ACC Mod, -2 DMG Mod",
    "Uncommon": "+2 ACC Mod, -2 DMG Mod",
    "Rare": "+3 ACC Mod, -2 DMG Mod",
    "Epic": "+4 ACC Mod, -2 DMG Mod",
    "Legendary": "+5 ACC Mod, -2 DMG Mod",
  },
  "Feriore": {
    "Common": "Swap/Reload: 1d4 Grenade Damage, -3 ACC Mod",
    "Uncommon": "Swap/Reload: 1d6 Grenade Damage, -3 ACC Mod",
    "Rare": "Swap/Reload: 1d8 Grenade Damage, -2 ACC Mod",
    "Epic": "Swap/Reload: 1d10 Grenade Damage, -2 ACC Mod",
    "Legendary": "Swap/Reload: 1d12 Grenade Damage, -1 ACC Mod",
  },
  "Torgue": {
    "Common": "Splash, -4 Acc Mod",
    "Uncommon": "Splash, -3 Acc Mod",
    "Rare": "Splash, -2 Acc Mod",
    "Epic": "Splash, -1 Acc Mod",
    "Legendary": "Splash",
  },
  "Stoker": {
    "Common": "Extra Attack, -3 ACC Mod",
    "Uncommon": "Extra Attack, -2 ACC Mod",
    "Rare": "Extra Attack, -1 ACC Mod",
    "Epic": "Extra Attack",
    "Legendary": "Extra Attack, Extra Movement",
  },
}

const prefixes = {
  "Aback": "Enemies Hit in the front are spun backwards",
  "Aberrant": "Gains the stats of a random gun type",
  "Abhorrent": "Enemies cannot stay within 1 square while this gun is equipped",
  "Abiding": "Grants +1 to all Search Checks while equipped",
  "Abrasive": "Adds +1 Crit to Melee Attacks",
  "Actually": "Can reroll Accuracy once per turn when firing this gun",
  "Adhesive": "Enemies Hit begin to stick to anything they come into contact with",
  "Adorable": "25% chance to distract Enemies with baby animal hallucinations",
  "Bitter": "Enemies get -1 to their Attack Rolls for each Enemy killed by this gun in this encounter",
  "Boundless": "Generates a Loot Pile when it Hits an Enemy",
  "Breezy": "Enemies targeted are struck by a gust of wind that pushes them 1 square backwards",
  "Certain": "Grants a +2 bonus during Badass attempts",
  "Cheerful": "Grants +1 to all Talk Checks while equipped",
  "Classy": "Gun will only fire if the wielder has the pinky of their hand shooting out",
  "Clever": "Grants +1 to all Insight Checks while equipped",
  "Critical": "Rolled hits become Crits. Rolled Crits become misses",
  "Damp": "Creates puddles of water under Enemies Hit",
  "Deafening": "Screams when fired, dealing 1 Damage to all adjacent targets",
  "Disgusted": "Deals +1d6 Corrosive Damage. Enemies killed die badly",
  "Eatable": "Can consume the gun when Reloading to gain 2d4 Health",
  "Economic": "Enemies drop 2 gold per Hit and 5 gold per Crit",
  "Elfin": "Increases Movement by 1 square while firing",
  "Exciting": "50% chance for Explosive rounds",
  "Far-Flung": "Double the Range of any Thrown item while this gun is equipped",
  "Far": "Double the Range of this gun",
  "Few": "Max 1 Hit. Deal an additional 3 damage for each unused Hit",
  "Fresh": "First Attack of an encounter deals 2x Damage",
  "Frightening": "Enemies within 2 squares are compelled to take Cover",
  "Gaudy": "Highly reflective, which can be used to temporarily blind Enemies, giving them -3 on Attack Rolls",
  "Grey": "Deals 2x Damage. Enemies Hit drop 1 less Loot Pile and only drop Common items",
  "Grotesque": "Gun looks horrific, possibly cursed. A counter increases every time it kills an Enemy",
  "Handsomely": "Add Damage equal to your Talk modifier",
  "Holistic": "Damage is dealt to Shield Armor, and Health",
  "Honorable": "All rounds Hit Enemies in the front",
  "Horrible": "Enemies killed by this gun explode",
  "Humdrum": "Enemies Hit experience ennui",
  "Hysterical": "Enemies Hit burst out laughing. cause -1 to Attack Rolls",
  "Imaginary": "Appears as if you are not holding any gun. Makes fake firing noises when fired",
  "Imminent": "Enemies Hit take increasing Damage each turn. Damage starts at 1 and increases by 1 with each Hit/turn",
  "Impolite": "Randomly burps out a Loot Pile when fired",
  "Incandescent": "Shines brighter when being fired",
  "Jazzy": "10% chance the non-Boss Enemy lets go of any weapons and starts doing 'jazz hands'",
  "Joyous": "Plays upbeat music when being fired",
  "Jumbled": "Has the Accuracy and Damage of one gun type, but the Range and bonuses of another",
  "Knotty": "Ties an Enemy's shoes together, reducing their Movement by 1",
  "Knowing": "Knows all. Can ask the gun a question once per day",
  "Labored": "Adds +3 DMG Mod if standing still",
  "Legal": "Enemies Hit are considered to be under a legally binding contract to drop 1 extra Loot Pile when they die",
  "Light": "Fires rays of light that deal +1d6 Incendiary Damage",
  "Lively": "This gun has an AI that thinks it's alive. It can open any door once per day",
  "Mad": "Enemies Hit have a 50% chance of being Taunted",
  "Madly": "Enemies Hit have 50% chance of becoming Confused",
  "Mixed": "For each Hit/Crit, gather the next die for Damage. d6, d8, d10, d12, d20",
  "Mundane": "Grants +1 to all Sneak Checks while equipped",
  "Normal": "Appearance of a Common gun",
  "Nutty": "Instantly kills any Enemy with a nut allergy",
  "Obnoxious": "Guaranteed Insight Check once per day at the cost of having to listen to the gun drone on and on and on",
  "Obtainable": "Must be picked up using an Interact (17+) Check. Deals 2x Damage",
  "One": "Can only be fired once per day",
  "Open": "Once per turn, you may Reload this gun as a free Action without generating Mayhem",
  "Overconfident": "If Accuracy Roll is 10 or less, all Hits are Crits",
  "Panoramic": "Fires in a 180 degree arc. Hits/Crits can each be applied to a different enemy in Range",
  "Parallel": "Rounds split into 2 parellel lines that can Hit Enemies in 2 adjacent squares",
  "Practical": "Swapping to a different gun grants the wielder a Badass Token",
  "Pumped": "Lifts Enemies Hit a foot off the ground",
  "Puny": "Appearance of a miniature gun",
  "Questionable": "Deals 2x Damage to Enemies that can question their existence",
  "Relevant": "Will deliver cryptic information on a topic up to 3x a day",
  "Resolute": "Cannot be fired on the first turn of an encounter. Deals 2x Damage",
  "Same": "Enemies Hit will take an equal amount of Damage from the gun for each Attack",
  "Scintillating": "50% chance to Hit the chest or groin of Enemy",
  "Selfish": "Deals 1d6 Damage to wielder when changing to another equipped gun",
  "Several": "Splits into 2 guns that are dual wielded",
  "Shaky": "Gun shakes uncontrollably. Enemies Hit also shake uncontrollably",
  "Sleepy": "Enemies Hit are Slowed",
  "Small": "Can have a 4th gun equipped as long as this gun is equipped",
  "Smelly": "Enemies Hit take 1d6 Radiation Damage",
  "Splendid": "Deals 2x Damage to Badass-type Enemies",
  "Strong": "Grants +1 to all Interact Checks while equipped",
  "Stupendous": "Double the Hits of this gun. Attacks deal 2d4 Damage to the wielder",
  "Suitable": "Can disguise the wielder in a suit of any kind once per day",
  "Superb": "Grants +1 to Mods on the gun",
  "Swift": "Grants a free Melee Attack each turn",
  "Synonymous": "Grants Guild bonuses twice",
  "Tart": "Enemies react as if they have eaten something tart, getting -1 to their next Attack Roll",
  "Tawdry": "When Reloaded, becomes a grenade that deals 3d8 Damage",
  "Tender": "Converts 10% of Damage dealt into Health for an adjacent ally",
  "Tense": "30% chance to taze the Enemy, dealing 1d6 Shock Damage",
  "Thirsty": "Converts 10% of Damage dealt into Health",
  "Toothsome": "Gets a Bite Attack each turn for 1d6 Damage to an adjacent target",
  "Towering": "Wielder appears twice their size while gun is equipped",
  "Two": "Creates a duplicate gun. Must be fired at the same time. 3x Damage",
  "Unable": "Enemies hit cannot take Mayhem Actions",
  "Unfair": "An Extra Attack with this gun does not generate Mayhem",
  "Unwieldy": "Twice the size of a normal gun. 2x Damage. Reloading takes 2 turns",
  "Utter": "There is a secret password that activates 3x Damage for the next 2 turns. Wielder can guess once per encounter",
  "Woozy": "Each time an Enemy is Hit by this gun, 10% chance they pass out",
  "Worried": "Crits have a 50% chance to make BR 8 or less Enemies flee",
  "Wrathful": "Deals 2x Damage to Enemies that have Damaged the wielder",
  "Zesty": "Enemies killed by this gun grant the wielder 1 Badass Token",
}

const redPrefixes = [
  "POP POP!",
  "I never freeze",
  "Toasty!",
  "Was he slow?",
  "We Hate You, Please Die.",
  "Tell them they're next",
  "PAN SHOT!",
  "Envision Wyverns",
  "I'm melting!",
  "The same thing that happens to everything else",
  "360 quickscope",
  "Any Questions!",
  "Blood and Thunder",
  "SI VIS PACEM, PARA BELLUM",
  "You're breathtaking!",
  "Pass turn.",
  "I am Vengeance!",
  "Roll the dice",
  "One among the fence",
  "Don't be sorry. Be better.",
  "THE PICKLES!",
  "Do a kickflip!",
  "Extinction is the Rule",
  "Never Fight a Knight with a Perm",
  "Bye bye, little Butt Stallion",
  "Time 2 Hack",
  "Hate Magic... so much",
  "OFF WITH THEIR HEADS!",
  "This is my BOOMSTICK!",
  "Super easy, barely an inconvenience",
  "Hold onto your butts.",
  "The Wise Man's Fear",
  "I don't want this isolation",
  "TUFF with two Fs",
  "Unlikely Maths",
  "Gravity's Rainbow",
  "Let's do this one last time...",
  "BIP!",
  "The Heaviest Matter of the Universe",
  "GREEN FLAME",
  "More like Bore Ragnarok!",
  "That's levitation, Holmes!",
  "Let's boo-boo.",
  "Mmm Watcha Say...",
  "Here Comes the FunCooker",
  "Overwhelming strength is boring.",
  "Stop talking, I will win. It's what heroes do.",
  "Richer and cleverer than everyone else!",
  "METAL WILL DESTROY ALL EVIL!",
  "Life is conundrum of esoterica",
]

//Combat Rifle, Pistol, SMG, Shotgun, Sniper Rifle, Rocket Launcher
const gunImage = {
  "Alas!":        [1,1,0,1,1,0], //Borderlands 1
  "Skuldugger":   [1,1,0,1,0,1], //Borderlands 2/3
  "Dahlia":       [1,1,1,0,1,0], //Borderlands 2
  "Blackpowder":  [1,1,0,1,1,0], //Borderlands 2
  "Malefactor":   [0,1,1,1,1,1], //Borderlands 2/3
  "Hyperius":     [0,1,1,1,1,0], //Borderlands 2
  "Feriore":      [0,1,1,1,0,1], //Borderlands 2
  "Torgue":       [1,1,0,1,0,1], //Borderlands 2/3
  "Stoker":       [1,1,0,0,1,1], //Borderlands 2/3
}

const guildPrefixes = {
  "Alas!": {
    "Combat Rifle": {
      "Common": "Imp",
      "Uncommon": "Hob",
      "Rare": "Cyclops",
      "Epic": "Troll",
      "Legendary": "Ogre",
    },
    "Pistol": {
      "Common": "Lion",
      "Uncommon": "Sphinx",
      "Rare": "Ceberus",
      "Epic": "Manticore",
      "Legendary": "Chimera",
    },         
    "Shotgun": {
      "Common": "Cobra",
      "Uncommon": "Wyrm",
      "Rare": "Drake",
      "Epic": "Levithan",
      "Legendary": "Hydra",
    },
    "Sniper Rifle": {
      "Common": "Pick",
      "Uncommon": "Spear",
      "Rare": "Lance",
      "Epic": "Javelin",
      "Legendary": "Trident",
    },
  },
  "Skuldugger": {
    "Combat Rifle": {
      "Common": "Mashine Gun",
      "Uncommon": "Carbene",
      "Rare": "Ass Beeter!",
      "Epic": "Spinigun",
      "Legendary": "Rokets!",
    },
    "Pistol": {
      "Common": "Pistal",
      "Uncommon": "Hed Shoter!",
      "Rare": "Ass Beeter!",
      "Epic": "Magamum!",
      "Legendary": "Ratatater!",
    },
    "Submachine Gun": {
      "Common": "Smig",
      "Uncommon": "Rokgun",
      "Rare": "Acurate smgg",
      "Epic": "Sprey n' Prey",
      "Legendary": "Tattler",
    },
    "Shotgun": {
      "Common": "Short ragne killer",
      "Uncommon": "Skatergun",
      "Rare": "Stret Sweper",
      "Epic": "Room Clener",
      "Legendary": "Oberkill",
    },
    "Rocket Launcher": {
      "Common": "Area efect",
      "Uncommon": "Bombarbabarbardeer",
      "Rare": "Rokets!",
      "Epic": "Zooka!",
      "Legendary": "Badaboom",
    },
  },
  "Dahlia": {
    "Combat Rifle": {
      "Common": "Rifle",
      "Uncommon": "Carbine",
      "Rare": "Defender",
      "Epic": "Grenadier",
      "Legendary": "Minigun",
    },
    "Pistol": {
      "Common": "Repeater",
      "Uncommon": "Anaconda",
      "Rare": "Peacemaker",
      "Epic": "Magnum",
      "Legendary": "Negotiator",
    },
    "Submachine Gun": {
      "Common": "SMG",
      "Uncommon": "Fox",
      "Rare": "Falcon",
      "Epic": "Scorpion",
      "Legendary": "Tiger",
    },
    "Sniper Rifle": {
      "Common": "Sniper",
      "Uncommon": "Strike",
      "Rare": "Terror",
      "Epic": "Scout",
      "Legendary": "Fear",
    },
  },
  "Blackpowder": {
    "Combat Rifle": {
      "Common": "Cannon",
      "Uncommon": "Gatling Gun",
      "Rare": "Buster",
      "Epic": "Scarab",
      "Legendary": "Hammer",
    },
    "Pistol": {
      "Common": "Revolver",
      "Uncommon": "Longarm",
      "Rare": "Iron",
      "Epic": "Law",
      "Legendary": "Pepperbox",
    },
    "Shotgun": {
      "Common": "Longrider",
      "Uncommon": "Scattergun",
      "Rare": "Coach Gun",
      "Epic": "Bushwack",
      "Legendary": "Quad",
    },
    "Sniper Rifle": {
      "Common": "Calipeen",
      "Uncommon": "Chinook",
      "Rare": "Muckamuck",
      "Epic": "Diaub",
      "Legendary": "Widow Maker",
    },
  },
  "Malefactor": {
    "Pistol": {
      "Common": "Aegis",
      "Uncommon": "Phobia",
      "Rare": "Torment",
      "Epic": "Animosity",
      "Legendary": "Umberage",
    },
    "Submachine Gun": {
      "Common": "SubMalevolent Grace",
      "Uncommon": "Trance",
      "Rare": "Gospel",
      "Epic": "Vision",
      "Legendary": "Euphoria",
    },
    "Shotgun": {
      "Common": "Cyclotron",
      "Uncommon": "Interloper",
      "Rare": "Shockwave",
      "Epic": "Terminator",
      "Legendary": "Deathgrip",
    },
    "Sniper Rifle": {
      "Common": "Snider",
      "Uncommon": "Jericho",
      "Rare": "Corinthian",
      "Epic": "Rakehell",
      "Legendary": "Storm",
    },
    "Rocket Launcher": {
      "Common": "Panorama",
      "Uncommon": "Prowler",
      "Rare": "Punishment",
      "Epic": "Bleeding Edge",
      "Legendary": "Game Changer",
    },
  },
  "Hyperius": {
    "Combat Rifle": {
      "Common": "Visibility",
      "Uncommon": "Affordance",
      "Rare": "Scalability",
      "Epic": "Accessibility",
      "Legendary": "Persona",
    },
    "Pistol": {
      "Common": "Apparatus",
      "Uncommon": "Vision",
      "Rare": "Leverage",
      "Epic": "Impact",
      "Legendary": "Synergy",
    },
    "Submachine Gun": {
      "Common": "Projectile Convergence",
      "Uncommon": "Presence",
      "Rare": "Transmurda",
      "Epic": "Confidence",
      "Legendary": "Pro-Target",
    },
    "Shotgun": {
      "Common": "Thinking",
      "Uncommon": "Projectile Diversification",
      "Rare": "Face Time",
      "Epic": "Crowdsourcing",
      "Legendary": "Development",
    },
    "Sniper Rifle": {
      "Common": "Sniper Rifle",
      "Uncommon": "Contract",
      "Rare": "Transaction",
      "Epic": "Policy",
      "Legendary": "Fast Turnaround",
    },
    "Rocket Launcher": {
      "Common": "",
      "Uncommon": "",
      "Rare": "Hard Stop",
      "Epic": "Bleeding Edge",
      "Legendary": "Game Changer",
    },
  },
  "Feriore": {
    "Pistol": {
      "Common": "Handgun",
      "Uncommon": "Aimshot",
      "Rare": "Power Shot",
      "Epic": "Biggun",
      "Legendary": "Quickshot",
    },
    "Submachine Gun": {
      "Common": "Subcompact MG",
      "Uncommon": "Special",
      "Rare": "Ace",
      "Epic": "Super",
      "Legendary": "Supreme",
    },
    "Shotgun": {
      "Common": "Sportsman",
      "Uncommon": "Home Security",
      "Rare": "Double Barrels!",
      "Epic": "Triple Barrels!",
      "Legendary": "Shotgun Supreme!",
    },
    "Rocket Launcher": {
      "Common": "Bazooka",
      "Uncommon": "Dispatch",
      "Rare": "Launcher",
      "Epic": "Spread",
      "Legendary": "Multi-Use",
    },
  },
  "Torgue": {
    "Combat Rifle": {
      "Common": "Rifle",
      "Uncommon": "Root",
      "Rare": "Lance",
      "Epic": "Torpedo",
      "Legendary": "Splitter",
    },
    "Pistol": {
      "Common": "Hand Cannon",
      "Uncommon": "Hole Puncher",
      "Rare": "Rod",
      "Epic": "Slapper",
      "Legendary": "Injector",
    },
    "Shotgun": {
      "Common": "Stalker",
      "Uncommon": "Bangstick",
      "Rare": "Pounder",
      "Epic": "Hulk",
      "Legendary": "Ravager",
    },
    "Rocket Launcher": {
      "Common": "Boom",
      "Uncommon": "Blaa",
      "Rare": "Duuurp!",
      "Epic": "Deee!",
      "Legendary": "Brrrrr!",
    },
  },
  "Stoker": {
    "Combat Rifle": {
      "Common": "Rifle",
      "Uncommon": "Renegade",
      "Rare": "Guerilla",
      "Epic": "Rocketeer",
      "Legendary": "Spinigun",
    },
    "Pistol": {
      "Common": "TMP",
      "Uncommon": "Assassin",
      "Rare": "Fighter",
      "Epic": "Troublemaker",
      "Legendary": "Anarchist",
    },
    "Sniper Rifle": {
      "Common": "Pooshka",
      "Uncommon": "Bratchny",
      "Rare": "Horrowshow",
      "Epic": "Droog",
      "Legendary": "Lyuda",
    },
    "Rocket Launcher": {
      "Common": "RPG",
      "Uncommon": "Glory",
      "Rare": "Hero",
      "Epic": "Vanquisher",
      "Legendary": "Destroyer",
    },
  },
}

export { 
  gunTypes, 
  gunGuilds, 
  rarities, 
  elemental, 
  elementalTableChances, 
  elementalTable, 
  gunStats, 
  manufacturerBonuses, 
  prefixes, 
  redPrefixes, 
  gunImage, 
  guildPrefixes 
}
import './App.scss'

import React, { useEffect, useState } from "react"
import { GunCard } from "./components/GunCard/GunCard"
import { SelectGunType }  from "./components/SelectGunType/SelectGunType"
import { Button, ButtonGroup, Typography } from "@mui/material"

import { gunTypes, gunGuilds, rarities, elemental, elementalTableChances, elementalTable, prefixes, guildPrefixes, gunStats, manufacturerBonuses } from "./js/common.js"

const Roll = (dieType, numDice = 0, mod = 0) => {
  const result = Math.ceil(Math.random()*dieType)
  return numDice > 0 ? result + Roll(numDice - 1, dieType, mod) : result
}

function App() {
  const [gunType, setGunType] = useState(gunTypes[Roll(gunTypes.length) - 1])
  const [gunGuild, setGunGuild] = useState(gunGuilds[gunType][Roll(gunGuilds[gunType].length - 1)])
  const [rarity, setRarity] = useState(rarities[Roll(4) - 1][Roll(6) - 1])
  const [gunElement, setGunElement] = useState(['incendiary', 'shock', 'corrosive', 'explosive', 'cryo', 'radiation'][Math.floor(Math.random()*6)])
  const [gunPrefix, setGunPrefix] = useState(Object.keys(prefixes)[Roll(100) - 1])
  const [guildPrefix, setGuildPrefix] = useState(null);
  const [gunStat, setGunStat] = useState(gunStats['Combat Rifle'])

  const SetElement = () => {
    let elementalRoll = Roll(100);
    
    if (gunGuild === "Malefactor") {
      switch(rarity) {
        case "Rare": elementalRoll += 10; break;
        case "Epic": elementalRoll += 15; break;
        case "Legendary": elementalRoll += 20; break;
        default: break;
      }
    }

    for (let i = 0; i < elementalTableChances.length - 1; i ++) {
      if (((elementalRoll > elementalTableChances[i]) && (elementalRoll <= elementalTableChances[i+1])) || elementalRoll >= 100) {
        return elementalTable[rarity][i]
      }
    }
  }

  const randomize = () => {
    let raritiesRoll = [Roll(4), Roll(6)]
    let gunTypeRoll = Roll(6)
    let gunGuildRoll = Roll(8)

    setGunType(gunTypes[gunTypeRoll - 1])
    setGunGuild(gunGuilds[gunTypes[gunTypeRoll - 1]][gunGuildRoll - 1])
    setRarity(rarities[raritiesRoll[0] - 1][raritiesRoll[1] - 1])
    setGunElement(elemental[raritiesRoll[0] - 1][raritiesRoll[1] - 1] === 0 || gunGuild === "Alas!" || gunGuild === "Blackpowder" ? "N/A" : SetElement())
    setGunPrefix(Object.keys(prefixes)[Roll(100) - 1])
    setGuildPrefix(guildPrefixes
      [gunGuilds[gunTypes[gunTypeRoll - 1]][gunGuildRoll - 1]]
      [gunTypes[gunTypeRoll - 1]]
      [rarities[raritiesRoll[0] - 1][raritiesRoll[1] - 1]]
    )
    setGunStat(gunStats[gunTypes[gunTypeRoll - 1]])
    // console.log(gunStats[gunTypes[gunTypeRoll - 1]][1])
  }

  useEffect(() => {
    // console.log("Type: " + gunType);
    // console.log("Guild: " + gunGuild);
    // console.log("%cRarity: " + rarity, `color: ${rarity === "Common" ? 'grey' : rarity === "Uncommon" ? 'green' : rarity === "Rare" ? 'blue' : rarity === 'Epic' ? 'purple' : 'orange'}`);
    // console.log("Element: " + gunElement);
    // console.log("guildPrefix: " + guildPrefix);
    console.log("Stats: " + JSON.stringify(gunStat.bonus));
  })

  return (
    <div className="App" onClick={randomize}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h2">{value.rollValue}</Typography>
        <Typography variant="body1">test</Typography>
        <br />
        <ButtonGroup variant="contained">
          <NumberButton onClickFunction={setNumDice} numDice={0}/>
          <NumberButton onClickFunction={setNumDice} numDice={1}/>
          <NumberButton onClickFunction={setNumDice} numDice={5}/>
          <NumberButton onClickFunction={setNumDice} numDice={10}/>
          <NumberButton onClickFunction={setNumDice} numDice={100}/>
        </ButtonGroup>
        <br />
        <ButtonGroup variant="contained">
          <DiceButton onClickFunction={setDieType} dieType={4}/>
          <DiceButton onClickFunction={setDieType} dieType={6}/>
          <DiceButton onClickFunction={setDieType} dieType={8}/>
          <DiceButton onClickFunction={setDieType} dieType={10}/>
          <DiceButton onClickFunction={setDieType} dieType={12}/>
          <DiceButton onClickFunction={setDieType} dieType={20}/>
          <DiceButton onClickFunction={setDieType} dieType={100}/>
        </ButtonGroup>
        <br />
        <Button size="large" variant="contained" onClick={RolledValue}>Roll {value.diceNum ? value.diceNum : null}d{value.diceType}</Button>
        <br /> */}
        <SelectGunType />
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <GunCard
            gunName={`${gunPrefix} ${guildPrefix}`}
            gunType={gunType}
            gunGuild={gunGuild}
            gunRarity={rarity.toLowerCase()}
            gunElement={gunElement}
            accuracyResults={gunStat[1].accuracy}
            numDamageDice={gunStat[1].damage.split('d')[0]}
            dieType={gunStat[1].damage.split('d')[1]}
            range={gunStat[1].range}
            accuracyMod={4}
            damageMod={2}
            bonuses={["",gunStat.bonus, prefixes[gunPrefix], manufacturerBonuses[gunGuild][rarity],""]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

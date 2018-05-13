import Dexie from 'dexie'

let database = new Dexie('initiativeTool')
database
  .version(1)
  .stores({
    'playerCharacters': 'name, player, group',
    'participants': 'name'
  })

export default {
  saveCurrentEncounter: async (encounter) => {
    await database.participants.clear()
    await database.participants.bulkPut(encounter)
  },

  saveGroup: (group, characterList) => {
    characterList.forEach(async (character) => {
      await database.playerCharacters.put({
        ...character,
        group: group
      })
    })
  },

  loadAllCharacters: async () => {
    let allCharacters = await database.playerCharacters.toArray()
    let returnValue = {}

    allCharacters.forEach((character) => {
      let group = character.group
      delete character.group

      if (!Array.isArray(returnValue[group])) {
        returnValue[group] = []
      }

      returnValue[group].push(character)
    })

    return returnValue
  },

  loadCurrentEncounter: async () => {
    return await database.participants.toArray()
  }
}
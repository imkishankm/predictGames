export const getGameData=(id,games)=>{
    return games?.filter(game=>game.id == id)
  }
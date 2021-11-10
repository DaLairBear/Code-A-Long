//console.log("It's working!")

let jonSnowAttack = 35
let jamieLannisterAttack = 35

let jonSnowHealth = 50
let jonSnowDefense = 0

let jamieLannisterHealth = 50
let jamieLannisterDefense = 20

// if(jonSnowAttack < jamieLannisterAttack){
//     console.log('Jamie has the strong attack.')
// }else if(jonSnowAttack > jonSnowAttack){
//     console.log('Jon has the stronger attack.')
// }else{
//     console.log('The attacks are qually powerful.')
// }

jonSnowDefense += 25


for(let i = 0; i <7; i++){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)

    if(jonSnowHealth <= 0){
        console.log('Jon Snow has perished in battle.')
        break
    }else{
        console.log(`Jon's health is ${jonSnowHealth}`)
    }
}
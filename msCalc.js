exports.msCalc = function(msCommand,message)
{
if(msCommand.length !== 5){
message.reply("your badly not enough parameters")
return false
}
const ogstats = require('./4.3Stats')
const newstats = require('./4.4Stats')

////80 6 6 22 22 3 + 70	8	13	9	9	2
///or 


///150 14 19 3 3 5

///70 14 13 3 5 3 + 70 9 14 6 4 2
////140 23 27 9 9 5

message.reply("Setting" + msCommand[0] +" to " + msCommand[3] + "/" + msCommand[4] + " from " + msCommand[1] + "/" + msCommand[2])




////command 0 is the name 
/////command 1 is the class of person
////command 2 is the weapon of person 
///command 3 is the desired class
///command 4 is desired weapon

//// makes it so nothing is cap specific 
msCommand = msCommand.map(msCommand => msCommand.toLowerCase())

///finds the thing you want from the json
var finder = "eeee"
var i = 0

/// ogstats[0] accesses the classes 
/// ogstats[1] access weapons

while(finder !== msCommand[1]){

finder = ogstats.ClassStats[i].Class

finder = finder.toLowerCase()

console.log(i)

i = i + 1


}
i = i-1 
var curClass = i
i = 0 
finder = "eee"

while(finder !== msCommand[2]){

finder = ogstats.WeaponStats[i].Weapon

finder = finder.toLowerCase()

console.log(i)

i = i + 1


}

i = i-1
var curWeapon = i 
i =0

while(finder !== msCommand[3]){

finder = newstats.ClassStats[i].Class

finder = finder.toLowerCase()

console.log(i)

i = i + 1


}
i = i-1
var tarClass = i
console.log(finder)
i = 0
finder ="eee"

while(finder !== msCommand[4]){

finder = newstats.WeaponStats[i].Weapon 

finder = finder.toLowerCase()

console.log(i)

i = i + 1


}
i = i-1
console.log(finder)
var tarWeapon = i

/////wahoo we are done with parseing 
///the command 
console.log(curClass + " " + curWeapon + " " + tarClass + " " + tarWeapon)


var classOldStats = [ogstats.ClassStats[curClass].Class,ogstats.ClassStats[curClass].HP,ogstats.ClassStats[curClass].A,
ogstats.ClassStats[curClass].M,
ogstats.ClassStats[curClass].PD,
ogstats.ClassStats[curClass].MD,ogstats.ClassStats[curClass].MP]


 
var wepOldStats = [ogstats.WeaponStats[curWeapon].Weapon,ogstats.WeaponStats[curWeapon].HP,ogstats.WeaponStats[curWeapon].A,
ogstats.WeaponStats[curWeapon].M,
ogstats.WeaponStats[curWeapon].PD,
ogstats.WeaponStats[curWeapon].MD,ogstats.WeaponStats[curWeapon].MP]

var oldHolder = []
var holder = 0
console.log(wepOldStats)
console.log(classOldStats)

i = 1

while(i<=6){
holder = wepOldStats[i] + classOldStats[i]
oldHolder.push(holder)

i=i+1

}
console.log(oldHolder)

oldHolder[3] = Math.floor(oldHolder[3] / 10)

oldHolder[4] = Math.floor(oldHolder[4] / 10)

console.log(oldHolder)

holder = 0
var newHolder = []


var classNewStats = [newstats.ClassStats[tarClass].Class,newstats.ClassStats[tarClass].HP,newstats.ClassStats[tarClass].A,
newstats.ClassStats[tarClass].M,
newstats.ClassStats[tarClass].PD,
newstats.ClassStats[tarClass].MD,newstats.ClassStats[tarClass].MP]

console.log(classNewStats)
var wepNewStats = [newstats.WeaponStats[tarWeapon].Weapon,
newstats.WeaponStats[tarWeapon].HP,

newstats.WeaponStats[tarWeapon].A,

newstats.WeaponStats[tarWeapon].M,

newstats.WeaponStats[tarWeapon].PD,
newstats.WeaponStats[tarWeapon].MD,
newstats.WeaponStats[tarWeapon].MP]
console.log(wepNewStats)
i = 1
while(i<=6){
holder = wepNewStats[i] + classNewStats[i]
newHolder.push(holder)

i=i+1

}
console.log(oldHolder)
console.log(newHolder)
i = 0 
holder =0
var msHolder =[]

while(i<6){
holder = newHolder[i]-oldHolder[i]
msHolder.push(holder)
i = i+1
}
console.log(msHolder)

message.reply("%ms " + msCommand[0] +",hp, " + msHolder[0])

message.reply("%ms " + msCommand[0] +",a, " + msHolder[1])

message.reply("%ms " + msCommand[0] +",m, " + msHolder[2])

message.reply("%ms " + msCommand[0] +",pe, " + msHolder[3])

message.reply("%ms " + msCommand[0] +",me, " + msHolder[4])

message.reply("%ms " + msCommand[0] +",mp, " + msHolder[5])



}




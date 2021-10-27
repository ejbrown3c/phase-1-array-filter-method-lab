

function findMatching (drivers, string) {
    const filterDrivers = drivers.filter(dN => dN.toLowerCase() === string.toLowerCase());
    return filterDrivers;
} 
 
findMatching ('Bobby')

function fuzzyMatch (drivers, string) {
  const matchDrivers = drivers.filter(driversMatch => driversMatch.substring(0,2) === string );
    return matchDrivers;
}

function matchName (drivers, string) {
    return drivers.filter(function(hometown){ 
    return hometown.name === string })
}
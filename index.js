// Code your solution here
function findMatching(drivers, string) {
    const searchLowerCase = string.toLowerCase(); 
    return drivers.filter(function(driver) {
        return driver.toLowerCase().includes(searchLowerCase);
    });
}
function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        const lowerDriver = driver.toLowerCase();
        const lowerQuery = query.toLowerCase();
        return lowerDriver.startsWith(lowerQuery);
    });
}
function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name === name;
    });
}

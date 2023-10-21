function randomContact() {
    const firstNames = ["Anastasia", "Valentina", "Olga", "Victoria", "Polina", "Alexandra", "Julia", "Oksana"];
    const lastNames = ["Yazvinskaya", "Kovalenko", "Kudasova", "Romanova", "Tekucheva", "Trofimova", "Pichugina", "Bratanova"];
    const colors = ["yellow", "pink", "brown", "blue", "green", "red", "white", "black"];
    const randomIndex1 = Math.floor(Math.random() * firstNames.length);
    const randomIndex2 = Math.floor(Math.random() * lastNames.length);
    const randomIndex3 = Math.floor(Math.random() * colors.length);
    
    return {
        firstName: firstNames[randomIndex1],
        lastName: lastNames[randomIndex2],
        email: lastNames[randomIndex2].slice(0,3).toLowerCase()+(Math.floor(Math.random() * 100000)+10000)+"@byui.edu",
        favoriteColor: colors[randomIndex3],
        birthday: new Date(Math.floor(Math.random() * (new Date("December 31, 2000"))))
    };
}

module.exports = { randomContact }; 
// define a user profile object
const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: {
        name:"Flatbook Labs",
        jobTitle:"Developer Apprentice",
    },
    friends: [
        {
            firstName:"Nancy",
            lastName:"Burgess",
            company: {
               name:"Flatbook Labs",
               jobTitle:"Developer Apprentice", 
            },
        },
        {
            firstName:"Corinna",
            lastName:"Jackson",
            company: {
                name:"Flatbook Labs",
                jobTitle:"Lead Developer",
            },
        },
    ],
    projects: [
        {
            title:"Flatbook",
            description: "The premier Flatiron School-based social network in the world.",
        },
        {
            title:"scrubber",
            description:"A startup helping busy parents transport their children on scooters.",
        },
    ],
};
// log basic user details
console.log(`Name:${userInfo.firstName}${userInfo.lastName}`);
console.log(`company:${userInfo.company.name}`);
console.log(`jobTitle:${userInfo.company.jobTitle}`);
// log friends details
console.log("\nFriends:");
for(const friend of userInfo.friends) {
    console.log(`-${friend.firstName}
        ${friend.lastName},
        ${friend.company.jobTitle} at
        ${friend.company.name}`);
}
// log project details
console.log("\nProjects:");
for(const project of userInfo.projects) {
    console.log(`-${project.title}:
        ${project.description}`);
}
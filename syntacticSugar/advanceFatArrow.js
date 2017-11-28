// const team = {
//   members: ["Jane", 'Bill'],
//   teamName: "Super Squad",
//   teamSummary: function() {
//     return this.members.map(function(name) {
//       return `${member} is on team ${this.teamName}`;
//     });
//   }
// };
// team.teamSummary();
"=====================================================================";
/* In this case, there is an error, what causes of that is 
  whenever we pass an anonymous function to anywhere, the keyword "this"
  of that function keyword is not work properly as it expected to be 
  that is why we need to use "bind(this)" when we type in with es5 
*/

const team = {
  members: ["Jane", "Bill"],
  teamName: "Super Squad",
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

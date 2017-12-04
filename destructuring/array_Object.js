const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Menlo Park'},
  { name: 'Uber', location: 'San Francisco'}
];

const [{ location }] = companies;
location; //Mountain View

const Google = {
  locations: [ "Mountain View", 'New York', 'London']
};

const { locations: [ location ] } = Google; // Mountain View


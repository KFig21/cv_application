import { v4 as uuidv4 } from "uuid";
import exampleAvatar from "../../assets/example_avatar_2.png";

const exampleCV = {
  personal: {
    firstName: "Harold",
    lastName: "Smith",
    currentRole: "Web Developer",
    photo: exampleAvatar,
    address1: "123 Fake Street, City, USA 12345",
    address2: "Unit B",
    phone: "(555)-555-5555",
    email: "NotHarold@aol.com",
  },
  experience: [
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "Example Co",
      address: "321 Fake Address",
      from: "2018",
      to: "Current",
      description: "Lead Web Developer for the department. Utilize React framework to build the web landscape. Perform routine site audits, as well as ongoing maintenance, on an as-needed basis.",
    },
    {
      id: uuidv4(),
      position: "Web Developer",
      company: "BIG Company",
      address: "1000 Wall Street USA",
      from: "2015",
      to: "2018",
      description: "Build and optimize a secure web page for evolving business needs. Worked closely with other Web Developers, Graphic Designers and Programmers to create websites that fulfill both the technical and design needs of clients.",
    },
    {
      id: uuidv4(),
      position: "Web Developer Intern",
      company: "Small Business",
      address: "102 Small Town Ave",
      from: "2014",
      to: "2015",
      description: "Provide continued support for one or more web properties. Code and script applications. Maintain communication with team members and supervisors concerning the direction of the website.",
    },
  ],
  education: [
    {
      id: uuidv4(),
      school: "Grad School",
      address: "Example City, USA",
      degree: "Masters",
      focus: "Computer Engineering",
      from: "2015",
      to: "2016",
    },
    {
      id: uuidv4(),
      school: "College University",
      address: "Example City, USA",
      degree: "Computer Science",
      focus: "Web Development",
      from: "2010",
      to: "2014",
    },
  ],
};

export default exampleCV;

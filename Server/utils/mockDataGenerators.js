const { faker } = require("@faker-js/faker");

const getMedicine = () => {
  const med = {
    name: faker.random.arrayElement([
      "Epinephrine",
      "Nitroglycerin ",
      "Dupixent",
      "Aspirin",
      "Tylenol",
      "Lofexidine",
      "Probuphine",
      "Wellbutrin",
      "Xanax",
      "Imbruvica",
      "Benzonatate",
    ]),
    amount: faker.datatype.float({ max: 3 }) + " mg",
  };
  return med;
};

const getTreatment = () => {
  const treatment = {
    action: faker.random.arrayElement([
      "Stabilize broken bones",
      "Stabilize head and neck injuries",
      "Bandage wounds",
      "Administer IV (intravenous) fluids",
      "Assess health situations",
      "Apply suctioning techniques to clear airways",
      "Apply dressings and bandages",
      "Apply splints and immobilization",
      "Administer oral glucose",
      "Utilize electrocardiograph monitors",
      "Perform transcutaneous pacing",
      "Utilize automatic ventilators",
    ]),
    timestamp: faker.time.recent("abbr"),
  };
  return treatment;
};

const getRandInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const arrayOfValues = (valueGenerator, minCount, maxCount) => {
  const count = getRandInt(minCount, maxCount);
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(valueGenerator());
  }
  return arr;
};

const generateDate = () => {
  const newDate = faker.date.between("2019/01/01", "2022/01/01");
  let dd = newDate.getDate();
  let mm = newDate.getMonth() + 1;
  const yyyy = newDate.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "/" + mm + "/" + yyyy;
};

const createMockUser = (organization, isManager, gender) => {
  const fullName = faker.name.findName(undefined, undefined, gender);
  return {
    fullName: fullName,
    gender: gender ? "female" : "male",
    password: "admin",
    email: faker.internet.email(fullName.replace(/\s/g, ""), ""),
    phone: faker.phone.phoneNumber("05#-###-###"),
    role: isManager ? "doctor" : "reporter",
    isManager: isManager,
    address: faker.fake("{{address.cityName}}, {{address.streetName}}"),
    organization: organization.name,
    // _id: faker.address.zipCode("#########"),
  };
};

const createMockReport = (user) => {
  return {
    timestamp: generateDate(),
    patient: {
      fullName: faker.name.findName(),
      id: faker.address.zipCode("#########"),
    },
    reporter: { fullName: user.fullName, id: user._id },
    medicines: arrayOfValues(getMedicine, 2, 5),
    anamnesis: faker.random.words(5),
    treatment: arrayOfValues(getTreatment, 2, 5),
    organization: user.organization,
  };
};

const makeData = () => {
  const organizations = [
    { name: "Rambam", address: "HaAliya HaShniya St 8, Haifa" },
    { name: "Ichilov", address: "Dafna St 5, Tel Aviv-Yafo" },
    { name: "Hadasa", address: "Kalman Ya'akov Man St, Jerusalem" },
    { name: "Volfson", address: "Ha-Lokhamim St 62, Holon" },
    { name: "Blinson", address: "Jabotinski St 39, Petah Tikva" },
  ];
  const users = [];
  const reports = [];

  organizations.forEach((org) => {
    for (let i = 0; i < 30; i++) {
      users.push(createMockUser(org, !(i % 5), i < 15));
    }
  });

  users.forEach((user) => {
    for (let i = 0; i < 30; i++) {
      if (!user.isManager) {
        reports.push(createMockReport(user));
      }
    }
  });
  console.log(organizations);
  console.log(users);
  console.log(reports);
};
const createMockOrganizations = () => {
  return [
    { name: "Meir", address: "HaAliya HaShniya St 8, Hadera" },
    { name: "Ichilov", address: "Dafna St 5, Tel Aviv-Yafo" },
    { name: "Hadasa", address: "Kalman Ya'akov Man St, Jerusalem" },
    { name: "Volfson", address: "Ha-Lokhamim St 62, Holon" },
    { name: "Blinson", address: "Jabotinski St 39, Petah Tikva" },
  ];
};

module.exports = {
  createMockOrganizations,
  createMockUser,
  createMockReport,
  makeData,
};

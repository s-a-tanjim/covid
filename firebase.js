var objectVariable = new Object();
var ObjUser = new Object();
var ArrSymptom = new Array();
var ArrHealthProb = new Array();

function getValue(id) {
  let x = document.getElementById(id).value;
  if (x === '') return null;
  return x;
}

function getValueFromSelect(id) {
  let e = document.getElementById(id);
  let x = e.options[e.selectedIndex].value;
  if (x === '') return null;
  return x;
}

function getValueFromRadio(id) {
  let e = document.getElementById(id);
  let x = null;
  if (e.checked)
    x = e.value;
  return x;
}

var signup_name_id, signup_nid_id, signup_dob_id, signup_mobile_id, signup_blood_group_id, signup_occupation_id, signup_family_member_id,
  other_name_id, other_nid_id, other_dob_id, other_mobile_id, other_blood_id, other_occupation_id,
  other_number_of_family_id, signin_nid_id, signin_dob_id, symptom_1, symptom_2, symptom_3, symptom_4, symptom_5, symptom_6, symptom_00,
  health_prob_1, health_prob_2, health_prob_3, health_prob_4, health_prob_5, health_prob_6, health_prob_7, health_prob_8, health_prob_9, health_prob_00,
  area_dist, area_region, visited_area_last_7_day, infected_name_id, infected_mobile_id,
  touch_with_infected_name_id, touch_with_infected_mobile_id, met_person_name_id, met_person_mobile_id, health_worker_yes_id, health_worker_no_id, volunteer_org_name_id, security_person_org_name_id, getting_salary_id;
var isHealthWorker;

function getAllValues() {
  //Signup data
  signup_name_id = getValue("signup_name_id");
  signup_nid_id = getValue("signup_nid_id");
  signup_dob_id = getValue("signup_dob_id");
  signup_mobile_id = getValue("signup_mobile_id");
  signup_blood_group_id = getValue("signup_blood_group_id");
  signup_occupation_id = getValue("signup_occupation_id");
  signup_family_member_id = getValue("signup_family_member_id");


  //Other
  other_name_id = getValue("other_name_id");
  other_nid_id = getValue("other_nid_id");
  other_dob_id = getValue("other_dob_id");
  other_mobile_id = getValue("other_mobile_id");
  other_blood_id = getValue("other_blood_id");
  other_occupation_id = getValue("other_occupation_id");
  other_number_of_family_id = getValue("other_number_of_family_id");

  //login data
  signin_nid_id = getValue("signin_nid_id");
  signin_dob_id = getValue("signin_dob_id");

  //Symptom
  symptom_1 = getValueFromRadio("symptom_1");
  symptom_2 = getValueFromRadio("symptom_2");
  symptom_3 = getValueFromRadio("symptom_3");
  symptom_4 = getValueFromRadio("symptom_4");
  symptom_5 = getValueFromRadio("symptom_5");
  symptom_6 = getValueFromRadio("symptom_6");
  symptom_00 = getValueFromRadio("symptom_00");

  //Health problem
  health_prob_1 = getValueFromRadio("health_prob_1");
  health_prob_2 = getValueFromRadio("health_prob_2");
  health_prob_3 = getValueFromRadio("health_prob_3");
  health_prob_4 = getValueFromRadio("health_prob_4");
  health_prob_5 = getValueFromRadio("health_prob_5");
  health_prob_6 = getValueFromRadio("health_prob_6");
  health_prob_7 = getValueFromRadio("health_prob_7");
  health_prob_8 = getValueFromRadio("health_prob_8");
  health_prob_9 = getValueFromRadio("health_prob_9");
  health_prob_00 = getValueFromRadio("health_prob_00");

  // Area
  area_dist = getValueFromSelect("area_dist");
  area_region = getValueFromSelect("area_region");

  //Travel History
  visited_area_last_7_day = getValue("visited_area_last_7_day");
  infected_name_id = getValue("infected_name_id");
  infected_mobile_id = getValue("infected_mobile_id");
  touch_with_infected_name_id = getValue("touch_with_infected_name_id");
  touch_with_infected_mobile_id = getValue("touch_with_infected_mobile_id");
  met_person_name_id = getValue("met_person_name_id");
  met_person_mobile_id = getValue("met_person_mobile_id");

  //Recent work history
  health_worker_yes_id = getValueFromRadio("health_worker_yes_id");
  health_worker_no_id = getValueFromRadio("health_worker_no_id");
  if (health_worker_yes_id)
    isHealthWorker = "Yes";
  else
    isHealthWorker = "No";

  volunteer_org_name_id = getValue("volunteer_org_name_id");
  security_person_org_name_id = getValue("security_person_org_name_id");

  getting_salary_id = getValueFromSelect("getting_salary_id");
}

function createObject() {
  objectVariable = {
    "UserInfo": ObjUser,
    "Symptom": ArrSymptom,
    "Health Issue": ArrHealthProb,
    "Location": area_region + ", " + area_dist,
    "Visited in Last 7 days": visited_area_last_7_day,
    "Known Infected Person": infected_name_id,
    "Known Infected Person Contact": infected_mobile_id,
    "Get Touched Infected Person": touch_with_infected_name_id,
    "Get Touched Infected Person Contact": touch_with_infected_mobile_id,
    "Met Persons": met_person_name_id,
    "Met Persons Contact": met_person_mobile_id,
    "Is Health Worker": isHealthWorker,
    "Volunteer Org Name": volunteer_org_name_id,
    "Security Org Name": security_person_org_name_id,
    "Salary Status": getting_salary_id
  }
}

function getUserInfo() {
  if (signup_name_id === null && signup_nid_id === null) {
    ObjUser = {
      "Name": other_name_id,
      "NID": other_nid_id,
      "Date Of Birth": other_dob_id,
      "Mobile No": other_mobile_id,
      "Blood Group": other_blood_id,
      "Occupation": other_occupation_id,
      "Number Of Family Member": other_number_of_family_id
    }
  } else {
    ObjUser = {
      "Name": signup_name_id,
      "NID": signup_nid_id,
      "Date Of Birth": signup_dob_id,
      "Mobile No": signup_mobile_id,
      "Blood Group": signup_blood_group_id,
      "Occupation": signup_occupation_id,
      "Number Of Family Member": signup_family_member_id
    }
  }
}

function getSymptomInfo() {
  if (!symptom_00) {
    if (symptom_1)
      ArrSymptom.push(symptom_1);
    if (symptom_2)
      ArrSymptom.push(symptom_2);
    if (symptom_3)
      ArrSymptom.push(symptom_3);
    if (symptom_4)
      ArrSymptom.push(symptom_4);
    if (symptom_5)
      ArrSymptom.push(symptom_5);
    if (symptom_6)
      ArrSymptom.push(symptom_6);
  }
}

function getHealthInfo() {
  if (!health_prob_00) {
    if (health_prob_1)
      ArrHealthProb.push(health_prob_1);
    if (health_prob_2)
      ArrHealthProb.push(health_prob_2);
    if (health_prob_3)
      ArrHealthProb.push(health_prob_3);
    if (health_prob_4)
      ArrHealthProb.push(health_prob_4);
    if (health_prob_5)
      ArrHealthProb.push(health_prob_5);
    if (health_prob_6)
      ArrHealthProb.push(health_prob_6);
    if (health_prob_7)
      ArrHealthProb.push(health_prob_7);
    if (health_prob_8)
      ArrHealthProb.push(health_prob_8);
    if (health_prob_9)
      ArrHealthProb.push(health_prob_9);
  }
}


function submitToFirebase() {
  getAllValues();
  getUserInfo();
  getSymptomInfo();
  getHealthInfo();

  createObject();


  var ref = "data/";
  var userRef = firebase.database().ref(ref);
  var newData = userRef.push();
  newData.set(objectVariable).then(x => {
    console.log("Success!", x);
    document.getElementById('success-modal-btn').click();
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  }).catch(e => {
    console.log(e);
    document.getElementById('failed-modal-btn').click();
  });

}
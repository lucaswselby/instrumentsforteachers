class Program {
    constructor(state, bo, school, phone, address1, address2, teacher, email, needs, updated) {
        this._state = state;
        this._bo = bo;
        this._school = school;
        this._phone = phone;
        this._address1 = address1;
        this._address2 = address2;
        this._teacher = teacher;
        this._email = email;
        this._needs = needs;
        this._updated = updated;
    }
    get state() {
        return this._state;
    }
    get bo() {
        return this._bo;
    }
    get school() {
        return this._school;
    }
    get phone() {
        return this._phone;
    }
    get address1() {
        return this._address1;
    }
    get address2() {
        return this._address2;
    }
    get teacher() {
        return this._teacher;
    }
    get email() {
        return this._email;
    }
    get needs() {
        return this._needs;
    }
    get updated() {
        return this._updated;
    }
}

// initializes school programs
const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "4804722300", "1860 S Longmore", "Mesa, AZ 85202", "Sarina Mountcastle", "samountcastle@mpsaz.org", ["3/4 Violins", "4/4 Violins"], "October 18, 2023");
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "4804722300", "1860 S Longmore", "Mesa, AZ 85202", "Calle Thuneman", "cfthuneman@mpsaz.org", ["Trumpets"], "October 18, 2023");
const adamsB = new Program("AZ", "B", "Adams Elementary School", "4804724348", "738 S Longmore", "Mesa, AZ 85202", "Amber Budinger", "ahbudinger@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 2, 2023");
const edisonB = new Program("AZ", "B", "Edison Elementary School", "4804725345", "45 N Horne", "Mesa, AZ 85203", "Amber Budinger", "ahbudinger@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 2, 2023");
const westwoodO = new Program("AZ", "O", "Westwood High School", "4804724441", "945 W Rio Salado Pkwy", "Mesa, AZ 85201", "Joshua Lynch", "jblynch@mpsaz.org", ["4/4 Violins", "15\" Violas", "15.5\" Violas", "16\" Violas"], "November 3, 2023");
const brintonB = new Program("AZ", "B", "Brinton Elementary", "4804724075", "11455 E Sunland Ave", "Mesa, AZ 85208", "Pat Zaur", "pmzaur@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023");
const oconnorB = new Program("AZ", "B", "O'Connor Elementary", "4804727850", "4840 E Adobe Rd", "Mesa, AZ 85205", "Pat Zaur", "pmzaur@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023");
const whitmanB = new Program("AZ", "B", "Whitman Elementary School", "4804725000", "1829 N Grand", "Mesa, AZ 85201", "William Suit", "wmsuit@mpsaz.org", ["Flutes", "Clarinets", "Alto Saxophones", "Trumpets", "Trombones", "Bell Kits"], "November 7, 2023");
const guerreroB = new Program("AZ", "B", "Pedro Guerrero Elementary School", "4804720200", "463 S Alma School Rd", "Mesa, AZ 85210", "William Suit", "wmsuit@mpsaz.org", ["Flutes", "Clarinets", "Alto Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 7, 2023");
//const highlandArtsO = new Program("AZ", "O", "Highland Arts Elementary School", "4804727648", "3042 E Adobe St", "Mesa, AZ 85213", "VerRona Grandil", "vgrandil@mpsaz.org", ["1/2 Violins", "3/4 Cellos", "4/4 Cellos", "1/2 String Basses"], "November 7, 2023");
const fremontO = new Program("AZ", "O", "Fremont Junior High School", "4804728252", "1001 N Power Rd", "Mesa, AZ 85205", "Lucas Buterbaugh", "lbuterbaugh@mpsaz.org", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos"], "November 7, 2023");
const hellenKellerO = new Program("AZ", "O", "Helen Keller Elementary School", "4804726154", "1445 E Hilton Ave", "Mesa, AZ 85204", "Christopher Jacobson", "cmjacobson@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "3/4 Cellos", "1/4 String Basses", "1/2 String Basses"], "November 7, 2023");
const johnsonO = new Program("AZ", "O", "Johnson Elementary School", "4804726845", "3807 E Pueblo Ave", "Mesa, AZ 85206", "Christopher Jacobson", "cmjacobson@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "3/4 Cellos", "1/4 String Basses", "1/2 String Basses"], "November 7, 2023");
const whittierB = new Program("AZ", "B", "Whittier Elementary School", "4804724921", "733 N Longmore", "Mesa, AZ 85201", "Brandon Burr", "bjburr@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Tuba"], "November 7, 2023");
const highlandArtsB = new Program("AZ", "B", "Highland Arts Elementary School", "4804727649", "3042 E Adobe St", "Mesa, AZ 85297", "Elissa Travis", "eltravis@mpsaz.org", ["Flutes", "Alto Saxophones", "Trumpets", "Trombones", "Euphoniums", "Bell Kits"], "November 7, 2023");
const shepherdO = new Program("AZ", "O", "Shepherd Junior High", "4804721902", "1407 N Alta Mesa Dr", "Mesa, AZ 85205", "Alyssa Coronato", "ascoronato@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "1/4 String Basses"], "November 8, 2023");
const bushB = new Program("AZ", "B", "Barbara Bush Elementary School", "4804728500", "4925 E Ingram St", "Mesa, AZ 85205", "Althea Thomas", "amthomas@mpsaz.org", ["Flutes", "Oboes", "Clarinets", "Alto Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023");
const salkB = new Program("AZ", "B", "Jonas Salk Elementary School", "4804728400", "7029 E Brown Rd", "Mesa, AZ 85207", "Althea Thomas", "amthomas@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023");
const bashaB = new Program("AZ", "B", "Basha High School", "4802099349", "5990 S Val Vista Dr", "Chandler, AZ 85249", "Miles Denny", "denny.miles@cusd80.com", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Drum Kits"], "November 7, 2023");
const arizonaCollegePrepMiddleB = new Program("AZ", "B", "Arizona College Prep Middle School", "4808835400", "1150 W Erie St", "Chandler, AZ 85224", "Julianne Colwell", "colwell.julianne@cusd80.com", ["Flutes", "Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums"], "November 8, 2023");
const perryB = new Program("AZ", "B", "Perry High School", "4802242960", "1919 E Queen Creek Rd", "Gilbert, AZ 85297", "Benjamin Sampayan", "sampayan.benjamin@cusd80.com", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Drum Kits"], "November 9, 2023");
const mesquiteB = new Program("AZ", "B", "Mesquite High School", "4806324750", "500 S McQueen Rd", "Gilbert, AZ 85233", "Tony Latham", "tony.latham@gilbertschools.net", ["Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 14, 2023");
const gilbertHighO = new Program("AZ", "O", "Gilbert High School", "4804970177", "1101 E Elliot Rd", "Gilbert, AZ 85234", "Nathan Benitez", "nathan.benitez@gilbertschools.net", ["3/4 Violins", "4/4 Violins", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "4/4 Cellos", "3/4 String Basses"], "November 15, 2023");
const greenfieldJuniorB = new Program("AZ", "B", "Greenfield Junior High", "4808131770", "101 S Greenfield Rd", "Gilbert, AZ 85296", "Katie Moorhead", "katie.moorhead@gilbertschools.net", ["Clarinets", "Bass Clarinets", "Tenor Saxophones", "French Horns", "Euphoniums"], "November 15, 2023");
const desertRidgeB = new Program("AZ", "B", "Desert Ridge High School", "4809848947", "10045 E Madero Ave", "Mesa, AZ 85209", "Stephanie Campbell", "stephanie.campbell@gilbertschools.net", ["Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones"], "November 15, 2023");
const desertRidgeJuniorO = new Program("AZ", "O", "Desert Ridge Junior High School", "4806352025", "10211 E Madero", "Mesa AZ, 85209", "Dan Folland", "dan.folland@gilbertschools.net", ["4/4 Violins", "14\" Violas", "15\" Violas", "4/4 Cellos", "1/2 String Basses"], "November 15, 2023");
const desertVistaB = new Program("AZ", "B", "Desert Vista High School", "6025254114", "16440 S 32nd St", "Phoenix, AZ 85048", "Michael Krill", "mkrill@tuhsd.k12.az.us", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "French Horns", "Trombones", "Euphoniums"], "November 15, 2023");
const southValleyJuniorB = new Program("AZ", "B", "South Valley Junior High School", "4808550015", "2034 S Lindsay Rd", "Gilbert, AZ 85295", "John Bannon \"Jack\"", "john.bannon@gilbertschools.net", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums"], "November 19, 2023");
const mesquiteJuniorB = new Program("AZ", "B", "Mesquite Junior High School", "4809261433", "130 W Mesquite St", "Gilbert, AZ 85233", "Christopher Michael Hover", "christopher.hover@gilbertschools.net", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 20, 2023");
const harmonyProjectB = new Program("AZ", "B", "Harmony Project Phoenix", "4802278607", "2 N Central Ave suite 1800", "Phoenix, AZ 85004", "Harmony Project Phoenix", "info@harmonyprojectphx.org", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 28, 2023");
const harmonyProjectO = new Program("AZ", "O", "Harmony Project Phoenix", "4802278607", "2 N Central Ave suite 1800", "Phoenix, AZ 85004", "Harmony Project Phoenix", "info@harmonyprojectphx.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "November 28, 2023");
const apacheJunctionHighO = new Program("AZ", "O", "Apache Junction High School", "4809821110", "2525 S Ironwood Dr", "Apache Junction, AZ 85120", "Jill Osborne", "jill.osborne@goaj.net", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "December 4, 2023");
const cactusCanyonJuniorO = new Program("AZ", "O", "Cactus Canyon Junior High School", "4809821110", "2525 S Ironwood Dr", "Apache Junction, AZ 85120", "Jill Osborne", "jill.osborne@goaj.net", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "December 4, 2023");
const programs = [rhodesO, rhodesB, adamsB, edisonB, westwoodO, brintonB, oconnorB, whitmanB, guerreroB, fremontO, hellenKellerO, johnsonO, whittierB, highlandArtsB, shepherdO, bushB, salkB, bashaB, arizonaCollegePrepMiddleB, perryB, mesquiteB, gilbertHighO, greenfieldJuniorB, desertRidgeB, desertRidgeJuniorO, desertVistaB, southValleyJuniorB, mesquiteJuniorB, harmonyProjectB, harmonyProjectO, apacheJunctionHighO, cactusCanyonJuniorO];

// initializes instrument type arrays
const bandInstruments = ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"];
const orchestraInstruments = ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"];

// changing the zip code resorts the programs
const defaultZip = "85003";
let zip = defaultZip;
document.getElementById("zipCode").onchange = () => {
    if (isNaN(document.getElementById("zipCode").value) || document.getElementById("zipCode").value.length !== 5) {
        document.getElementById("zipCode").value = defaultZip;
    }
    zip = document.getElementById("zipCode").value;
    loadPrograms();
};

// source: https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

// resize emails by teacher picture width
const resizeEmail = (emailElement) => {
    emailElement.style.fontSize = "1em";
    if (emailElement.clientWidth > document.getElementsByClassName("teacherPic")[0].clientWidth) {
        let fontSize = 0;
        emailElement.style.fontSize = `${++fontSize}px`;
        while (emailElement.clientWidth < document.getElementsByClassName("teacherPic")[0].clientWidth) {
            emailElement.style.fontSize = `${++fontSize}px`;
        }
        emailElement.style.fontSize = `${--fontSize}px`;
    }
}
const resizeEmails = () => {
    for (let i = 0; i < document.getElementsByClassName("email").length; i++) {
        resizeEmail(document.getElementsByClassName("email")[i]);
    }
}

const filterSortPrograms = async () => {
    // filter programs by state, program type, and instruments
    let filteredPrograms = programs.filter(program => {
        let programHasInstrument = false;
        if ((!document.getElementById("state").value || program.state === document.getElementById("state").value) && program.bo === document.getElementById("program").value) {
            (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).filter(instrument => document.getElementById(instrument.replaceAll("\"", "")) && document.getElementById(instrument.replaceAll("\"", "")).checked).forEach(instrument => {
                if (program.needs.includes(instrument)) {
                    programHasInstrument = true;
                }
            });
        }
        return programHasInstrument;
    });

    // organize programs by distance from zip code
    try {
        filteredPrograms = await sortAddressesByDistance(zip, filteredPrograms);
    } catch (error) {
        try {
            document.getElementById("zipCode").value = defaultZip;
            zip = defaultZip;
            filteredPrograms = await sortAddressesByDistance(zip, filteredPrograms);
        }
        catch (error) {
            console.error(error.message);
        }
    }

    return filteredPrograms;
}

// displays all programs of a specific type within a certain state
const displayPrograms = async (filteredPrograms) => {
    document.getElementById("numberOfPrograms").innerHTML = `${filteredPrograms.length} program${filteredPrograms.length === 1 ? "" : "s"} match${filteredPrograms.length === 1 ? "es" : ""} your search criteria.`;
    document.getElementById("featuredPrograms").innerHTML = "";
    if (filteredPrograms.length) {
        let highest = 0;
        filteredPrograms.forEach(program => {
            // display featured program
            let programElement = document.createElement("div");
            programElement.className = "featuredProgram";
            let leftElement = document.createElement("div");
            leftElement.className = "left";
            leftElement.innerHTML = `<img class="teacherPic" src="./images/teachers/${program.teacher}.png" onerror="if (this.src != './images/teachers/default image.png') this.src = './images/teachers/default image.png';" alt="${program.teacher}">
            <div class="teacher">${program.teacher}</div>
            <div class"title">${program.bo === "B" ? "Band" : "Orchestra"} Teacher</div>`;
            let emailElement = document.createElement("div");
            emailElement.className = "email";
            emailElement.innerHTML = `<a href="mailto:${program.email}" target="_blank">${program.email}</a>`;
            leftElement.appendChild(emailElement);
            programElement.appendChild(leftElement);
            programElement.innerHTML += `<div class="right">
                <h4 class="school">${program.school}</h4>
                <div class="address"><a href="https://maps.google.com/maps?q=${program.address1}, ${program.address2}" target="_blank">${program.address1}</br>${program.address2}</a></div>   
                <div class="phone"><a href="tel:+1${program.phone}">${formatPhoneNumber(program.phone)}</a></div>             
                <div>Needs:<ul class="needs">${program.needs.reduce((prev, curr) => {
                    return prev + `<li>${curr}</li>`;
                }, "")}</ul></div>
            </div>`;
            document.getElementById("featuredPrograms").appendChild(programElement);

            if (programElement.clientHeight > highest) {
                highest = programElement.clientHeight;
            }
        });

        // first program should be gray since it's displayed on the map
        document.getElementsByClassName("featuredProgram")[0].style.backgroundColor = "lightgray";

        for (let i = 0; i < filteredPrograms.length; i++) {
            // resize featured programs to be the same height and resize emails to fit
            document.getElementsByClassName("featuredProgram")[i].style.height = `${highest}px`;
            resizeEmail(document.getElementsByClassName("email")[i]);

            // when a program is clicked, display it on the map
            document.getElementsByClassName("featuredProgram")[i].onclick = () => {
                // chage background colors to highlight featured program
                for (let i = 0; i < filteredPrograms.length; i++) {
                    document.getElementsByClassName("featuredProgram")[i].style.backgroundColor = "white";
                }
                document.getElementsByClassName("featuredProgram")[i].style.backgroundColor = "lightgray";

                // display featured program on map
                initMap(filteredPrograms[i]);
            }
        }
    }
    else {
        document.getElementById("featuredPrograms").innerHTML = `<h3>No programs match your criteria.</h3>`;
    }
};

// instrument filters change based on the program
const fillInstrumentsFilter = () => {
    document.getElementById("instruments").innerHTML = "";
    (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).forEach(instrument => {
        let instrumentElement = document.createElement("div");
        instrumentElement.className = "instrumentFilter";
        instrumentElement.innerHTML = `<input type="checkbox" name="${instrument.replaceAll("\"", "")}" id="${instrument.replaceAll("\"", "")}" checked>
        <label for="${instrument.replaceAll("\"", "")}">
            <figure>
                <img src="./images/instruments/${instrument.replace("/", "").replace("\"", "").replace(".", "")}.png" alt="${instrument}">
                <figcaption>${instrument}</figcaption>
            </figure>
        </label>`
        instrumentElement.onclick = loadPrograms;
        document.getElementById("instruments").appendChild(instrumentElement);
    });
};

const loadPrograms = async () => {
    document.getElementById("numberOfPrograms").innerHTML = "";
    document.getElementById("featuredPrograms").innerHTML = "Loading...";
    let filteredPrograms = await filterSortPrograms();
    displayPrograms(filteredPrograms);
    initMap(filteredPrograms[0]);
}

fillInstrumentsFilter();
document.getElementById("state").onchange = loadPrograms;
document.getElementById("program").onchange = () => {
    fillInstrumentsFilter();
    loadPrograms();
}

// source: Chat GPT
async function geocodeAddress(address) {
    const apiKey = 'AIzaSyCKf8NObN0TXEdBosdn5aE4noSAX_1dVaI';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);

    if (!response.ok) {
        console.error(`Geocoding failed. HTTP status code: ${response.status}`);
        throw new Error('Geocoding failed');
    }

    const data = await response.json();

    if (data.status === 'ZERO_RESULTS') {
        console.error(`Geocoding failed. No results found for the address: ${address}`);
        throw new Error('No results found for the address');
    }

    if (data.status !== 'OK') {
            console.error(`Geocoding failed. API status: ${data.status}`);
    throw new Error('Geocoding failed');
    }

    if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
    } else {
        console.error('Geocoding failed. No results found.');
        throw new Error('Geocoding failed');
    }
}  
function calculateDistance(point1, point2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (point2.lat - point1.lat) * (Math.PI / 180);
    const dLon = (point2.lng - point1.lng) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(point1.lat * (Math.PI / 180)) * Math.cos(point2.lat * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}
// Function to get distance between an address and the reference address
async function getDistanceToReference(referenceAddress, address) {
    try {
        const point = await geocodeAddress(address);
        const referencePoint = await geocodeAddress(referenceAddress);
        const distance = calculateDistance(referencePoint, point);
        return distance;
    } catch (error) {
        throw error; // Rethrow the error for the caller to handle
    }
}
// Function to add distanceFromReference attribute and sort by distance
async function sortAddressesByDistance(referenceAddress, addressObjects) {
    const distances = await Promise.all(
        addressObjects.map(async (obj) => ({
            state: obj.state,
            bo: obj.bo,
            school: obj.school,
            phone: obj.phone,
            address1: obj.address1,
            address2: obj.address2,
            teacher: obj.teacher,
            email: obj.email,
            needs: obj.needs,
            updated: obj.updated,
            distanceFromReference: await getDistanceToReference(referenceAddress, `${obj.address1}, ${obj.address2}`)
        }))
    );

    distances.sort((a, b) => a.distanceFromReference - b.distanceFromReference);

    return distances;
}
document.addEventListener('DOMContentLoaded', function() {
    loadPrograms();
});
async function initMap(program) {
    // Create a geocoder to convert the address to coordinates
    var geocoder = new google.maps.Geocoder();

    // Create a map centered at a default location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: await geocodeAddress(`${program.address1}, ${program.address2}`)
    });

    // Use the geocoder to get the coordinates for the address
    geocoder.geocode({ 'address': `${program.address1}, ${program.address2}` }, function (results, status) {
        if (status === 'OK') {
            // Set the map center to the coordinates of the address
            map.setCenter(results[0].geometry.location);

            // Add markers for the addresses
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: program.school
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
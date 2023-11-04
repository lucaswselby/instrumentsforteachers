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
const programs = [rhodesO, rhodesB, adamsB, edisonB, westwoodO];

// initializes instrument type arrays
const bandInstruments = ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"];
const orchestraInstruments = ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"];

// displays all programs of a specific type within a certain state
const displayPrograms = () => {
    document.getElementById("featuredPrograms").innerHTML = "";
    let filteredPrograms = programs.filter(program => {
        let programHasInstrument = false;
        if ((!document.getElementById("state").value || program.state === document.getElementById("state").value) && program.bo === document.getElementById("program").value) {
            (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).filter(instrument => document.getElementById(instrument) && document.getElementById(instrument).checked).forEach(instrument => {
                if (program.needs.includes(instrument)) {
                    programHasInstrument = true;
                }
            });
        }
        return programHasInstrument;
    });
    if (filteredPrograms.length) {
        filteredPrograms.forEach(program => {            

            // display featured program
            document.getElementById("featuredPrograms").innerHTML += `<div class="featuredProgram">
                <div class="left">
                    <img class="teacherPic" src="./images/teachers/${program.teacher}.png" onerror="if (this.src != './images/teachers/default image.png') this.src = './images/teachers/default image.png';" alt="${program.teacher}">
                    <div class="teacher">${program.teacher}</div>
                    <div class"title">${program.bo === "B" ? "Band" : "Orchestra"} Teacher</div>
                    <div class="email"><a href="mailto:${program.email}" target="_blank">${program.email}</a></div>
                </div>
                <div class="right">
                    <h4 class="school">${program.school}</h4>
                    <div class="address"><a href="https://maps.google.com/maps?q=${`${program.address1}, ${program.address2}`}" target="_blank">${program.address1}</br>${program.address2}</a></div>   
                    <div class="phone"><a href="tel:+1${program.phone}">${formatPhoneNumber(program.phone)}</a></div>             
                    <div>Needs:<ul class="needs">${program.needs.reduce((prev, curr) => {
                        return prev + `<li>${curr}</li>`;
                    }, "")}</ul></div>
                </div>
            </div>`;
        });

        // resize emails by teacher picture width
        for (let i = 0; i < document.getElementsByClassName("email").length; i++) {
            let emailElement = document.getElementsByClassName("email")[i];
            if (emailElement.clientWidth > document.getElementsByClassName("teacherPic")[0].clientWidth) {
                let fontSize = 0;
                while (emailElement.clientWidth < document.getElementsByClassName("teacherPic")[0].clientWidth) {
                    emailElement.style.fontSize = `${++fontSize}px`;
                }
            }
        }

        // resize featured programs to be the same height
        let highest = document.getElementsByClassName("featuredProgram")[0].clientHeight;
        for (let i = 1; i < document.getElementsByClassName("featuredProgram").length; i++) {
            if (document.getElementsByClassName("featuredProgram")[i].clientHeight > highest) {
                highest = document.getElementsByClassName("featuredProgram")[i].clientHeight;
            }
        }
        for (let i = 0; i < document.getElementsByClassName("featuredProgram").length; i++) {
            document.getElementsByClassName("featuredProgram")[i].style.height = `${highest}px`;
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
        document.getElementById("instruments").innerHTML += `<div class="instrumentFilter">
            <input type="checkbox" name="${instrument}" id="${instrument}" checked>
            <label for="${instrument}">
                <figure>
                    <img src="./images/instruments/${instrument.replace("/", "").replace("\"", "").replace(".", "")}.png" alt="${instrument}">
                    <figcaption>${instrument}</figcaption>
                </figure>
            </label>
        </div>`
    });
    (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).forEach(instrument => {
        document.getElementById("instruments").onclick = displayPrograms;
    });
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

fillInstrumentsFilter();
displayPrograms();
document.getElementById("state").onchange = displayPrograms;
document.getElementById("program").onchange = () => {
    fillInstrumentsFilter();
    displayPrograms();
}
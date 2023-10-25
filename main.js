class Program {
    constructor(state, bo, school, phone, address, teacher, email, needs, updated) {
        this._state = state;
        this._bo = bo;
        this._school = school;
        this._phone = phone;
        this._address = address;
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
    get address() {
        return this._address;
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
const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "4804722300", "1860 S Longmore, Mesa, AZ 85202", "Sarina Mountcastle", "samountcastle@mpsaz.org", ["3/4 Violins", "4/4 Violins"], "October 18, 2023");
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "4804722300", "1860 S Longmore, Mesa, AZ 85202", "Calle Thuneman", "cfthuneman@mpsaz.org", ["Trumpets"], "October 18, 2023");
const programs = [rhodesO, rhodesB];

// initializes instrument type arrays
const bandInstruments = ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"];
const orchestraInstruments = ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"];

// displays all programs of a specific type within a certain state
const displayPrograms = () => {
    document.getElementsByTagName("TBODY")[0].innerHTML = "";
    programs.filter(program => {
        let programHasInstrument = false;
        if ((!document.getElementById("state").value || program.state === document.getElementById("state").value) && program.bo === document.getElementById("program").value) {
            (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).filter(instrument => document.getElementById(instrument) && document.getElementById(instrument).checked).forEach(instrument => {
                if (program.needs.includes(instrument)) {
                    programHasInstrument = true;
                }
            });
        }
        return programHasInstrument;
    }).forEach(program => {
        document.getElementsByTagName("TBODY")[0].innerHTML += `<tr>
            <td class="school"><a href="https://maps.google.com/maps?q=${program.address}" target="_blank">${program.school}</a></td>
            <td><a href="tel:+1${program.phone}">${formatPhoneNumber(program.phone)}</a></td>
            <td class="address"><a href="https://maps.google.com/maps?q=${program.address}" target="_blank">${program.address}</a></td>
            <td class="teacher"><a href="mailto:${program.email}" target="_blank">${program.teacher}</a></td>
            <td class="email"><a href="mailto:${program.email}" target="_blank">${program.email}</a></td>
            <td>${program.needs.join(", ")}</td>
        </tr>`;
    });
};

// instrument filters change based on the program
const fillInstrumentsFilter = () => {
    document.getElementById("instruments").innerHTML = "";
    (document.getElementById("program").value === "B" ? bandInstruments : orchestraInstruments).forEach(instrument => {
        document.getElementById("instruments").innerHTML += `<div class="instrumentFilter">
            <input type="checkbox" name="${instrument}" id="${instrument}" checked>
            <label for="${instrument}">
                <figure>
                    <img src="./images/${instrument.replace("/", "").replace("\"", "").replace(".", "")}.png" alt="${instrument}">
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
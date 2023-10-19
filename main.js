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

const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "4804722300", "1860 S Longmore, Mesa, AZ 85202", "Sarina Mountcastle", "samountcastle@mpsaz.org", ["3/4 Violins", "4/4 Violins"], "October 18, 2023");
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "4804722300", "1860 S Longmore, Mesa, AZ 85202", "Calle Thuneman", "cfthuneman@mpsaz.org", ["Trumpets"], "October 18, 2023");
const programs = [rhodesO, rhodesB];

// source: https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
}

const displayPrograms = () => {
    document.getElementsByTagName("TBODY")[0].innerHTML = "";
    programs.forEach(program => {
        if (program.state === document.getElementById("state").value && program.bo === document.getElementById("program").value) {
            document.getElementsByTagName("TBODY")[0].innerHTML += `<tr>
                <td>${program.school}</td>
                <td><a href="tel:+1${program.phone}">${formatPhoneNumber(program.phone)}</a></td>
                <td><a href="https://maps.google.com/maps?q=${program.address}" target="_blank">${program.address}</a></td>
                <td>${program.teacher}</td>
                <td><a href="mailto:${program.email}">${program.email}</a></td>
                <td>${program.needs.join(", ")}</td>
            </tr>`;
        }
    });
};
displayPrograms();

document.getElementById("state").onchange = displayPrograms;
document.getElementById("program").onchange = displayPrograms;
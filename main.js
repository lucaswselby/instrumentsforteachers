class Program {
    constructor(state, bo, school, phone, address, geo, teacher, email, sizes, need, updated) {
        this._state = state;
        this._bo = bo;
        this._school = school;
        this._phone = phone;
        this._address = address;
        this._geo = geo;
        this._teacher = teacher;
        this._email = email;
        this._sizes = sizes;
        this._need = need;
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
    get geo() {
        return this._geo;
    }
    get teacher() {
        return this._teacher;
    }
    get email() {
        return this._email;
    }
    get sizes() {
        return this._sizes;
    }
    get need() {
        return this._need;
    }
    get updated() {
        return this._updated;
    }
}

const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "(480) 472-2300", "1860 S Longmore, Mesa, AZ 85202", "33.3796425,-111.8710111", "Sarina Mountcastle", "[Email]", ["[Sizes]"], "[Need]", "October 18, 2023");
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "(480) 472-2300", "1860 S Longmore, Mesa, AZ 85202", "33.3796425,-111.8710111", "[Band Teacher]", "[Email]", ["All"], "[Need]", "October 18, 2023");
const programs = [rhodesO, rhodesB];

const displayPrograms = () => {
    document.getElementsByTagName("TBODY")[0].innerHTML = "";
    programs.forEach(program => {
        if (program.state === document.getElementById("state").value && program.bo === document.getElementById("program").value) {
            document.getElementsByTagName("TBODY")[0].innerHTML += `<tr>
                <td>${program.school}</td>
                <td><a href="tel:+1${program.phone.replaceAll("(", "").replaceAll(") ", "").replaceAll("-", "")}">${program.phone}</a></td>
                <td><a href="geo:${program.geo}">${program.address}</a></td>
                <td>${program.teacher}</td>
                <td>${program.email}</td>
                <td>${program.sizes.join(", ")}</td>
                <td>${program.need}</td>
            </tr>`;
        }
    });
};
displayPrograms();

document.getElementById("state").onchange = displayPrograms;
document.getElementById("program").onchange = displayPrograms;
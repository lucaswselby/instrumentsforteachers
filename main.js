class Program {
    constructor(state, bo, school, teacher) {
        this._state = state;
        this._bo = bo;
        this._school = school;
        this._teacher = teacher;
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
    get teacher() {
        return this._teacher;
    }
}

const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "Sarina Mountcastle");
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "[Band Teacher]")
const programs = [rhodesO, rhodesB];

const displayPrograms = () => {
    document.getElementsByTagName("TBODY")[0].innerHTML = "";
    programs.forEach(program => {
        if (program.state === document.getElementById("state").value && program.bo === document.getElementById("program").value) {
            document.getElementsByTagName("TBODY")[0].innerHTML += `<tr>
                <td>${program.school}</td>
                <td>${program.teacher}</td>
            </tr>`;
        }
    });
};
displayPrograms();

document.getElementById("state").onchange = displayPrograms;
document.getElementById("program").onchange = displayPrograms;
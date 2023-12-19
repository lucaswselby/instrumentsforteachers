class Program {
    constructor(state, bo, school, phone, address1, address2, teacher, email, needs, updated, lat, lon) {
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
        this._lat = lat;
        this._lon = lon;
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
    get lat() {
        return this._lat;
    }
    get lon() {
        return this._lon;
    }
}

class ZipCode {
    constructor(zipCode, lat, lon) {
        this._zipCode = zipCode;
        this._lat = lat;
        this._lon = lon;
    }
    get zipCode() {
        return this._zipCode;
    }
    get lat() {
        return this._lat;
    }
    get lon() {
        return this._lon;
    }
}

// initiaizes zip codes
// coordinates according to Google Maps, but I have my doubts as to their accuracy
/*let parse = ``;
parse = parse.replaceAll("	", ", ");
parse = parse.split("\n");
document.getElementsByTagName("FOOTER")[0].innerHTML = parse.reduce((prev, next) => {
    return `${prev}, z${next.substring(0, 5)}`;
}, "");
parse = parse.map(str => { return `const z${str.substring(0, 5)} = new ZipCode("${str.substring(0, 5)}"${str.substring(5)});` });
//document.getElementsByTagName("FOOTER")[0].innerHTML = parse.reduce((prev, next) => { return `${prev}<br/>${next}` }, "");*/
const z85003 = new ZipCode("85003", 33.45, -112.07);
const z85004 = new ZipCode("85004", 33.44, -112.07);
const z85006 = new ZipCode("85006", 33.46, -112.05);
const z85007 = new ZipCode("85007", 33.44, -112.08);
const z85008 = new ZipCode("85008", 33.46, -111.98);
const z85009 = new ZipCode("85009", 33.44, -112.13);
const z85012 = new ZipCode("85012", 33.5, -112.07);
const z85013 = new ZipCode("85013", 33.5, -112.08);
const z85014 = new ZipCode("85014", 33.5, -112.05);
const z85015 = new ZipCode("85015", 33.5, -112.1);
const z85016 = new ZipCode("85016", 33.5, -112.02);
const z85017 = new ZipCode("85017", 33.5, -112.12);
const z85018 = new ZipCode("85018", 33.5, -111.98);
const z85019 = new ZipCode("85019", 33.5, -112.14);
const z85020 = new ZipCode("85020", 33.57, -112.05);
const z85021 = new ZipCode("85021", 33.55, -112.09);
const z85022 = new ZipCode("85022", 33.62, -112.05);
const z85023 = new ZipCode("85023", 33.63, -112.09);
const z85024 = new ZipCode("85024", 33.68, -112.04);
const z85025 = new ZipCode("85025", 33.45, -112.07);
const z85026 = new ZipCode("85026", 33.45, -111.97);
const z85027 = new ZipCode("85027", 33.72, -112.08);
const z85028 = new ZipCode("85028", 33.56, -112);
const z85029 = new ZipCode("85029", 33.59, -112.1);
const z85031 = new ZipCode("85031", 33.49, -112.16);
const z85032 = new ZipCode("85032", 33.62, -112);
const z85033 = new ZipCode("85033", 33.49, -112.21);
const z85034 = new ZipCode("85034", 33.43, -112.01);
const z85035 = new ZipCode("85035", 33.47, -112.19);
const z85037 = new ZipCode("85037", 33.48, -112.25);
const z85039 = new ZipCode("85039", 33.49, -112.28);
const z85040 = new ZipCode("85040", 33.4, -112.02);
const z85041 = new ZipCode("85041", 33.38, -112.11);
const z85042 = new ZipCode("85042", 33.37, -112.03);
const z85043 = new ZipCode("85043", 33.42, -112.2);
const z85044 = new ZipCode("85044", 33.34, -112.06);
const z85045 = new ZipCode("85045", 33.3, -112.1);
const z85048 = new ZipCode("85048", 33.28, -112.03);
const z85050 = new ZipCode("85050", 33.69, -112);
const z85051 = new ZipCode("85051", 33.55, -112.13);
const z85053 = new ZipCode("85053", 33.62, -112.13);
const z85054 = new ZipCode("85054", 33.67, -111.95);
const z85055 = new ZipCode("85055", 33.45, -111.97);
const z85065 = new ZipCode("85065", 33.43, -112.05);
const z85073 = new ZipCode("85073", 33.44, -112.07);
const z85083 = new ZipCode("85083", 33.73, -112.14);
const z85085 = new ZipCode("85085", 33.75, -112.14);
const z85086 = new ZipCode("85086", 33.83, -112.11);
const z85087 = new ZipCode("85087", 33.95, -112.07);
const z85097 = new ZipCode("85097", 33.43, -112.15);
const z85117 = new ZipCode("85117", 33.42, -111.54);
const z85118 = new ZipCode("85118", 33.34, -111.42);
const z85119 = new ZipCode("85119", 33.38, -111.51);
const z85120 = new ZipCode("85120", 33.4, -111.56);
const z85121 = new ZipCode("85121", 32.98, -111.75);
const z85122 = new ZipCode("85122", 32.91, -111.74);
const z85123 = new ZipCode("85123", 32.73, -111.67);
const z85127 = new ZipCode("85127", 33.21, -111.69);
const z85128 = new ZipCode("85128", 32.97, -111.49);
const z85130 = new ZipCode("85130", 32.89, -111.75);
const z85131 = new ZipCode("85131", 32.65, -111.59);
const z85132 = new ZipCode("85132", 32.95, -111.23);
const z85135 = new ZipCode("85135", 33, -110.78);
const z85137 = new ZipCode("85137", 33.1, -110.97);
const z85138 = new ZipCode("85138", 33.01, -111.97);
const z85139 = new ZipCode("85139", 32.98, -112.11);
const z85140 = new ZipCode("85140", 33.17, -111.57);
const z85141 = new ZipCode("85141", 32.71, -111.49);
const z85142 = new ZipCode("85142", 33.16, -111.59);
const z85143 = new ZipCode("85143", 33.16, -111.56);
const z85145 = new ZipCode("85145", 32.57, -111.36);
const z85147 = new ZipCode("85147", 33.08, -111.74);
const z85172 = new ZipCode("85172", 32.93, -111.92);
const z85173 = new ZipCode("85173", 33.28, -111.1);
const z85178 = new ZipCode("85178", 33.42, -111.54);
const z85190 = new ZipCode("85190", 33.52, -111.38);
const z85191 = new ZipCode("85191", 32.98, -111.44);
const z85192 = new ZipCode("85192", 32.88, -110.66);
const z85193 = new ZipCode("85193", 32.86, -111.83);
const z85194 = new ZipCode("85194", 32.91, -111.65);
const z85201 = new ZipCode("85201", 33.44, -111.85);
const z85202 = new ZipCode("85202", 33.38, -111.87);
const z85203 = new ZipCode("85203", 33.44, -111.8);
const z85204 = new ZipCode("85204", 33.39, -111.78);
const z85205 = new ZipCode("85205", 33.43, -111.71);
const z85206 = new ZipCode("85206", 33.39, -111.71);
const z85207 = new ZipCode("85207", 33.45, -111.64);
const z85208 = new ZipCode("85208", 33.38, -111.63);
const z85209 = new ZipCode("85209", 33.37, -111.64);
const z85210 = new ZipCode("85210", 33.38, -111.84);
const z85212 = new ZipCode("85212", 33.33, -111.63);
const z85213 = new ZipCode("85213", 33.44, -111.76);
const z85215 = new ZipCode("85215", 33.59, -111.44);
const z85224 = new ZipCode("85224", 33.32, -111.87);
const z85225 = new ZipCode("85225", 33.32, -111.82);
const z85226 = new ZipCode("85226", 33.27, -111.94);
const z85233 = new ZipCode("85233", 33.34, -111.81);
const z85234 = new ZipCode("85234", 33.36, -111.75);
const z85236 = new ZipCode("85236", 33.33, -111.71);
const z85248 = new ZipCode("85248", 33.24, -111.96);
const z85249 = new ZipCode("85249", 33.24, -111.78);
const z85250 = new ZipCode("85250", 33.53, -111.89);
const z85251 = new ZipCode("85251", 33.49, -111.92);
const z85253 = new ZipCode("85253", 33.54, -111.96);
const z85254 = new ZipCode("85254", 33.61, -111.94);
const z85255 = new ZipCode("85255", 33.66, -111.87);
const z85256 = new ZipCode("85256", 33.5, -111.79);
const z85257 = new ZipCode("85257", 33.46, -111.92);
const z85258 = new ZipCode("85258", 33.56, -111.9);
const z85259 = new ZipCode("85259", 33.68, -111.73);
const z85260 = new ZipCode("85260", 33.61, -111.89);
const z85262 = new ZipCode("85262", 33.85, -111.78);
const z85263 = new ZipCode("85263", 33.73, -111.68);
const z85264 = new ZipCode("85264", 33.75, -111.57);
const z85266 = new ZipCode("85266", 33.48, -111.92);
const z85268 = new ZipCode("85268", 33.6, -111.74);
const z85281 = new ZipCode("85281", 33.43, -111.91);
const z85282 = new ZipCode("85282", 33.4, -111.92);
const z85283 = new ZipCode("85283", 33.36, -111.93);
const z85284 = new ZipCode("85284", 33.33, -111.93);
const z85286 = new ZipCode("85286", 33.27, -111.82);
const z85295 = new ZipCode("85295", 33.3, -111.74);
const z85296 = new ZipCode("85296", 33.3, -111.76);
const z85297 = new ZipCode("85297", 33.26, -111.71);
const z85298 = new ZipCode("85298", 33.24, -111.7);
const z85301 = new ZipCode("85301", 33.53, -112.18);
const z85302 = new ZipCode("85302", 33.57, -112.18);
const z85303 = new ZipCode("85303", 33.53, -112.22);
const z85304 = new ZipCode("85304", 33.59, -112.17);
const z85305 = new ZipCode("85305", 33.53, -112.26);
const z85306 = new ZipCode("85306", 33.62, -112.17);
const z85307 = new ZipCode("85307", 33.53, -112.31);
const z85308 = new ZipCode("85308", 33.66, -112.18);
const z85309 = new ZipCode("85309", 33.53, -112.38);
const z85310 = new ZipCode("85310", 33.71, -112.17);
const z85321 = new ZipCode("85321", 32.15, -112.62);
const z85322 = new ZipCode("85322", 33.18, -112.79);
const z85323 = new ZipCode("85323", 33.44, -112.31);
const z85324 = new ZipCode("85324", 34.13, -112.13);
const z85326 = new ZipCode("85326", 33.38, -112.55);
const z85328 = new ZipCode("85328", 33.32, -114.64);
const z85331 = new ZipCode("85331", 33.8, -111.93);
const z85333 = new ZipCode("85333", 32.94, -113.34);
const z85335 = new ZipCode("85335", 33.59, -112.33);
const z85337 = new ZipCode("85337", 32.99, -112.9);
const z85338 = new ZipCode("85338", 33.37, -112.38);
const z85339 = new ZipCode("85339", 33.3, -112.2);
const z85340 = new ZipCode("85340", 33.51, -112.36);
const z85342 = new ZipCode("85342", 33.98, -112.44);
const z85343 = new ZipCode("85343", 33.32, -112.7);
const z85344 = new ZipCode("85344", 33.99, -114.23);
const z85345 = new ZipCode("85345", 33.57, -112.25);
const z85347 = new ZipCode("85347", 32.76, -113.87);
const z85348 = new ZipCode("85348", 33.72, -113.65);
const z85350 = new ZipCode("85350", 32.53, -114.71);
const z85351 = new ZipCode("85351", 33.6, -112.28);
const z85353 = new ZipCode("85353", 33.42, -112.27);
const z85354 = new ZipCode("85354", 33.57, -113.02);
const z85355 = new ZipCode("85355", 33.55, -112.43);
const z85356 = new ZipCode("85356", 32.7, -114.17);
const z85361 = new ZipCode("85361", 33.72, -112.65);
const z85363 = new ZipCode("85363", 33.58, -112.3);
const z85364 = new ZipCode("85364", 32.68, -114.66);
const z85365 = new ZipCode("85365", 32.72, -114.51);
const z85367 = new ZipCode("85367", 32.68, -114.38);
const z85373 = new ZipCode("85373", 33.68, -112.31);
const z85374 = new ZipCode("85374", 33.64, -112.38);
const z85375 = new ZipCode("85375", 33.67, -112.36);
const z85378 = new ZipCode("85378", 33.63, -112.34);
const z85379 = new ZipCode("85379", 33.6, -112.37);
const z85381 = new ZipCode("85381", 33.61, -112.23);
const z85382 = new ZipCode("85382", 33.65, -112.24);
const z85383 = new ZipCode("85383", 33.76, -112.24);
const z85387 = new ZipCode("85387", 33.71, -112.4);
const z85388 = new ZipCode("85388", 33.61, -112.46);
const z85390 = new ZipCode("85390", 33.9, -112.9);
const z85392 = new ZipCode("85392", 33.47, -112.29);
const z85395 = new ZipCode("85395", 33.47, -112.39);
const z85396 = new ZipCode("85396", 33.56, -112.57);
const z85501 = new ZipCode("85501", 33.62, -110.7);
const z85533 = new ZipCode("85533", 33.27, -109.27);
const z85534 = new ZipCode("85534", 32.76, -109.07);
const z85535 = new ZipCode("85535", 32.97, -109.91);
const z85539 = new ZipCode("85539", 33.4, -110.97);
const z85540 = new ZipCode("85540", 33.04, -109.37);
const z85541 = new ZipCode("85541", 34.19, -111.17);
const z85542 = new ZipCode("85542", 33.21, -110.53);
const z85543 = new ZipCode("85543", 33, -109.88);
const z85544 = new ZipCode("85544", 34.32, -111.54);
const z85545 = new ZipCode("85545", 33.62, -111.03);
const z85546 = new ZipCode("85546", 32.7, -109.65);
const z85552 = new ZipCode("85552", 32.82, -109.78);
const z85602 = new ZipCode("85602", 32.19, -110.38);
const z85603 = new ZipCode("85603", 31.44, -109.87);
const z85606 = new ZipCode("85606", 32.06, -109.91);
const z85607 = new ZipCode("85607", 31.54, -109.46);
const z85610 = new ZipCode("85610", 31.73, -109.7);
const z85611 = new ZipCode("85611", 31.57, -110.54);
const z85613 = new ZipCode("85613", 31.52, -110.36);
const z85614 = new ZipCode("85614", 31.84, -111.06);
const z85615 = new ZipCode("85615", 31.44, -110.23);
const z85616 = new ZipCode("85616", 31.73, -110.31);
const z85617 = new ZipCode("85617", 31.55, -109.69);
const z85618 = new ZipCode("85618", 32.68, -110.62);
const z85621 = new ZipCode("85621", 31.45, -110.83);
const z85622 = new ZipCode("85622", 31.76, -110.85);
const z85623 = new ZipCode("85623", 32.64, -110.84);
const z85624 = new ZipCode("85624", 31.53, -110.71);
const z85625 = new ZipCode("85625", 31.86, -109.33);
const z85629 = new ZipCode("85629", 31.91, -110.9);
const z85630 = new ZipCode("85630", 31.88, -110.18);
const z85631 = new ZipCode("85631", 32.62, -110.59);
const z85632 = new ZipCode("85632", 32, -109.21);
const z85634 = new ZipCode("85634", 32, -111.93);
const z85635 = new ZipCode("85635", 31.59, -110.17);
const z85637 = new ZipCode("85637", 31.75, -110.66);
const z85638 = new ZipCode("85638", 31.71, -110.04);
const z85640 = new ZipCode("85640", 31.55, -111.03);
const z85641 = new ZipCode("85641", 31.95, -110.69);
const z85643 = new ZipCode("85643", 32.43, -109.88);
const z85645 = new ZipCode("85645", 31.71, -111.02);
const z85648 = new ZipCode("85648", 31.5, -111.06);
const z85650 = new ZipCode("85650", 31.5, -110.21);
const z85653 = new ZipCode("85653", 32.45, -111.29);
const z85658 = new ZipCode("85658", 32.51, -111.16);
const z85701 = new ZipCode("85701", 32.21, -110.96);
const z85704 = new ZipCode("85704", 32.33, -110.98);
const z85705 = new ZipCode("85705", 32.26, -111);
const z85706 = new ZipCode("85706", 32.07, -110.88);
const z85708 = new ZipCode("85708", 32.17, -110.87);
const z85710 = new ZipCode("85710", 32.22, -110.82);
const z85711 = new ZipCode("85711", 32.21, -110.88);
const z85712 = new ZipCode("85712", 32.25, -110.87);
const z85713 = new ZipCode("85713", 32.19, -110.98);
const z85714 = new ZipCode("85714", 32.16, -110.91);
const z85715 = new ZipCode("85715", 32.25, -110.82);
const z85716 = new ZipCode("85716", 32.24, -110.92);
const z85718 = new ZipCode("85718", 32.31, -110.92);
const z85719 = new ZipCode("85719", 32.24, -110.95);
const z85730 = new ZipCode("85730", 32.17, -110.79);
const z85735 = new ZipCode("85735", 32.06, -111.42);
const z85736 = new ZipCode("85736", 31.9, -111.36);
const z85737 = new ZipCode("85737", 32.43, -110.95);
const z85739 = new ZipCode("85739", 32.54, -110.95);
const z85741 = new ZipCode("85741", 32.33, -111.05);
const z85742 = new ZipCode("85742", 32.43, -111.03);
const z85743 = new ZipCode("85743", 32.3, -111.16);
const z85745 = new ZipCode("85745", 32.25, -111.08);
const z85746 = new ZipCode("85746", 32.09, -111.08);
const z85747 = new ZipCode("85747", 32.1, -110.68);
const z85748 = new ZipCode("85748", 32.21, -110.75);
const z85749 = new ZipCode("85749", 32.28, -110.73);
const z85750 = new ZipCode("85750", 32.29, -110.83);
const z85755 = new ZipCode("85755", 32.46, -110.97);
const z85756 = new ZipCode("85756", 32.07, -110.92);
const z85757 = new ZipCode("85757", 32.08, -111.11);
const z85901 = new ZipCode("85901", 34.23, -110.07);
const z85920 = new ZipCode("85920", 33.83, -109.19);
const z85922 = new ZipCode("85922", 33.52, -109.21);
const z85924 = new ZipCode("85924", 34.51, -109.69);
const z85925 = new ZipCode("85925", 34.11, -109.38);
const z85927 = new ZipCode("85927", 34, -109.48);
const z85928 = new ZipCode("85928", 34.53, -110.44);
const z85929 = new ZipCode("85929", 34.1, -110.08);
const z85935 = new ZipCode("85935", 34.08, -109.9);
const z85936 = new ZipCode("85936", 34.56, -109.33);
const z85937 = new ZipCode("85937", 34.64, -110.11);
const z85938 = new ZipCode("85938", 34.04, -109.2);
const z86001 = new ZipCode("86001", 35.23, -111.72);
const z86004 = new ZipCode("86004", 35.29, -111.32);
const z86022 = new ZipCode("86022", 36.74, -112.11);
const z86024 = new ZipCode("86024", 34.73, -111.15);
const z86025 = new ZipCode("86025", 34.94, -110.09);
const z86036 = new ZipCode("86036", 36.74, -111.85);
const z86038 = new ZipCode("86038", 34.93, -111.47);
const z86044 = new ZipCode("86044", 36.91, -110.87);
const z86046 = new ZipCode("86046", 35.37, -112.26);
const z86047 = new ZipCode("86047", 35.1, -110.64);
const z86301 = new ZipCode("86301", 34.62, -112.42);
const z86303 = new ZipCode("86303", 34.49, -112.44);
const z86305 = new ZipCode("86305", 34.76, -112.88);
const z86314 = new ZipCode("86314", 34.66, -112.29);
const z86315 = new ZipCode("86315", 34.69, -112.3);
const z86321 = new ZipCode("86321", 34.5, -113.07);
const z86322 = new ZipCode("86322", 34.48, -111.78);
const z86323 = new ZipCode("86323", 34.77, -112.45);
const z86324 = new ZipCode("86324", 34.79, -112.1);
const z86325 = new ZipCode("86325", 34.73, -111.91);
const z86326 = new ZipCode("86326", 34.75, -112.01);
const z86327 = new ZipCode("86327", 34.56, -112.12);
const z86332 = new ZipCode("86332", 34.29, -112.66);
const z86333 = new ZipCode("86333", 34.34, -112.03);
const z86334 = new ZipCode("86334", 34.9, -112.43);
const z86335 = new ZipCode("86335", 34.68, -111.7);
const z86336 = new ZipCode("86336", 34.94, -111.94);
const z86351 = new ZipCode("86351", 34.75, -111.77);
const z86401 = new ZipCode("86401", 35.24, -113.76);
const z86403 = new ZipCode("86403", 34.48, -114.32);
const z86404 = new ZipCode("86404", 34.61, -114.3);
const z86406 = new ZipCode("86406", 34.44, -114.24);
const z86409 = new ZipCode("86409", 35.24, -114.01);
const z86413 = new ZipCode("86413", 35.13, -114.25);
const z86426 = new ZipCode("86426", 35, -114.56);
const z86429 = new ZipCode("86429", 35.14, -114.49);
const z86434 = new ZipCode("86434", 35.64, -113.61);
const z86436 = new ZipCode("86436", 34.72, -114.44);
const z86437 = new ZipCode("86437", 35.39, -113.62);
const z86440 = new ZipCode("86440", 34.86, -114.51);
const z86441 = new ZipCode("86441", 35.64, -114.31);
const z86442 = new ZipCode("86442", 35.09, -114.57);
const z86443 = new ZipCode("86443", 36.02, -114.29);
const z86444 = new ZipCode("86444", 35.98, -114.06);
const z86445 = new ZipCode("86445", 35.9, -114.59);
const z86503 = new ZipCode("86503", 36.23, -109.57);
const z86505 = new ZipCode("86505", 35.67, -109.65);
const z86514 = new ZipCode("86514", 36.89, -109.37);
const azZipCodes = [z85003, z85004, z85006, z85007, z85008, z85009, z85012, z85013, z85014, z85015, z85016, z85017, z85018, z85019, z85020, z85021, z85022, z85023, z85024, z85025, z85026, z85027, z85028, z85029, z85031, z85032, z85033, z85034, z85035, z85037, z85039, z85040, z85041, z85042, z85043, z85044, z85045, z85048, z85050, z85051, z85053, z85054, z85055, z85065, z85073, z85083, z85085, z85086, z85087, z85097, z85117, z85118, z85119, z85120, z85121, z85122, z85123, z85127, z85128, z85130, z85131, z85132, z85135, z85137, z85138, z85139, z85140, z85141, z85142, z85143, z85145, z85147, z85172, z85173, z85178, z85190, z85191, z85192, z85193, z85194, z85201, z85202, z85203, z85204, z85205, z85206, z85207, z85208, z85209, z85210, z85212, z85213, z85215, z85224, z85225, z85226, z85233, z85234, z85236, z85248, z85249, z85250, z85251, z85253, z85254, z85255, z85256, z85257, z85258, z85259, z85260, z85262, z85263, z85264, z85266, z85268, z85281, z85282, z85283, z85284, z85286, z85295, z85296, z85297, z85298, z85301, z85302, z85303, z85304, z85305, z85306, z85307, z85308, z85309, z85310, z85321, z85322, z85323, z85324, z85326, z85328, z85331, z85333, z85335, z85337, z85338, z85339, z85340, z85342, z85343, z85344, z85345, z85347, z85348, z85350, z85351, z85353, z85354, z85355, z85356, z85361, z85363, z85364, z85365, z85367, z85373, z85374, z85375, z85378, z85379, z85381, z85382, z85383, z85387, z85388, z85390, z85392, z85395, z85396, z85501, z85533, z85534, z85535, z85539, z85540, z85541, z85542, z85543, z85544, z85545, z85546, z85552, z85602, z85603, z85606, z85607, z85610, z85611, z85613, z85614, z85615, z85616, z85617, z85618, z85621, z85622, z85623, z85624, z85625, z85629, z85630, z85631, z85632, z85634, z85635, z85637, z85638, z85640, z85641, z85643, z85645, z85648, z85650, z85653, z85658, z85701, z85704, z85705, z85706, z85708, z85710, z85711, z85712, z85713, z85714, z85715, z85716, z85718, z85719, z85730, z85735, z85736, z85737, z85739, z85741, z85742, z85743, z85745, z85746, z85747, z85748, z85749, z85750, z85755, z85756, z85757, z85901, z85920, z85922, z85924, z85925, z85927, z85928, z85929, z85935, z85936, z85937, z85938, z86001, z86004, z86022, z86024, z86025, z86036, z86038, z86044, z86046, z86047, z86301, z86303, z86305, z86314, z86315, z86321, z86322, z86323, z86324, z86325, z86326, z86327, z86332, z86333, z86334, z86335, z86336, z86351, z86401, z86403, z86404, z86406, z86409, z86413, z86426, z86429, z86434, z86436, z86437, z86440, z86441, z86442, z86443, z86444, z86445, z86503, z86505, z86514];
const azZipCodeStrs = azZipCodes.map(obj => { return obj.zipCode });

// initializes school programs
const rhodesO = new Program("AZ", "O", "Rhodes Junior High School", "4804722300", "1860 S Longmore", "Mesa, AZ 85202", "Sarina Mountcastle", "samountcastle@mpsaz.org", ["3/4 Violins", "4/4 Violins"], "October 18, 2023", 33.3796998, -111.8725451);
const rhodesB = new Program("AZ", "B", "Rhodes Junior High School", "4804722300", "1860 S Longmore", "Mesa, AZ 85202", "Calle Thuneman", "cfthuneman@mpsaz.org", ["Trumpets"], "October 18, 2023", 33.3796998, -111.8725451);
const adamsB = new Program("AZ", "B", "Adams Elementary School", "4804724348", "738 S Longmore", "Mesa, AZ 85202", "Amber Budinger", "ahbudinger@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 2, 2023", 33.400968, -111.8707286);
const edisonB = new Program("AZ", "B", "Edison Elementary School", "4804725345", "545 N Horne", "Mesa, AZ 85203", "Amber Budinger", "ahbudinger@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 2, 2023", 33.4251541, -111.8178398);
const westwoodO = new Program("AZ", "O", "Westwood High School", "4804724441", "945 W Rio Salado Pkwy", "Mesa, AZ 85201", "Joshua Lynch", "jblynch@mpsaz.org", ["4/4 Violins", "15\" Violas", "15.5\" Violas", "16\" Violas"], "November 3, 2023", 33.4285276, -111.8543315);
const brintonB = new Program("AZ", "B", "Brinton Elementary", "4804724075", "11455 E Sunland Ave", "Mesa, AZ 85208", "Pat Zaur", "pmzaur@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023", 33.3961628, -111.5844549);
const oconnorB = new Program("AZ", "B", "O'Connor Elementary", "4804727850", "4840 E Adobe St", "Mesa, AZ 85205", "Pat Zaur", "pmzaur@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023", 33.4307537, -111.7293135);
const whitmanB = new Program("AZ", "B", "Whitman Elementary School", "4804725000", "1829 N Grand", "Mesa, AZ 85201", "William Suit", "wmsuit@mpsaz.org", ["Flutes", "Clarinets", "Alto Saxophones", "Trumpets", "Trombones", "Bell Kits"], "November 7, 2023", 33.4484659, -111.8368431);
const guerreroB = new Program("AZ", "B", "Pedro Guerrero Elementary School", "4804720200", "463 S Alma School Rd", "Mesa, AZ 85210", "William Suit", "wmsuit@mpsaz.org", ["Flutes", "Clarinets", "Alto Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits"], "November 7, 2023", 33.4062969, -111.8573931);
//const highlandArtsO = new Program("AZ", "O", "Highland Arts Elementary School", "4804727648", "3042 E Adobe St", "Mesa, AZ 85213", "VerRona Grandil", "vgrandil@mpsaz.org", ["1/2 Violins", "3/4 Cellos", "4/4 Cellos", "1/2 String Basses"], "November 7, 2023", 33.4306675, -111.768955);
const fremontO = new Program("AZ", "O", "Fremont Junior High School", "4804728252", "1001 N Power Rd #5799", "Mesa, AZ 85205", "Lucas Buterbaugh", "lbuterbaugh@mpsaz.org", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos"], "November 7, 2023", 33.4322834, -111.6850898);
const kellerO = new Program("AZ", "O", "Keller Elementary School", "4804726154", "1445 E Hilton Ave", "Mesa, AZ 85204", "Christopher Jacobson", "cmjacobson@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "3/4 Cellos", "1/4 String Basses", "1/2 String Basses"], "November 7, 2023", 33.3870372, -111.8014203);
const johnsonO = new Program("AZ", "O", "Johnson Elementary School", "4804726845", "3807 E Pueblo Ave", "Mesa, AZ 85206", "Christopher Jacobson", "cmjacobson@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "3/4 Cellos", "1/4 String Basses", "1/2 String Basses"], "November 7, 2023", 33.4001674, -111.7510222);
const whittierB = new Program("AZ", "B", "Whittier Elementary School", "4804724921", "733 N Longmore", "Mesa, AZ 85201", "Brandon Burr", "bjburr@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Tuba"], "November 7, 2023", 33.4288266, -111.8673983);
const highlandArtsB = new Program("AZ", "B", "Highland Arts Elementary School", "4804727649", "3042 E Adobe St", "Mesa, AZ 85297", "Elissa Travis", "eltravis@mpsaz.org", ["Flutes", "Alto Saxophones", "Trumpets", "Trombones", "Euphoniums", "Bell Kits"], "November 7, 2023", 33.430663, -111.768955);
const shepherdO = new Program("AZ", "O", "Shepherd Junior High", "4804721902", "1407 N Alta Mesa Dr", "Mesa, AZ 85205", "Alyssa Coronato", "ascoronato@mpsaz.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "1/4 String Basses"], "November 8, 2023", 33.4400017, -111.7087985);
const bushB = new Program("AZ", "B", "Barbara Bush Elementary School", "4804728500", "4925 E Ingram St", "Mesa, AZ 85205", "Althea Thomas", "amthomas@mpsaz.org", ["Flutes", "Oboes", "Clarinets", "Alto Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023", 33.4462535, -111.7249811);
const salkB = new Program("AZ", "B", "Jonas Salk Elementary School", "4804728400", "7029 E Brown Rd", "Mesa, AZ 85207", "Althea Thomas", "amthomas@mpsaz.org", ["Flutes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits"], "November 7, 2023", 33.4360823, -111.6821087);
const bashaB = new Program("AZ", "B", "Basha High School", "4802099349", "5990 S Val Vista Dr", "Chandler, AZ 85249", "Miles Denny", "denny.miles@cusd80.com", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Drum Kits"], "November 7, 2023", 33.2211317, -111.7613394);
const arizonaCollegePrepMiddleB = new Program("AZ", "B", "Arizona College Prep Middle School", "4808835400", "1150 W Erie St", "Chandler, AZ 85224", "Julianne Colwell", "colwell.julianne@cusd80.com", ["Flutes", "Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones", "Baritones", "Euphoniums"], "November 8, 2023", 33.3104352, -111.8649064);
const perryB = new Program("AZ", "B", "Perry High School", "4802242960", "1919 E Queen Creek Rd", "Gilbert, AZ 85297", "Benjamin Sampayan", "sampayan.benjamin@cusd80.com", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Drum Kits"], "November 9, 2023", 33.2618803, -111.749029);
const mesquiteB = new Program("AZ", "B", "Mesquite High School", "4806324750", "500 S McQueen Rd", "Gilbert, AZ 85233", "Tony Latham", "tony.latham@gilbertschools.net", ["Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 14, 2023", 33.3406955, -111.8267515);
const gilbertHighO = new Program("AZ", "O", "Gilbert High School", "4804970177", "1101 E Elliot Rd", "Gilbert, AZ 85234", "Nathan Benitez", "nathan.benitez@gilbertschools.net", ["3/4 Violins", "4/4 Violins", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "4/4 Cellos", "3/4 String Basses"], "November 15, 2023", 33.3473373, -111.7690502);
const greenfieldJuniorB = new Program("AZ", "B", "Greenfield Junior High", "4808131770", "101 S Greenfield Rd", "Gilbert, AZ 85296", "Katie Moorhead", "katie.moorhead@gilbertschools.net", ["Clarinets", "Bass Clarinets", "Tenor Saxophones", "French Horns", "Euphoniums"], "November 15, 2023", 33.3494113, -111.7394707);
const desertRidgeB = new Program("AZ", "B", "Desert Ridge High School", "4809848947", "10045 E Madero Ave", "Mesa, AZ 85209", "Stephanie Campbell", "stephanie.campbell@gilbertschools.net", ["Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Trombones"], "November 15, 2023", 33.3709729, -111.6198791);
const desertRidgeJuniorO = new Program("AZ", "O", "Desert Ridge Junior High School", "4806352025", "10211 E Madero", "Mesa AZ, 85209", "Dan Folland", "dan.folland@gilbertschools.net", ["4/4 Violins", "14\" Violas", "15\" Violas", "4/4 Cellos", "1/2 String Basses"], "November 15, 2023", 33.3692152, -111.6151979);
const desertVistaB = new Program("AZ", "B", "Desert Vista High School", "6025254114", "16440 S 32nd St", "Phoenix, AZ 85048", "Michael Krill", "mkrill@tuhsd.k12.az.us", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "French Horns", "Trombones", "Euphoniums"], "November 15, 2023", 33.2957783, -112.0177848);
const southValleyJuniorB = new Program("AZ", "B", "South Valley Junior High School", "4808550015", "2034 S Lindsay Rd", "Gilbert, AZ 85295", "John Bannon \"Jack\"", "john.bannon@gilbertschools.net", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums"], "November 19, 2023", 33.3126375, -111.7762446);
const mesquiteJuniorB = new Program("AZ", "B", "Mesquite Junior High School", "4809261433", "130 W Mesquite St", "Gilbert, AZ 85233", "Christopher Michael Hover", "christopher.hover@gilbertschools.net", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 20, 2023", 33.3445166, -111.7996888);
const harmonyProjectB = new Program("AZ", "B", "Harmony Project Phoenix", "4802278607", "2 N Central Ave suite 1800", "Phoenix, AZ 85004", "Harmony Project Phoenix", "info@harmonyprojectphx.org", ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"], "November 28, 2023", 33.4479047, -112.0764767);
const harmonyProjectO = new Program("AZ", "O", "Harmony Project Phoenix", "4802278607", "2 N Central Ave suite 1800", "Phoenix, AZ 85004", "Harmony Project Phoenix", "info@harmonyprojectphx.org", ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "November 28, 2023", 33.4479047, -112.0764767);
const apacheJunctionHighO = new Program("AZ", "O", "Apache Junction High School", "4809821110", "2525 S Ironwood Dr", "Apache Junction, AZ 85120", "Jill Osborne", "jill.osborne@goaj.net", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "December 4, 2023", 33.3917254, -111.5636116);
const cactusCanyonJuniorO = new Program("AZ", "O", "Cactus Canyon Junior High School", "4809821110", "801 W Southern Ave", "Apache Junction, AZ 85120", "Jill Osborne", "jill.osborne@goaj.net", ["1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"], "December 4, 2023", 33.3925507, -111.5585352);
const programs = [rhodesO, rhodesB, adamsB, edisonB, westwoodO, brintonB, oconnorB, whitmanB, guerreroB, fremontO, kellerO, johnsonO, whittierB, highlandArtsB, shepherdO, bushB, salkB, bashaB, arizonaCollegePrepMiddleB, perryB, mesquiteB, gilbertHighO, greenfieldJuniorB, desertRidgeB, desertRidgeJuniorO, desertVistaB, southValleyJuniorB, mesquiteJuniorB, harmonyProjectB, harmonyProjectO, apacheJunctionHighO, cactusCanyonJuniorO];

// initializes instrument type arrays
const bandInstruments = ["Piccolos", "Flutes", "Oboes", "Clarinets", "Bass Clarinets", "Alto Saxophones", "Tenor Saxophones", "Trumpets", "Cornets", "French Horns", "Trombones", "Baritones", "Euphoniums", "Bell Kits", "Percussion Learning Kits", "Drum Kits"];
const orchestraInstruments = ["1/4 Violins", "1/2 Violins", "3/4 Violins", "4/4 Violins", "12\" Violas", "13\" Violas", "14\" Violas", "15\" Violas", "15.5\" Violas", "16\" Violas", "1/4 Cellos", "1/2 Cellos", "3/4 Cellos", "4/4 Cellos", "1/4 String Basses", "1/2 String Basses", "3/4 String Basses"];

// changing the zip code resorts the programs
const defaultZip = "85003";
let zip = defaultZip;
document.getElementById("zipCode").onchange = () => {
    if (!azZipCodeStrs.includes(document.getElementById("zipCode").value)) {
        document.getElementById("zipCode").value = defaultZip;
    }
    zip = document.getElementById("zipCode").value;
    displayPrograms();
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

// displays all programs of a specific type within a certain state
const displayPrograms = () => {
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

    // sort programs by distance from user-input zip code
    filteredPrograms.forEach(program => {
        let zipObj = azZipCodes.filter(zipCode => zipCode.zipCode === zip)[0];
        program.distance = getDistance(zipObj.lat, zipObj.lon, program.lat, program.lon);
    });
    filteredPrograms.sort((a, b) => { return a.distance - b.distance });

    // diplays programs
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

        // resize featured programs to be the same height and resize emails to fit
        for (let i = 0; i < filteredPrograms.length; i++) {
            document.getElementsByClassName("featuredProgram")[i].style.height = `${highest}px`;
            resizeEmail(document.getElementsByClassName("email")[i]);
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
        instrumentElement.onclick = displayPrograms;
        document.getElementById("instruments").appendChild(instrumentElement);
    });
};

fillInstrumentsFilter();
displayPrograms();
document.getElementById("state").onchange = displayPrograms;
document.getElementById("program").onchange = () => {
    fillInstrumentsFilter();
    displayPrograms();
}

// source: https://stackoverflow.com/questions/50452059/sort-data-by-closest-geolocation-with-filtering
function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}
// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}
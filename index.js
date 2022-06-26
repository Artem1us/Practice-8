// Створити обʼєктну модель організації.


let countDeveloper = 0;
// У кожного Employee повинні бути поля:Імʼя,Призвіще,базова заробітна плата,досвід (у роках)
function Developer(name, surname, baseSal, exp) {
	this.name = name;
	this.surname = surname;
	this.baseSal = baseSal;
	this.exp = exp;
	//якщо його досвід роботи більше 2 років, він отримує baseSalary + 200
	if (exp > 2 && exp <= 5) {
		this.countedSalary = this.baseSal + 200;
	}
	//якщо його досвід більше 5 років - він отримує baseSalary * 1.2 + 500.
	if (exp > 5) {
		this.countedSalary = this.baseSal * 1.2 + 500;
	}
	countDeveloper++;
	return;
}

let countDesigner = 0;
//Імʼя,Призвіще,базова заробітна плата,досвід (у роках), коефіцієнт ефективності
function Designer(name, surname, baseSal, exp, effCoeff) {
	this.name = name;
	this.surname = surname;
	this.baseSal = baseSal;
	this.workExp = exp;
	//якщо його досвід роботи більше 2 років, він отримує baseSalary + 200
	if (exp > 2 && exp <= 5) {
		this.countedSalary = this.baseSal + 200;
	}
	//якщо його досвід більше 5 років - він отримує baseSalary * 1.2 + 500.
	if (exp > 5) {
		this.countedSalary = this.baseSal * 1.2 + 500;
	}
	//Designer додатково повинен бути коефіцієнт ефективності - число від 0 до 1.
	if (effCoeff > 1 || effCoeff < 0) {
		return false;
	}
	countDesigner++;
	this.effCoeff = effCoeff;
	//На зп Designer впливає коефіцієнт ефективності countedSalary * effCoeff.
	this.countedSalary *= effCoeff;
	return;
}

let countManags = 0;
//Імʼя,Призвіще,базова заробітна плата,досвід (у роках), команда
function Manager(name, surname, baseSal, exp, Team) {
	this.name = name;
	this.surname = surname;
	this.baseSal = baseSal;
	this.exp = exp;
	this.Team = Team;
	//зп Manager розраховується з countedSalary
	//якщо його досвід роботи більше 2 років, він отримує baseSalary + 200
	if (exp > 2 && exp <= 5) {
		this.countedSalary = this.baseSal + 200;
	}
	//якщо його досвід більше 5 років - він отримує baseSalary * 1.2 + 500.
	if (exp > 5) {
		this.countedSalary = this.baseSal * 1.2 + 500;
	}
	// якщо в його команді більше 5 людей - countedSalary + 200
	if (Team.length > 5 && Team.length <= 10) {
		this.countedSalary += 200;
	}
	//якщо в його команді більше 10 людей то countedSalary + 300.
	if (Team.length > 10) {
		this.countedSalary += 300;
	}
	for (let i = 0; i < Team.length; i++) {
		if (typeof(this.Team) == Developer) {
		countDeveloper++;
		}
		if (typeof(this.Team) == Designer) {
			countDesigner++;
		}
	}
	//якщо в його команді більше половини Developer - його зп збільшується ще на 10%.
	if (countDeveloper > (countDeveloper + countDesigner) / 2) {
		this.countedSalary *= 1.1;
	}
	return;
}

// Створити обʼєкт Department, що містить масив Manager (які в свою чергу містять команди).
function Department (manager) {
	this.manager = manager;
	this.workers = manager.Team;
	// Department повинен мати метод giveSalary() який повинен надрукувати зарплату ВСІХ Employee цієї організації в форматі "іʼмя призвіще отримав число шекєлей".
	this.giveSalary = function() {
		for (let i = 0; i < this.manager.Team.length; i++) {
			console.log(this.manager.name + " " + this.manager.surname + " received " + this.manager.countedSalary + " shekels");
		}
		for (let i = 0; i < this.manager.Team.length; i++) {
			console.log(this.manager.Team[i].name + this.manager.Team[i].surname + " received " + this.manager.Team[i].countedSalary + " shekels"); 
		}
	}
}

let e1 = new Developer("Taha ", "Leonard", 100, 3);
let e2 = new Developer("Ophelia ", "Christian", 110, 3);
let e3 = new Developer("Teagan ", "Downs", 120, 4);
let e4 = new Developer("Nancy ", "Rowe", 130, 5);
let e5 = new Developer("Frida ", "Driscoll", 140, 6);
let e6 = new Developer("Patsy ", "Grainger", 150, 7);
let e7 = new Developer("Marianne ", "Hendricks", 160, 8);
let e8 = new Developer("Reese ", "Weber", 165, 9);

let e9 = new Designer("Melissa ", "Cervantes", 170, 3, 0.4);
let e10 = new Designer("Hunter ", "Squires", 180, 3, 0.5);
let e11 = new Designer("Orlaith ", "Slater", 190, 4, 0.6);
let e12 = new Designer("Emmie ", "Burris", 200, 5, 0.7);
let e13 = new Designer("Kodi ", "Cardenas", 210, 15, 0.8);
// У Manager повинна бути команда (масив) що складається з довільної кількості Developer та Designer.
let e14 = new Manager("Ashton ", "Miller", 1000, 6, [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13]);
let depart = new Department(e14);
depart.giveSalary();
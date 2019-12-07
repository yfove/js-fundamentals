const names = ['Sam', 'Jamie', 'Alex', 'Andy', 'August', 'Chris', 'Dakota', 'Drew', 'Max'];

// filter names that are more than 3 letters
const short = names.filter((name)=>{
	if(name.length<=3){
		return true;
	}
})

console.log(short);

const students = [
    {
        name: 'Pat',
        grade: 58
    },
    {
        name: 'Taylor',
        grade: 93
    },
    {
        name: 'Dale',
        grade: 80
    },
    {
        name: 'Casey',
        grade: 78
    },
    {
        name: 'Jo',
        grade: 68
    }
];

//find the honors students > 80

const honors = students.filter((student)=>{
	if (student.grade >= 80){
		return true;
	}
})

console.log(honors);
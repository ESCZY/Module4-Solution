var names=new Array();
names[0]="Israel";
names[1]="lak";
names[2]="Jacob";
names[3]="joe";
names[4]="paul";
names[5]="Psalm";
names[6]="mark";
names[7]="peter";
names[8]="bogish";
names[9]="Joshua";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
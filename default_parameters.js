function calcDefaultValue(a=1, b=a==1?2:3) {
	console.log(a,b);
}

calcDefaultValue(1);
calcDefaultValue(2);
calcDefaultValue(1,5);
calcDefaultValue(6,7);


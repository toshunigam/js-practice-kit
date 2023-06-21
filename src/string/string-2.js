var arr = []
function funn(str){
	if(str.length<=0 || str===null)
		return 'empty string'
	
	//console.log('first character===>>',str[0])
	arr.push(str[0]);
	//console.log('current array====>>',arr);
	let ss = str.slice(1);
	//console.log('remaining string====>>',ss)
	funn(ss);
	return arr;
}
console.log(funn('Hi toshu'));

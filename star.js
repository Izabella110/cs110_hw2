const star=function(x){
   if(x===0){
     return "";
}	
return "*"+star(x-1);
};
const space=function(x){
	if(x===0){
		return"";
	} 
	return " "+space(x-1);
};
 const mix=function(x,y){
 	if(y===undefined){
 		y=0;
 	}
 	if(x===0){
     return"";
 	}
 	return mix(x-1,y+1)+"\n"+space(y)+star(2*x-1);
 };

 console.log(mix(5));

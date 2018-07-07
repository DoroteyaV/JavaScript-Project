var arrIngredients = [  ['Крило от прилеп', 'A'],
						['Жаби', 'B'],
						['Змийски зъби', 'A'],
						['Котешко око', 'C'],
						['Черупка от костенурка', 'B'],
						['Пера от гарван', 'C'],
						['Бразилски скитащ паяк', 'D'],
						['Черна вдовица', 'E'],
						['Око от октопод', 'D'],
						['Опашка от скорпион', 'F']
						],
	arrLen = arrIngredients.length;
var target = document.getElementById('container'),
	btnEl, spanEl, i;

for (i = 0; i < arrLen; i++){
	btnEl = document.createElement('button');
	btnEl.textContent = arrIngredients[i][0];
	btnEl.setAttribute('id', i+1);
	btnEl.setAttribute('value', arrIngredients[i][1]);
	btnEl.setAttribute('class', 'magic');
	spanEl = document.createElement('span');
	spanEl.textContent = arrIngredients[i][1];
	target.appendChild(btnEl);
	target.appendChild(spanEl);
}
var arrMagics = [];
var newArrMagics = [];

$('.magic').on('click', function(e){
    e.preventDefault();
    arrMagics.push( $(this).val() );
   // console.log(arrMagics); 
    $(this).val('Can`t use it anymore').attr('disabled', 'disabled');
});

$('#new_magic').on('click', function(e){
	e.preventDefault();
});

$('#check').on('click', function(e) {
	e.preventDefault();
    //console.log(arrMagics.length); // < read the length of the amended array here
    //console.log(arrMagics); //  see the content
    for (j = 0; j < arrMagics.length; j++){
    	if (arrMagics[j] === arrMagics[j - 1]){
    		alert('Не се позволява съставките с едно и също действие да са непосредствено една след друга!')
    	}
    	newArrMagics.push(arrMagics[j]);
    	console.log(newArrMagics); //check the new filled array with magics 
    }
    var permArr = [],
  		usedChars = [],
  		arrPermutation;

	function permute(input) {
  		var k, ch;
  		for (k = 0; k < input.length; k++) {
    		ch = input.splice(k, 1)[0];
    		usedChars.push(ch);
    		if (input.length == 0) {
      			permArr.push(usedChars.slice());
    		}
    		permute(input);
    		input.splice(k, 0, ch);
    		usedChars.pop();
  		}
  		return permArr;
	}
	arrPermutation = permute(newArrMagics);
	//console.log(arrPermutation) 
	arrPermutationLen = arrPermutation.length; //how long you can save the world :)
	//console.log(arrPermutationLen);
    alert('Можеш да спасиш света за  ' + arrPermutationLen + ' дни!');
//**** unique array *** don`t compare
    function unique (newArrMagics){
    	var p, len = newArrMagics.length, out = [], object = {};
    	for (p = 0; p < len; p++){
    		object[newArrMagics[p]] = 0;
    	}
    	for (p in object){
    		out.push(p);
    	}
    	return out;
    }
    console.log(unique(newArrMagics)); 
});
//*****Another button for calculating the days of saving the world*******
// $('#save_the_world').on('click', function(){
// 	var permArr = [],
//   		usedChars = [],
//   		arrPermutation;

// 	function permute(input) {
//   		var k, ch;
//   		for (k = 0; k < input.length; k++) {
//     		ch = input.splice(k, 1)[0];
//     		usedChars.push(ch);
//     		if (input.length == 0) {
//       			permArr.push(usedChars.slice());
//     		}
//     		permute(input);
//     		input.splice(k, 0, ch);
//     		usedChars.pop();
//   		}
//   		return permArr;
// 	}
// 	arrPermutation = permute(newArrMagics);
// 	console.log(arrPermutation) 
// 	arrPermutationLen = arrPermutation.length;
// 	console.log(arrPermutationLen);
// });

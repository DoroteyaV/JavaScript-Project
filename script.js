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
var target = document.getElementById('wrapper'),
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

$('.magic').on('click', function(e){
    e.preventDefault();
    arrMagics.push( $(this).val() );
   // console.log(arrMagics); // just so you can see the content
    $(this).val('Can`t use it anymore').attr('disabled', 'disabled');
});

$('#check').on('click', function() {
    console.log(arrMagics.length); // < read the length of the amended array here
    console.log(arrMagics); // just so you can see the content
    for (j = 0; j < arrMagics.length; j++){
    	if (arrMagics[j] === arrMagics[j - 1]){
    		alert('Не се позволява съставките с едно и също действие да са непосредствено една след друга!')
    	} else {
    		var permute = arrMagics.length * (arrMagics.length - 1);
    		alert('Можеш да спасиш света за ' + permute + ' дни!')
    	}
    }
});


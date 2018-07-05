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
	btnEl, i;
for (i = 0; i < arrLen; i++){
	btnEl = document.createElement('button');
	btnEl.textContent = arrIngredients[i][0];
	btnEl.setAttribute('id', i+1);
	btnEl.setAttribute('value', arrIngredients[i][1]);
	target.appendChild(btnEl);
}

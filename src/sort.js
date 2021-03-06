/*export default class Sort{
	constructor(){

	}
	bubbleSort(array){
		let temp = 0;
		let arr = array.concat();
		let len = arr.length;

		for(let i=0; i<len-1; i++){
			for(let j=0; j<len-i-1; j++){
				if(arr[j] > arr[j+1]){
					temp = arr[j];
					arr[j]= arr[j+1];
					arr[j+1] = temp;
				}
			}
		}

		return arr;
	}

	quickSort(array){
		let arr = array.concat();
		if(arr.length <= 1){
			return arr;
		}

		const base = arr[0];
		const left = [];
		const right = [];

		for(let i=1; i<arr.length; i++){
			if(arr[i] < base){
				left.push(arr[i]);
			}else{
				right.push(arr[i]);
			}
		}

		return this.quickSort(left).concat(base, this.quickSort(right));
	}

	selectSort(array){
		let arr = array.concat();
		let sortedArr = [];
		let len = arr.length;

		for(let i=0; i<len; i++){
			let min = Math.min.apply(null, arr);
			sortedArr.push(min);
			arr.splice(arr.indexOf(min), 1);
		}

		return sortedArr;
	}
}*/

/*const sort = new Sort();
const arr = [3, 2, 6, 1, 8, 2, 5, 5];

const bubbleRes = sort.bubbleSort(arr);
console.log('bubble1', bubbleRes);
const quickRes = sort.quickSort(arr);
const selectRes = sort.selectSort(arr);

console.log('bubble2', bubbleRes);
console.log('quickRes', quickRes);
console.log('selectRes', selectRes);

console.log(arr);*/

function bubbleSort(array){
	let temp = 0;
	let arr = array;
	let len = arr.length;

	for(let i=0; i<len-1; i++){
		for(let j=0; j<len-i-1; j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j]= arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr;
}
function quickSort(array){
	let arr = array;
	if(arr.length <= 1){
		return arr;
	}

	const base = arr[0];
	const left = [];
	const right = [];

	for(let i=1; i<arr.length; i++){
		if(arr[i] < base){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat(base, quickSort(right));
}
function selectSort(array){
	let arr = array;
	let sortedArr = [];
	let len = arr.length;

	for(let i=0; i<len; i++){
		let min = Math.min.apply(null, arr);
		sortedArr.push(min);
		arr.splice(arr.indexOf(min), 1);
	}

	return sortedArr;
}

const arr = [3, 2, 6, 1, 8, 2, 5, 5];

const bubbleRes = bubbleSort(arr);
console.log('bubble1', bubbleRes);
const quickRes = quickSort(arr);
const selectRes = selectSort(arr);

console.log('bubble2', bubbleRes);
console.log('quickRes', quickRes);
console.log('selectRes', selectRes);

console.log(arr);

function qsort(arr){
  if(arr.length <= 1) return arr;
  var c = arr[0], rest = arr.slice(1);
  return qsort(rest.filter(item => item < c))
    .concat([c]).concat(qsort(rest.filter(item => item >= c)));
}
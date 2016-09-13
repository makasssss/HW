var arr = [1, 2, 3, 4, 5];

var length = arr.length;

arr.each = function() {
	for(var i = 0; i<arr.length; i++) {
		console.log(arr[i] + ' ' + i + ' ' + arr);
	}
};

arr.some = function(a) {
	for(var i = 0; i<length; i++) {
		if (arr.indexOf(a)>0) {
			return true;
		} else {
			return false;
		}		
	}
};

arr.every = function(a) {
	for(var i = 0; i<length; i++) {
		if(arr[i] === a) {
			return true;
		} else {
			return false;
		}
	}
}

arr.map = function(arr, callback, thisArg) {
	var result = [];
	for(var i = 0; i<length; i++) {
		result.push(callback.call(thisArg, arr[i], arr))
	}
};

arr.reduce = function(arr, callback, startValue) {
  result = startValue;
  for (var i = 0; i < length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};
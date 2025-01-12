//1
function cachingDecoratorNew(func) {
  let cache = [
    { hash: "10,20,30", value: 60 },
    { hash: "2,2,2", value: 6 },
  ];

  function wrapper(...args) {

    const hash = args.join(',');// получаем правильный хэш
    let objectInCache = cache.find(item => item.hash === hash);//// ищем элемент, хэш которого равен нашему хэшу
    //console.log(objectInCache);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }
    if (cache.length > 5) {
      cache.shift();//// если слишком много элементов в кэше надо удалить самый старый (первый) 
    }

    let result = func(...args);
    cache.push({ hash: hash, value: result });// // добавляем элемент

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//2

function debounceDecoratorNew(func, ms) {
  let debounce = false;
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, ms);

    if (!debounce) {
      func(...args);
      debounce = true;
    }
  }
}

//3
function debounceDecorator2(func, ms) {
  let debounce = false;
  let timeout;

  function wrapper(...args) {
    wrapper.count++;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, ms);

    if (!debounce) {
      func(...args);
      debounce = true;
    }
  }

  wrapper.count = 0;

  return wrapper

}


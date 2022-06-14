//1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {

    const hash = args.join(',');// получаем правильный хэш
    let objectInCache = cache.findIndex((item) => item.hash === hash);//// ищем элемент, хэш которого равен нашему хэшу

    if (objectInCache !== -1) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    }

    let result = func(...args);
    cache.push({ hash: hash, value: result });// // добавляем элемент

    if (cache.length > 5) {
      cache.shift();//// если слишком много элементов в кэше надо удалить самый старый (первый) 
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//2

function debounceDecoratorNew(func, ms) {
  let Debounced = false;
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, ms);

    if (!Debounced) {
      func(...args);
      Debounced = true;
    }
  }
}




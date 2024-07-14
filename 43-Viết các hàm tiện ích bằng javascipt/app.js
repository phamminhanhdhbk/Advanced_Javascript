function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Ví dụ sử dụng
  const handleResize = debounce(() => {
    console.log('Window resized');
  }, 300);
  
  window.addEventListener('resize', handleResize);
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  // Ví dụ sử dụng
  const handleScroll = throttle(() => {
    console.log('Window scrolled');
  }, 1000);
  
  window.addEventListener('scroll', handleScroll);
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const arrCopy = [];
      obj.forEach((item, index) => {
        arrCopy[index] = deepClone(item);
      });
      return arrCopy;
    }
  
    const objCopy = {};
    Object.keys(obj).forEach(key => {
      objCopy[key] = deepClone(obj[key]);
    });
    return objCopy;
  }
  
  // Ví dụ sử dụng
  const original = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  const cloned = deepClone(original);
  
  console.log(original); // { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } }
  console.log(cloned);   // { name: 'John', age: 30, address: { city: 'New York', zip: '10001' } }
  
  cloned.address.city = 'Los Angeles';
  
  console.log(original.address.city); // 'New York'
  console.log(cloned.address.city);   // 'Los Angeles'
      
const debounce = (func, waitTime, immediate) => {
  let timeout, args, context, timestamp, result;

  const later = () => {
    const last = new Date.getTime() - timestamp;
    // 上次使用函數的時間last與目前的時間相差間隔是否小於waitTime
    if (last < waitTime && last > 0) {
      timeout = setTimeout(later, waitTime - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = new Date.getTime();
    const callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, waitTime);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  }
}

export default debounce; 
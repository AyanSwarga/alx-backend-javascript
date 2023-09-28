   if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

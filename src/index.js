function promiseTest() {
    const getWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        const weatherData = { temperature: "30*" };
        const condition = true;
        if (condition) resolve(weatherData);
        else reject(new Error("no weather data"));
      }, 1000);
    });
  
    getWeather.then((data) => console.log(data));
  }
  promiseTest(); 
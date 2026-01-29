//This method should focus on getting the data from the server

//first to get the data I assume we need to use the Fetch keyword. Open the lesson and go over it

const apiKey = "ZUE5UWWFQ38UFEZLLQFTJ8QKU";

export async function getWeather(location, day1, day2) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${day1}/${day2}?key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  /*console.log(data);
  console.log(data.address);
  console.log(data.days[0].datetime);
  console.log(data.days[1].datetime);
  console.log(data.currentConditions.temp);
  console.log(data.days[1].temp);*/

  return {
    location: data.address,
    today: {
      date: data.days[0].datetime,
      temperature: data.currentConditions.temp,
    },
    tomorrow: {
      date: data.days[1].datetime,
      temperature: data.days[1].temp,
    },
  };
}

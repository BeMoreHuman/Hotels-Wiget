export interface City {
  city_title: string;
  city_id: number;
  city_img_url: string;
  city_hotels: Hotel[];
}

export interface Hotel {
  hotel_title: string;
  hotel_id: number;
  hotel_img_url: string;
  hotel_address: string;
  hotel_description: string;
  hotel_phone: string;
  hotel_weather_title: string;
  hotel_weather_icon: string;
  hotel_weather_temperature: number;
  hotel_weather_water: number;
  hotel_rate: number;
  hotel_likes: number;
}

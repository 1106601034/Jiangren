 import fs from 'node:fs';
 import axios from 'axios';

const OPENAI_API_KEY = '';

async function generateWeatherImage() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "gpt-image-1",
        prompt:
          "flat illustration, minimal vector art, Sydney Opera House silhouette at night, gradient blue sky with stars and clouds, glowing moon, airplane in the sky, rain drops falling, futuristic flat style, clean weather app background, no text, no typography",
        size: "1024x1024"
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Get base64 image or URL depending on response format
    const imageUrl = response.data.data[0].url;
    console.log("Generated Image URL:", imageUrl);

    // If you prefer to download the image directly:
    const imageResp = await axios.get(imageUrl, { responseType: "arraybuffer" });
    fs.writeFileSync("weather.png", imageResp.data);
    console.log("✅ Image saved as weather.png");
    return imageUrl;
  } catch (error) {
    //console.error("Error generating image:", error?.response?.data || error.message);
  }
}

export default generateWeatherImage;
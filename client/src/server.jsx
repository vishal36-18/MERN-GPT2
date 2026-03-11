let IS_PROD = true;
const server = IS_PROD ?
    "https://mern-gpt2-1.onrender.com" :

    "http://localhost:5050"


export default server;

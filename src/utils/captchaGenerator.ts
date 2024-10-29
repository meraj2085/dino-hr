export const generateRandomCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
  let captcha = "";
  for (let i = 0; i < 7; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

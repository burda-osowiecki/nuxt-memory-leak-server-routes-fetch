export default defineEventHandler(async (event) => {
  await fetch("https://jsonplaceholder.typicode.com/photos");

  return "OK";
});

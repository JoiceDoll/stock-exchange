import "dotenv/config";
import app from "./app";

app.listen(8080, () => {
  console.log("Server running at 8080.");
});

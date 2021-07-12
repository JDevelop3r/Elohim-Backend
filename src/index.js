import app from "./app";
import "./database";

console.log("Server Listen port", 3000);
app.listen(process.env.PORT || 3000);

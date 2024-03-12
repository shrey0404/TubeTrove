import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    // cors dusre domian se client applications services leta hai hmare domain mai laata hai ..
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // provides the services for NESTED OBJECTS ..
app.use(express.static("public")); // it stores specific files which anyone can access ..
app.use(cookieParser()); // cookies store krleta hai server side mai taaki user info accessebile ho paaye ..

// MIDDLEWARE : software prgram hota hai jo chote chote components handle krta hai like "check use is logged in"
// simple hai !! .. middleware app.use() ke through implement hota hai aur (req, res , next) .. next means aage wale middleware pr jaao ..

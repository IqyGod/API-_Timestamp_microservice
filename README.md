# Timestamp Microservice

This is the updated code for the Timestamp Microservice project. 
version: year 2022

User story: 

1. A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)

2. A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

3. A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

4. Your project can handle dates that can be successfully parsed by new Date(date_string)

5. If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

6. An empty date parameter should return the current time in a JSON object with a unix key

7. An empty date parameter should return the current time in a JSON object with a utc key
 ![image](https://user-images.githubusercontent.com/99662300/169226267-751237c3-598b-4b9c-8d04-978724fa160a.png)


Live link: https://project-timestamp.godherea.repl.co
-
Input as date: format example as "1988-09-29" => with "-" or "Thu, Sep 29 1988" => with " ". Do not forget to use new Date().

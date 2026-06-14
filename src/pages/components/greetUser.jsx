import { useEffect, useState } from "react";
import "./greetUser.css";

function GreetUser() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const seconds = dateObject.getSeconds();

      const currentTime = hour + ":" + minutes + ":" + seconds;

      setTime(currentTime);
    }, 1000);
  }, []);

  return (
    <div class="greet-user">
      <div class="greet-user-text">
        <text>Hello there, [username]</text>
        <section />
        <text>Your time is: {time}</text>
      </div>
    </div>
  );
}

export default GreetUser;

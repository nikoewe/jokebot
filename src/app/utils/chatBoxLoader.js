export default function chatBoxLoader() {
  //Creates the element <script> in the DOM
  const scriptTag = document.createElement("script");
  //Adds the attribute 'src' to the element created before.
  scriptTag.src =
    "https://cdn.jsdelivr.net/npm/@moveo-ai/web-client@latest/dist/web-client.min.js";
  //In order to run the following script we need to wait until the library is fully loaded.
  //To do this we can add an event listener which will trigger the script once the library is loaded
  scriptTag.addEventListener("load", () => {
    //Here we receive the confirmation that this eventv was successfully triggered.
    console.log("Script is loaded");
    //Right away we can run the script to get the element in where the chatbox is going to be executed.

    MoveoAI.init({
      integrationId: "3a919770-e17e-4155-adb1-4871942e030d",
      element: document.getElementById("embed"),
    })
      //Once it's loaded a log message will be sended to confirm this operation. In case something went wrong
      //it'll log the error.
      .then((desk) => console.log("Moveo connected"))
      .catch((error) => console.error(error));
  });
  //Here the element we created before is being attached to our html body.
  document.body.appendChild(scriptTag);
}

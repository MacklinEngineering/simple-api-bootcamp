//Divya, Muigai and I made this code together//

//This is called an iife - Immidiately invoked function exporession

//When you want to make asyncronous coide, you use async before function and await followed by fetch
(async function() {
  let userID = 1 //increase/iterate ythrough the array of information in the API
  const jsonPlaceholder_url = "https://jsonplaceholder.typicode.com/" //until ".com/" - a descriptive url variable
  //follow the same variable naming convention everytime (camel case)
  const response = await fetch(`${jsonPlaceholder_url}albums`) //used template literal to get a particular route (albums) - used fetch to get that info and await
  const result = await response.json() //want the JSOn version of whatever the fetch response is
  // console.log(result) //Allows us to see the result information from the call in the console
  // document.getElementById("response").innerHTML = JSON.stringify(result)



  //THE DRY WAY- FANCY
  async function getDataFromJSON(route, id) { //initialized asyncronous function that takes in two parameters - the route and the id
    const apiResponse = await fetch(`${jsonPlaceholder_url}${route}/${id}`)
    const apiResult = await apiResponse.json()

    console.log(apiResult)
    return apiResult

    //Create a Button that when the button is clicked it shows the API information for the route that we choose

    // document.getElementByID("apiResponse").innerHTML = JSON.stringify(result)
  }
  document.getElementById("makeAPICall").addEventListener("click", async () => { //with an anonomous function call (fat arrow notation)
    let user = (await getDataFromJSON("users", userID))
    userID++ // >=(userID.length) - WANT TO MAKE IT STOP AT THE LENGTH
    // document.getElementById("response").innerHTML = user //JSON.stringify(await getDataFromJSON("users")) //function call WITH PARAMETER
    document.getElementById("name").innerHTML = user["name"]
    document.getElementById("suite").innerHTML = user["address"]["suite"]
    document.getElementById("street").innerHTML = user["address"]["street"]
    document.getElementById("zipcode").innerHTML = user["address"]["zipcode"]
    document.getElementById("phone").innerHTML = user["phone"]
    document.getElementById("email").innerHTML = user["email"]

  })
})()




// .catch(err => {
//   console.error(err.message);
// });


//1. Start with Asyncronnous Iife
//2. Console log to make sure its connected
//3. Create a variable for your api url
//4. Making a fetch to your api
//5. Turning what we get back from url into JSON
//6. get rid of console log- THROW UOP ALL THE JSON ON THE PAGE : USING JSON.stringify
//HOW TO SEE THE JSON IN THE DOM: DOCUMENT OBJECT MODEL AKA
// DOCUMENT.getElementById(PASS IN RESULT).INNERHTML = JSON.STRINGIFY//
//7.

//Make NEw function that will:
//call JSON placeholder api
//Return specified data from the JSON placeholder API based on a parameter passed into the function

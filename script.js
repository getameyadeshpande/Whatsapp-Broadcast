const csvInput = document.getElementById("csvFile")
const sendBtn = document.getElementById("sendBtn")
const status = document.getElementById("status")

sendBtn.addEventListener("click", async () => {

 if (!csvInput.files.length) {
  status.innerText = "Please upload a CSV file."
  return
 }

 const file = csvInput.files[0]
 const text = await file.text()

 const rows = text.split("\n")

 let numbers = []

 rows.forEach(row => {

   const clean = row.replace(/\r/g,"").trim()

   if(clean.length > 5){
      numbers.push(clean)
   }

 })

 status.innerText = "Processing " + numbers.length + " contacts..."

 for(const number of numbers){

   await fetch("/api/send",{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      },
      body:JSON.stringify({
         number:number
      })
   })

   await new Promise(r => setTimeout(r,200))

 }

 status.innerText = "Messages sent!"

})
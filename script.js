const input = document.getElementById("text-input")
const totalvalue = document.getElementById("total-chr")
const remain = document.getElementById("remaining")
const words = document.getElementById("total-word")

let remaining = 200
input.addEventListener("input", (e)=>{
  const value = e.target.value
  const total = value.length
  totalvalue.textContent = total
  remain.textContent =  remaining - total
  words.textContent = value.split(/\s+/).filter(Boolean).length
      
})

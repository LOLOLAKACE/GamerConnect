
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
const fetchData = async () => {
    try {
   
        const res = await fetch('api.json', {headers: {'Accept': 'application/json','Content-Type': 'application/json'},mode: 'cors'})
      
        console.log(data)







    } catch (error) {
        console.log(error)
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const getResource = async () => {
        let res = await fetch('https://api.adviceslip.com/advice');
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    }
    
    const title = document.querySelector('.title');
          descr = document.querySelector('.descr');
          btn = document.querySelector('.dice');
    
    function setData (data) {
        console.log(data);
        title.textContent = 'adcice #' + data.id;
        descr.textContent = data.advice;
    }
    
    btn.addEventListener('click', () => {
        getResource().then(data => setData(data.slip));
    })
})
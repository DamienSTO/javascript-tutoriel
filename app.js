async function main(){
        const wrapper = document.querySelector('#lastPosts')
        const loader = document.createElement('p')
        loader.innerText = 'Chargement...'
        wrapper.append(loader)
        try{
            const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5',{
                headers:{
                    Accept: 'application/json'
            }
        })
     
        if (!r.ok){
            throw new Error('Error serveur')
        }
        const posts = await r.json()
        loader.remove()
        } catch(e){
            loader.innerText = 'Impossible'
            loader.style.color = 'red'
            return
    }
}

main()
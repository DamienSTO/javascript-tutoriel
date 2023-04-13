export function createElement(tagName, attribute = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attriutes) ){
        element.setAttribute(attribute, value )

    }
    return element 
}

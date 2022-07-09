const setupTags = recipes => {
    const allTags = {}
    recipes.forEach( recipe => {
        recipe.content.tags.forEach( tag => {
            if(allTags[tag]){
                allTags[tag] = allTags[tag] + 1
            }
            else{
                allTags[tag] = 1
            }
        })
    })
    //The below would sort the JSON object based on key values
    //Before the method {"food": 4, "breakfast":2}
    //After the method [["breakfast:,2], ["food", 4]]
    const newTags = Object.entries(allTags).sort( (a,b) => {
        const [firstTag] = a
        const [secondTag] = b
        return firstTag.localeCompare(secondTag)
    })
    return newTags
}

export default setupTags
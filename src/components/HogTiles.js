

function HogTiles({hogs}) {
     const pigTiles = hogs.map((pigObj) => {
        return (
    <div className="pigTile">
        <h3>{pigObj.name}</h3>
        <img src={pigObj.image}></img>
    </div>
    ) 
     })   

     return (
        <div>
            {pigTiles}
        </div>
         
     )

}

export default HogTiles
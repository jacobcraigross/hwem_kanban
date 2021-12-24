notes and useful hints. 

you can basically insert JS anywhere in a compo via the {} syntax. 

instead of this...
{showComments ? (<div>PLACEHOLDER</div>) : ('NO COMMENTS')}

we can refactor to this...
{showComments && (<div>PLACEHOLDER</div>)}

"if showComments is truthy, render that div"


--------------------------------------------------------------------------
basics lesson code... 

function App() {

    
    const title = "Chicken fried steak fucking sucked at this dump."
    const body = "Yeah we came and it was pure shit. 0/10 stars and the outhouse smelled like shit. Also shit was smeared on the wall. We wont be going back."
    const comments = [
        {id: 1, text: "lol blow it out your ass puto!!!"},
        {id: 2, text: "GOOD FUCKING STEAK"},
        {id: 3, text: "6/10.... not horrible, not great."}
    ];
    

    const loading = false; // use case: like fetching data from backend. 
    // if (loading === true) return <h1>Loading...please wait</h1>
    // refactor shorter
    if (loading) return <h1>Loading...</h1>

    const showComments = true; // toggle this to show comments. 
    const commentBlock = ( // cleaner up outta the way.
        <div className="comments">
            <h3>comments ({comments.length})</h3>
                {/* map() takes a function and returns JSX () NOT {} in this case. */}
                {/* dont forget to use in index as the key! warnings otherwise. */}
            <ul> 
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )



    
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>
            {showComments && commentBlock}
        </div>
    )
}

export default App;
--------------------------------------------------------------------------------


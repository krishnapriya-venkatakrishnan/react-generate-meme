import React, {useState, useEffect} from "react";

export default function Meme(){
    
    const meme = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    }
    const [memeImage, setMemeImage] = useState(meme)

    const [allMemeData, setAllMemeData] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(mData => setAllMemeData(mData.data.memes))
    },[])

    function handleChange(event){
        const {name, value} = event.target
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            [name]: value
        }))
    }

    function getMemeImage(){
        const randomImageUrl = Math.floor(Math.random()*allMemeData.length)
        const {url} = allMemeData[randomImageUrl]
        setMemeImage(prevMemeImage => ({
            ...prevMemeImage,
            randomImage: url
        }))
    }
    
    return(
        <>
        <div className="form-container">
            <div className="input-container">
                <div className="top-text">
                    <label htmlFor="topText">Top text</label>
                    <input type="text"
                        id="topText"
                        name="topText"
                        placeholder="Shut up"
                        onChange={handleChange}
                        value={memeImage.topText}
                        />
                </div>

                <div className="bottom-text">
                    <label htmlFor="bottomText">Bottom text</label>
                    <input type="text"
                        id="bottomText"
                        name="bottomText"
                        placeholder="and take my money"
                        onChange={handleChange}
                        value={memeImage.bottomText}
                        />
                </div>
            </div>

            <div className="btn-container">
                <button className="form-btn"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼️
                    </button>
            </div>
        </div>
        <div className="meme-container">
            <img src={memeImage.randomImage} alt="meme image" />
            <h2 className="img-top-text">{memeImage.topText}</h2>
            <h2 className="img-bottom-text">{memeImage.bottomText}</h2>
        </div>
        </>
    )
}
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PhotosList from "./PhotosList"

export default function BlockPage() {

    const [block, setBlock] = useState([])
    const [photoloadin, setPhotoloading] = useState(false)

    const getPhotos = () => {
        setPhotoloading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
        .then(data => {
            setBlock(data)
            setPhotoloading(false)
        })
    }

    const BlockNavigate = useNavigate()

    const toGoBlock = () => {
        BlockNavigate(-1)
    }

    useEffect(() => {
        getPhotos()
    },[])


    return(
        <>
         <button onClick={toGoBlock}>MainPage</button>
        <h1>BlockPage</h1>
        {
            photoloadin
            ?
            <p>loading....</p>
            :
            <PhotosList photosList={block}/>
        }
        </>
    )
}
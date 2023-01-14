export default function PhotosList({photosList}) {

    return(
        <>
        {
            photosList.map(photos =>
                <>
                <img src={photos.url} alt="ui ux" />
                </>
                )
        }
        </>
    )
}
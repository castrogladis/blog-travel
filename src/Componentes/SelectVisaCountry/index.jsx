/* eslint-disable react/prop-types */

function SelectVisaCountry({ linkUrl,imageUrl, altText }) {
    return (
        <figure className="w-full h-full">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={imageUrl} alt={altText} 
            className="rounded-r-lg"/>
            </a>
        </figure>
    )
}

export default SelectVisaCountry;
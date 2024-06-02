import { useContext } from "react";
import { BlogTravelContext } from "../../Context";

/* eslint-disable react/prop-types */
function HoverFigure({  imageUrl, linkUrl, altText, references }) {
  const context = useContext(BlogTravelContext);

  const handleMouseEnter = () => context.setIsHover(true);
  const handleMouseLeave = () => context.setIsHover(false);

  return (
    <figure
      className="w-full h-full rounded-lg relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} className="w-full h-full rounded-lg object-cover"/>
        {context.isHover && (
          <div className="absolute top-0 left-0 w-full h-full bg-rose-500 bg-opacity-40 text-black flex flex-col items-center justify-center font-medium text-center" >
            <div>
              {references.map((reference, index) => (
                <p key={index}>{reference}</p>
              ))}
            </div>
          </div>
        )}
      </a>
    </figure>
  )
}

export default HoverFigure;
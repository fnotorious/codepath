/* eslint-disable react/prop-types */
const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((galleryPic, index) => (
                <img
                    className="screenshot"
                    src={galleryPic}
                    alt="Gallery image"
                    key={index}
                />
            ))}
      </div>
    );
  };
  
  export default Gallery;
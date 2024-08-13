import Carousel from "./Carousel";

const images: string[] = [
  "https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/772988/pexels-photo-772988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/23180917/pexels-photo-23180917/free-photo-of-an-aerial-view-of-a-river-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3030268/pexels-photo-3030268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function ImageCarousel() {
  return (
    <div className="relative overflow-hidden rounded-md">
      <Carousel images={images} autoPlay />
    </div>
  );
}

export default ImageCarousel;

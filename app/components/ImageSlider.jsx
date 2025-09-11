import React from 'react'

const ImageSlider = () => {
  return (
    <div>
      <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4">
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/4023132/pexels-photo-4023132.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/39303/mango-tropical-fruit-juicy-sweet-39303.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/16724963/pexels-photo-16724963/free-photo-of-close-up-of-a-mango.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/46518/lychee-fruits-pink-food-46518.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/30893227/pexels-photo-30893227/free-photo-of-freshly-harvested-mangoes-on-display.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/39288/lychee-fruit-fresh-food-39288.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/17201892/pexels-photo-17201892/free-photo-of-red-litchi-fruit.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-box" />
        </div>
      </div>
    </div>
  )
}

export default ImageSlider

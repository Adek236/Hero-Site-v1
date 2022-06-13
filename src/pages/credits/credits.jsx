import React, { useEffect } from 'react';
import './credits.css';

function Credits(props) {

  useEffect(() => {
    props.setShowHeroBtns(false);
  }, []);

  return (
    <div className="credits-block">
      <h1>Credits</h1>
      <a href='https://www.freepik.com/photos/gaming-wallpaper'>Gaming wallpaper photo created by wirestock - www.freepik.com</a>

      <a href='https://www.freepik.com/photos/black-magic'>Black magic photo created by liuzishan - www.freepik.com</a>

      <a href='https://pl.freepik.com/zdjecia/technologia'>Technologia zdjęcie utworzone przez freepik - pl.freepik.com</a>

      <a href='https://pl.freepik.com/zdjecia/komputer'>Komputer zdjęcie utworzone przez DCStudio - pl.freepik.com</a>
      
      <a href="https://pixabay.com/pl/users/12019-12019/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2184805">Obraz David Mark</a> z <a href="https://pixabay.com/pl/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2184805"> Pixabay</a>

      <a href='https://pl.freepik.com/zdjecia/budynek'>Budynek zdjęcie utworzone przez liuzishan - pl.freepik.com</a>

      <a href='https://unsplash.com/photos/CuFYW1c97w8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Gamepad</a>

    </div>
  );
}

export default Credits;
import React from 'react';


function Main() {
  return (
    <main className="main">
      <header className="header">
        <img src={require("../../assets/images/profile.jpeg")} className="header__image" />
      </header>

      <article className="main-content">
        <h1 className="main-content__title">Yomar Miranda</h1>
        <p className="main-content__text">
          Frontend developer | <span>@yomar-dev</span>
        </p>
      </article>
    </main>
  )
}

export default Main;
import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [players, setPlayers] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://1daf3c1a-24a8-4708-aede-1a6c14d0e2ad.mock.pstmn.io/all-of-football"
      )
      .then(function (result) {
        const players = result.data.players;
        setPlayers(players);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img className="logo" id="logo-circle" src="logo/psg-logo.png" />
          <img className="logo" id="logo-text" src="logo/psg-text-logo.jpg" />
        </div>
      </div>
      <div id="body">
        <div id="navigationBar">
          <button className="button">FIRST TEAM</button>
          <button className="button">PSG TV</button>
          <button className="button">PHOTOS</button>
          <button className="button">WOMEN</button>
          <button className="button">HANDBALL</button>
          <button className="button">FOUNDATION</button>
          <button className="button">SHOP</button>
        </div>
        <div id="banner">
          <img
            className="banner"
            id="banner-players"
            src="banner/banner-players.jpg"
          />
        </div>
        <h1 className="title-middle" id="squadOfPsg">
          Squad of PSG
        </h1>
        <div id="players-list">
          {players.map(function (player, index) {
            return (
              <div>
                <div className="player-card">
                  <div id="player-image">
                    <img className="player-image" src={player.imageUrl} />
                  </div>
                  <div className="player-profile">
                    <span className="player-profile-name">{player.name}</span>
                    <span className="player-profile-backNum">
                      {player.backNum}
                    </span>
                    <span className="player-profile-position">
                      {player.position}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <span id="designer-name">Designer : LEE SEOHWAN</span>
        <span id="designer-eMail">E-mail : 94tjghks@gmail.com</span>
        <span id="designer-phone">H.P : 010-6273-1870</span>
      </div>
    </div>
  );
}

export default MainPage;

// @flow
import React, { Component } from "react";
import "./Browse.scss";
import contextTypes from "../contextTypes";
import { getAll } from "../../utils/utils";
import Game from "../game/Game";

type Props = {};

export class Browse<Props> extends Component {
  static defaultProps: Props = {};

  state = {
    games: {}
  };

  componentDidMount() {
    getAll().then(games => {
      this.setState({ games });
    });
  }

  renderGame = (game, index) => {
    return <Game game={game} key={index} />;
  };

  render() {
    const { games } = this.state;

    return (
      <div className="Browse-container">
        {Object.values(games)
          .sort((a, b) => b.score - a.score)
          .map((game, index) => this.renderGame(game, index))}
      </div>
    );
  }
}

Browse.contextTypes = contextTypes;

export default Browse;

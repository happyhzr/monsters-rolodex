import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

export default class CardList extends React.Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {
                    monsters.map(monster => {
                        return (
                            <Card monster={monster} key={monster.id} />
                        );
                    })
                }
            </div>
        );
    }
}
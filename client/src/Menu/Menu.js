import React from "react";

import './Menu.css'

const Menu = () => {
    const isLogged = true;

    return (
        <div className="Menu Main-children-block-side">
            <div className="Menu-list">
                <ul className="Menu-ul">
                    {
                        isLogged ?
                        <li className="Menu-li">
                            <a href="#" className="Menu-a">
                                <div className="Menu-div">Личный кабинет</div>
                            </a>
                        </li> :
                        <li className="Menu-li">
                            <a href="#" className="Menu-a">
                                <div className="Menu-div">Войти / <br/>
                        Зарегистрироваться
                                </div>
                            </a>
                        </li>
                    }
                    <li className="Menu-li">
                        <a href="#" className="Menu-a">
                            <div className="Menu-div">Люди</div>
                        </a>
                    </li>
                    <li className="Menu-li">
                        <a href="#" className="Menu-a">
                            <div className="Menu-div">Сообщества</div>
                        </a>
                    </li>
                    <li className="Menu-li">
                        <a href="#" className="Menu-a">
                            <div className="Menu-div">Обратная связь</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;
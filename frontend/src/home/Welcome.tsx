import "./styles/index.css";
import venom from '@src/assets/images/venom_bg.jpg'
import venomTitle from '@src/assets/images/venom_title.png'
import terrifer from '@src/assets/images/terrifier_3.jpg';
import alien from '@src/assets/images/alien.jpg';
import noEntries from '@src/assets/images/no_entries.jpg';
import apocalyspeZ from '@src/assets/images/apocalypse_z.jpg';
import theSubstance from '@src/assets/images/the_substance.jpg';


export function WelcomePage() {
    return (
        <>
            <header>
                <h1>FREEFLIX</h1>
            </header>
            <div className="main-container">
                <div className="img-container bg">
                    <img src={venom} alt="" />
                </div>

                <div className="movie-card">
                    <div className="movie-card-body">
                        <div className="img-container">
                            <img src={venomTitle} alt="Movie Title"/>
                        </div>
                        <h2 className="movie-categories">
                            Science-Fiction, Action, Aventure • 1h 49m
                        </h2>
                        <p className="movie-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ipsum ac leo feugiat
                            ornare.
                            Sed suscipit, lectus vitae auctor aliquam, lacus dui dapibus enim ...
                        </p>
                    </div>
                </div>
            </div>

            <div className="tendency">
                <h1>Nouveauté</h1>
                <div className="movies">
                    <div className="movie">
                        <img src={terrifer} alt=""/>
                        <div className="movie-body">
                            <p>VOSTFR, VOSTA</p>
                            <p>1h49</p>
                        </div>
                    </div>

                    <div className="movie">
                        <img src={apocalyspeZ} alt=""/>
                        <div className="movie-body">
                            <p>VOSTFR, VOSTA, VF</p>
                            <p>2h10</p>
                        </div>
                    </div>

                    <div className="movie">
                        <img src={alien} alt=""/>
                        <div className="movie-body">
                            <p>VOSTA</p>
                            <p>1h54</p>
                        </div>
                    </div>

                    <div className="movie">
                        <img src={noEntries} alt=""/>
                        <div className="movie-body">
                            <p>VOSTA</p>
                            <p>2h02</p>
                        </div>
                    </div>

                    <div className="movie">
                        <img src={theSubstance} alt=""/>
                        <div className="movie-body">
                            <p>VOSTFR, VOSTA</p>
                            <p>1h37</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

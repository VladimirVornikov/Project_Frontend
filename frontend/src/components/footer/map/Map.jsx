import style from './Map.module.css';
import React from "react";

export default function Map() {
    return (
        <div>
            <div className={style.map_container}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src="https://maps.google.com/maps?width=1360&amp;height=350&amp;hl=en&amp;q=Linkstrasse%202,%208%20OG,%2010785,%20Berlin,%20Deutschland+(TelRan)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                </iframe>
            </div>
        </div>
    );
}

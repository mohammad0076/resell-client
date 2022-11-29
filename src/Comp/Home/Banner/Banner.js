import React from 'react';
import img from './671822c2f63dd5f65d8fd15c9710420b.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/composition-with-books-on-the-table-picture-id1158413597?b=1&k=20&m=1158413597&s=612x612&w=0&h=_opqn6yPrZAsMNWuMmz8iHWoybdhxO_GeQAubLHJ7_8=")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">ONLINE OLD BOOK BUYING & SELLING SYSTEM(OOBBSS)</h1>
                    <p className="mb-5">A booklet is a small, thin book that has a paper cover and that gives you information about something. Synonyms: brochure, leaflet, hand-out, pamphlet More Synonyms of booklet.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
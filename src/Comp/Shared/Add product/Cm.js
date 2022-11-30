import React from 'react';

const Cm = ({ closeMdoal,successAcrion,md }) => {
    return (
        <div>




            <input type="checkbox" id="confirmation" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"></h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="confirmation" onClick={()=>successAcrion(md)} className="btn">yes</label>



                        <button onClick={closeMdoal} className='btn btn-accent'>cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cm;
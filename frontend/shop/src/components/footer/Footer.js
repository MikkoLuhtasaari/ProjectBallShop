import React from "react";

/**
 * Display footer details
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Footer extends React.Component{

    /**
     * Renders footer and displays Copyright information to user
     *
     * @returns {XML}
     */
    render(){
        return(
            <footer className="colorGray">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Ball Hawks 2017</p>
                    </div>
                </div>
            </footer>
        )
    }

}
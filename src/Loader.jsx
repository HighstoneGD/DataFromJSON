import React from 'react'
import NPMLoader from "react-loader-spinner";

const Loader = () => {
    return (
        <div className = "loader">
            <NPMLoader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100} />
        </div>
    );
}

export default Loader
import Duration from "./Duration.js";

class RaceResult{
    /**
     * @type {string}
     */
    _participantId;

    /**
     * @type {string}
     */
    _sportType;

    /**
     * @type {Duration}
     */
    _Duration;


    /**
     * 
     * @param {string} participantid 
     * @param {string} sportType 
     * @param {Duration} duration 
     */
    constructor(participantid,sportType,duration){
        this._participantId = participantid;
        this._sportType = sportType;
        this._Duration = duration;
    }

    toString = ()=>{
        return (this._participantId+" "+this._sportType+" "+this._Duration);
    }


}


export default RaceResult;


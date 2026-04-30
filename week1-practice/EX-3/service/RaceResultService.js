import RaceResult from "../model/RaceResult.js";
import Duration from "../model/Duration.js";
import * as fs from "fs"
class RaceResultService{
    /**
     * @private
     * @type {Array<RaceResult>}
     */
    _results = [];

    constructor(){
        this._results = [];
    }

    /**
     * 
     * @param {RaceResult} newresult 
     */
    addRaceResult(newresult){
        this._results.push(newresult);
    }

    toString = ()=>{
        return (JSON.stringify(this._results))
    }

    saveToFile(filepath){
        try{
            fs.writeFileSync(filepath,this.toString(),"utf8");
            console.log("done");
        } catch (err){
            console.error(err);
        }
    }

    /**
    * Loads the race results list from a JSON file.
    * @param {string} filePath - The path to the file to load data from.
    * @returns {boolean} True if loading was successful, false otherwise.
    */
    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, "utf8");
            const results = JSON.parse(data);
            this._results = results.map(res => {
                const duration = new Duration(res._Duration._totalSeconds);
                return new RaceResult(res._participantId, res._sportType, duration);
            });
            console.log("trueeee");
            return true;
        } catch (err) {
            console.log("something");
            return false;
        }
    }

    /**
    * Retrieves the race time for a given participant and sport.
    * @param {string} participantId - Participant ID.
    * @param {string} sport - Sport name.
    * @returns {Duration|null} Duration if found, else null.
    */
    getTimeForParticipant(participantId, sport) {
        const filtered = this._results.filter(re => 
            re._participantId === participantId && re._sportType === sport
        );
        return filtered.length > 0 ? filtered[0]._Duration : null;
    }

    /**
    * Computes the total time for a given participant.
    * @param {string} participantId - Participant ID.
    * @returns {Duration} Total duration.
    */
    getTotalTimeForParticipant(participantId) {
        const filtered = this._results.filter((re) => re._participantId === participantId);
        const totalSeconds = filtered.reduce((sum, res) => sum + res._Duration._totalSeconds, 0);
        return new Duration(totalSeconds);
    }


}

export default RaceResultService;
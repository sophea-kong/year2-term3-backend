import Duration from "./model/Duration.js";
import RaceResults from "./model/RaceResult.js";
import RaceResultService from "./service/RaceResultService.js";
// Initialize RaceResults
const raceManager = new RaceResultService();
raceManager.addRaceResult(new RaceResults("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30)));
raceManager.addRaceResult(new RaceResults("participant1", "run", Duration.fromMinutesAndSeconds(1, 45)));
raceManager.addRaceResult(new RaceResults("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15)));
// Save results to file
raceManager.saveToFile("./data/raceScores.json");

export default raceManager;
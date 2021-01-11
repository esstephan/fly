import { AreaCodeLookup } from './us-area-code-geo';
const carrierPigeonMilesPerMinute = 1;
const maxMilesPerDay = 600;
const restingMinutesPerDay = 8*60;

function getDistanceFromLatLonInMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
    var R = 3963; // Radius of the earth in miles
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in miles
    return d;
}

function deg2rad(deg: number): number {
    return deg * (Math.PI/180)
}

export function GetDistanceBetweenAreaCodes(ac1: string, ac2: string, round: boolean): number {
    const lat1 = AreaCodeLookup(ac1)[0]
    const lon1 = AreaCodeLookup(ac1)[1]
    const lat2 = AreaCodeLookup(ac2)[0]
    const lon2 = AreaCodeLookup(ac2)[1]
    const distance = getDistanceFromLatLonInMiles(lat1, lon1, lat2, lon2);
    if (round) {
        return Math.round(distance);
    }
    return distance;
}

function getFlightMinutesFromDistance(distance: number): number {
    return distance/carrierPigeonMilesPerMinute;
}

export function GetRestDays(distance: number): number {
    if (distance < maxMilesPerDay) {
        return 0;
    }
    // Every 600 miles, the bird rests for one night
        const flightDays = Math.floor(distance/maxMilesPerDay);
        let restDays = flightDays;
        // if distance is an exact multiple of maxMiles, no rest after the last flight day
        if (distance % maxMilesPerDay === 0) {
            restDays--;
        }
    return restDays;
}

export function GetTimeString (distance: number): string {
    const flightMinutes = getFlightMinutesFromDistance(distance)
    const restDays = GetRestDays(distance);

    const totalMinutes = flightMinutes + restDays * restingMinutesPerDay;

    const minutesToShow = Math.round(totalMinutes % 60);
    const hours = Math.floor(totalMinutes/60);
    const hoursToShow = Math.round(hours % 24);
    const daysToShow = Math.floor(hours/24);

    let timeString = `${minutesToShow} minutes`;
    if (hoursToShow > 0 || daysToShow > 0) {
        timeString = `${hoursToShow} hours, `+ timeString;
    }
    if (daysToShow > 0) {
        timeString = `${daysToShow} days, `+ timeString;
    }
    return timeString;
}

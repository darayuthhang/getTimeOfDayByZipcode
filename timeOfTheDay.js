const zipcode_to_timezone = require( 'zipcode-to-timezone' );
const moment = require("moment-timezone");
module.exports  = {
    /**
     * @description     - look up zip code to get timezone and return either day time or night time
     * @param zipcode   - key string value contain zipcode
     * @return key string daytime or nighttime       
     */
    getTimeofTheDays(zipcode) {
        let timeZone = this.getTimeZoneByZipCode(zipcode);    
        const target = moment().tz(timeZone).format("LT");
        return this.isDayTime(this.getTwentyFourHourTime(target)) ? "daytime": "nighttime";
    },
    /**
     * @description return timezone after looking up zipcode
     * @param {*} zipcode   - key string value contain zipcode
     * @return timezone base on the zipcode
     */
    getTimeZoneByZipCode(zipcode){
        return zipcode_to_timezone.lookup(zipcode);
    },
    /**
     * @description check if it is day time or night time.
     * @param {*}target     - Integer timezone of where user live in 24 hour format.
     */
    isDayTime(target) {
        let highTime = this.getTwentyFourHourTime("6:00 pm");
        let lowTime = this.getTwentyFourHourTime("6:00 am");
      
        //assume time will always go faster
        //thus, we would assume that 6:00 pm and after 6:00pm
        // will be night time. because everyone mintue is very fast.
        //if it does not fall in interval of
        // 6:am(6) <= target < (18)6:00pm
        //just in case there is a digit more than 24 hours.

        return (lowTime <= target) && (target < highTime);
    },
    /**
     * @description return time in 24 hours format.
     * @param {*} amPmString    - key string value of standard 12 hours times format.
     */
    getTwentyFourHourTime(amPmString){ 
        //Note : There should be a space for timestring between "Time" and "am/pm".
        return new Date("1/1/2013 " + amPmString).getHours(); 
    },

}


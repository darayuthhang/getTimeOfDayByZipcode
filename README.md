# what is this?

Get daytime and nighttime based on the zipcode

## Installation
```
   npm install gettimeofday-by-zipcode
   npm install moment-timezone
   npm install zipcode-to-timezone
```

```
const timeOfTheday = require('gettimeofday-by-zipcode');
const ZIP_CODE = "01850";

timeOfTheday.getTimeofTheDays(ZIP_CODE);

```
## Description

The code above will return either a daytime or nighttime depending on
the current time of the zipcode.

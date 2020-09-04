import * as logger1 from '..';

logger1.config({
  displayFilename: true,
  displayTimestamp: true,
  displayDate: true,
  displayLine: true,
  timeZone: "America/Argentina/Buenos_Aires",
  formatDate: "DD-MM-YYYY",
  formatTime: "HH:mm:ss a"
});

const data = {
    "level1": {
      "level2": {
        "level3": "lorem",
        "level3b":{
          "level4":{
            "level5":"lorem"
          }
        }
      }
    }
  };

logger1.debug(data);
logger1.debug(JSON.stringify(data,null,2));

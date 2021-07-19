@brandednomad/eventlogger
==
A simple event logger for node servers. NOTE: This package is still under development

## Installation

Requires __npm 2.7.0__ or higher

`npm init`

`npm install @brandednomad/eventlogger --save`

***

## Usage

const Logger = require("@brandednomad/eventlogger"); 

const config={
    logFilePath:"./folderName/fileName"
}

const log = new Logger(config); 

const LogParams {
    message: string;
    ip: string;
    user: string;
    url: string;
    info: string;
}

log.info(LogParams)

***

## Methods

### object.info()

Logs info events to file

It takes a LogParams object as parameters that specifies the information to be logged.

### object.info()

Logs info events to file

It takes a LogParams object as parameters that specifies the information to be logged.

### object.warn()

Logs warning events to file

It takes a LogParams object as parameters that specifies the information to be logged.

### object.error()

Logs error events to file

It takes a LogParams object as parameters that specifies the information to be logged.


***

## Testing

To test, go to the root folder and type 

`npm test`

***

## Repo(s)

* [github.com/brandednomad/npm-package-eventlogger.git](https://github.com/BrandedNomad/npm-package-eventlogger.git)

***

## contributing

Contributions not accepted at this moment

## Version History


#### Version 0.1.0

* initial release

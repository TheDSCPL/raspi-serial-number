#Raspberry Pi Serial Number

**Warning:** Only works on *Raspberry Pi* boards! Will raise an exception if not running in a Raspberry Pi

##Summary
*Raspberry Pi*s come with a serial number. This package provides a way to get your *Raspberry Pi*'s serial number as a string.

##Features
* Has one synchronous and two asynchronous functions
* Fast
* Light weight - **Weights 1290 B (uncompressed) or 718 B (gzip-compressed)**
* Has no dependencies
* Contains Typescript type definitions

##Documentation

####function getSerialNumber(callback: (error: any, data?: string) => void): void;
Receives a callback function. If there is an error, the first parameter of the callback will be it. If not, the serial number will be passed to the second parameter.

####function getSerialNumber(): Promise<string>;
Almost the same as the previous one but returns a promise which will resolve into the serial number or reject with an exception.

####function getSerialNumberSync(): string;
Returns Raspberry Pi's serial number string or throws an exception if there is an error.

##Future work
* Add options to allow specifying whether or not the leftmost zeros should be trimmed or not (current behaviour is trimming the leftmost zeros of the serial number)
* Maybe add some other options. I'm open to suggestions!

##

**Feel free to open an issue on Github if you find a bug or have a suggestion!**
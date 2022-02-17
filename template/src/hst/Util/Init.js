export default class Init {


    array() {
        Array.prototype.h_forEach = function (callback, thisArg) {
            return new Promise((resolve, reject) => {
                if (this == null) {
                    throw new TypeError("Array.prototype.forEach called on null or undefined")
                }
                var T, k
                var O = Object(this)
                var len = O.length >>> 0
                if (typeof callback !== "function") {
                    throw new TypeError(callback + " is not a function")
                }
                if (arguments.length > 1) {
                    T = thisArg
                }
                k = 0
                let next = () => {
                    if (k == len) {
                        resolve()
                    } else {
                        var kValue
                        if (k in O) {
                            kValue = O[k]
                            k++
                            callback.call(T, kValue, k - 1, O, next)
                        }
                    }
                }
                next()
            })
        }
    }

}
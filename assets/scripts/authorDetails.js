'use strict';

var authorDetails = (function(){
    function getAuthorFilename2(file) {
        return file.split('\\').pop().split('/').pop().split('.')[0];
    }
})();

    function getAuthorFilename(file) {
        console.log(file);
        return file.split('\\').pop().split('/').pop().split('.')[0];
    }
var YoutubeVideo = /** @class */ (function () {
    // end of fiels
    // constructor to initialize the class fields
    function YoutubeVideo(title, pageName, subscription, no_of_subscription, likes, comments, dislikes, share, subtitle, theaterMode, autoplay, annotation, quality, fullScreen, watchLater, subscriptionNames, likesDetails, commentDetails) {
        var _this = this;
        //function to access the data
        this.getTitle = function () {
            return _this.title;
        };
        this.getPageName = function () {
            return _this.pageName;
        };
        this.getSubscription = function () {
            return _this.subscription;
        };
        this.getNoOfSubscription = function () {
            return _this.no_of_subscription;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getShare = function () {
            return _this.share;
        };
        this.getSubtitle = function () {
            return _this.subtitle;
        };
        this.getAutoPlay = function () {
            return _this.autoplay;
        };
        this.getAnnotation = function () {
            return _this.annotation;
        };
        this.getFullScreen = function () {
            return _this.fullScreen;
        };
        this.getWatchLater = function () {
            return _this.watchLater;
        };
        this.getLikesDetails = function () {
            return _this.likesDetails;
        };
        this.getCommentDetails = function () {
            // take a string array type variable data
            var data;
            // initially data array is empty
            data = [];
            // iterate loop till subscription names length
            for (var i = 0; i < _this.commentDetails.length; i++) {
                //for(let i in this.subscriptionNames){
                // condition to check if the array is not undefined and null
                if (_this.commentDetails[i] !== undefined && _this.commentDetails[i] !== null) {
                    // if the condition is satisfied then push the array elements in an empty array
                    data.push(_this.commentDetails[i]);
                }
            }
            // return the data array once the iteration is over
            return data;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        // getters for private data
        this.getSubscriptionNames = function () {
            // take a string array type variable data
            var data;
            // initially data array is empty
            data = [];
            // iterate loop till subscription names length
            for (var i = 0; i < _this.subscriptionNames.length; i++) {
                //for(let i in this.subscriptionNames){
                // condition to check if the array is not undefined and null
                if (_this.subscriptionNames[i] !== undefined && _this.subscriptionNames[i] !== null) {
                    // if the condition is satisfied then push the array elements in an empty array
                    data.push(_this.subscriptionNames[i]);
                }
            }
            // return the data array once the iteration is over
            return data;
            //return this.subscriptionNames;
        };
        this.getQuality = function () {
            return _this.quality;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        //setters for private data
        this.setQuality = function (hd) {
            _this.quality = hd;
        };
        this.title = title;
        this.pageName = pageName;
        this.subscription = subscription;
        this.no_of_subscription = no_of_subscription;
        this.likes = likes;
        this.comments = comments;
        this.dislikes = dislikes;
        this.share = share;
        this.subtitle = subtitle;
        this.theaterMode = theaterMode;
        this.autoplay = autoplay;
        this.annotation = annotation;
        this.quality = quality;
        this.fullScreen = fullScreen;
        this.watchLater = watchLater;
        this.subscriptionNames = subscriptionNames;
        this.likesDetails = likesDetails;
        this.commentDetails = commentDetails;
    } //end of constructor
    YoutubeVideo.prototype.getTheaterMode = function () {
        return this.theaterMode;
    };
    return YoutubeVideo;
}()); //end of class
// creating reference of object using new keyword
var videoDetails = new YoutubeVideo("Focus on Yourself Not Others", "Law of Attraction", true, 35000, 15000, 3000, 20, 40, "off", false, "on", "off", "720p", true, false, ["jagz", "Aashna", "Wasif"], { "name": "vick",
    "id": 12,
    "date": "12 july" }, ["jagriti", 2, true, "7:00am"]);
// calling of functions
console.log("Title of the video:- " + videoDetails.getTitle());
console.log("Annotation info of the video:- " + videoDetails.getAnnotation());
console.log("Autoplay info of the video:- " + videoDetails.getAutoPlay());
console.log("No. of comments in the video:- " + videoDetails.getComments());
console.log("Subscription info of the video:- " + videoDetails.getSubscription());
console.log("No. of dislikes in the video:- " + videoDetails.getDislikes());
console.log("Page Name of the video:- " + videoDetails.getPageName());
console.log("No. of subscription of the video:- " + videoDetails.getNoOfSubscription());
console.log("Share details of the video:- " + videoDetails.getShare());
console.log("Subtitle info of the video:- " + videoDetails.getSubtitle());
console.log("Watch Later info of the video:- " + videoDetails.getWatchLater());
console.log("Full Screen of the video:- " + videoDetails.getFullScreen());
console.log("TheaterMode of the video:- " + videoDetails.getTheaterMode());
// like details
var commdata;
commdata = {};
commdata = videoDetails.getLikesDetails();
console.log("Name of the person who like the video:- " + commdata['name']);
console.log("Id of the person who like the video:- " + commdata['id']);
console.log("Date when the video is liked:- " + commdata['date']);
// take a empty array
var c_details = [];
// put all the values in this that are returned from data array
c_details = (videoDetails.getCommentDetails());
// displaye the array elements
console.log("Details of Comments:- " + c_details);
// Display private Data 
// take a empty array
var details = [];
// put all the values in this that are returned from data array
details = (videoDetails.getSubscriptionNames());
// displaye the array elements
console.log("Name of person that took subscription:- " + details);
console.log("No. of likes:- " + videoDetails.getLikes());
console.log("Quality before setting new value:- " + videoDetails.getQuality());
// set quality through setter
videoDetails.setQuality("1024p");
console.log(" Quality after setting new value:- " + videoDetails.getQuality());
